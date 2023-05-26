import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

beforeAll(() => jest.spyOn(window, 'fetch'))


test("mostrar o valor do real brasileiro após a submissao do calculo de conversao", async () =>{

    window.fetch.mockImplementationOnce(() => Promise.resolve({
        ok: true,
        json: async () => ({
          USDBRL: { ask: "4.9363" },
        }),
    }));
      

    render(<App />)
    userEvent.type(screen.getByLabelText(/valor/i), "3000")
    userEvent.selectOptions(screen.getByLabelText(/moeda/i), "USD")
    userEvent.click(screen.getByRole("button", {name: /calcular/i}))
    expect(await screen.findByText("14808.90")).toBeInTheDocument();
})

test("testar o sistema de conversao quando a api estiver com erro", async () =>{
    const testError = "test error"
    window.fetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({message: testError})
    });

    render(<App />)
    userEvent.type(screen.getByLabelText(/valor/i), "3000")
    userEvent.selectOptions(screen.getByLabelText(/moeda/i), "USD")
    userEvent.click(screen.getByRole("button", {name: /calcular/i}))
    expect(await screen.findByRole("alert")).toBeInTheDocument();
})
