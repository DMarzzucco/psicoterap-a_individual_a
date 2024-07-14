import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export interface gridProps {
    img?: string;
    header: string;
    sub: string
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
    curr: number;
    setCurr: (index: number) => void;
    handleButton: (op: "open" | "close") => void;
    sendEmail: (e: React.FormEvent) => void;
    reForm: React.RefObject<HTMLFormElement>;
    messageSent: boolean;
    sending: boolean;
}