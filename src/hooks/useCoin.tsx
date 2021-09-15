import { Fragment, useState } from "react"

const useCoin = () => {

    const [state, setState] = useState('');

    const Select = () => {
        <Fragment>
            <label>Coin</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    }
    
    return [state, Select, setState]
}

export default useCoin
