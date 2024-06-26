import React from 'react';
import {Avatar, Container, Description, Title} from "./style";
import dog from "../../images/img_4.png";

interface PillarsProps {
    title: string;
    description: string;
    index: number;
}

export const Pillars: React.FC<PillarsProps> = ({title, description, index}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Description className={(index % 2 === 0) ? 'left' : 'right'}>
                {(index % 2 === 0) ? "" : description}
                <Avatar>
                    <img src={dog} alt={"dog"}/>
                </Avatar>
                {(index % 2 === 0) ? description : ""}
            </Description>
        </Container>
    );
};

export default Pillars;