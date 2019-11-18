import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
    return (
        <Container>
            <header>
                <Label color='#7159c1' />
                <p>Terminar o projeto de hoje!  </p>
                <img src='https://api.adorable.io/avatars/285/abott@adorable.png' alt='' />
            </header>
        </Container>
    );
}
