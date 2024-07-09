# Pokémon Redux Application

Este é um projeto de estudo que demonstra como usar Redux com React para criar uma aplicação simples de Pokedex. A aplicação usa a PokeAPI para buscar dados dos Pokémon e Material-UI para a estilização da interface.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux**: Biblioteca para gerenciamento de estado.
- **React-Redux**: Biblioteca para integrar Redux com React.
- **Redux Thunk**: Middleware para escrever criadores de ações que retornam funções em vez de ações.
- **Material-UI**: Biblioteca de componentes React para estilização.
- **PokeAPI**: API RESTful que fornece dados sobre Pokémon.

## Funcionalidades

1. **Lista de Pokémon**: Exibe uma lista de Pokémon buscados da PokeAPI.
2. **Capturar Pokémon**: Permite ao usuário capturar Pokémon e adicioná-los a uma lista de Pokémon capturados.
3. **Usuário**: Sistema de login para gerenciar diferentes listas de Pokémon capturados para cada usuário.
4. **Página do Usuário**: Exibe os Pokémon capturados pelo usuário logado.

## Estrutura do Projeto

- **src**
  - **components**
    - `PokemonCard.js`: Componente de cartão para exibir informações do Pokémon.
    - `PokemonList.js`: Componente de lista para exibir a lista de Pokémon.
    - `CapturedPokemonCard.js`: Componente de cartão para exibir Pokémon capturados.
    - `CapturedPokemonList.js`: Componente de lista para exibir os Pokémon capturados pelo usuário.
  - **reducers**
    - `index.js`: Combina todos os reducers.
    - `pokemonReducer.js`: Gerencia o estado dos Pokémon.
    - `userReducer.js`: Gerencia o estado do usuário.
  - **store**
    - `store.js`: Configura o store do Redux.
  - **actions**
    - `pokemonActions.js`: Define ações relacionadas aos Pokémon.
    - `userActions.js`: Define ações relacionadas ao usuário.
  - **pages**
    - `HomePage.js`: Página inicial que exibe a lista de Pokémon e a lista de Pokémon capturados.
    - `UserPage.js`: Página do usuário que exibe os Pokémon capturados pelo usuário logado.
  - `App.js`: Componente principal da aplicação.
  - `index.js`: Ponto de entrada da aplicação.

## Proximos Passos

🔳 - **Melhorar a estilização**: Adicionar mais estilos e animações para melhorar a experiência do usuário. <br>
🔳 - **Adicionar mais funcionalidades**: Adicionar funcionalidades como busca de Pokémon, filtro por tipo, etc. <br>
🔳 - **Adicionar testes**: Adicionar testes para garantir a qualidade do código. <br>
🔳 - **Adicionar autenticação**: Adicionar autenticação para permitir que os usuários façam login e mantenham suas listas de Pokémon capturados. <br>
🔳 - **Adicionar persistência**: Adicionar <br>
🔳 - **Adicionar mais informações**: Adicionar mais informações sobre os Pokémon, como habilidades, tipos, etc. <br>
🔳 - **Adicionar mais funcionalidade de Usuário**: Adicionar funcionalidades como editar perfil, adicionar amigos, etc. <br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
