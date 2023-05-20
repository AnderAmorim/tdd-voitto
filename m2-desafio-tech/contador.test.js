import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Contador from "./Contador";

describe("Contador Component", () => {
  test("renderiza corretamente", () => {
    const { getByText, getByTestId } = render(<Contador />);
    const titulo = getByText("Contador");
    const valor = getByTestId("valor");
    const botaoIncremento = getByText("Incrementar");
    const botaoDecremento = getByText("Decrementar");

    expect(titulo).toBeInTheDocument();
    expect(valor).toHaveTextContent("Valor: 0");
    expect(botaoIncremento).toBeInTheDocument();
    expect(botaoDecremento).toBeInTheDocument();
  });

  test("incrementa o valor ao clicar no botão de incremento", () => {
    const { getByText, getByTestId } = render(<Contador />);
    const valor = getByTestId("valor");
    const botaoIncremento = getByText("Incrementar");

    fireEvent.click(botaoIncremento);

    expect(valor).toHaveTextContent("Valor: 1");
  });

  test("decrementa o valor ao clicar no botão de decremento", () => {
    const { getByText, getByTestId } = render(<Contador />);
    const valor = getByTestId("valor");
    const botaoIncremento = getByText("Incrementar");
    const botaoDecremento = getByText("Decrementar");

    fireEvent.click(botaoIncremento);
    fireEvent.click(botaoDecremento);

    expect(valor).toHaveTextContent("Valor: 0");
  });

  test("o valor nunca fica negativo", () => {
    const { getByText, getByTestId } = render(<Contador />);
    const valor = getByTestId("valor");
    const botaoDecremento = getByText("Decrementar");

    fireEvent.click(botaoDecremento);

    expect(valor).toHaveTextContent("Valor: 0");
  });
});