import {useState} from "react";
import {Drawer, Sidebar} from "flowbite-react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logos/logo-1.jpeg";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate()

  const handleClose = () => setIsOpen(false);
  return (
      <div className="flex">
        <nav className="bg-white shadow-xl flex fixed w-full z-40 border-gray-100 ">
          <div className="ml-12 px-2">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link to='/' className="flex items-center">
                  <img className="h-16 w-auto" src={logo} alt="Cabinet Sonni"/>
                  <h3 className="text-primary font-bold mt-2 text-xl">SONNI GROUP</h3>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Drawer backdrop={false} open={isOpen} onClose={handleClose} className="w-64 border-gray-300 border mt-20">
            <Drawer.Items>
              <Sidebar
                  aria-label="Sidebar with multi-level dropdown example"
                  className="[&>div]:bg-transparent [&>div]:p-0"
              >
                <div className="flex h-full flex-col justify-between py-2">
                  <div>

                    <Sidebar.Items>
                      <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin">
                          Accueil
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/seminaires">
                          Seminaires
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/webinaires">
                          Webinaires
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/articles">
                          Articles
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/librairie">
                          Librairie
                        </Sidebar.Item>
                      </Sidebar.ItemGroup>
                      <Sidebar.ItemGroup className="justify-end">
                        <Sidebar.Item>
                          <button onClick={()=> {
                            window.localStorage.removeItem("user")
                            navigate("/login", { replace: true })
                          }}>

                            Déconnection
                          </button>
                        </Sidebar.Item>

                      </Sidebar.ItemGroup>
                    </Sidebar.Items>
                  </div>
                </div>
              </Sidebar>
            </Drawer.Items>
          </Drawer>
        </div>
        )
        }
