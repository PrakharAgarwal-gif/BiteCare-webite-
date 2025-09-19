import { Header } from "@/components/header"
import { ChatInterface } from "@/components/chat-interface"
import { Suspense } from "react"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Medical Assistant Chat</h1>
            <p className="text-muted-foreground">
              Ask questions about health conditions, symptoms, or general medical information.
            </p>
          </div>
          <Suspense fallback={<div>Loading chat...</div>}>
            <ChatInterface />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
