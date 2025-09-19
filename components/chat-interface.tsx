"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Send, Bot, User, Globe, Loader2, AlertTriangle, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  language?: string
  timestamp: Date
  isError?: boolean
}

const QUICK_QUESTIONS = [
  { text: "What are the symptoms of dengue?", odia: "ଡେଙ୍ଗୁର ଲକ୍ଷଣ କଣ?" },
  { text: "How to prevent malaria?", odia: "ମ୍ୟାଲେରିଆରୁ କିପରି ବଞ୍ଚିବେ?" },
  { text: "What is diabetes?", odia: "ମଧୁମେହ କଣ?" },
  { text: "Common cold remedies", odia: "ସାଧାରଣ ଥଣ୍ଡା ଲାଗିବାର ଉପଚାର" },
]

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "or", name: "ଓଡ଼ିଆ (Odia)" },
  { code: "hi", name: "हिंदी (Hindi)" },
  { code: "bn", name: "বাংলা (Bengali)" },
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [connectionError, setConnectionError] = useState<string | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setConnectionError(null)

    try {
      const response = await fetch("/api/health-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: content.trim(),
          language: selectedLanguage,
        }),
      })

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Please sign in to continue using the chat.")
        }
        throw new Error(`Server error: ${response.status}`)
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I apologize, but I couldn't process your question at the moment.",
        role: "assistant",
        language: data.language,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)

      let errorMessage = "I'm sorry, there was an error processing your request. Please try again later."

      if (error instanceof Error) {
        if (error.message.includes("sign in")) {
          errorMessage = error.message
        } else if (error.message.includes("Server error")) {
          errorMessage = "There was a server error. Please try again in a moment."
        }
      }

      setConnectionError(errorMessage)

      const assistantErrorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: errorMessage,
        role: "assistant",
        timestamp: new Date(),
        isError: true,
      }
      setMessages((prev) => [...prev, assistantErrorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleQuickQuestion = (question: string) => {
    sendMessage(question)
  }

  const retryLastMessage = () => {
    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")
    if (lastUserMessage) {
      sendMessage(lastUserMessage.content)
    }
  }

  return (
    <div className="flex h-[calc(100vh-12rem)] flex-col max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <Badge variant="secondary" className="bg-gray-100 text-gray-800 font-medium px-3 py-1 border border-gray-200">
          <Bot className="h-3 w-3 mr-1" />
          Medical Assistant
        </Badge>
      </div>

      {/* Connection Error Alert */}
      {connectionError && (
        <Alert className="mb-4 border-gray-200 bg-gray-50">
          <AlertTriangle className="h-4 w-4 text-gray-600" />
          <AlertDescription className="flex items-center justify-between text-gray-700">
            <span>{connectionError}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={retryLastMessage}
              className="ml-2 border-gray-200 text-gray-700 hover:bg-gray-100 bg-white"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <Card className="flex-1 flex flex-col shadow-lg border border-gray-200 bg-white">
        <CardHeader className="pb-4 border-b bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-800 rounded-full">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">HealthBot Assistant</h2>
              <p className="text-gray-600 text-sm">Your AI-powered health companion</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 px-6" ref={scrollAreaRef}>
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="p-4 bg-gray-100 rounded-full mb-6 border border-gray-200">
                  <Bot className="h-16 w-16 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Welcome to HealthBot</h3>
                <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                  I'm here to help you with medical information and health awareness. Ask me about symptoms, conditions,
                  or general health questions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                  {QUICK_QUESTIONS.map((q, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-left justify-start h-auto p-4 bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md text-gray-700"
                      onClick={() => handleQuickQuestion(selectedLanguage === "or" ? q.odia : q.text)}
                      disabled={isLoading}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm font-medium">{selectedLanguage === "or" ? q.odia : q.text}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 py-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn("flex gap-4", message.role === "user" ? "justify-end" : "justify-start")}
                  >
                    {message.role === "assistant" && (
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-md border",
                          message.isError ? "bg-gray-100 border-gray-300" : "bg-gray-800 border-gray-700",
                        )}
                      >
                        {message.isError ? (
                          <AlertTriangle className="h-5 w-5 text-gray-600" />
                        ) : (
                          <Bot className="h-5 w-5 text-white" />
                        )}
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[75%] rounded-2xl px-5 py-3 shadow-md",
                        message.role === "user"
                          ? "bg-gray-800 text-white ml-auto"
                          : message.isError
                            ? "bg-gray-50 text-gray-800 border border-gray-200"
                            : "bg-gray-100 text-gray-800 border border-gray-200",
                      )}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                      {message.language && message.language !== "en" && !message.isError && (
                        <Badge variant="secondary" className="mt-3 text-xs bg-gray-200 text-gray-700">
                          {LANGUAGES.find((l) => l.code === message.language)?.name || message.language}
                        </Badge>
                      )}
                    </div>
                    {message.role === "user" && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-600 shadow-md border border-gray-400">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-4 justify-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-800 shadow-md border border-gray-700">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-3 shadow-md">
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-4 w-4 animate-spin text-gray-600" />
                        <span className="text-sm text-gray-600">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>

          <div className="border-t bg-gray-50 p-6">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={selectedLanguage === "or" ? "ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ..." : "Ask your health question..."}
                disabled={isLoading}
                className="flex-1 bg-white border-gray-200 focus:border-gray-400 focus:ring-gray-400 rounded-xl px-4 py-3 text-sm shadow-sm text-gray-700"
                maxLength={1000}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-gray-800 hover:bg-gray-900 rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center">
              This is for educational purposes only and not a substitute for professional medical advice.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
