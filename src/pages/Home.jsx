"use client"

import { useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import MenuSection from "../components/MenuSection"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-1">
        <Hero />
        <Features />
        <MenuSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default Home
