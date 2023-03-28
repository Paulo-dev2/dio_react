import { login } from "./login";

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn();

/* jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        isLoggedIn: false,
        setIsLoggedIn: mockSetIsLoggedIn
    })
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
})); */

describe('Login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert

    it('Deve retornar verdadeiro',async () => {
        const response = await login('teste@gmail.com', '123456');
        expect(response).toBeTruthy();
    });
})