import { Header } from "./components/header/Header"
import { About } from "./components/about/About"
import { ServicesHub } from "./components/servicesHub/ServicesHub"
import { HairTreatment } from "./components/sections/hairTreatment/HairTreatment"
import { Botox } from "./components/sections/botox/Botox"
import { Filling } from "./components/sections/filling/Filling"
import { Contact } from "./components/contact/Contact"
import { Footer } from "./components/footer/Footer"
import { WhatsAppFloat } from "./components/shared/WhatsAppFloat"

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <ServicesHub />
      <HairTreatment />
      <Botox />
      <Filling />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
