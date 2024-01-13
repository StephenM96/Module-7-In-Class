import { useState } from "react"

export default function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
        setValue(e.target.value)
    }

    const reset = () => setValue('')

    const inputProps = {
        value: value,
        onChange: handleChange
    }

    return [inputProps, reset];
}