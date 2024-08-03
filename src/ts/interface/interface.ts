import React, { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { ButtonType } from "../types/type";

export interface ButtonCloseProps { click: () => void; }

export interface Dates {
    readonly name: string;
    readonly phone: string;
    readonly mail: string;
    readonly context: string;
    readonly message: string
}
export interface ActionProp {
    click: () => void;
    icon: IconDefinition
    children: React.ReactNode;
    context: boolean;
    title: string;
}

export interface LinkFProps {
    path: string;
    title: string;
}
export interface SlideProps {
    id: number;
    title: string;
    [key: string]: string | number;
}
export interface CompleteFormProps {
    htmlFor: string;
    title: string;
    name: string;
    placeholder: string;
    value:string | number | readonly string[] | undefined
}
export interface infProps {
    icon: IconDefinition;
    title: string;
}
export interface BooleansProps {
    form: boolean;
    table: boolean;
    confirmation: boolean;
    loading: boolean;
}
export interface AuthProp { children: ReactNode }

export interface useContextProp {
    state: BooleansProps;
    curr: number;
    setCurr: (index: number) => void;
    handleButton: (op: ButtonType) => void;
    sendEmail: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    date: Dates

    reForm: React.RefObject<HTMLFormElement>;
}
