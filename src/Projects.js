import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/container';
import { ezpGerman, ezpEnglish } from './models/projectsModel';

function Projects({projects}) {

    const [ezp, setEzp] = useState(ezpGerman);

    const items = projects.map((project, i) =>
        <div key={i}>
            <div>{ezp.project}: {project.project}</div>
            <div>{ezp.field}: {project.field}</div>
            <div>{ezp.profession}: {project.profession}</div>
            <div>{ezp.qualification}: {project.qualification}</div>
            <div>{ezp.location}: {project.location}</div>
            <div>{ezp.partner}: {project.partner}</div>
            <div>{ezp.tasks}: {project.tasks}</div>
            <div>{ezp.languages}: {project.languages.map((l, i) => <span key={i}>{l[0]}: {l[1]}</span>)}</div>
            <div>{ezp.period}: {project.period}</div>
            <div>{ezp.status}: {project.status}</div>
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