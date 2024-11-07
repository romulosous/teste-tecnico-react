This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook


## Folder Structure
This project follows the **Atomic Design** methodology for component organization, ensuring a scalable and maintainable architecture. Each component is categorized into atoms, organisms, templates, and pages to promote reusability and consistency across the application. Additionally, the **Next.js App Router** is used, taking advantage of the latest routing features.
- `app/`: Contains the main application files and routes using Next.js App Router.
- `components/`: Houses the UI components structured by Atomic Design. Each component includes:
  - A `style.ts` file, using `styled-components` for encapsulated styling.
  - A `.stories.js` or `.stories.tsx` file for Storybook, documenting and visually testing the component.
  - Subfolders by type:
    - `Atoms/`: Fundamental building blocks, like buttons, icons, and text elements.
    - `Molecules/`: Groups of atoms working together as small, reusable components.
    - `Organisms/`: Larger components composed of atoms and molecules, forming distinct sections.
    - `Templates/`: Component structures for specific page layouts, containing multiple organisms.
    - `Pages/`: High-level page components, each representing a route.
- `styles/`: Global and theme-based styles using Styled Components.
## Páginas do Blog
Este projeto inclui uma interface de blog com as seguintes páginas principais:
### 1. Home - Listagem de Blogs
A página Home exibe uma listagem de posts do blog, com cada post apresentando um título, uma breve descrição e um link para visualizar os detalhes. Os usuários podem navegar pela lista usando controles de paginação simples. Ao clicar no título ou na imagem de um post, o usuário é direcionado para a **página de Detalhes do Post**.
Na lateral, uma **sidebar** exibe todos os outros usuários do sistema. Ao clicar no nome de outro usuário na sidebar, o leitor é direcionado para a página de perfil desse usuário.
![Página de Listagem de Blogs](https://i.imgur.com/WY6dkyr.png) <!-- Substitua pelo caminho real da imagem -->
### 2. Detalhes do Post - Post e Comentários
Na **página de Detalhes do Post**, os usuários podem ler o conteúdo completo do post selecionado. Abaixo do post, há uma seção de comentários onde os usuários podem visualizar os comentários específicos daquele post, promovendo uma área de discussão interativa. Ao clicar no nome de um usuário nos comentários, o leitor é redirecionado para a **página de Perfil do Usuário**, onde mais detalhes sobre aquele usuário são exibidos.
![Página de Detalhes do Post](https://github.com/user-attachments/assets/1be346ad-e4d0-40db-a636-d94618eedb01)
### 3. Perfil do Usuário - Informações e Detalhes do Usuário
A **página de Perfil do Usuário** exibe os detalhes completos de um usuário específico, incluindo informações como nome, e-mail e endereço. Além disso, há uma listagem de todos os posts feitos por esse usuário, permitindo visualizar facilmente suas contribuições.
Na lateral, uma **sidebar** exibe todos os outros usuários do sistema. Ao clicar no nome de outro usuário na sidebar, o leitor é direcionado para a página de perfil desse usuário.
![Página de Perfil do Usuário](https://github.com/user-attachments/assets/5a223433-51b4-40ec-a347-623fcce3999c)
---

## Hospedagem

Este projeto está hospedado na **Vercel**, uma plataforma otimizada para aplicações Next.js. A Vercel permite o deploy rápido e fácil, além de gerenciamento contínuo e suporte para atualizações automáticas a cada novo commit na branch principal.

Você pode acessar a aplicação online através do link abaixo:

[Link para o Projeto Hospedado](https://teste-tecnico-react-cuwk.vercel.app/)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
