"use client"

import { useState } from "react"
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
<div className="flex min-h-screen flex-col">
<Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
<Outlet></Outlet>
        <Footer />
      </div>
    </>
  )
}

export default Layout
