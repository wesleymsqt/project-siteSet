# Site.Set

![Project Banner](https://rocketseat-nextjs-fundamentals.vercel.app/og-image.jpg) 
> **Venda seus produtos como afiliado em um único lugar.**

O **Site.Set** é uma plataforma moderna desenvolvida com as tecnologias mais recentes do ecossistema React. Focado em alta performance, SEO otimizado e experiência de usuário fluida, o projeto serve como um hub central para afiliados gerenciarem e divulgarem seus produtos.

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando o que há de mais moderno no desenvolvimento web:

* **[Next.js 15](https://nextjs.org/)** - Framework React com App Router e Server Components.
* **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para um código mais seguro.
* **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária e responsiva.
* **[Contentlayer](https://contentlayer.dev/)** - Gestão de conteúdo (Blog) baseada em arquivos MDX.
* **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones leve e consistente.
* **[Shadcn UI](https://ui.shadcn.com/)** - Componentes de interface reutilizáveis e acessíveis.

## ✨ Funcionalidades

* **Blog Estático & Dinâmico:** Sistema de blog alimentado por Contentlayer com páginas geradas estaticamente para máxima velocidade.
* **SEO Avançado:**
    * Metadados dinâmicos para cada post e página.
    * Configuração completa de Open Graph para redes sociais.
* **UX Aprimorada:**
    * **Custom 404:** Página de "Não encontrado" estilizada e interativa.
    * **Error Boundaries:** Tratamento de erros elegante com opção de "Tentar novamente".
    * **Loading States:** Indicadores de carregamento animados e personalizados.
* **Compartilhamento Social:** Componente integrado para compartilhar posts facilmente.
* **Design Responsivo:** Layout adaptável para mobile, tablet e desktop.

## 📦 Instalação e Uso

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/site-set.git](https://github.com/seu-usuario/site-set.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    pnpm install
    # ou
    yarn install
    ```

3.  **Configure as variáveis de ambiente:**
    Renomeie o arquivo `.env.example` para `.env.local` e preencha as variáveis necessárias (se houver).

4.  **Execute o projeto:**
    ```bash
    npm run dev
    ```

5.  **Acesse:**
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📂 Estrutura do Projeto

* `/app`: Rotas e páginas do Next.js (App Router).
* `/components`: Componentes reutilizáveis (UI, botões, inputs).
* `/content`: Arquivos Markdown/MDX dos posts do blog.
* `/hooks`: Hooks personalizados (ex: `useShare`).
* `/templates`: Layouts de páginas para separar lógica de visualização.
* `/lib` ou `/utils`: Funções utilitárias.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💜 por Wesley Mesquita
