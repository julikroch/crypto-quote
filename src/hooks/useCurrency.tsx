import { Fragment, useState } from "react"
import styled from "@emotion/styled";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const Selector = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCurrency = (props: { label: string, initialState: string, currencies: any }) => {

    const { label, initialState, currencies } = props

    const [state, setState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selector
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option>--Select--</option>
                {currencies.map((currency: any) => (
                    <option key={currency.code}>{currency.name}</option>
                ))}
            </Selector>
        </Fragment>
    )
    return [state, Select, setState] as const
}

export default useCurrency
