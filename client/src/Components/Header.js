import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [hamburger, setHamburger]=useState(false)
  return (
    <div>
      <h1>ProjectPage</h1>
      <h2>Vos projets, votre espace</h2>

      <nav className='hidden flex-row justify-around mt-3 sm:flex'>

        <Link to={"/"}>Acceuil</Link>
        <Link to ={"/connexion"}>Connexion</Link>
        <Link to={"/inscription"}>inscription</Link>
        <Link to={"/yourprojectpage/:id"}>Votre page</Link>

      </nav>

      <h2 className='"flex m-2 sm:hidden' onClick={()=>setHamburger(!hamburger)}>Cliquez ici</h2>
      {hamburger ? (
        <nav className='flex flex-col items-start m-2 justify-start
        border-spacing-1 border-black bg-orange-100 opacity-100 sm:hidden'>
        <Link className='border-black w-full border-b-2 text-start' to={"/"}><p className='mx-1'>Acceuil</p></Link>
        <Link className='border-black w-full border-b-2 text-start' to ={"/connexion"}><p className='mx-1'>Inscription</p></Link>
        <Link className='border-black w-full border-b-2 text-start' to={"/inscription"}><p className='mx-1'>Connexion</p></Link>
        <Link className=' w-full text-start' to={"/yourprojectpage/:id"}><p className='mx-1'>Votre page</p></Link>
        </nav>
      ) : ""
      }    
    
    
    </div>
  )
}
