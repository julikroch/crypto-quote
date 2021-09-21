import styled from '@emotion/styled'

const DivResult = styled.div`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`
const Paragraph = styled.p`
    font-size: 18px;
`
const Price = styled.p`
    font-size: 30px;
`
const Info = styled.span`
    font-weight: bold;
`

const Quote = (props: { response: any }) => {

    const { response } = props
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = response

    if (Object.keys(props.response).length === 0) return null
    
    return (
        <DivResult>
            <Price>The price is <Info>{PRICE}</Info></Price>
            <Paragraph>The highest day price is <Info>{HIGHDAY}</Info></Paragraph>
            <Paragraph>The lowest day price is <Info>{LOWDAY}</Info></Paragraph>
            <Paragraph>The last 24hrs variation is <Info>{CHANGEPCT24HOUR}</Info></Paragraph>
            <Paragraph>The last update was <Info>{LASTUPDATE}</Info></Paragraph>
        </DivResult>
    )
}

export default Quote
