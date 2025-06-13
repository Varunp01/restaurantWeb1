import Header from "../components/Header"
import Footer from "../components/Footer"

function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6">About Savoria</h1>
        <p className="mb-4">
          Welcome to Savoria, where culinary excellence meets warm hospitality. Our restaurant was founded in 2010 with
          a simple mission: to create memorable dining experiences through exceptional food, attentive service, and a
          welcoming atmosphere.
        </p>
        <p className="mb-4">
          Our team of talented chefs brings together traditional techniques and innovative approaches to create dishes
          that delight the senses. We source only the freshest, highest-quality ingredients from local suppliers
          whenever possible, ensuring that every plate that leaves our kitchen meets our exacting standards.
        </p>
        <p>
          Whether you're joining us for an intimate dinner, a family celebration, or a business lunch, we strive to make
          every visit to Savoria special. We look forward to welcoming you soon.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default About
