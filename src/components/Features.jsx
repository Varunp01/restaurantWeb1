function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Signature Dishes</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Discover our chef's masterpieces that have earned us acclaim and keep our guests coming back for more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-background rounded-lg overflow-hidden border-0 shadow-lg">
            <div className="aspect-[4/3] relative">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Truffle Risotto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Truffle Risotto</h3>
              <p className="text-muted-foreground">
                Creamy Arborio rice slowly cooked with white wine, finished with black truffle and aged Parmesan.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-background rounded-lg overflow-hidden border-0 shadow-lg">
            <div className="aspect-[4/3] relative">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Herb-Crusted Lamb"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Herb-Crusted Lamb</h3>
              <p className="text-muted-foreground">
                Tender rack of lamb coated with fresh herbs and mustard, served with roasted vegetables and mint jus.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-background rounded-lg overflow-hidden border-0 shadow-lg">
            <div className="aspect-[4/3] relative">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Chocolate Soufflé"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Chocolate Soufflé</h3>
              <p className="text-muted-foreground">
                Light and airy dark chocolate soufflé with a molten center, served with vanilla bean ice cream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
