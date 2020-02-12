import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/container';

function Craftsmen({craftsmen}) {

    const formDe = {
        firstName: 'Vorname',
        lastName: 'Nachname',
        field: 'Branche',
        profession: 'Handwerksberuf',
        qualification: 'Qualifikation/ Berufsabschluss',
        mainFocus: 'Tätikeitsschwerpunkte',
        experience: 'Berufserfahrung in Jahren',
        languages: 'Sprachen',
        experienceAbroad: 'Auslandserfahrung',
        freeFromTo: 'Verfügbarkeit, mögliche Einsatzdauer',
        status: 'Status'
    };

    const formEn = {
        firstName: 'Given name',
        lastName: 'Name',
        field: 'Field',
        profession: 'Profession',
        qualification: 'Qualification',
        mainFocus: 'Main focus',
        experience: 'Experience in years',
        languages: 'Languages',
        experienceAbroad: 'Experience abroad',
        freeFromTo: 'Free from to',
        status: 'Status'
    };

    let form = formDe;

    const items = craftsmen.map((craftsman, i) =>
        <div key={i}>
            <div>{form.firstName}: {craftsman.firstName}</div>
            <div>{form.lastName}: {craftsman.lastName}</div>
            <div>{form.field}: {craftsman.field.map((f, i) => <span key={i}>{f}{'  '}</span>)}</div>
            <div>{form.profession}: {craftsman.profession}</div>
            <div>{form.qualification}: {craftsman.qualification}</div>
            <div>{form.mainFocus}: {craftsman.mainFocus}</div>
            <div>{form.experience}: {craftsman.experience}</div>
            <div>{form.languages}: {craftsman.languages.map((l, i) => <span key={i}>{l[0]}: {l[1]}</span>)}</div>
            <div>{form.experienceAbroad}: {craftsman.experienceAbroad}</div>
            <div>{form.status}: {craftsman.status}</div>
            <div>----------</div>
        </div>
    );

    return (
        <Container>
            <h1>Handwerker</h1>
            {items}
        </Container>
    );
}

export default Craftsmen;