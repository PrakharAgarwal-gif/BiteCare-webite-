interface HealthQueryRequest {
  question: string
  language?: string
}

interface HealthQueryResponse {
  language: string
  question: string
  response: string
}

export class HealthAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message)
    this.name = "HealthAPIError"
  }
}

export async function queryHealthAPI(request: HealthQueryRequest): Promise<HealthQueryResponse> {
  try {
    const response = await fetch("https://bite-care-api.vercel.app/health_query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: request.question,
      }),
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(30000), // 30 second timeout
    })

    if (!response.ok) {
      throw new HealthAPIError(`Health API responded with status: ${response.status}`, response.status)
    }

    const data = await response.json()

    // Validate response structure
    if (!data.response) {
      throw new HealthAPIError("Invalid response format from health API")
    }

    return {
      language: data.language || request.language || "en",
      question: data.question || request.question,
      response: data.response,
    }
  } catch (error) {
    if (error instanceof HealthAPIError) {
      throw error
    }

    // Handle network errors, timeouts, etc.
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new HealthAPIError("Request timeout - please try again")
      }
      if (error.message.includes("fetch")) {
        throw new HealthAPIError("Unable to connect to health service - please check if the service is running")
      }
    }

    throw new HealthAPIError("An unexpected error occurred while processing your health query")
  }
}

// Fallback responses for when the API is unavailable
export const getFallbackResponse = (question: string, language = "en"): HealthQueryResponse => {
  const fallbackResponses = {
    en: "I apologize, but I'm currently unable to process your health question. Please consult with a healthcare professional for medical advice. If this is an emergency, please contact your local emergency services immediately.",
    or: "ମୁଁ ଦୁଃଖିତ, କିନ୍ତୁ ମୁଁ ବର୍ତ୍ତମାନ ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବାରେ ଅସମର୍ଥ। ଦୟାକରି ଚିକିତ୍ସା ପରାମର୍ଶ ପାଇଁ ଜଣେ ସ୍ୱାସ୍ଥ୍ୟ ବିଶେଷଜ୍ଞଙ୍କ ସହିତ ପରାମର୍ଶ କରନ୍ତୁ।",
    hi: "मुझे खेद है, लेकिन मैं वर्तमान में आपके स्वास्थ्य प्रश्न का उत्तर देने में असमर्थ हूं। कृपया चिकित्सा सलाह के लिए किसी स्वास्थ्य विशेषज्ञ से सलाह लें।",
    bn: "আমি দুঃখিত, কিন্তু আমি বর্তমানে আপনার স্বাস্থ্য প্রশ্নের উত্তর দিতে অক্ষম। দয়া করে চিকিৎসা পরামর্শের জন্য একজন স্বাস্থ্য বিশেষজ্ঞের সাথে পরামর্শ করুন।",
  }

  return {
    language,
    question,
    response: fallbackResponses[language as keyof typeof fallbackResponses] || fallbackResponses.en,
  }
}
