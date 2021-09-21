import { useEffect, useState } from 'react'
import Error from './Error'
import useCurrency from '../hooks/useCurrency'
import useCrypto from '../hooks/useCrypto'
import axios from 'axios'
import styled from '@emotion/styled'

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

const Form = (props: { saveCurrency: any, saveCrypto: any }) => {

    const { saveCurrency, saveCrypto } = props
    const [cryptoList, saveCryptoList] = useState([])
    const [error, setError] = useState(false)

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

    const [crypto, SelectCrypto] = useCrypto({
        label: 'Select your crypto',
        initialState: '',
        currencies: cryptoList
    })

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            saveCryptoList(result.data.Data)
        }
        consultAPI()
    }, [])

    const currencyQuote = (e: any) => {
        e.preventDefault()

        if (currency === '' || crypto === '') {
            setError(true)
            return
        }

        setError(false)
        saveCurrency(currency)
        saveCrypto(crypto)
    }

    return (
        <div>
            <form
                onSubmit={currencyQuote}
            >
                {error && <Error message='All fields are required' />}
                <Select />
                <SelectCrypto />
                <Button
                    type='submit'
                    value='Calculate'
                />
            </form>
        </div>
    )
}

export default Form
