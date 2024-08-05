import { BooleanAction, BooleansProps } from "@/ts"

export function Reducer(state: BooleansProps, op: BooleanAction): BooleansProps {
    switch (op.type) {
        case "form":
            return {
                ...state,
                form: true,
                table: false
            }
        case "close_form":
            return { ...state, form: false }
        case "table":
            return {
                ...state,
                table: true,
                form: false
            }
        case "close_table":
            return { ...state, table: false }
        default:
            throw new Error(`${Error}`)
    }
}