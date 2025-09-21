import { Header } from "@/components/header"
import { ChatInterface } from "@/components/chat-interface"
import { Suspense } from "react"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Header />
      <main className="container py-8 max-w-7xl mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
              Medical Assistant Chat
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Ask questions about health conditions, symptoms, or general medical information.
              <span className="font-semibold text-orange-600"> Available in multiple Indian languages.</span>
            </p>
          </div>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent mx-auto mb-4"></div>
                  <p className="text-gray-600 font-medium">Loading chat interface...</p>
                </div>
              </div>
            }
          >
            <ChatInterface />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
