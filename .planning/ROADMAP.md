# Roadmap: Sea Salt Artesanato

## Overview

Construção de um site vitrine de página única para o ateliê de crochê Sea Salt Artesanato. O roadmap abrange a estruturação semântica em HTML5/CSS3/Vanilla JS, otimização das 7 fotos em WebP com fallback, aplicação da identidade visual acolhedora em tons terrosos, links integrados ao WhatsApp com mensagens pré-formatadas, SEO básico e preparação para deploy gratuito.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [x] **Phase 1: Estrutura Base, Design System & Imagens** - Setup de arquivos, tokens CSS, conversão WebP e grid de produtos
- [x] **Phase 2: Conteúdo, Interatividade & WhatsApp** - Botões wa.me, CTA flutuante, seção Sobre, SEO e metadados
- [ ] **Phase 3: Refinamento Mobile, Acessibilidade & Deploy** - Auditoria de contraste WCAG, alvos de toque, responsividade e deploy

## Phase Details

### Phase 1: Estrutura Base, Design System & Imagens
**Goal**: Estabelecer a base da página única, tokens de estilo (paleta artesanal e tipografia Google Fonts), conversão/otimização das 7 fotos em WebP e marcação semântica da galeria com nomes e descrições dos produtos.
**Depends on**: Nothing (first phase)
**Requirements**: CAT-01, CAT-02, CAT-03, CAT-04, VIS-01, VIS-02, VIS-03, PERF-01
**Success Criteria** (what must be TRUE):
  1. As 7 fotos da pasta `/imagem` estão convertidas para WebP com cópias JPEG de fallback e tags `<picture>` com dimensões explícitas.
  2. Tokens CSS definem a paleta (bege, terracota, verde-sálvia, off-white, marrom) e as fontes Playfair Display e Lato carregadas de forma não bloqueante.
  3. A estrutura da página única (`index.html`) e o grid responsivo de produtos renderizam harmoniosamente no celular e desktop.
  4. Cada card de produto possui nome e descrição concisa em português gerados para valorizar o crochê artesanal, exibindo "Consulte valores".
**Plans**: 2 plans

Plans:
- [x] 01-01: Otimização de imagens e design tokens CSS
- [x] 01-02: Estrutura HTML da página única e grid da galeria de produtos

### Phase 2: Conteúdo, Interatividade & WhatsApp
**Goal**: Integrar todas as ações diretas para WhatsApp (botões por produto com mensagem customizada e botão flutuante global), preencher contatos, seção "Sobre a Artesã" e meta tags SEO.
**Depends on**: Phase 1
**Requirements**: VIS-04, CTA-01, CTA-02, CTA-03, PERF-02, PERF-03
**Success Criteria** (what must be TRUE):
  1. Cada card de produto possui o botão "Pedir pelo WhatsApp" apontando para `wa.me/5512997817407` com o nome da peça devidamente codificado na URL.
  2. O botão flutuante de WhatsApp permanece fixo no canto inferior com mensagem genérica e não obstrui outros botões em telas pequenas.
  3. Os contatos (WhatsApp, Instagram, e-mail e cidade Ribeirão Preto) aparecem claramente no topo, na seção de contato e no rodapé.
  4. A seção "Sobre a Artesã" exibe o placeholder `[inserir texto aqui]` com layout pronto para revisão.
  5. Imagens abaixo da dobra utilizam `loading="lazy"` e a imagem hero utiliza `fetchpriority="high"`, com meta tags Open Graph e SEO presentes no `<head>`.
**Plans**: 2 plans

Plans:
- [x] 02-01: Integrações WhatsApp (por produto e botão flutuante) e contatos
- [x] 02-02: Seção Sobre a Artesã, SEO e meta tags sociais

### Phase 3: Refinamento Mobile, Acessibilidade & Deploy
**Goal**: Garantir conformidade com acessibilidade (contraste WCAG AA e área de toque mínima de 48px), testar a experiência mobile em diferentes viewports e preparar os arquivos para deploy estático gratuito.
**Depends on**: Phase 2
**Requirements**: PERF-04, PERF-05
**Success Criteria** (what must be TRUE):
  1. Todos os links e botões possuem área de toque mínima de 48x48px no mobile.
  2. As combinações de cores entre texto e fundo atendem aos critérios de contraste WCAG AA.
  3. O site carrega suavemente em viewports de 320px até desktop sem quebras de layout ou overflow horizontal.
  4. Projeto limpo, sem caminhos absolutos locais, pronto para hospedagem no Netlify ou GitHub Pages.
**Plans**: 1 plan

Plans:
- [ ] 03-01: Auditoria de responsividade, acessibilidade e preparação para deploy

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Estrutura Base, Design System & Imagens | 2/2 | Complete | 2026-11-04 |
| 2. Conteúdo, Interatividade & WhatsApp | 2/2 | Complete | 2026-11-04 |
| 3. Refinamento Mobile, Acessibilidade & Deploy | 0/1 | Not started | - |
