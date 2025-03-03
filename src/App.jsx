import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Class1 } from "./pages/Class1/Class1"
import { NotFound } from "./pages/NotFound/NotFound"
import { Header } from "./layouts/Header/Header"
import { Footer } from "./layouts/Footer/Footer"

export const App = () => {

  return (
    <>
      <Header/>
    <Routes> 
      <Route path="/" content={<Home />}/>
      <Route path="/Class1" content ={Class1} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
    
    </>    
  )

}


//Siempre instalar la libreria de tailwind que es (npm install tailwindcss @tailwindcss/vite)
//tambien la libreria de vite que es (npm install )
//Ahora la libreria de los iconos (npm install react-icons)
// Y la del react router dom (npm install react-router-dom) 