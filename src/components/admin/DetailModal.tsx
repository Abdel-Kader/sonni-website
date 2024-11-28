import {List, Tabs} from "flowbite-react";
import React, {useEffect} from "react";

type ModalProps = {
    show: boolean,
    onClose: any,
    seminaire: any
}
export const DetailModal = ({ show, onClose, seminaire }: ModalProps) => {
    useEffect(() => {
        console.log(seminaire)
    }, []);
    return show ? (
        <div
            className="fixed z-50 flex items-center self-center justify-center h-[95%] w-full bg-black/40 overflow-y-scroll pt-24"
            onClick={onClose}
        >
            <div
                className="w-[50%] mr-[15%] p-5 bg-white rounded-lg  "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button className="text-xl" onClick={onClose}>
                    X
                </button>
                <div>
                    <div className="ml-12 flex flex-col max-sm:mt-7">
                        <h3 className="font-bold text-xl mb-5 underline underline-offset-8 decoration-4 decoration-primary">Présentation</h3>

                        <span
                            className="font-medium text-primary mt-4">
                            <List>
                                {seminaire?.presentation?.map((con: any) => (
                                    <List.Item className="text-black">
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </span>
                        <Tabs variant="default">
                            <Tabs.Item active title="Objectifs">
                                <Tabs.Item active title="Contenu">
                                    <List>
                                        {seminaire?.objectifs?.map((con: any) => (
                                            <List.Item>
                                                {con}
                                            </List.Item>
                                        ))}
                                    </List>
                                </Tabs.Item>
                            </Tabs.Item>
                            <Tabs.Item active title="Public ciblé">
                                <List>
                                    {seminaire?.cible?.map((con: any) => (
                                        <List.Item>
                                            {con}
                                        </List.Item>
                                    ))}
                                </List>
                            </Tabs.Item>

                            {seminaire?.program?.length > 0 && <Tabs.Item active title="Programme">
                                <List>
                                    {seminaire?.program?.map((con: any) => (
                                        <List.Item>
                                            {con}
                                        </List.Item>
                                    ))}
                                </List>
                            </Tabs.Item>}

                            {seminaire?.methods?.length > 0 && <Tabs.Item active title="Méthode">
                                <List>
                                    {seminaire?.methods?.map((con: any) => (
                                        <List.Item>
                                            {con}
                                        </List.Item>
                                    ))}
                                </List>
                            </Tabs.Item>}
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};
