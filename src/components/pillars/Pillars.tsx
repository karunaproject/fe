import React from 'react';
import { Container, DescriptionLeft, DescriptionRight, DescriptionWrapper, Title } from "./style";
import dog from "../../images/img_4.png";

interface PillarsProps {
    title: string;
    description: string;
    index: number;
}

export const Pillars: React.FC<PillarsProps> = ({ title, description, index }) => {
    const align = index % 2 === 0 ? 'left' : 'right';

    return (
        <Container>
            <Title>{title}</Title>
            <DescriptionWrapper align={align}>
                <DescriptionLeft>
                    {align === 'right' && description}
                </DescriptionLeft>
                <img src={dog} alt="dog" />
                <DescriptionRight>
                    {align === 'left' && description}
                </DescriptionRight>
            </DescriptionWrapper>
        </Container>
    );
};

export default Pillars;
