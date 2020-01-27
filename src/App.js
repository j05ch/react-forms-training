import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'

function App() {
    const {register, handleSubmit, errors, watch} = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch('example'));
    console.log(errors);


    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input name='example' defaultValue='test' ref={register} />
        //     <input name='exampleRequired' ref={register({required: true})} />
        //     {errors.exampleRequired && <span>This field is required</span>}
        //
        //     <input type='submit'/>
        // </form>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="firstName">
                <Form.Label>Vorname</Form.Label>
                <Form.Control as="input" type="text" placeholder="Vorname" name="first_name" ref={register({required: true, maxLength: 80})} />
            </Form.Group>
            <p>Nachname</p>
            <input type="text" placeholder="last_name" name="last_name" ref={register({required: true, maxLength: 100})} />
            <p>Handwerksberuf</p>
            <input type="text" placeholder="profession" name="profession" ref={register({required: true, maxLength: 100})} />
            <p>Qualifikation/ Berufsabschluss</p>
            <input type="text" placeholder="qualifiaction" name="qualifiaction" ref={register({required: true, maxLength: 200})} />
            <p>Tätigkeitsschwerpunkte</p>
            <input type="text" placeholder="main_focus" name="main_focus" ref={register({required: true, maxLength: 200})} />
            <p>Berufserfahrung in Jahren</p>
            <input type="number" placeholder="experience" name="experience" ref={register({required: true, maxLength: 3})} />
            <p>Sprachkenntnisse</p>
            <p>Englisch</p>
            <input type="checkbox" placeholder="english" name="english" ref={register} />
            <p>Französisch</p>
            <input type="checkbox" placeholder="french" name="french" ref={register} />
            <p>Sonstiges</p>
            <input type="checkbox" placeholder="other_lang" name="other_lang" ref={register} />
            <p>Auslandserfahrung</p>
            <input type="text" placeholder="experience_abroad" name="experience_abroad" ref={register({maxLength: 200})} />
            <p>Verfügbarkeit, mögliche Einsatzdauer</p>
            <input type="text" placeholder="free_from_to" name="free_from_to" ref={register({required: true, maxLength: 200})} />
            <p>Status</p>
            <select name="status" ref={register({ required: true })}>
                <option value="Aktuell">Aktuell</option>
                <option value=" Nicht aktuell"> Nicht aktuell</option>
            </select>

            <input type="submit" />
        </form>
    );
}

export default App;
