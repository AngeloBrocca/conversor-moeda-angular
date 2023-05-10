# Conversor de Moedas

Este é um projeto de conversor de moedas simples desenvolvido em Angular. Ele utiliza a API CurrencyBeacon para obter as taxas de conversão atualizadas.

## Funcionalidades

- Seleção das moedas de origem e destino.
- Digitação do valor a ser convertido.
- Conversão da moeda com base nas taxas obtidas da API.
- Exibição do resultado da conversão.

## Pré-requisitos

- Node.js e npm instalados no sistema.

## Como executar o projeto

1. Clone o repositório para o seu computador.
2. No diretório raiz do projeto, execute o comando `npm install` para instalar as dependências.
3. Em seguida, execute o comando `npm start` para iniciar o servidor de desenvolvimento.
4. Abra o navegador e acesse `http://localhost:4200` para visualizar o aplicativo.

## Configuração da API

Para acessar a API CurrencyBeacon, é necessário obter uma chave de API. Siga as instruções no site da CurrencyBeacon para obter a sua chave. Após obter a chave, substitua o valor da variável `key` no arquivo `app.component.ts` pela sua chave de API.

## Personalização

Você pode personalizar o projeto de acordo com suas necessidades. Algumas sugestões de melhorias incluem:

- Adicionar mais moedas à lista de seleção.
- Melhorar a interface do usuário com estilos adicionais.
- Implementar tratamento de erros e validação de entrada.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
