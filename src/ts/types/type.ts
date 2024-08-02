export type ButtonType =
    | { type: "input" }
    | { type: "closeInput" }
    | { type: "table" }
    | { type: "closeTable" }
    
export type BooleanAction =
    | { type: "loading" }
    | { type: "confirmation" }
    | { type: "close_confirmation" }
    | { type: "loading_end" }
    // 
    | { type: "form" }
    | { type: "close_form" }
    | { type: "table" }
    | { type: "close_table" }