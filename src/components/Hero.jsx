import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="relative" id="heroSection">
      <div className="absolute inset-0 z-0">
        <img
          src="\HeroCollage.png"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover brightness-[0.2]"
        />
      </div>
      <div className="container mx-auto relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl space-y-4 text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Culinary Excellence in Every Bite
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Experience the perfect blend of tradition and innovation with our carefully crafted dishes made from the
            freshest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link
              to="contact"
              className="inline-flex justify-center items-center bg-primary text-primary-foreground px-6 py-3 rounded-md text-base font-medium hover:bg-primary/90 transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              to="menu"
              className="inline-flex justify-center items-center bg-white/10 text-white border border-white/20 hover:bg-white/40 hover:text-black px-6 py-3 rounded-md text-base font-medium transition-colors"
            >
              View Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
