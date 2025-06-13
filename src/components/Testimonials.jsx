function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Guests Say</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-background rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-500"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "The truffle risotto was absolutely divine! The atmosphere was elegant yet comfortable, and the service
              was impeccable. Will definitely be returning soon."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <span className="font-medium text-sm">JD</span>
              </div>
              <div>
                <p className="font-medium">Jane Doe</p>
                <p className="text-sm text-muted-foreground">Food Critic</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-background rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-500"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "We celebrated our anniversary here and couldn't have chosen a better place. The herb-crusted lamb was
              cooked to perfection, and the wine pairing recommendation was spot on."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <span className="font-medium text-sm">MS</span>
              </div>
              <div>
                <p className="font-medium">Michael Smith</p>
                <p className="text-sm text-muted-foreground">Regular Customer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-background rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-500"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "The chocolate soufflé is worth the visit alone! It's perfectly executed every time. The staff is
              knowledgeable and attentive without being intrusive."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <span className="font-medium text-sm">AJ</span>
              </div>
              <div>
                <p className="font-medium">Amanda Johnson</p>
                <p className="text-sm text-muted-foreground">Dessert Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
