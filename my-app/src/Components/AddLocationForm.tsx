//import { useForm, SubmitHandler, Form } from "react-hook-form";
import styles from '../styles/Forms.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

function AddLocationForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleSubmit = async (e: { preventDefault: () => void; }) => { //handles firebaseUI authentication
        e.preventDefault();
        try {

        } catch (err) {
        }
    };
    return (
      <div className={`${styles.formcontainer}`}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.FloatingLabel className='mb-3' label='First Name'>
                            <Form.Control
                                type="firstName"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            </Form.FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control
                                type="lastName"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit">
                                Sign up
                            </Button>

                        </div>
                    </Form>
      </div>
    );
  }
  export default AddLocationForm;