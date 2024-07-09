import React from 'react';
import Pillars from '../../components/pillars/Pillars';
import {data} from '../../components/pillars/data';
import {Container, SubTitle, Title} from "./style";
import Header from "../../components/header";
import NavBar from "../../components/navbar/NavBar";

const HomePage = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <Container>
                <Title>Koalicja Kastrujemy Bezdomność</Title>
                <SubTitle>Poznaj nasze filary</SubTitle>
                {data.map((componentProps, index) => (
                    <Pillars key={componentProps.title} title={componentProps.title}
                             description={componentProps.description} index={index}/>
                ))}
            </Container>
        </>
    )
}

export default HomePage;