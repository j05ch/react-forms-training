import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { ezpFormGerman, ezpFormEnglish } from '../models/projectFormModel';

function ProjectForm() {
    const [ezpForm, setEzpForm] = useState(ezpFormGerman);
    const {register, handleSubmit, errors, watch} = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    // TODO
    function fields() {
        return ezpForm.field.map((field, i) =>
            <option key={i} name={field}>{field}</option>
        );
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="project">
                    <Form.Label>{ezpForm.project}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={ezpForm.project} name="project"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>

                <Form.Group controlId="field">
                    <Form.Label>{ezpForm.fieldLabel}</Form.Label>
                    <Form.Control as="select" name="field"
                                  ref={register({required: true})}>
                        {fields()}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="profession">
                    <Form.Label>{ezpForm.profession}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={ezpForm.profession} name="profession"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="qualification">
                    <Form.Label>{ezpForm.qualification}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={ezpForm.qualification} name="qualification"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="location">
                    <Form.Label>{ezpForm.location}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={ezpForm.location} name="location"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="partner">
                    <Form.Label>{(ezpForm.partner)}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={ezpForm.partner} name="partner"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="tasks">
                    <Form.Label>{(ezpForm.tasks)}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={ezpForm.tasks} name="tasks"
                                  ref={register({required: true, maxLength: 200})} />
                </Form.Group>

                <p>{ezpForm.languages}</p>
                <Form.Group controlId="english" inline>
                    <Form.Check type="checkbox" placeholder={ezpForm.english} name="languages.english.english"
                                label={ezpForm.english}
                                ref={register} />
                    <Form.Control as="select" name="languages.english.level"
                                  ref={register}>
                        <option name={'languages.english.level.niveau'}>{ezpForm.skills}</option>
                        <option name={'languages.english.level.veryGood'}>{ezpForm.veryGood}</option>
                        <option name={'languages.english.level.good'}>{ezpForm.good}</option>
                        <option name={'languages.english.level.base'}>{ezpForm.base}</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="french">
                    <Form.Check type="checkbox" name="languages.french.french" label={ezpForm.french}
                                ref={register} />
                    <Form.Control as="select" name="languages.french.level"
                                  ref={register}>
                        <option name={'languages.french.level.niveau'}>{ezpForm.skills}</option>
                        <option name={'languages.french.level.veryGood'}>{ezpForm.veryGood}</option>
                        <option name={'languages.french.level.good'}>{ezpForm.good}</option>
                        <option name={'languages.french.level.base'}>{ezpForm.base}</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="other">
                    <Form.Label>{ezpForm.other}</Form.Label>
                    <Form.Control as="input" type="text" name="languages.other.other"
                                  ref={register({maxLength: 100})} />
                    <Form.Control as="select" name="languages.other.level"
                                  ref={register}>
                        <option name={'languages.other.level.niveau'}>{ezpForm.skills}</option>
                        <option name={'languages.other.level.veryGood'}>{ezpForm.veryGood}</option>
                        <option name={'languages.other.level.good'}>{ezpForm.good}</option>
                        <option name={'languages.other.level.base'}>{ezpForm.base}</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="period">
                    <Form.Label>{ezpForm.period}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={ezpForm.period} name="period"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="status">
                    <Form.Label>{ezpForm.status}</Form.Label>
                    <Form.Control as="select" name="status"
                                  ref={register({required: true})}>
                        <option name={ezpForm.open}>{ezpForm.open}</option>
                        <option name={ezpForm.ongoing}>{ezpForm.ongoing}</option>
                        <option name={ezpForm.ended}>{ezpForm.ended}</option>
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type="submit">
                    {ezpForm.submit}
                </Button>
            </form>
        </Container>
    );
}

export default ProjectForm;
