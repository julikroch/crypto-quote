import { Fragment, useState } from "react"

const useCurrency = () => {

    const [state, setState] = useState();

    const Select = () => (
        <Fragment>
            <label>Coin</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    )
    return [state, Select, setState] as const
}

export default useCurrency
