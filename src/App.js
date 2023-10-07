import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import text from './text.js'
import './App.css'

export default function App() {
  const card = text.map((item) => {
    return <Main key={item.id} {...item} />;
});
  return (
    <div>
   
      <Navbar/>
      {card}
    </div>
  )
}
