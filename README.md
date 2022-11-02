<h1 align="center">
  <img src="https://drive.google.com/uc?export=view&id=1sr3s7WHEX8V-6uB7UNN8vVWyyWSEYDQy" alt="nlw-world-cup-2022-img-top" width="100%" border="0" />
<br>
Fullstack Project Pool World Cup 2022
</h1>


> Status from Project: :construction: Under Construction :construction: 👨‍💻


## Shields

![Badge](https://img.shields.io/static/v1?label=next&message=FrameWork&color=blue&style=for-the-badge&logo=REACT)

![Badge](https://img.shields.io/static/v1?label=reactnative&message=FrameWork&color=blue&style=for-the-badge&logo=REACT)

![Badge](https://img.shields.io/github/issues/humbertoromanojr/nlw-world-cup2022?logo=visual-studio-code&style=plastic&logo=appveyor)
![Badge](https://img.shields.io/github/forks/humbertoromanojr/nlw-world-cup2022)
![Badge](https://img.shields.io/github/stars/humbertoromanojr/nlw-world-cup2022)
![Badge](https://img.shields.io/github/license/humbertoromanojr/nlw-world-cup2022)
![Badge](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fhumbertoromanojr%2Fnlw-world-cup2022)



## Technologies

For the development of the application, the stack was used: Node.JS, ReactJS and React Native, for the Backend, Frontend and mobile (Android & IOS) respectively.


<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> 👨‍💻 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> :woman_technologist: <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> :computer: <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />


### BACK-END
- <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> Node.js® is an open-source, cross-platform JavaScript runtime environment.

-   [Node](https://nodejs.org/en/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Fastify](https://www.fastify.io/)
-   [Prisma](https://www.prisma.io/)
-   [Mermaid](https://mermaid-js.github.io/)



### FRONT-END
- ⚛️ **Next Js** — Bringing the power of full-stack to the frontend. A JavaScript library for building user interfaces

-   [NextJS](https://nextjs.org/)



## Demonstration

<h1 align="center">
  <img src="https://drive.google.com/uc?export=view&id=14S1RDHXo9Apqt_wIleaPCca28TdkmKR4" alt="nlw-world-cup-2022-img-top" width="100%" border="0" />
</h1>


### MOBILE
- <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> — A JavaScript library for building user interfaces
- <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> — Learn once, write anywhere. Create native apps for Android and iOS using React.

-   [ReactJS](https://reactjs.org/)
-   [React Native](https://facebook.github.io/react-native/)



## Demonstration

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1v79Vut2W8jmzyGHYmYKrmX9-cTKtx1U4" alt="nlw-world-cup-2022-ignite-img-mobile" width="100%" border="0" />
</div>


## Install

Postgres - Banco de dados principal
Eu usei direto sem ter dar start no Docker, mesmo assim deixo aqui o comando para quem for usar com Docker.  
`docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

Redis - Banco de dados para filas  
`docker run --name redis -p 6379:6379 -d -t redis:alpine`

Sequelize  
`yarn sequelize db:migrate`  

## **Backend**
Instalação do node_modules
`yarn`

`yarn dev`

`yarn queue`

## **Frontend**
Instalação do node_modules
`yarn`

`yarn start`

## **Mobile(android)**
Instalação do node_modules
`yarn`

Para iniciar o Bundle
`yarn start`

Para rodar a aplicação
`yarn dev`


## License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.


## Author
<img src="https://avatars1.githubusercontent.com/u/6500430?s=460&u=42d7e22fa1c77b061505fe1cfc3fcaa3e2a4d1e5&v=4" width="80" alt="linkedin.com/in/junior-dev" />
:guitar: Humberto JR :guitar:
<br />

LinkedIn: https://www.linkedin.com/in/junior-dev <br />
GitLab: https://gitlab.com/hjrdev <br />
Email: astronomi@gmail.com <br />
<br />

Made with :heart: and lots of animation by :guitar: Humberto JR :guitar:

##
:hand:  read more below  :hand:
##

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

