import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/container';

function Projects({projects}) {

    const formDe = {
        project: 'Projekt',
        field: 'Gesuchte Branche',
        profession: 'Gesuchter Handwerksberuf',
        qualification: 'Gesuchte Qualifikation',
        location: 'Einsatzland, -ort',
        partner: 'Partnereinrichtung',
        tasks: 'Aufgabenbeschreibung',
        languages: 'Sprachen',
        period: 'Zeitraum, Dauer',
        status: 'Status'
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
        period: 'From to',
        status: 'Status'
    };

    let form = formDe;

    const items = projects.map((project, i) =>
        <div key={i}>
            <div>{form.project}: {project.project}</div>
            <div>{form.field}: {project.field}</div>
            <div>{form.profession}: {project.profession}</div>
            <div>{form.qualification}: {project.qualification}</div>
            <div>{form.location}: {project.location}</div>
            <div>{form.partner}: {project.partner}</div>
            <div>{form.tasks}: {project.tasks}</div>
            <div>{form.languages}: {project.languages.map((l, i) => <span key={i}>{l[0]}: {l[1]}</span>)}</div>
            <div>{form.period}: {project.period}</div>
            <div>{form.status}: {project.status}</div>
            <div>----------</div>
        </div>
    );

    return (
        <Container>
            <h1>EZ-Projekte</h1>
            {items}
        </Container>
    );
}

export default Projects;