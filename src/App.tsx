import { useState, useEffect } from 'react';
import Form from './components/Form';
import Spinner from './components/Spinner/Spinner';
import Quote from './components/Quote';
import axios from 'axios';
import styled from '@emotion/styled';
import img from './crypto.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: white;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  ::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`

function App() {

  const [currency, saveCurrency] = useState('')
  const [crypto, saveCrypto] = useState('')
  const [response, saveResponse] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const quoteCrypto = async () => {
      if (currency === '') return

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
      const result = await axios.get(url)

      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        saveResponse(result.data.DISPLAY[crypto][currency])
      }, 1000)
    }

    quoteCrypto()

  }, [currency, crypto])

  return (
    <Container>
      <div>
        <Img src={img} alt='Crypto Image' />
      </div>
      <div>
        <Heading>Quote your crypto instantly!</Heading>
        <Form
          saveCurrency={saveCurrency}
          saveCrypto={saveCrypto}
        />
        {loading ? <Spinner /> : <Quote response={response} />}
      </div>
    </Container>
  );
}

export default App;
