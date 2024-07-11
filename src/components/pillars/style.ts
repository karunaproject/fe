import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .slide-right {
        animation: 3s slide-right;
    }

    @keyframes slide-right {
        from {
            margin-left: -200%;
        }
        to {
            margin-left: 0%;
        }
    }

    .slide-left {
        animation: 3s slide-left;
    }

    @keyframes slide-left {
        from {
            margin-left: 200%;
        }
        to {
            margin-left: 0%;
        }
    }
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
    margin-left: ${(props) => (props.align === 'left' ? '-10.5vw' : 'auto')};
    margin-right: ${(props) => (props.align === 'right' ? '-10.5vw' : 'auto')};

    img {
        position: relative;
        height: 100%;
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
