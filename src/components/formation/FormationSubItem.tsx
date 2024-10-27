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
            {detail && <Tabs variant="default">
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
                {module.contenu && <Tabs.Item active title="Contenu">
                    <List>
                        {module.contenu.map((con: any) => (
                            <List.Item>
                                {con}
                            </List.Item>
                        ))}
                    </List>
                </Tabs.Item>}
            </Tabs>}
        </div>

    );
}

