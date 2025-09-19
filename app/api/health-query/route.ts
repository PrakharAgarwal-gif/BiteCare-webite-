import { type NextRequest, NextResponse } from "next/server"
import { queryHealthAPI, getFallbackResponse, HealthAPIError } from "@/lib/health-api"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question, language = "en" } = body

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return NextResponse.json({ error: "Valid question is required" }, { status: 400 })
    }

    // Sanitize input
    const sanitizedQuestion = question.trim().slice(0, 1000) // Limit question length

    try {
      // Try to query the health API
      const result = await queryHealthAPI({
        question: sanitizedQuestion,
        language,
      })

      return NextResponse.json(result)
    } catch (error) {
      console.error("Health API error:", error)

      // If it's a HealthAPIError, we can provide more specific feedback
      if (error instanceof HealthAPIError) {
        // For certain errors, return fallback response instead of error
        if (error.status === 500 || error.message.includes("connect") || error.message.includes("timeout")) {
          const fallbackResponse = getFallbackResponse(sanitizedQuestion, language)
          return NextResponse.json(fallbackResponse)
        }
      }

      // For other errors, return fallback response
      const fallbackResponse = getFallbackResponse(sanitizedQuestion, language)
      return NextResponse.json(fallbackResponse)
    }
  } catch (error) {
    console.error("Error in health-query API route:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        response: "I'm sorry, there was an error processing your request. Please try again later.",
      },
      { status: 500 },
    )
  }
}

// Add OPTIONS handler for CORS if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}
