import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 4rem;


    table {
        width: 100%;
        border-spacing: 0 0.5rem; 

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            background: var(--blue-light);
            color: #FFF;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            border-radius: 0.25rem;
        }
    }
`