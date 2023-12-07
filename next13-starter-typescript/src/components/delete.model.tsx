'use client'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { mutate } from "swr"

interface IProps {
    showModalDelete: boolean;
    setShowModalDelete: (flag: boolean) => void;
    blog: IBlog | null;
    setBlog: (value: IBlog | null) => void;
}

function DeleteModel(props: IProps) {

    const { showModalDelete, setShowModalDelete, blog, setBlog } = props;

    const [id, setId] = useState<number>(0);

    useEffect(() => {
        if (blog && blog.id) {
            setId(blog.id)
        }
    }, [blog])


    const handleSubmit = () => {


        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("Delete blog successfully")
                    handleCloseModal();
                    mutate("http://localhost:8000/blogs");
                }
            });
    }

    const handleCloseModal = () => {
        setShowModalDelete(false)
    }

    return (
        <>
            <Modal
                show={showModalDelete}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Do you want to delete this blog with id = {id}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModal()}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => handleSubmit()}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModel;