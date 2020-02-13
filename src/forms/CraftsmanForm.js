import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { cmFormGerman, cmFormEnglish } from '../models/craftsmanFormModel';

function CraftsmanForm() {
    const [cmForm, setCmForm] = useState(cmFormGerman);
    const {register, handleSubmit, errors, watch} = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    // TODO
    const fields = cmForm.field.map((field, i) =>
        <Form.Check
            key={i}
            id={`field${i}`}
            type='checkbox'
            name={`field.${field.toLocaleLowerCase()
                .replace(/\+/g, '_')
                .replace(/ü/g, 'ue')
                .replace(/ä/g, 'ae')
                .replace(/ö/g, 'oe')
                .replace(/ß/g, 'ss')}`}
            label={field}
            ref={register}
        />);

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="firstName">
                    <Form.Label>{cmForm.firstName}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={cmForm.firstName} name="firstName"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>{cmForm.lastName}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={cmForm.lastName} name="lastName"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>

                <Form.Group controlId="field">
                    <Form.Label>{cmForm.fieldLabel}</Form.Label>
                    {fields}
                </Form.Group>

                <Form.Group controlId="profession">
                    <Form.Label>{cmForm.profession}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={cmForm.profession} name="profession"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="qualification">
                    <Form.Label>{cmForm.qualification}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={cmForm.qualification} name="qualification"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="mainFocus">
                    <Form.Label>{cmForm.mainFocus}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={cmForm.mainFocus} name="mainFocus"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="experience">
                    <Form.Label>{cmForm.experience}</Form.Label>
                    <Form.Control as="input" type="number" placeholder={cmForm.experience} name="experience"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>

                <p>{cmForm.languages}</p>
                <Form.Group controlId="english" inline='true'>
                    <Form.Check type="checkbox" placeholder={cmForm.english} name="languages.english.english"
                                label={cmForm.english}
                                ref={register} />
                    <Form.Control as="select" name="languages.english.level"
                                  ref={register}>
                        <option name={'languages.english.level.niveau'}>{cmForm.skills}</option>
                        <option name={'languages.english.level.veryGood'}>{cmForm.veryGood}</option>
                        <option name={'languages.english.level.good'}>{cmForm.good}</option>
                        <option name={'languages.english.level.base'}>{cmForm.base}</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="french">
                    <Form.Check type="checkbox" name="languages.french.french" label={cmForm.french}
                                ref={register} />
                    <Form.Control as="select" name="languages.french.level"
                                  ref={register}>
                        <option name={'languages.french.level.niveau'}>{cmForm.skills}</option>
                        <option name={'languages.french.level.veryGood'}>{cmForm.veryGood}</option>
                        <option name={'languages.french.level.good'}>{cmForm.good}</option>
                        <option name={'languages.french.level.base'}>{cmForm.base}</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="other">
                    <Form.Label>{cmForm.other}</Form.Label>
                    <Form.Control as="input" type="text" name="languages.other.other"
                                  ref={register({maxLength: 100})} />
                    <Form.Control as="select" name="languages.other.level"
                                  ref={register}>
                        <option name={'languages.other.level.niveau'}>{cmForm.skills}</option>
                        <option name={'languages.other.level.veryGood'}>{cmForm.veryGood}</option>
                        <option name={'languages.other.level.good'}>{cmForm.good}</option>
                        <option name={'languages.other.level.base'}>{cmForm.base}</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="experienceAbroad">
                    <Form.Label>{cmForm.experienceAbroad}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={cmForm.experienceAbroad}
                                  name="experienceAbroad"
                                  ref={register({required: true, maxLength: 300})} />
                </Form.Group>
                <Form.Group controlId="freeFromTo">
                    <Form.Label>{cmForm.freeFromTo}</Form.Label>
                    <Form.Control as="input" type="text" placeholder={cmForm.freeFromTo} name="freeFromTo"
                                  ref={register({required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group controlId="status">
                    <Form.Label>{cmForm.status}</Form.Label>
                    <Form.Control as="select" name="status"
                                  ref={register({required: true})}>
                        <option name={cmForm.ongoing}>{cmForm.ongoing}</option>
                        <option name={cmForm.notOngoing}>{cmForm.notOngoing}</option>
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type="submit">
                    {cmForm.submit}
                </Button>
            </form>
        </Container>
    );
}

export default CraftsmanForm;
