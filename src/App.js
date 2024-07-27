import React from 'react'
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Cards } from './Components/Cards';
import { Table } from './Components/Table';
import { Footer } from './Components/Footer';


export const App = () => {
  return (
    <div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar></Navbar>
      <Home></Home>
      <Cards></Cards>
      <Table></Table>
      <Footer></Footer>
      </div>
      
    </div>
  )
}

export default App;