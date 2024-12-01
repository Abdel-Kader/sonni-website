import { Table } from "flowbite-react";
import React from "react";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../config/firebase";

const ArticleTableItem = ({seminaires, detail, collection}: {seminaires: any[], detail: (seminaire: any) => void, collection: string}) => {

    const onDeleteItem = async (id: string) => {
        try {
            await deleteDoc(doc(db, collection, id))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="overflow-x-auto mt-12">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>#</Table.HeadCell>
                    <Table.HeadCell>Titre</Table.HeadCell>
                    <Table.HeadCell>Date de publication</Table.HeadCell>
                    <Table.HeadCell>Image</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Détail</span>
                        <span className="sr-only">Supprimer</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {seminaires.map((sem, index) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {sem.title}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {new Date(sem.timestamps.nanoseconds).toDateString()}
                            </Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {sem.img &&
                                    <img src={sem.img} className="w-14 h-14" alt={'img'}/>}
                            </Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <button onClick={()=> detail(sem)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-5 text-secondary">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                </button>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <button
                                    onClick={()=> onDeleteItem(sem._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-5 text-red-800">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                    </svg>
                                </button>
                            </Table.Cell>
                        </Table.Row>

                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default ArticleTableItem;
