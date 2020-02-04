import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { Redirect } from 'react-router-dom';

function Login(props) {
    const {register, handleSubmit, errors, watch} = useForm();
    const [formNames, setFormNames] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setFormNames(formEn);
    }, []);


    function onSubmit(data) {
        console.log(data);
        // axios
        //     .post(
        //         "http://localhost:3001/registrations",
        //         {
        //             user: data
        //         },
        //         {withCredentials: true}
        //     )
        //     .then(response => {
        //         if (response.data.status === "created") {
        //             props.handleSuccessfulAuth(response.data);
        //         }
        //     })
        //     .catch(error => {
        //         console.log("registration error", error);
        //     });

        props.handleSuccessfulAuth(data);
        setLoggedIn(true);
    }

    const formDe = {
        email: 'E-Mail',
        password: 'Passwort',
        submit: 'Anmelden'
    };

    const formEn = {
        email: 'E-Mail',
        password: 'Password',
        submit: 'Log in'
    };

    if (loggedIn)
        return (
            <Redirect to={'/success'} />
        );
    else
        return (
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="email">
                        <Form.Label>{formNames.email}</Form.Label>
                        <Form.Control as="input" type="email" placeholder={formNames.email} name="email"
                                      ref={register({required: true, maxLength: 100})} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>{formNames.password}</Form.Label>
                        <Form.Control as="input" type="password" placeholder={formNames.password} name="password"
                                      ref={register({required: true, maxLength: 100})} />
                    </Form.Group>

                    <Button variant='primary' type="submit">
                        {formNames.submit}
                    </Button>
                </form>
            </Container>
        );
}

export default Login
