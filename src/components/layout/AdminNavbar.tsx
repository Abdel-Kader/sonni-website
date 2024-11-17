import {useState} from "react";
import {Drawer, Sidebar} from "flowbite-react";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (
   <>
     <Drawer backdrop={false}  open={isOpen} onClose={handleClose}>
       <Drawer.Header title="SONNI GROUP" titleIcon={() => <></>} />
       <Drawer.Items>
         <Sidebar
             aria-label="Sidebar with multi-level dropdown example"
             className="[&>div]:bg-transparent [&>div]:p-0"
         >
           <div className="flex h-full flex-col justify-between py-2">
             <div>

               <Sidebar.Items>
                 <Sidebar.ItemGroup>
                   <Sidebar.Item href="/" >
                     Dashboard
                   </Sidebar.Item>
                   <Sidebar.Item href="/admin/seminaires" >
                     Seminaires
                   </Sidebar.Item>
                   <Sidebar.Item href="/users/list" >
                     Webinaires
                   </Sidebar.Item>
                   <Sidebar.Item href="/authentication/sign-in" >
                     Certificats & MBA
                   </Sidebar.Item>
                   <Sidebar.Item href="/authentication/sign-up" >
                     Team building
                   </Sidebar.Item>
                 </Sidebar.ItemGroup>
                 <Sidebar.ItemGroup>
                   <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" >
                     Utilisateurs
                   </Sidebar.Item>

                 </Sidebar.ItemGroup>
               </Sidebar.Items>
             </div>
           </div>
         </Sidebar>
       </Drawer.Items>
     </Drawer>
   </>
  )
}
