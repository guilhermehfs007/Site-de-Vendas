# Sea Salt Artesanato — Site Vitrine

## What This Is

Site vitrine (catálogo) de página única para **Sea Salt Artesanato**, exibindo peças de crochê feitas à mão. O visitante navega pela galeria, se interessa por uma peça e contata a artesã diretamente pelo WhatsApp para fechar a compra. Sem carrinho nem pagamento online na v1.

## Core Value

O cliente vê a peça, se encanta, e chama a artesã no WhatsApp em menos de dois cliques.

## Business Context

- **Customer**: Consumidores interessados em artesanato, moda e produtos feitos à mão — acesso majoritariamente mobile
- **Revenue model**: Venda direta via WhatsApp; site é vitrine de geração de leads
- **Success metric**: Número de cliques no botão "Pedir pelo WhatsApp" por peça
- **Strategy notes**: Deploy gratuito (GitHub Pages, Netlify ou Vercel); sem custo de infraestrutura

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Página única com seções: Hero/Topo, Galeria de Produtos, Sobre a Artesã, Contato
- [ ] Galeria com as 7 peças (bolsa-vermelha, bolsinha, camisa, case-de-notebook, regata-verde, short-vermelho-e-branco, supla) — nome e descrição curta gerados a partir da foto/nome do arquivo
- [ ] Botão "Pedir pelo WhatsApp" em cada peça com mensagem pré-preenchida citando o nome da peça (link wa.me)
- [ ] Exibir "Consulte valores" no lugar do preço
- [ ] Contatos visíveis no topo, em seção própria e no rodapé: WhatsApp +55 12 99781-7407, Instagram @_sea_salt_artesanato, e-mail monteiro.graziele@gmail.com, cidade Ribeirão Preto-SP
- [ ] Botão flutuante de WhatsApp com mensagem genérica: "Olá! Vi o site da Sea Salt Artesanato e quero saber mais 😊"
- [ ] Mobile-first, design responsivo
- [ ] Visual acolhedor e artesanal — paleta: bege, terracota, verde-sálvia
- [ ] Tipografia: Playfair Display (títulos) + Lato (corpo), via Google Fonts
- [ ] HTML/CSS/JS puro, sem backend
- [ ] Imagens em WebP com lazy loading
- [ ] SEO básico (meta title, description, og:image)
- [ ] Seção "Sobre a Artesã" com placeholder `[inserir texto aqui]`
- [ ] Pronto para deploy gratuito (GitHub Pages, Netlify ou Vercel)

### Out of Scope

- Carrinho de compras — fora do escopo da v1; venda direta pelo WhatsApp
- Pagamento online — fora do escopo da v1
- Login / painel administrativo — fora do escopo da v1
- Backend / banco de dados — stack é HTML/CSS/JS puro

## Context

- **Público-alvo**: Consumidores mobile-first (maioria acessa pelo celular)
- **Artesã**: Sea Salt Artesanato, Ribeirão Preto-SP
- **Fotos disponíveis**: 7 imagens JPG na pasta `/imagem` — serão convertidas para WebP
- **Stack**: HTML5 + CSS3 + JS vanilla; Google Fonts para tipografia
- **Deploy**: GitHub Pages, Netlify ou Vercel (gratuito, sem servidor)
- **Paleta visual**: bege (#f5efe6), terracota (#c47b55), verde-sálvia (#7a9e7e), off-white (#faf7f2)
- **Contato principal**: WhatsApp +55 12 99781-7407 (wa.me/5512997817407)

## Constraints

- **Tech stack**: HTML/CSS/JS puro — sem frameworks, sem build tools, sem backend
- **Imagens**: Usar as fotos da pasta `/imagem`; gerar nomes e descrições das peças a partir dos arquivos
- **Deploy**: Deve funcionar em hosting estático gratuito
- **Preço**: Não exibir preço — mostrar "Consulte valores" com CTA para WhatsApp
- **Performance**: Mobile-first; lazy loading obrigatório para imagens

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Página única (SPA-like sem framework) | Briefing define uma única página com seções; reduz complexidade de deploy | — Pending |
| WhatsApp como único canal de venda na v1 | Elimina backend, pagamento e complexidade; valida demanda antes de investir | — Pending |
| Playfair Display + Lato | Combina sofisticação artesanal (serif) com legibilidade (sans-serif); via Google Fonts | — Pending |
| WebP + lazy loading | Mobile-first exige performance; imagens são o conteúdo central | — Pending |
| "Sobre a Artesã" com placeholder | Usuária prefere revisar o texto antes de publicar | — Pending |

## Evolution

Este documento evolui a cada transição de fase e marco de milestone.

**Após cada transição de fase** (via `/gsd-transition`):
1. Requisitos invalidados? → Mover para Out of Scope com razão
2. Requisitos validados? → Mover para Validated com referência de fase
3. Novos requisitos emergidos? → Adicionar em Active
4. Decisões a registrar? → Adicionar em Key Decisions
5. "What This Is" ainda preciso? → Atualizar se houver desvio

**Após cada milestone** (via `/gsd-complete-milestone`):
1. Revisão completa de todas as seções
2. Core Value check — ainda a prioridade certa?
3. Auditoria de Out of Scope — razões ainda válidas?
4. Atualizar Context com o estado atual

---
*Last updated: 2026-11-04 após inicialização*
