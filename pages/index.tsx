import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="Beachfront Villas" img="https://source.unsplash.com/400x300/?beach" />
        <Card title="Mountain Cabins" img="https://source.unsplash.com/400x300/?mountain" />
        <Card title="City Apartments" img="https://source.unsplash.com/400x300/?city" />
      </section>
    </div>
  )
}
