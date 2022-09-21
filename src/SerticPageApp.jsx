import { useState } from "react";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

export const SerticPageApp = () => {
    const [dark, setDark] = useState( localStorage.getItem('theme')  );

  return (
    <>
    <NavBar
        setDark={ setDark }
    />
    <Home />
    </>
  )
}