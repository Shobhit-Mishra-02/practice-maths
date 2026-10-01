import { NumberInput, TextInput, SingleSelectInput } from "./inputs"
import type { InputOptionType } from "../../types"

const InputFactory = ({
    type,
    ...rest
}: {
    type: "number" | "string" | "single-select" | "multi-select"
}) => {

    switch (type) {
        case "number":
            return <NumberInput {...rest} />
        
        case "string":
            return <TextInput {...rest} />

        case "single-select":
            return <SingleSelectInput {...rest as { options: InputOptionType[] }} />

        default:
            break;
    }
}

export default InputFactory;