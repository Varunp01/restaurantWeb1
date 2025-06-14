"use client"
import { Link } from "react-router-dom"
import { useState } from "react"

function MenuSection({ fullMenu = false }) {
  const [activeTab, setActiveTab] = useState("starters")

  const menuItems = {
    starters: [
      {
        name: "Crispy Calamari",
        description: "Lightly fried with lemon aioli and marinara sauce",
        price: 14,
      },
      {
        name: "Bruschetta",
        description: "Grilled bread topped with tomatoes, garlic, basil, and olive oil",
        price: 10,
      },
      {
        name: "Mushroom Arancini",
        description: "Crispy risotto balls with wild mushrooms and truffle oil",
        price: 12,
      },
      {
        name: "Shrimp Cocktail",
        description: "Poached jumbo shrimp with cocktail sauce and lemon",
        price: 16,
      },
      {
        name: "Beef Carpaccio",
        description: "Thinly sliced raw beef with arugula, capers, and parmesan",
        price: 15,
      },
    ],
    mains: [
      {
        name: "Filet Mignon",
        description: "8oz center cut with garlic mashed potatoes and seasonal vegetables",
        price: 38,
      },
      {
        name: "Seafood Linguine",
        description: "Shrimp, scallops, and clams in a white wine sauce",
        price: 28,
      },
      {
        name: "Eggplant Parmesan",
        description: "Layers of eggplant, marinara, and cheese with fresh basil",
        price: 22,
      },
      {
        name: "Roasted Chicken",
        description: "Free-range chicken with herb butter, roasted potatoes, and vegetables",
        price: 24,
      },
      {
        name: "Grilled Salmon",
        description: "Wild-caught salmon with lemon butter sauce and quinoa pilaf",
        price: 26,
      },
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso-soaked ladyfingers",
        price: 10,
      },
      {
        name: "Crème Brûlée",
        description: "Rich custard with caramelized sugar crust",
        price: 9,
      },
      {
        name: "New York Cheesecake",
        description: "Creamy cheesecake with berry compote",
        price: 11,
      },
      {
        name: "Apple Tart",
        description: "Warm apple tart with vanilla ice cream and caramel sauce",
        price: 10,
      },
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center and whipped cream",
        price: 12,
      },
    ],
    drinks: [
      {
        name: "Signature Martini",
        description: "Vodka, elderflower, and fresh citrus",
        price: 14,
      },
      {
        name: "Craft Beer Selection",
        description: "Rotating selection of local craft beers",
        price: 8,
      },
      {
        name: "Wine by the Glass",
        description: "Selection of premium red and white wines",
        price: 12,
      },
      {
        name: "Espresso Martini",
        description: "Vodka, coffee liqueur, and fresh espresso",
        price: 13,
      },
      {
        name: "Mocktails",
        description: "Refreshing non-alcoholic beverages",
        price: 7,
      },
    ],
  }

  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="container mx-auto">
        {!fullMenu && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Menu</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Explore our diverse menu featuring dishes crafted with passion and the finest ingredients.
            </p>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="grid w-full grid-cols-4 mb-6">
            <button
              onClick={() => setActiveTab("starters")}
              className={`py-3 text-sm font-medium transition-colors ${
                activeTab === "starters"
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Starters
            </button>
            <button
              onClick={() => setActiveTab("mains")}
              className={`py-3 text-sm font-medium transition-colors ${
                activeTab === "mains"
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Main Courses
            </button>
            <button
              onClick={() => setActiveTab("desserts")}
              className={`py-3 text-sm font-medium transition-colors ${
                activeTab === "desserts"
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Desserts
            </button>
            <button
              onClick={() => setActiveTab("drinks")}
              className={`py-3 text-sm font-medium transition-colors ${
                activeTab === "drinks"
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Drinks
            </button>
          </div>

          <div className="mt-6">
            <div className="grid gap-6">
              {menuItems[activeTab].map((item, index) => (
                <div key={index} className="flex justify-between items-start border-b pb-4">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                  <div className="text-base font-medium">${item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {!fullMenu && (
            <div className="text-center mt-12">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-base font-medium hover:bg-primary/90 transition-colors">
                      <Link to="/menu">
                View Full Menu
        </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
