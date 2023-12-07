'use client'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateModel from './create.model';
import UpdateModel from './update.model';
import { useState } from 'react';
import Link from 'next/link';
import DeleteModel from './delete.model';

interface IProps {
    blogs: IBlog[]
}

function AppTable(props: IProps) {
    const { blogs } = props;

    const [blog, setBlog] = useState<IBlog | null>(null);
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

    return (
        <>
            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Table Blogs</h2>
                <Button variant='secondary' onClick={() => setShowModalCreate(true)}>Add New</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>
                                        <Link href={`/blogs/${item.id}`} className='btn btn-primary'>
                                            View
                                        </Link>

                                        <Button variant='warning' className='mx-3 my-1'
                                            onClick={() => {
                                                setBlog(item)
                                                setShowModalUpdate(true)
                                            }}
                                        >Edit</Button>
                                        <Button variant='danger'
                                            onClick={() => {
                                                setBlog(item)
                                                setShowModalDelete(true)
                                            }}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <CreateModel
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
            <UpdateModel
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                blog={blog}
                setBlog={setBlog}
            />
            <DeleteModel
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
                blog={blog}
                setBlog={setBlog}
            />
        </>
    );
}

export default AppTable;