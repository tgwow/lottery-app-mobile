# Lottery APP - Mobile

<p align="center">
	<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">  
</p>

<h4 align="center"> 
	🚧  Lottery APP - Mobile - Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-instalação">Instalação</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-contribuindo">Contribuindo</a> • 
 <a href="#-autor">Autor</a> •
 <a href="#-licença">Licença</a>
</p>


## 💻 Sobre

Esta é a versão mobile do projeto The Greatest Lottery App, a ideia é simular um ambiente de apostas. Nota: Esta aplicação foi feita apenas para realização de estudos.


Projeto desenvolvido durante o **Lab Luby** na [Luby Software](https://www.luby.com.br/) durante meu período de treinamento.
Foi utilizado o framework [React-Native](https://reactnative.dev/) junto com [expo](https://docs.expo.io/) já que eles permitem a criação de apps nativos utilizando somente Javascript com uma só base de códigos.


## ⚙️ Funcionalidades

- [x] Cadastro de usuário
- [x] Recuperção de senha por email
- [x] Login através de [JWT](https://jwt.io/) token
- [x] Salvar múltiplas apostas no banco de dados
- [x] Filtrar suas apostas feitas
- [x] Carregar os tipos de aposta


## 🎨 Layout

<p align="center"> 
  <img src="./assets/lottery-mobile-GIF.gif" width="480" height="720" alt="Video mostrando a aplição"/>
</p>

## 🚀 Instalação

💡Execute primeiro o **[Backend](https://github.com/tgwow/lottery-api)** e depois execute este projeto.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) or [nvm](https://nodejs.org/en/download/package-manager/#nvm) this is a package manager to install/remove/switch differents versions of Node.js.

#### 🎲 Rodando o aplicativo (mobile)

```bash
# Clone esse repositorio
$ git clone https://github.com/tgwow/lottery-app.git
$ cd lottery-app
$ npm install
# Precisamos instalar a CLI do expo (https://docs.expo.io/get-started/installation/)
$ npm install --global expo-cli
# Inicie o app
$ expo start -c
```
Depois disso, voce pode rodar no emulador [android](https://docs.expo.io/workflow/android-studio-emulator/)/[iOS](https://docs.expo.io/workflow/ios-simulator/) ou no seu [próprio dispositivo](https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet) 


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


#### [](https://github.com/tgwow/lottery-api)**Mobile**  [React-Native](https://reactnative.dev/)

-   **[Expo](https://docs.expo.io/)**
-   **[Redux](https://redux.js.org/)**
-   **[Redux Saga](https://redux-saga.js.org/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Formik](https://formik.org/)**
-   **[Yup](https://github.com/jquense/yup)**
-   **[Expo Font](https://docs.expo.io/versions/latest/sdk/font/)**


## 💪 Contribuindo

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)


## 🦸 Autor

<a href="https://www.linkedin.com/in/thiago-oliveira-86758738/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/28604537?s=460&u=3fc99856be98a7aa7823e0af58dfa67d2e8083ac&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thiago Oliveira</b></sub></a> <a href="https://www.linkedin.com/in/thiago-oliveira-86758738/" title="Rocket">🚀</a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@theveloper_tg-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/theveloper_tg)](https://twitter.com/theveloper_tg) [![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-oliveira-86758738/)](https://www.linkedin.com/in/thiago-oliveira-86758738/) 


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Thiago Oliveira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/thiago-oliveira-86758738/)
