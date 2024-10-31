import React, {useState} from 'react';
import {Tabs, List} from "flowbite-react";

export function FormationSubItem({title, module}: {title: string, module: any}) {
    const [detail, setDetail] = useState(false)
    return (
        <div className="shadow-md p-3 border-black mb-7">
            <div className="p-3 mt-7 flex flex-row items-center justify-between">
                <span className="font-medium text-primary">{title}</span>
                <div
                    className="flex flex-col bg-primary w-40 rounded mb-2 border-t-gray-300 border justify-center h-10 align-bottom">
                    <button className=" text-md text-white text-center" onClick={() => setDetail(!detail)}>
                        En savoir plus
                    </button>


                </div>

            </div>
            {detail &&
               <>
                   <Tabs variant="default">
                        <Tabs.Item active title="Objectifs">
                             <span className="text-gray-500">{module.objectifs}</span>
                        </Tabs.Item>
                        <Tabs.Item active title="Public ciblé">
                            <List>
                                {module.cible?.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </Tabs.Item>
                        {module.contenu &&
                        <Tabs.Item active title="Contenu">
                            <List>
                                {module.contenu.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </Tabs.Item>
                        }
                </Tabs>
                   <div className="flex flex-col items-center mt-7 justify-center">
                       <h2 className="text-xl mb-5">
                           Un service client toujours à votre écoute
                       </h2>
                       <div className="flex flex-row justify-between">
                           <div className="flex flex-col items-center mr-7">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-14 text-primary ">
                                   <path strokeLinecap="round" strokeLinejoin="round"
                                         d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                               </svg>

                               <p className="text-primary">contact@sonni-group.com</p>
                           </div>

                           <div className="flex flex-col items-center">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-14 text-primary">
                                   <path strokeLinecap="round" strokeLinejoin="round"
                                         d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                               </svg>
                               <p className="text-primary">(+221) 77 216 27 85</p>
                           </div>
                       </div>

                   </div>
               </>
            }
        </div>

    );
}

