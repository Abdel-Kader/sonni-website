import { Sidebar } from 'flowbite-react';
import React, {useState} from 'react';
import blogBanner from "../assets/banners/blog.jpg";
import Banner from "../components/layout/Banner";

const ArticlePage = () => {
    const [article, setArticle] = useState({})
    return (
        <>
            <Banner image={blogBanner} title={"Articles"}
                    description={"Consultez les articles de SONNI Magazine"}/>
           <div className="flex flex-row m-10">
               <Sidebar aria-label="Default sidebar example" className="ml-12 border-2">
                   <Sidebar.Items>
                       <Sidebar.ItemGroup>
                           <Sidebar.Item>
                               <button onClick={()=>(setArticle({date: 'Juillet 2022'}))}>
                                   Juillet 2022
                               </button>
                           </Sidebar.Item>
                       </Sidebar.ItemGroup>
                       <Sidebar.ItemGroup>
                           <Sidebar.Item href="#" >
                               Janvier 2020
                           </Sidebar.Item>
                       </Sidebar.ItemGroup>



                   </Sidebar.Items>
               </Sidebar>
               <div className="bg-blue-300 flex flex-1">
                   <p></p>
               </div>
           </div>
        </>
    );
};

export default ArticlePage;
