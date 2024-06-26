'use client';
import Link from 'next/link'
import React from 'react'
import { IoBugSharp } from "react-icons/io5";
import {usePathname} from 'next/navigation'
import classnames from 'classnames';
const NavBar = () => {
    const currentPathname=usePathname();
    const links=[
        {label:'Dashboard',href:'/'},
        {label:'Issues',href:'/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"><IoBugSharp /></Link>
      <ul className='flex space-x-6'>
        {links.map(link=><Link key={link.href} 
        className={classnames({
            'text-zinc-900': link.href===currentPathname,
            'text-zinc-500': link.href!==currentPathname,
            'hover:text-zinc-800 transition-colors': true
        })}
 href={link.href}>
            {link.label}
            </Link>)}
        
      </ul>
    </nav>
  )
}
export default NavBar
