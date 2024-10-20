import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
} from '@heroicons/react/16/solid'
import logo from '../../assets/logos/logo.jpeg'

export default function Navbar() {
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
                        className="flex items-center py-2 text-primary text-sm font-medium">
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

                      <Link to='/team'>
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
                  <p className="rounded-md px-2 py-2 text-sm font-medium text-primary" aria-current="page">Formations</p>
                </Link>
                <Link to='/certificats'>
                  <p className="rounded-md px-2 py-2 text-sm font-medium text-primary" aria-current="page">Certificats & MBA</p>
                </Link>
                <Link to='/seminaires'>
                  <p className="rounded-md px-2 py-2 text-sm font-medium text-primary" aria-current="page">Séminaires</p>
                </Link>
                <Link to='/services'>
                  <p className="rounded-md px-2 py-2 text-sm font-medium text-primary" aria-current="page">Services</p>
                </Link>
                <Link to='/team-building'>
                  <p className="rounded-md px-2 py-2 text-sm font-medium text-primary" aria-current="page">Team building</p>
                </Link>
                <Link to='/blog'>
                  <p className="rounded-md px-2 py-2 text-sm font-medium text-primary" aria-current="page">Blog</p>
                </Link>
                <Link to='/contact'>
                  <p className="rounded-md px-2 py-2 text-sm font-medium text-primary" aria-current="page">Contact</p>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-white" aria-current="page">Formation</a>
            <a href="#" className="rounded-md px-6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Services</a>
            <a href="#" className="rounded-md px6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Team building</a>
            <a href="#" className="rounded-md px-6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Blog</a>
            <a href="#" className="rounded-md px-6 py-2 text-sm font-medium text-primary hover:bg-gray-700 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
