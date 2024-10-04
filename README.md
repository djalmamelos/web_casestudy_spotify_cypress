
# Spotify Case Study Automation 🎵

Este repositório contém um projeto de automação de testes para um estudo de caso sobre a plataforma Spotify. O objetivo dos testes é validar diversas funcionalidades da interface do usuário, como a discografia de artistas, listas de podcasts e interações na página inicial.

## Índice 📚

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar os Testes](#como-executar-os-testes)
- [Casos de Teste](#casos-de-teste)
- [Contribuição](#contribuição)

## Introdução 🌟

Este projeto foi criado para demonstrar habilidades em automação de testes usando Cypress. Os testes focam em validar a interação do usuário com várias seções do Spotify, garantindo uma experiência fluida e funcional.

## Pré-requisitos ✅

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [Cypress](https://www.cypress.io/) - use o comando `npm install cypress` no terminal para instalar

## Estrutura do Projeto 📁

```plaintext
Cypress Case Study/
├── cypress/
│   ├── e2e/
│   ├── POpage/
│   │   ├── artistspage.js
│   │   ├── homepage.js
│   │   ├── login.js
│   │   ├── podcastspage.js
│   │   ├── whatsanewpage.js
│   ──  spotifycasestudy.cy.js
│   │   
│   └── support/
├── package-lock.json
├── package.json
├── README.md
```

- **e2e/**: Contém todos os arquivos relacionados ao Cypress, incluindo testes, plugins e suporte.
- **POpage/**: Contém os Page Objects relaconado aos testes, emn Login.js adicione suas credenciais do Spotify, para assim o teste funcionar.
## Como Executar os Testes ▶️

Para executar todos os testes, use o seguinte comando no diretório raiz do projeto:

```sh
npx cypress open
```

Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes. Os testes foram configurados para rodar no Chrome e utilizam variáveis relacionadas à conta do usuário para os testes, garantindo que as interações sejam realizadas com credenciais válidas.

## Casos de Teste 📝

### 1. Validar Discografia do Artista (Cenário linha: 7)
Este teste verifica se a discografia do artista é apresentada corretamente ao clicar no botão "mostrar tudo".

### 2. Verificar Opções de Faixa Musical (Cenário linha: 15)
Este teste valida se três pontos de opções aparecem ao clicar na extremidade direita de uma faixa musical.

### 3. Validar Título do Podcast (Cenário linha: 25)
Este teste assegura que o título do podcast está em destaque na parte superior da página.

### 4. Verificar Redirecionamento dos Episódios (Cenário linha: 43)
Este teste garante que o usuário é redirecionado corretamente ao clicar no nome do podcast.

### 5. Visualizar Nome da Faixa e Artista (Cenário linha: 61)
Este teste verifica se o nome da faixa musical e do artista são exibidos corretamente.

### 6. Validar Item Salvo (Cenário linha: 72)
Este teste valida se um item pode ser adicionado à lista de salvos, mudando a cor do botão para verde.

### 7. Retornar Filtros da Biblioteca (Cenário linha: 76)
Este teste verifica se os filtros da biblioteca retornam ao clicar na seta.

### 8. Visualizar Barra de Busca (Cenário linha: 78)
Este teste valida se a barra de busca aparece ao clicar no ícone de busca.

## Contribuição 🤝

Contribuições são bem-vindas! Por favor, abra um problema ou envie um pull request para discutir mudanças que você gostaria de fazer.

