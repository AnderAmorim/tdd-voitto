
//importacao do react-dom que será necessário para criarmos elementos htmls nos nossos testes
import ReactDOM from "react-dom";
import Highlight from "./Highlight";

// vamos criar uma funcao que ira simular a adicao do componente que vai ser testado em uma pagina html
// que é gerada pelo react
function render(component) {
  const container = document.createElement("div");
  document.body.appendChild(container);

  ReactDOM.render(component, container);
}

//criar após o teste falhar
afterEach(() => {
  document.body.innerHTML = "";
});

//Criar esse teste e após isso criar o componente
test("renders a value", () => {
  //determinamos o valor que esperamos que exista dentro do nosso html
  const value = "3000"; // Arrange

  //utilizamos o método que simula a adicao do nosso componente a uma página
  render(<Highlight value={value} />); // Act

  //verificamos se o valor esperado está contido dentro
  expect(document.body.textContent).toBe(value); // Assert
});

// Criar esse teste e ver que há falha se nao utilizar o aftereach
test("renders another value", () => {
  const value = "5000"; // Arrange
  render(<Highlight value={value} />); // Act
  expect(document.body.textContent).toBe(value); // Assert
});