# Componentes Adsterra para Vida de Pai (vidadepai.com.br)

Conjunto completo de componentes Astro reutilizáveis para os blocos de anúncios e monetização do **Adsterra**.

---

## 📦 Componentes Disponíveis

| Componente | Formato / Tipo | Descrição | Onde Utilizar |
| :--- | :--- | :--- | :--- |
| `<AdsterraBanner size="..." />` | Banners Iframe (6 tamanhos) | Renderiza qualquer tamanho de banner com isolamento e dimensões fixas (anti-CLS). | Topo, barra lateral, meio ou fim de artigos. |
| `<AdsterraResponsiveBanner />` | Banners Responsivos | Alterna automaticamente entre Desktop (ex: `728x90`) e Mobile (ex: `320x50`). | Topo de artigos ou rodapé. |
| `<AdsterraNative />` | Native Banner Async | Grid nativo de 4 recomendações com script assíncrono e container oficial. | Abaixo do conteúdo do artigo ou antes do rodapé. |
| `<AdsterraPopunder />` | Popunder JS Sync | Script de popunder com proteção contra disparos indesejados em desenvolvimento local. | `<head>` ou layout principal (`BaseHead.astro` / `BlogPost.astro`). |
| `<AdsterraSocialBar />` | SocialBar JS Sync | Widget flutuante de engajamento social e notificações. | Layout principal ou rodapé de páginas. |
| `<AdsterraSmartlink />` | Direct Link (Smartlink) | Botão, card de destaque ou link formatado com `rel="sponsored"`. | Botões de CTA, links recomendados ou caixas de destaque. |

---

## 📐 Tamanhos de Banner Suportados

- `'160x300'` — Vertical Médio / Half Banner
- `'160x600'` — Skyscraper / Arranha-céu vertical
- `'300x250'` — Retângulo Médio (alto rendimento)
- `'320x50'` — Mobile Leaderboard (smartphones)
- `'468x60'` — Banner horizontal clássico (tablets/conteúdo)
- `'728x90'` — Leaderboard Desktop

---

## 🚀 Exemplos de Uso

### 1. Banner Simples (Ex: 300x250 na Barra Lateral)

```astro
---
import { AdsterraBanner } from '../components/adsterra';
---

<!-- Barra lateral -->
<aside>
  <AdsterraBanner size="300x250" />
</aside>
```

### 2. Banner Responsivo (Desktop 728x90 + Mobile 320x50)

Evita que um banner de 728px quebre o layout no celular:

```astro
---
import { AdsterraResponsiveBanner } from '../components/adsterra';
---

<AdsterraResponsiveBanner desktopSize="728x90" mobileSize="320x50" />
```

### 3. Native Banner (Recomendação de Conteúdo)

```astro
---
import { AdsterraNative } from '../components/adsterra';
---

<AdsterraNative label="Conteúdo Patrocinado" />
```

### 4. Smartlink (Botão ou Card)

```astro
---
import { AdsterraSmartlink } from '../components/adsterra';
---

<!-- Como Botão de Ação -->
<AdsterraSmartlink variant="button" text="Conhecer Produtos Recomendados" />

<!-- Como Card Promocional -->
<AdsterraSmartlink
  variant="card"
  title="Ofertas Especiais para Pais"
  description="Descontos exclusivos em itens para bebês e cuidados diários."
/>
```

### 5. Popunder e SocialBar (Globais)

Coloque no layout ou `<head>` (ex: `src/components/BaseHead.astro` ou `src/layouts/BlogPost.astro`):

```astro
---
import { AdsterraPopunder, AdsterraSocialBar } from '../components/adsterra';
---

<!-- Ativa o Popunder do Adsterra -->
<AdsterraPopunder />

<!-- Ativa a barra de notificações SocialBar -->
<AdsterraSocialBar />
```

---

## 🛡️ Proteção do Modo de Desenvolvimento

Por padrão, os scripts reais de anúncios **não são carregados durante o `npm run dev`** (localhost), exibindo um placeholder elegante que mostra o tamanho e o ID da tag.

Isso previne:
1. Impressões e cliques falsos no Adsterra vindos de `localhost` (o que pode penalizar sua conta).
2. Abertura acidental de abas com o Popunder enquanto você programa.
3. Degradação de desempenho durante a edição.

Para forçar a exibição real dos anúncios em desenvolvimento, basta passar a prop `showInDev={true}`:

```astro
<AdsterraBanner size="300x250" showInDev={true} />
```
