import { Link, useLocation } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
} from '@heroicons/react/16/solid'
import logo from '../../assets/logos/logo.jpeg'
import {useEffect} from "react";

export default function Navbar() {
  const location = useLocation();
  useEffect(() => {
    console.log(location)
  }, [location]);
  return (
    <nav className="bg-white shadow-2xl fixed w-full z-40 border-gray-100 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-12">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:justify-start">

            <div className="flex flex-shrink-0 items-center">
              <Link to='/'>
                <img className="h-20 w-auto" src={logo} alt="Cabinet Sonni" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ml-28">
                  <Menu>
                    <MenuButton
                        className={`flex items-center rounded-md px-2 py-2 text-sm font-medium text-primary hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/team' ? 'underline underline-offset-8' : location.pathname === '/reference' ? 'underline underline-offset-8' : ''}`}>
                      A Propos
                      <ChevronDownIcon className="size-5 fill-primary"/>
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom"
                        className="w-40 z-40 mt-3 rounded-s border border-gray-100  bg-white shadow-2xl p-1 text-sm/6 text-primary transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                      <Link to='/team'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Notre Equipe
                        </button>
                      </MenuItem>
                      </Link>

                      <Link to='/reference'>
                        <MenuItem>
                          <button
                              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            Nos Reférences
                          </button>
                        </MenuItem>
                      </Link>
                    </MenuItems>
                  </Menu>
                <Link to='/formations'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-primary hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/formations' ? 'underline underline-offset-8' : ''}`} aria-current="page">Formations</p>
                </Link>
                <Link to='/services'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-primary hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/services' ? 'underline underline-offset-8' : ''}`} aria-current="page">Services</p>
                </Link>
                <Link to='/certificats'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-primary hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/certificats' ? 'underline underline-offset-8' : ''}`} aria-current="page">Certificats & MBA</p>
                </Link>
                <Link to='/seminaires'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-primary hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/seminaires' ? 'underline underline-offset-8' : ''}`} aria-current="page">Séminaires</p>
                </Link>

                <Link to='/team-building'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-primary hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/team-building' ? 'underline underline-offset-8' : ''}`} aria-current="page">Team building</p>
                </Link>
                <Menu>
                  <MenuButton
                      className={`flex items-center rounded-md px-2 py-2 text-sm font-medium text-primary hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/blog' ? 'underline underline-offset-8' : location.pathname === '/blog' ? 'underline underline-offset-8' : ''}`}>
                    Blog
                    <ChevronDownIcon className="size-5 fill-primary"/>
                  </MenuButton>

                  <MenuItems
                      transition
                      anchor="bottom"
                      className="w-40 z-40 mt-3 rounded-s border border-gray-100  bg-white shadow-2xl p-1 text-sm/6 text-primary transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <Link to='/blog'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Webinaires
                        </button>
                      </MenuItem>
                    </Link>

                    <Link to='/blog'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Articles
                        </button>
                      </MenuItem>
                    </Link>
                    <Link to='/blog'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Librairie
                        </button>
                      </MenuItem>
                    </Link>
                  </MenuItems>
                </Menu>

                <Link to='/contact'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-primary hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/contact' ? 'underline underline-offset-8' : ''}`} aria-current="page">Contact</p>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="/team" className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-white" aria-current="page">A Propos</a>
            <a href="/formations" className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-white" aria-current="page">Formation</a>
            <a href="/services" className="rounded-md px-6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Services</a>
            <a href="/certificats" className="rounded-md px-6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Certificats & MBA</a>
            <a href="/seminaires" className="rounded-md px-6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Séminaires</a>
            <a href="/team-building" className="rounded-md px6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Team building</a>
            <a href="/blog" className="rounded-md px-6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Blog</a>
            <a href="/contact" className="rounded-md px-6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
