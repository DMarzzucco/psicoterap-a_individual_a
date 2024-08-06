"use client";

import { useContextProp, AuthProp, ButtonType, BooleanAction, StateProps } from "@/ts";
import { Object_date } from "@/components";
import React, { Component } from "react";
import { Reducer } from "./Reducer";
import { Dat } from "@/app/api";
import { toast } from "sonner";

const Dt = new Dat()
const date_trans = new Object_date()

export const AuthContext = React.createContext<useContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) { throw new Error(`${Error}`) }
    return context;
};

export default class AtuhProvider extends Component<AuthProp, StateProps> {

    private dispatch: React.Dispatch<BooleanAction>;

    constructor(props: AuthProp) {
        super(props);

        this.state = {
            curr: 0,
            state: date_trans.BooleansItems,
        }
        this.dispatch = (actions: BooleanAction) => {
            this.setState((prev) => ({
                ...prev,
                state: Reducer(prev.state, actions)
            }))
        }
    };
    formAction = async (date: FormData) => {
        try {
            await Dt.sendActions(date);
            toast.success("message was send");
            this.dispatch({ type: "close_form" });
        } catch (error: any) {
            throw new Error(`formAction_Error: ${error.message}`)
        }
    }
    handleButton = (op: ButtonType) => {
        switch (op.type) {
            case "input":
                this.dispatch({ type: "form" });
                break;
            case "closeInput":
                this.dispatch({ type: "close_form" });
                break
            case "table":
                this.dispatch({ type: "table" });
                break
            case "closeTable":
                this.dispatch({ type: "close_table" })
                break;
            default:
                throw new Error(`Unhandler type: ${Error}`)
        }
    }
    setCurr = (curr: number) => { this.setState({ curr }) }

    render() {
        const value: useContextProp = {
            handleButton: this.handleButton,
            curr: this.state.curr,
            setCurr: this.setCurr,
            state: this.state.state,
            formAction: this.formAction
        }
        return (
            <AuthContext.Provider value={value}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}