import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

function Projekt() {
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
        project: 'Projekt',
        field: 'Nachname',
        profession: 'Gesuchter Handwerksberuf',
        qualification: 'Gesuchte Qualifikation',
        location: 'Einsatzland, -ort',
        partner: 'Partnereinrichtung',
        tasks: 'Aufgabenbeschreibung',
        languages: 'Sprachkenntisse',
        english: 'Englisch',
        french: 'Französisch',
        other: 'Sonstige Sprachen',
        period: 'Zeitraum, Dauer',
        status: 'Status',
        ongoing: 'Aktuell',
        notOngoing: 'Nicht aktuell'
    };

    const formEn = {
        project: 'Project',
        field: 'Field',
        profession: 'Searched profession',
        qualification: 'Searched qualification',
        location: 'Location',
        partner: 'Partner',
        tasks: 'Tasks',
        languages: 'Languages',
        english: 'English',
        french: 'French',
        other: 'Other',
        period: 'From to',
        status: 'Status',
        ongoing: 'Ongoing',
        notOngoing: 'Ended'
    };


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="project">
                    <Form.Label>{formNames.project}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.project} name="project"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="field">
                    <Form.Label>{formNames.field}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.field} name="field"
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
                <Form.Group controlId="location">
                    <Form.Label>{formNames.location}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.location} name="location"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="partner">
                    <Form.Label>{(formNames.partner)}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.partner} name="partner"
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
                <Form.Group controlId="period">
                    <Form.Label>{formNames.period}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.period} name="period"
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
                <input type="submit" />
            </form>
        </Container>
    );
}

export default Projekt;
