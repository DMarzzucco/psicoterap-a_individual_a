import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
    text1: string;
    text2: string;
    text3?: string;
}
export interface BoxProp {
    children: React.ReactNode
    slides: SlideProps[]
}
export interface SlideBtn {
    click: () => void;
    icon: IconDefinition;
}
export interface infProps {
    icon: IconDefinition;
    title: string;
}
export interface AuthProv { children: JSX.Element }
export interface useContextProp {
    user?: string
    openForm: boolean
    handleButton: (op: "open" | "close") => void;
}