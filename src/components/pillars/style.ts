import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DescriptionWrapper = styled.div<{ align: string }>`
    width: 50vw;
    height: 20vw;
    background-color: rgb(0, 51, 102);
    color: white;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;
    border-radius: ${(props) => (props.align === 'left' ? '0 10px 10px 0' : '10px 0 0 10px')};
    margin-left: ${(props) => (props.align === 'left' ? '9.3vw' : 'auto')};
    margin-right: ${(props) => (props.align === 'right' ? '9.3vw' : 'auto')};

    img {
        position: relative;
        width: 20.5vw;
        transform: ${(props) => (props.align === 'left' ? 'translateX(-5vw)' : 'translateX(5vw)')};
    }
`;

export const DescriptionLeft = styled.div`
    margin-right: -5vw;
    position: relative;
`;

export const DescriptionRight = styled.div`
    margin-left: -5vw;
    position: relative;
`;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: -0.5vw;
    margin-top: 5vw;
    text-align: center;
`;
