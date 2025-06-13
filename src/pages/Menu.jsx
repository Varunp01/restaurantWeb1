"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MenuSection from "../components/MenuSection"

function Menu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-1">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Menu</h1>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Explore our diverse menu featuring dishes crafted with passion and the finest ingredients.
          </p>
        </div>
        <MenuSection fullMenu={true} />
      </main>
      <Footer />
    </div>
  )
}

export default Menu
