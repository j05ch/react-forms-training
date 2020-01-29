import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

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
        fieldLabel: 'Gesuchte Branche',
        field: [
            'Metall', 'Elektro', 'KfZ+Fahrzeuge',
            'Wasser+Sanitär+Heizung+Klima+Rohr',
            'Holz', 'Bau+Ausbau', 'Lebensmittel',
            'Glas+Papier+Keramik', 'Foto+Medien',
            'Musikinstrumente', 'Bekleidung+Textil+Leder',
            'Gold+Silber+Uhr', 'Gesundheit+Körperpflege'
        ],
        profession: 'Gesuchter Handwerksberuf',
        qualification: 'Gesuchte Qualifikation',
        location: 'Einsatzland, -ort',
        partner: 'Partnereinrichtung',
        tasks: 'Aufgabenbeschreibung',
        languages: 'Languages',
        skills: 'Niveau',
        veryGood: 'Sehr gut',
        good: 'Gut',
        base: 'Grundkenntnisse',
        english: 'English',
        french: 'French',
        other: 'Other languages',
        period: 'Zeitraum, Dauer',
        status: 'Status',
        open: 'Offene Nachfrage',
        ongoing: 'Nachfrage wird gerade bedient',
        ended: 'Nachfrage ist erledigt',
        submit: 'Abschicken'
    };

    const formEn = {
        project: 'Project',
        fieldLabel: 'Field',
        field: [
            'Metall', 'Elektro', 'KfZ+Fahrzeuge',
            'Wasser+Sanitär+Heizung+Klima+Rohr',
            'Holz', 'Bau+Ausbau', 'Lebensmittel',
            'Glas+Papier+Keramik', 'Foto+Medien',
            'Musikinstrumente', 'Bekleidung+Textil+Leder',
            'Gold+Silber+Uhr', 'Gesundheit+Körperpflege'
        ],
        profession: 'Searched profession',
        qualification: 'Searched qualification',
        location: 'Location',
        partner: 'Partner',
        tasks: 'Tasks',
        languages: 'Languages',
        skills: 'Niveau',
        veryGood: 'Sehr gut',
        good: 'Gut',
        base: 'Grundkenntnisse',
        english: 'English',
        french: 'French',
        other: 'Other languages',
        period: 'From to',
        status: 'Status',
        open: 'Open',
        ongoing: 'Ongoing',
        ended: 'Ended',
        submit: 'Send'
    };

    // TODO
    function fields() {
        return formDe.field.map(field =>
            <option name={field}>{field}</option>
        );
    }


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="project">
                    <Form.Label>{formNames.project}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.project} name="project"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>

                <Form.Group controlId="field">
                    <Form.Label>{formNames.fieldLabel}</Form.Label>
                    <Form.Control as="select" name="field"
                                  ref={register({required: true})}>
                        {fields()}
                    </Form.Control>
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
                <Form.Group controlId="tasks">
                    <Form.Label>{(formNames.tasks)}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={formNames.tasks} name="tasks"
                                  ref={register({required: true, maxLength: 200})} />
                </Form.Group>

                <p>{formNames.languages}</p>
                <Form.Group controlId="english" inline>
                    <Form.Check type="checkbox" placeholder={formNames.english} name="languages.english.english" label={formNames.english}
                                ref={register} />
                    <Form.Control as="select" name="languages.english.level"
                                  ref={register}>
                        <option name={'languages.english.level.niveau'}>{formNames.skills}</option>
                        <option name={'languages.english.level.veryGood'}>{formNames.veryGood}</option>
                        <option name={'languages.english.level.good'}>{formNames.good}</option>
                        <option name={'languages.english.level.base'}>{formNames.base}</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="french">
                    <Form.Check type="checkbox" name="languages.french.french" label={formNames.french}
                                ref={register} />
                    <Form.Control as="select" name="languages.french.level"
                                  ref={register}>
                        <option name={'languages.french.level.niveau'}>{formNames.skills}</option>
                        <option name={'languages.french.level.veryGood'}>{formNames.veryGood}</option>
                        <option name={'languages.french.level.good'}>{formNames.good}</option>
                        <option name={'languages.french.level.base'}>{formNames.base}</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="other">
                    <Form.Label>{formNames.other}</Form.Label>
                    <Form.Control as="input" type="text" name="languages.other.other"
                                  ref={register({maxLength: 100})} />
                    <Form.Control as="select" name="languages.other.level"
                                  ref={register}>
                        <option name={'languages.other.level.niveau'}>{formNames.skills}</option>
                        <option name={'languages.other.level.veryGood'}>{formNames.veryGood}</option>
                        <option name={'languages.other.level.good'}>{formNames.good}</option>
                        <option name={'languages.other.level.base'}>{formNames.base}</option>
                    </Form.Control>
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
                        <option name={formNames.open}>{formNames.open}</option>
                        <option name={formNames.ongoing}>{formNames.ongoing}</option>
                        <option name={formNames.ended}>{formNames.ended}</option>
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type="submit">
                    {formNames.submit}
                </Button>
            </form>
        </Container>
    );
}

export default Projekt;
