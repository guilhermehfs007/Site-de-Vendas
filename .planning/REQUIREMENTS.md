# Requirements: Sea Salt Artesanato

**Defined:** 2026-11-04  
**Core Value:** O cliente vê a peça, se encanta, e chama a artesã no WhatsApp em menos de dois cliques.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Catalog & Products (CAT)

- [x] **CAT-01**: Galeria exibe as 7 peças da pasta `/imagem` (bolsa-vermelha, bolsinha, camisa, case-de-notebook, regata-verde, short-vermelho-e-branco, supla)
- [x] **CAT-02**: Cada card de produto possui nome e descrição curta gerados e adequados ao artesanato em crochê
- [x] **CAT-03**: Cada produto exibe "Consulte valores" claramente (sem preço numérico fixo)
- [x] **CAT-04**: Layout em grid responsivo para produtos (1-2 colunas no mobile, 3 colunas em telas maiores)

### WhatsApp & Contacts (CTA)

- [ ] **CTA-01**: Cada card possui botão "Pedir pelo WhatsApp" com link direto `wa.me/5512997817407` e mensagem pré-preenchida citando o nome da respectiva peça
- [ ] **CTA-02**: Botão flutuante fixo no canto inferior com mensagem genérica: "Olá! Vi o site da Sea Salt Artesanato e quero saber mais 😊"
- [ ] **CTA-03**: Informações de contato completas (WhatsApp +55 12 99781-7407, Instagram @_sea_salt_artesanato, e-mail monteiro.graziele@gmail.com, Ribeirão Preto-SP) exibidas no topo, seção de contato e rodapé

### Visual & Layout (VIS)

- [x] **VIS-01**: Página única mobile-first com fluxo: Topo/Hero, Galeria, Sobre a Artesã, Contato e Rodapé
- [x] **VIS-02**: Paleta acolhedora e artesanal com variáveis CSS (bege `#f5efe6`, terracota `#c47b55`, verde-sálvia `#7a9e7e`, off-white `#faf7f2`, texto `#3b2f2f`)
- [x] **VIS-03**: Tipografia com Google Fonts: Playfair Display nos títulos e Lato no corpo
- [ ] **VIS-04**: Seção "Sobre a Artesã" estruturada contendo o placeholder `[inserir texto aqui]` e foto/espaço representativo

### Performance, Acessibilidade & SEO (PERF)

- [x] **PERF-01**: Imagens otimizadas em formato WebP com fallback JPEG (`<picture>`) e atributos `width`/`height` explícitos
- [ ] **PERF-02**: Lazy loading nativo (`loading="lazy"`) em imagens abaixo da dobra e `fetchpriority="high"` na imagem hero
- [ ] **PERF-03**: Meta tags de SEO completas (`<title>`, `<meta description>`, Open Graph para preview no WhatsApp/Instagram)
- [ ] **PERF-04**: Alvos de toque (tap targets) mínimos de 48px e contraste acessível (WCAG AA) em botões e textos
- [ ] **PERF-05**: Código estático puro (HTML5 + CSS3 + Vanilla JS) pronto para deploy gratuito (Netlify / GitHub Pages)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### E-commerce & Store

- **STORE-01**: Carrinho de compras no próprio site
- **STORE-02**: Checkout e pagamento online integrado (Pix / Cartão)
- **STORE-03**: Painel administrativo para cadastro e edição de peças e preços
- **STORE-04**: Filtro por categorias de produtos (bolsas, vestuário, mesa posta)

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Carrinho de compras e checkout online | Venda v1 é 100% direta e consultiva via WhatsApp |
| Backend / Banco de dados | Site é vitrine estática pura (zero custo de infra) |
| Login / Painel administrativo | Peças estáticas no HTML; atualização manual de código |
| Feed ao vivo do Instagram via widget | Widgets adicionam lentidão, scripts de terceiros e quebram com limites de visualização |

## Traceability

Which phases cover which requirements.

| Requirement | Phase | Status |
|-------------|-------|--------|
| CAT-01 | Phase 1 | Complete |
| CAT-02 | Phase 1 | Complete |
| CAT-03 | Phase 1 | Complete |
| CAT-04 | Phase 1 | Complete |
| VIS-01 | Phase 1 | Complete |
| VIS-02 | Phase 1 | Complete |
| VIS-03 | Phase 1 | Complete |
| VIS-04 | Phase 2 | Pending |
| CTA-01 | Phase 2 | Pending |
| CTA-02 | Phase 2 | Pending |
| CTA-03 | Phase 2 | Pending |
| PERF-01 | Phase 1 | Complete |
| PERF-02 | Phase 2 | Pending |
| PERF-03 | Phase 2 | Pending |
| PERF-04 | Phase 3 | Pending |
| PERF-05 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 16 total
- Mapped to phases: 16
- Unmapped: 0 ✓

---
*Requirements defined: 2026-11-04*
*Last updated: 2026-11-04 after initial definition*
