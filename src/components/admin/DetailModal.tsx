import {List, Tabs} from "flowbite-react";
import React from "react";

type ModalProps = {
    show: boolean,
    onClose: any,
    seminaire: any,
    type: string
}
export const DetailModal = ({ show, onClose, seminaire, type }: ModalProps) => {

    return show ? (
        <div
            className="fixed z-50 flex items-center self-center justify-center w-[75%] rounded-lg bg-black/40 overflow-y-scroll"
            onClick={onClose}
        >
            <div
                className="w-[90%] p-5 bg-white"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button className="text-xl" onClick={onClose}>
                    X
                </button>
                {type === "semianire" &&
                    <div>
                        <div className="ml-12 flex flex-col max-sm:mt-7 mb-12">
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
                            <Tabs variant="default" className="mt-4">
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
                }

                {type === "webinaire" &&
                    <div>
                        <div className="ml-12 flex flex-col max-sm:mt-7 mb-12">
                            <p className="text-center text-2xl mb-5 font-bold">Animé par </p>
                            <div className="flex items-center flex-col p-2 mb-7">
                                <div>
                                    <img
                                        alt="DG"
                                        src={seminaire.animateurImage}
                                        className="inline-block h-48 w-48 rounded-full ring-4 ring-secondary"
                                    />
                                </div>

                                <span
                                    className="font-medium text-primary text-xl text-center mt-4">{seminaire.animateurName}</span>
                                <span className="text-[9px] mt-4 font-medium text-gray-900 text-center mb-2 text-xl">{seminaire.animateurFunction}</span>

                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    ) : null;
};
