import { Link } from "react-router-dom"

function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Experience Culinary Excellence?
          </h2>
          <p className="text-lg opacity-90 md:text-xl">
            Join us for an unforgettable dining experience or order your favorite dishes to enjoy at home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center bg-white text-primary px-6 py-3 rounded-md text-base font-medium hover:bg-white/90 transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="inline-flex justify-center items-center bg-transparent border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-3 rounded-md text-base font-medium transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
