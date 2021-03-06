import styled from '@emotion/styled'

const ErrorMessage = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', sans-serif;
`

const Error = (props: { message: string }) => (
    <ErrorMessage>{props.message}</ErrorMessage>
)

export default Error
