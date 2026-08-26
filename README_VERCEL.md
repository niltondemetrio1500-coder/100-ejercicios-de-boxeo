# Treinos de Boxe — exportação para GitHub e Vercel

Esta pasta é uma cópia portátil da landing page. Os assets usados pela página foram incluídos em `client/public/assets/` e os caminhos do `Home.tsx` foram convertidos de `/manus-storage/...` para `/assets/...`. O `index.html` na raiz é uma versão standalone para visualização direta; o código-fonte Vite fica em `client/index.html`. A cópia standalone incorpora os recursos para abrir localmente.

## Rodar localmente

O arquivo `client/index.html` é o ponto de entrada do código-fonte Vite/React e não deve ser aberto com duplo clique. Navegadores podem bloquear módulos JavaScript e assets quando a página usa `file://`, resultando em uma tela branca. Abra um terminal nesta pasta e execute:

```bash
pnpm install
pnpm dev
```

Depois, acesse o endereço local mostrado pelo Vite, normalmente `http://localhost:5173` ou `http://localhost:3000`.

## Subir no GitHub

Crie um repositório vazio no GitHub, extraia esta pasta e envie todo o conteúdo, incluindo `package.json`, `pnpm-lock.yaml`, `client/`, `server/`, `shared/`, `vite.config.ts` e `vercel.json`.

```bash
git init
git add .
git commit -m "Landing page Treinos de Boxe"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Hospedar na Vercel

Na Vercel, selecione **Add New Project**, importe o repositório e mantenha o preset Vite. O `vercel.json` já define `pnpm build` como comando de build e `dist/public` como diretório de saída. Não é necessário adicionar variáveis da Manus para os assets, porque as imagens estão locais.

Os links Hotmart e os scripts de Meta Pixel, UTMify e Clarity permanecem no projeto. Após conectar o domínio, valide os eventos e os checkouts no domínio final.

## Por que havia tela branca ao clicar no index

A tela branca ocorria porque o código Vite/React usa módulos e precisa encontrar o elemento `root` depois que o DOM é criado. O `index.html` da raiz agora é standalone e pode ser aberto diretamente com duplo clique. Para editar ou testar o código-fonte, use `pnpm dev` e acesse o endereço HTTP local. Para publicar, importe o repositório na Vercel, que executará o build e usará `dist/public`, conforme o `vercel.json`.

