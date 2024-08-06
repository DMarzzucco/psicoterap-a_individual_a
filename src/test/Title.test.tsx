import { render, screen } from "@testing-library/react"
import { TitleComp } from "@/components"

describe("title", () => {
    it("render appropriately", () => {
        render(<TitleComp />)
    })
})