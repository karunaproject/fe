import React from 'react';
import {Container, DescriptionLeft, DescriptionRight, DescriptionWrapper, Title} from "./style";
import dog from "../../images/img_4.png";
import {useInView} from 'react-intersection-observer';

interface PillarsProps {
    title: string;
    description: string;
    index: number;
}

export const Pillars: React.FC<PillarsProps> = ({title, description, index}) => {
    const align = index % 2 === 0 ? 'left' : 'right';
    const [ref, inView] = useInView(    {
        triggerOnce: true,
        threshold: 0.30,
    });

    return (
        <Container ref={ref}>
            <Title>{title}</Title>
            {inView ?
                <div className={align === "left" ? "slide-right" : "slide-left"}>
                    <DescriptionWrapper align={align}>
                        <DescriptionLeft>
                            {align === 'right' && description}
                        </DescriptionLeft>
                        <img src={dog} alt="dog"/>
                        <DescriptionRight>
                            {align === 'left' && description}
                        </DescriptionRight>
                    </DescriptionWrapper>
                </div>
                : <div style={{width: "50vw", height: "20vw"}}></div>}
        </Container>
    );
};

export default Pillars;
