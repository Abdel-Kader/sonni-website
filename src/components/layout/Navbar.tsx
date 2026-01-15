import { Link, useLocation } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
} from '@heroicons/react/16/solid'
import logo from '../../assets/logos/logo.svg'
import {Fragment, useState} from "react";
import {Drawer} from "flowbite-react";
import {useTranslation} from "react-i18next";

const languages = [
  {
    code: "fr",
    label: "Français",
    flag: "https://flagcdn.com/w20/fr.png",
  },
  {
    code: "en",
    label: "English",
    flag: "https://flagcdn.com/w20/gb.png",
  }

];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const {t, i18n} = useTranslation();

  const changeLanguage = (lang: any) => {
    setSelected(lang);
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

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
                        {t('title.about')}
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
                    <Link to='/expertise' onClick={()=> setIsOpen(false)}>
                      <p className={`rounded-md px-2 py-2   font-medium  text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/services' ? 'underline underline-offset-8' : ''}`}
                         aria-current="page">{t('title.expertise')}</p>
                    </Link>

                    <Link to='/forum' onClick={()=> setIsOpen(false)}>
                      <p className={`rounded-md px-2 py-2   font-medium  text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/services' ? 'underline underline-offset-8' : ''}`}
                         aria-current="page">{t('title.forum')}</p>
                    </Link>
                    <Link to='/magazine' onClick={()=> setIsOpen(false)}>
                      <p className={`rounded-md px-2 py-2   font-medium  text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/certificats' ? 'underline underline-offset-8' : ''}`}
                         aria-current="page">{t('title.magazine')}</p>
                    </Link>
                    <Link to='/contact' onClick={()=> setIsOpen(false)}>
                      <p className={`rounded-md px-2 py-2  font-medium  text-white hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/contact' ? 'underline underline-offset-8' : ''}`}
                         aria-current="page">{t('title.contact')}</p>
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
                    {t('title.about')}
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
                          {t('title.office')}
                        </button>
                      </MenuItem>
                    </Link>
                    <Link to='/team'>
                      <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          {t('title.team')}
                        </button>
                      </MenuItem>
                    </Link>
                  </MenuItems>
                </Menu>
                <Link to='/expertise' onClick={()=> setIsOpen(false)}>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/expertise' ? 'underline underline-offset-8' : ''}`}
                     aria-current="page">{t('title.expertise')}</p>
                </Link>
                <Link to='/forum'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/forum' ? 'underline underline-offset-8' : ''}`}
                     aria-current="page">{t('title.forum')}
                  </p>
                </Link>
                <Link to='/magazine'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/services' ? 'underline underline-offset-8' : ''}`}
                     aria-current="page">{t('title.magazine')}
                  </p>
                </Link>

                <Link to='/contact'>
                  <p className={`rounded-md px-2 py-2 text-sm font-medium text-[#312783] hover:underline hover:underline-offset-8 hover:-translate-y-1 hover:scale-80 ${location.pathname === '/contact' ? 'underline underline-offset-8' : ''}`}
                     aria-current="page">{t('title.contact')}</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative inline-block text-left">
            {/* Selected language */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50"
            >
              <img src={selected.flag} alt={selected.label} className="h-4 w-6" />
              <span>{selected.label}</span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 z-10 mt-2 w-36 rounded-md border bg-white shadow-lg">
                  {languages.map((lang) => (
                      <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang)}
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                      >
                        <img src={lang.flag} alt={lang.label} className="h-4 w-6" />
                        {lang.label}
                      </button>
                  ))}
                </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  )
}
