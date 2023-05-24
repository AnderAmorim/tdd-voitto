import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Contador from './App';

test('renderiza o componente Contador corretamente', () => {
  const { getByText } = render(<Contador />);
  const valorElement = getByText('Valor: 0');
  const incrementarButton = getByText('Incrementar');
  const decrementarButton = getByText('Decrementar');

  expect(valorElement).toBeInTheDocument();
  expect(incrementarButton).toBeInTheDocument();
  expect(decrementarButton).toBeInTheDocument();
});

test('incrementa o valor ao clicar no botão de incremento', () => {
  const { getByText } = render(<Contador />);
  const valorElement = getByText('Valor: 0');
  const incrementarButton = getByText('Incrementar');

  fireEvent.click(incrementarButton);

  expect(valorElement).toHaveTextContent('Valor: 1');
});

test('decrementa o valor ao clicar no botão de decremento', () => {
  const { getByText } = render(<Contador />);
  const valorElement = getByText('Valor: 0');
  const decrementarButton = getByText('Decrementar');

  fireEvent.click(decrementarButton);

  expect(valorElement).toHaveTextContent('Valor: 0');
});

test('o valor nunca fica negativo', () => {
  const { getByText } = render(<Contador />);
  const valorElement = getByText('Valor: 0');
  const decrementarButton = getByText('Decrementar');

  fireEvent.click(decrementarButton);

  expect(valorElement).toHaveTextContent('Valor: 0');
});

//parte 3
test('snapshot do componente Contador', () => {
  const tree = renderer.create(<Contador />).toJSON();
  expect(tree).toMatchSnapshot();
});