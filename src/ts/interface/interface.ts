import React, { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { ButtonType } from "../types/type";

export interface ButtonCloseProps { click: () => void; }

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
    use?: string
    state:BooleansProps;
    curr: number;
    setCurr: (index: number) => void;
    handleButton: (op: ButtonType) => void;
    sendEmail: (e: React.FormEvent) => void;
    reForm: React.RefObject<HTMLFormElement>;
}
