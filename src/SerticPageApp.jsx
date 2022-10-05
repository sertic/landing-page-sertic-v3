import { useState } from "react";
import { ClientsPartners } from "./components/Clients/ClientsPartners";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Services } from "./components/Services/Services";

export const SerticPageApp = () => {
    const [dark, setDark] = useState( localStorage.getItem('theme')  );

  return (
    <>
      <NavBar
          setDark={ setDark }
      />
      <Home />
      <Services />
      <ClientsPartners />
      <Contact />
      <Footer />
    </>
  )
}