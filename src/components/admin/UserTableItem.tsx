import { Table } from "flowbite-react";
import React from "react";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../config/firebase";

const UserTableItem = ({seminaires, detail, collection}: {seminaires: any[], detail: (seminaire: any) => void, collection: string}) => {

    const onDeleteItem = async (id: string) => {
        try {
            await deleteDoc(doc(db, collection, id))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="overflow-x-auto mt-12">
            <Table hoverable striped>
                <Table.Head>
                    <Table.HeadCell>#</Table.HeadCell>
                    <Table.HeadCell>Nom</Table.HeadCell>
                    <Table.HeadCell>Prénom</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Téléphone</Table.HeadCell>

                </Table.Head>
                <Table.Body className="divide-y">
                    {seminaires.map((sem, index) => (
                        <Table.Row className="bg-white dark:border-gray-700 w-3 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {sem.firstName}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {sem.lastName}
                            </Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {sem.email}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {sem.phoneNumber}
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

export default UserTableItem;
