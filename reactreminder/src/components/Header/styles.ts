import styled from "styled-components"

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

width: 100%;
height: 10vh;

padding: 0 4rem;


background: radial-gradient(circle, rgba(240,168,191,1) 5%, rgba(240,162,187,1) 19%, rgba(237,65,123,0.7987570028011204) 100%);

>img {
    height: 2.5rem;
}
`;