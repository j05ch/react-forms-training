import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/container';
import { cmGerman, cmEnglish} from './models/craftsmenModel';

function Craftsmen({craftsmen}) {

    const [cm, setCm] = useState(cmGerman);

    const items = craftsmen.map((craftsman, i) =>
        <div key={i}>
            <div>{cm.firstName}: {craftsman.firstName}</div>
            <div>{cm.lastName}: {craftsman.lastName}</div>
            <div>{cm.field}: {craftsman.field.map((f, i) => <span key={i}>{f}{'  '}</span>)}</div>
            <div>{cm.profession}: {craftsman.profession}</div>
            <div>{cm.qualification}: {craftsman.qualification}</div>
            <div>{cm.mainFocus}: {craftsman.mainFocus}</div>
            <div>{cm.experience}: {craftsman.experience}</div>
            <div>{cm.languages}: {craftsman.languages.map((l, i) => <span key={i}>{l[0]}: {l[1]}</span>)}</div>
            <div>{cm.experienceAbroad}: {craftsman.experienceAbroad}</div>
            <div>{cm.status}: {craftsman.status}</div>
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