import { Link, useLocation } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
} from '@heroicons/react/16/solid'
import logo from '../../assets/logos/logo.svg'
import {Fragment, useState} from "react";
import {Drawer} from "flowbite-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-2xl fixed w-full z-40 border-gray-100 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-12">
        <div className="relative flex h-24 items-center justify-between">

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Menu as={Fragment}>
              <MenuButton className="hamburger-icon" onClick={()=> setIsOpen(true)}>
                <svg className="block h-10 w-10 m-5 border-2 border-primary rounded text-[#312783]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                     aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              </MenuButton>
              <Drawer open={isOpen} onClose={handleClose} className="bg-[#312783]" >
                <Drawer.Header className="text-secondary" titleIcon={() => <></>}/>
                <Drawer.Items>
                  <div className="flex flex-col space-y-3">
                    <Menu>
                      <MenuButton
                          className={`flex items-center rounded-md px-2 py-2 font-medium text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/team' ? 'underline underline-offset-8' : location.pathname === '/reference' ? 'underline underline-offset-8' : ''}`}>
                        A Propos
                        <ChevronDownIcon className="size-5 fill-white"/>
                      </MenuButton>

                      <MenuItems
                          transition
                          anchor="bottom"
                          className="w-40 z-40 mt-3 rounded-s border border-gray-100  bg-white shadow-2xl p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        <Link to='/about' onClick={()=> setIsOpen(false)}>
                          <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                              Le Cabinet
                            </button>
                          </MenuItem>
                        </Link>
                        <Link to='/team' onClick={()=> setIsOpen(false)}>
                          <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                              Notre Equipe
                            </button>
                          </MenuItem>
                        </Link>


                      </MenuItems>
                    </Menu>
                    <Menu>
                      <MenuButton
                          className={`flex items-center rounded-md px-2 py-2 font-medium text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/team' ? 'underline underline-offset-8' : location.pathname === '/reference' ? 'underline underline-offset-8' : ''}`}>
                        Notre expertise
                        <ChevronDownIcon className="size-5 fill-white"/>
                      </MenuButton>

                      <MenuItems
                          transition
                          anchor="bottom"
                          className="w-40 z-40 mt-3 rounded-s border border-gray-100  bg-white shadow-2xl p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        <Link to='/intelligence-strategy' onClick={()=> setIsOpen(false)}>
                          <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                              Sonni Intelligence & Strategie
                            </button>
                          </MenuItem>
                        </Link>

                        <Link to='/reference' onClick={()=> setIsOpen(false)}>
                          <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                              Business Diplomacy & Public Relations
                            </button>
                          </MenuItem>
                        </Link>
                        <Link to='/reference' onClick={()=> setIsOpen(false)}>
                          <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                              Communication & Corporate Branding
                            </button>
                          </MenuItem>
                        </Link>
                        <Link to='/reference' onClick={()=> setIsOpen(false)}>
                          <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                              Events & Strategic Networking
                            </button>
                          </MenuItem>
                        </Link> <Link to='/reference' onClick={()=> setIsOpen(false)}>
                          <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                              SONNI Academy & Influence Institute
                            </button>
                          </MenuItem>
                        </Link>
                      </MenuItems>
                    </Menu>
                    <Link to='/services' onClick={()=> setIsOpen(false)}>
                      <p className={`rounded-md px-2 py-2   font-medium  text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/services' ? 'underline underline-offset-8' : ''}`}
                         aria-current="page">Africa Invest Forum</p>
                    </Link>
                    <Link to='/certificats' onClick={()=> setIsOpen(false)}>
                      <p className={`rounded-md px-2 py-2   font-medium  text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/certificats' ? 'underline underline-offset-8' : ''}`}
                         aria-current="page">SONNI Insights Magazine</p>
                    </Link>
                    <Link to='/contact' onClick={()=> setIsOpen(false)}>
                      <p className={`rounded-md px-2 py-2  font-medium  text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/contact' ? 'underline underline-offset-8' : ''}`}
                         aria-current="page">Contact</p>
                    </Link>
                  </div>
                </Drawer.Items>
              </Drawer>
            </Menu>

          </div>

          <div className="flex flex-1 items-center justify-center sm:justify-start">

            <div className="flex flex-shrink-0 items-center">
              <Link to='/'>
                <img className="h-28 w-auto" src={logo} alt="Cabinet Sonni"/>
              </Link>
            </div>
            <div className="hidden sm:ml-2 sm:block">
              <div className="flex space-x-2 ml-28">
                <Menu>
                  <MenuButton
                      className={`flex items-center rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/team' ? 'underline underline-offset-8' : location.pathname === '/reference' ? 'underline underline-offset-8' : ''}`}>
                    A Propos
                    <ChevronDownIcon className="size-5 fill-[#312783]"/>
                  </MenuButton>

                  <MenuItems
                      transition
                      anchor="bottom"
                      className="w-40 z-40 mt-3 rounded-s border border-gray-100  bg-white shadow-2xl p-1 text-sm/6 text-[#312783] transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <Link to='/about' onClick={()=> setIsOpen(false)}>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Le Cabinet
                        </button>
                      </MenuItem>
                    </Link>
                    <Link to='/team'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Notre Equipe
                        </button>
                      </MenuItem>
                    </Link>
                  </MenuItems>
                </Menu>
                <Menu>
                  <MenuButton
                      className={`flex items-center rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/team' ? 'underline underline-offset-8' : location.pathname === '/reference' ? 'underline underline-offset-8' : ''}`}>
                    Notre expertise
                    <ChevronDownIcon className="size-5 fill-[#312783]"/>
                  </MenuButton>
                  <MenuItems
                      transition
                      anchor="bottom"
                      className="w-72 z-40 mt-3 rounded-s border border-gray-100 bg-white shadow-2xl p-1 text-sm/6 text-[#312783] transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <Link to='/intelligence-strategy'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Sonni Intelligence & Strategie
                        </button>
                      </MenuItem>
                    </Link>

                    <Link to='/reference'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Business Diplomacy & Public Relations
                        </button>
                      </MenuItem>
                    </Link>
                    <Link to='/reference'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Communication & Corporate Branding
                        </button>
                      </MenuItem>
                    </Link>
                    <Link to='/reference'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          Events & Strategic Networking
                        </button>
                      </MenuItem>
                    </Link>
                    <Link to='/reference'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          SONNI Academy & Influence Institute
                        </button>
                      </MenuItem>
                    </Link>
                  </MenuItems>
                </Menu>
                <Link to='/formations'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/formations' ? 'underline underline-offset-8' : ''}`}
                     aria-current="page">Africa Invest Forum</p>
                </Link>
                <Link to='/services'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/services' ? 'underline underline-offset-8' : ''}`}
                     aria-current="page">SONNI Insights Magazine</p>
                </Link>

                <Link to='/contact'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/contact' ? 'underline underline-offset-8' : ''}`}
                     aria-current="page">Contact</p>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </nav>
  )
}
