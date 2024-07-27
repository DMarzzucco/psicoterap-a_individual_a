import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export interface ButtonCloseProps { click: () => void; }
export interface ActionProp {
    click: () => void;
    title: string;
    children: React.ReactNode
    context: Boolean
}

export interface LinkFProps {
    path: string;
    title: string
}
export interface SlideProps {
    id: number;
    title: string;
    [key: string]: string | number;
}
export interface CompleteFormProp {
    htmlFor: string;
    title: string;
    name: string;
    placeholder: string
}
export interface infProps {
    icon: IconDefinition;
    title: string;
}
export interface AuthProv { children: JSX.Element }
export interface useContextProp {
    openForm: boolean;
    messageSent: boolean;
    sending: boolean;
    table: boolean;
    // --><><--
    curr: number;
    setCurr: (index: number) => void;
    handleButton: (op: "input" | "closeInput" | "table" | "closeTable") => void;
    sendEmail: (e: React.FormEvent) => void;
    reForm: React.RefObject<HTMLFormElement>;
}