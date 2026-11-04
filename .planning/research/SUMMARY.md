# Research Summary: Sea Salt Artesanato

> Domain: Static Artisan Vitrine / Mobile-First Crochet Catalog
> Date: 2026-11-04

## Executive Summary

A pesquisa confirma a viabilidade total da arquitetura estática leve (HTML/CSS/JS puro) para a Sea Salt Artesanato. Para um catálogo de 7 peças com canal de venda 100% no WhatsApp:
- Otimização de imagem (WebP + fallback JPEG) e lazy loading garantem nota alta no Core Web Vitals mobile.
- O formato wa.me com encoding correto assegura conversão sem atrito.
- A paleta artesanal (bege, terracota, verde-sálvia) é equilibrada com contraste acessível para o texto (marrom escuro `#3b2f2f`).

## Roadmap Implications (Coarse: 3 Fases)

1. **Fase 1: Estrutura, Otimização de Imagens & Design System**
   - Conversão das 7 imagens para WebP e definição das dimensões
   - Configuração de tokens CSS (cores, tipografia, reset)
   - Layout base do catálogo e seções (Hero, Galeria, Sobre a Artesã, Contato, Rodapé)

2. **Fase 2: Componentes, Integrações & Interatividade**
   - Cards de produto com descrições, imagens `<picture>` e botão "Pedir pelo WhatsApp"
   - Botão flutuante de WhatsApp com link codificado
   - SEO completo (Open Graph, meta tags, schema LocalBusiness)
   - Placeholder estruturado "Sobre a artesã"

3. **Fase 3: Verificação Mobile, Acessibilidade & Deploy Readiness**
   - Teste de contraste WCAG AA e áreas de toque (min 48px)
   - Teste de responsividade em viewports mobile (320px, 375px, 414px)
   - Configuração para deploy estático (Netlify / GitHub Pages)
