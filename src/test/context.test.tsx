import { render, screen, act } from "@testing-library/react";
import { BooleanAction, StateProps } from "@/ts";
import { Dat } from "@/app/api";
import { useAuth, AuthProvider } from "@/context";

jest.mock('@/app/api', () => ({
    Dat: jest.fn().mockImplementation(() => ({
        sendActions: jest.fn().mockResolvedValue('success'),
    }))
}))

const TestComps: React.FC = () => {
    const auth = useAuth()

    if (!auth) {
        return <div>no Auth Context</div>
    }
    return (
        <div>
            <button onClick={() => auth.handleButton({ type: "input" })}>
                Test Button
            </button>
            <div>{auth.curr}</div>
        </div>
    );
};
describe("AuthProvider", () => {
    it("renders and privders context", () => {
        render(
            <AuthProvider>
                <TestComps />
            </AuthProvider>
        )
        expect(screen.getByText('0')).toBeInTheDocument()
        
        act (() =>{
            screen.getByText('Test Button').click();
        })
    })
})