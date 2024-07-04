![image](https://github.com/ViihSN/biscoitinhoDaSorte/assets/93055828/70fa59ee-bdb3-4c0e-b0c0-0360010131a7)

# Biscoito da Sorte React

Este projeto é um aplicativo React simples que exibe frases de biscoito da sorte aleatórias ao clicar em um botão.

## Estrutura do Projeto

- `App.js`: Componente principal que contém a lógica do aplicativo.
- `style.css`: Arquivo de estilos para o componente.
- `assets/biscoito.png`: Imagem do biscoito da sorte.

## Instalação

Para rodar este projeto localmente, siga os seguintes passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até a pasta do projeto:
   ```bash
   cd seu-repositorio
   
3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   
## Estrutura do Componente
`App`
### Estado Inicial
- `textoFrase`: Frase atual exibida.
### Métodos
`quebraBiscoito()`: Gera uma frase aleatória do array frases e atualiza o estado.
### Renderização
- Uma imagem (biscoito.png).
- Um componente Botao para acionar a quebra do biscoito.
- Um elemento <h3> que exibe a frase do biscoito.
`Botao`
- Componente que renderiza um botão e executa uma ação ao ser clicado.
### Estilos
- Crie um arquivo style.css na pasta src.
