import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 100%;
    background-color:green;
    padding: 10px;
    border-radius: 25px;
`;

interface IButton{
    event: () => void
}

export const Button = ({event}:IButton) => {
    return (
        <ButtonStyled onClick={event}>
            Logar
        </ButtonStyled>
    );
}