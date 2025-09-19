import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Shield, Globe, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            <Globe className="mr-1 h-3 w-3" />
            Multilingual Support
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Your Trusted Medical
            <span className="text-primary"> Awareness Assistant</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Get reliable medical information and health guidance through our AI-powered chatbot. Available in multiple
            languages including Odia, designed to make healthcare knowledge accessible to everyone.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/chat">
              <Button size="lg" className="gap-2">
                Start Chatting
                <MessageSquare className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted Healthcare Information
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform provides reliable medical awareness with features designed for accessibility and trust.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reliable Information</CardTitle>
                <CardDescription>
                  Medically accurate information sourced from trusted healthcare resources and guidelines.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multilingual Support</CardTitle>
                <CardDescription>
                  Available in multiple languages including Odia, making healthcare information accessible to diverse
                  communities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>
                  Get instant responses to your health questions anytime, anywhere, with our AI-powered assistant.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of users who trust HealthBot for reliable medical information.
          </p>
          <div className="mt-8">
            <Link href="/chat">
              <Button size="lg" className="gap-2">
                Start Your First Chat
                <MessageSquare className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                  <Shield className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold">HealthBot</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making healthcare information accessible to everyone through AI-powered assistance.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/chat" className="hover:text-foreground">
                    Chat
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-foreground">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Languages</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>English</li>
                <li>ଓଡ଼ିଆ (Odia)</li>
                <li>हिंदी (Hindi)</li>
                <li>বাংলা (Bengali)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 HealthBot. All rights reserved. This is for educational purposes only and not a substitute for
              professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
