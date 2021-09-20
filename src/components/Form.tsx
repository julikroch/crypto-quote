import useCurrency from "../hooks/useCurrency"
import styled from "@emotion/styled"

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    transition: background-color .3s ease;
    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`

const Form = () => {

    const CURRENCIES = [
        { code: 'USD', name: 'US Dollar' },
        { code: 'MXN', name: 'Mexican Peso' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Pounds' }
    ]

    const [currency, Select] = useCurrency({
        label: 'Select your currency',
        initialState: '',
        currencies: CURRENCIES
    })

    return (
        <div>
            <form>
                <Select />
                <Button
                    type="submit"
                    value="Calculate"
                />
            </form>
        </div>
    )
}

export default Form
