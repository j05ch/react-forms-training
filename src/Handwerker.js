import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Handwerker() {
    const [formNames, setFormNames] = useState({});
    const {register, handleSubmit, errors, watch} = useForm();

    useEffect(() => {
        setFormNames(formDe);
    }, []);

    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch('example'));
    console.log(errors);

    const formDe = {
        firstName: 'Vorname',
        lastName: 'Nachname',
        profession: 'Handwerksberuf',
        qualification: 'Qualifikation/ Berufsabschluss',
        mainFocus: 'Tätikeitsschwerpunkte',
        experience: 'Berufserfahrung in Jahren',
        languages: 'Sprachkenntisse',
        english: 'Englisch',
        french: 'Französisch',
        other: 'Sonstige Sprachen',
        experienceAbroad: 'Auslandserfahrung',
        freeFromTo: 'Verfügbarkeit, mögliche Einsatzdauer',
        status: 'Status',
        ongoing: 'Aktuell',
        notOngoing: 'Nicht aktuell',
        submit: 'Abschicken'
    };

    const formEn = {
        firstName: 'Given name',
        lastName: 'Name',
        profession: 'Profession',
        qualification: 'Qualification',
        mainFocus: 'Main focus',
        experience: 'Experience in years',
        languages: 'Languages',
        english: 'English',
        french: 'French',
        other: 'Other languages',
        experienceAbroad: 'Experience abroad',
        freeFromTo: 'Free from to',
        status: 'Status',
        ongoing: 'Ongoing',
        notOngoing: 'Ended',
        submit: 'Send'
    };


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="firstName">
                    <Form.Label>{formNames.firstName}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.firstName} name="firstName"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>{formNames.lastName}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.lastName} name="lastName"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="profession">
                    <Form.Label>{formNames.profession}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.profession} name="profession"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="qualification">
                    <Form.Label>{formNames.qualification}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.qualification} name="qualification"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="mainFocus">
                    <Form.Label>{formNames.mainFocus}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.mainFocus} name="mainFocus"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="experience">
                    <Form.Label>{formNames.experience}</Form.Label>
                    <Form.Control as="input" type="number" placeholder={formNames.experience} name="experience"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <p>{formNames.languages}</p>
                <Form.Group controlId="english">
                    <Form.Label>{formNames.english}</Form.Label>
                    <Form.Control as="input" type="checkbox" placeholder={formNames.english} name="english"
                                  ref={register} />
                </Form.Group>
                <Form.Group controlId="french">
                    <Form.Label>{formNames.french}</Form.Label>
                    <Form.Control as="input" type="checkbox" placeholder={formNames.french} name="french"
                                  ref={register} />
                </Form.Group>
                <Form.Group controlId="other">
                    <Form.Label>{formNames.other}</Form.Label>
                    <Form.Control as="input" type="checkbox" placeholder={formNames.other} name="other"
                                  ref={register} />
                </Form.Group>
                <Form.Group controlId="experienceAbroad">
                    <Form.Label>{formNames.experienceAbroad}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.experienceAbroad}
                                  name="experienceAbroad"
                                  ref={register({required: true, maxLength: 300})} />
                </Form.Group>
                <Form.Group controlId="freeFromTo">
                    <Form.Label>{formNames.freeFromTo}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.freeFromTo} name="freeFromTo"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="status">
                    <Form.Label>{formNames.status}</Form.Label>
                    <Form.Control as="select" name="status"
                                  ref={register({required: true})}>
                        <option name={formNames.ongoing}>{formNames.ongoing}</option>
                        <option name={formNames.notOngoing}>{formNames.notOngoing}</option>
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type="submit">
                    {formNames.submit}
                </Button>
            </form>
        </Container>
    );
}

export default Handwerker;
