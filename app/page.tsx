import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Shield, Globe, Clock, Sparkles, Heart, Users, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="container py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex justify-center mb-8">
            <Badge
              variant="secondary"
              className="mb-4 px-6 py-2 bg-gradient-to-r from-orange-100 to-green-100 border-orange-200 text-orange-800 font-semibold text-sm"
            >
              <Globe className="mr-2 h-4 w-4" />
              🇮🇳 Smart India Hackathon 2025 | Multilingual Support
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 sm:text-8xl text-balance mb-8">
            Your Trusted
            <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent animate-float">
              Medical AI Assistant
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-gray-700 text-pretty max-w-4xl mx-auto">
            Revolutionary AI-powered healthcare companion designed for India. Get reliable medical information and
            health guidance in multiple Indian languages including{" "}
            <span className="font-semibold text-orange-600">Odia, Hindi, Bengali</span> and more.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/chat">
              <Button
                size="lg"
                className="gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <MessageSquare className="h-6 w-6" />
                Start Health Chat
                <Sparkles className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-green-500 text-green-700 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-transparent"
            >
              <Award className="h-5 w-5 mr-2" />
              SIH 2025 Demo
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/70 backdrop-blur rounded-2xl shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Users Helped</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur rounded-2xl shadow-lg border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Indian Languages</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur rounded-2xl shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 max-w-7xl mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Trusted Healthcare Information
            <span className="block text-orange-600">Made for India 🇮🇳</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our platform provides reliable medical awareness with features designed for accessibility, cultural
            sensitivity, and trust across diverse Indian communities.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl">
              <CardHeader className="p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Reliable Information</CardTitle>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Medically accurate information sourced from trusted Indian healthcare resources, AIIMS guidelines, and
                  WHO standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl">
              <CardHeader className="p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Multilingual Support</CardTitle>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Available in 5+ Indian languages including Odia, Hindi, Bengali, making healthcare information
                  accessible to diverse communities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl">
              <CardHeader className="p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">24/7 Availability</CardTitle>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Get instant responses to your health questions anytime, anywhere, with our advanced AI-powered medical
                  assistant.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 max-w-7xl mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 rounded-3xl p-12 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of Indians who trust HealthBot for reliable, culturally-aware medical information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <Button
                size="lg"
                className="gap-3 px-8 py-4 text-lg font-semibold bg-white text-orange-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <MessageSquare className="h-6 w-6" />
                Start Your First Chat
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white/10 shadow-lg transition-all duration-300 rounded-xl bg-transparent"
            >
              <Users className="h-5 w-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-200 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="container py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                    HealthBot
                  </span>
                  <div className="text-xs text-orange-600 font-medium">SIH 2025</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Making healthcare information accessible to every Indian through AI-powered assistance and multilingual
                support.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                <span>🇮🇳</span>
                <span>Proudly Made in India</span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg text-gray-900">Product</h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <Link href="/chat" className="hover:text-orange-600 transition-colors">
                    Chat Assistant
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-orange-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-orange-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg text-gray-900">Support</h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <Link href="/help" className="hover:text-green-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-green-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-green-600 transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg text-gray-900">Languages</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">🇬🇧 English</li>
                <li className="flex items-center gap-2">🇮🇳 ଓଡ଼ିଆ (Odia)</li>
                <li className="flex items-center gap-2">🇮🇳 हिंदी (Hindi)</li>
                <li className="flex items-center gap-2">🇮🇳 বাংলা (Bengali)</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-orange-200 pt-8 text-center">
            <p className="text-gray-600 leading-relaxed">
              &copy; 2025 HealthBot - Smart India Hackathon. All rights reserved.
              <span className="block mt-2 text-sm">
                This is for educational purposes only and not a substitute for professional medical advice.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
