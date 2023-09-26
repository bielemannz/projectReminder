import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;

width: 100%;

.reminderTitle {
display: flex;
align-items: center;
justify-content: center;

width: 100%;

margin: 3rem 0;
> h1 {
    color: #ed417b;
    font-family: "Roboto";
}
}
`;

export const Grid = styled.div `
display: flex;
width: 100%;
align-items: center;

> div {
display: grid;
    grid-template-columns: repeat(4, 1fr);
grid-row-gap: 2.5rem;
grid-column-gap: 2.5rem;

width: 90%;

margin-bottom: 5rem;
}


> div > div {
display: flex;
flex-direction: column;

align-items: center;

height: 15rem;

padding: 1rem;
gap: 1rem;

background-color: rgba(220, 97, 160, 0.8);
border-radius: 0%.4rem;

>h2 {
    font-family: "Roboto";
    color:#fff;
}
> p {
    font-family: "Roboto";
    width: 90%;

    overflow: auto;
    text-align: center;
    word-break: break-all;
    color: #fff;
&::-webkit-scrollbar {
display: none;
    }
}
}
`;