import { BooleansProps, Dates, SlideProps } from "@/ts"

export const slides: SlideProps[] = [
    {
        id: 0,
        title: "Terapia Individual",
        text1: "Terapia para Adolescentes",
        text2: "Terapia para Adultos",
        text3: "Terapia para Personas Mayores"
    },
    {
        id: 1,
        title: "Asesoramiento Psicológico",
        text1: "Orientación vocacional y profesional",
        text2: "Asesoramiento en casos de estrés y ansiedad",
        text3: "Manejo de la depresión"
    },
    {
        id: 2,
        title: "Modalidades de Atención",
        text1: "Consultas presenciales",
        text2: "Consultas remotas (videollamadas)",
    },
]
export const BooleansItems: BooleansProps = {
    form: false,
    table: false,
    confirmation: false,
    loading: false,
}

export const DateTransferens: Dates = {
    name: "",
    phone: "",
    mail: "",
    context: "",
    message: ""
}