---
title: "Book.FlairPositions"
description: "Private: the attach points on a Book model for cover decorations (edges, spine, emblem), plus the cover renderers and title text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Book.FlairPositions

A **private class** in `Root.Township`, `Alta.Pages`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: the attach points on a `Book` model for cover decorations (edges, spine, emblem), plus the cover renderers and title text.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`Book`](/mod/game-api/types/alta-items/book)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlairPositions()"}</code> | <span className="api-desc">Creates a `Book.FlairPositions` with default values.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbottomedge" /><code>{"private Transform backBottomEdge"}</code> | <span className="api-desc">Backing field for `BackBottomEdge`.</span> |
| <Link id="m-backbottomspine" /><code>{"private Transform backBottomSpine"}</code> | <span className="api-desc">Backing field for `BackBottomSpine`.</span> |
| <Link id="m-backmiddleedge" /><code>{"private Transform backMiddleEdge"}</code> | <span className="api-desc">Backing field for `BackMiddleEdge`.</span> |
| <Link id="m-backmiddlespine" /><code>{"private Transform backMiddleSpine"}</code> | <span className="api-desc">Backing field for `BackMiddleSpine`.</span> |
| <Link id="m-backtopedge" /><code>{"private Transform backTopEdge"}</code> | <span className="api-desc">Backing field for `BackTopEdge`.</span> |
| <Link id="m-backtopspine" /><code>{"private Transform backTopSpine"}</code> | <span className="api-desc">Backing field for `BackTopSpine`.</span> |
| <Link id="m-bookrenderers" /><code>{"private Renderer[] bookRenderers"}</code> | <span className="api-desc">Backing field for `BookRenderers`.</span> |
| <Link id="m-emblem" /><code>{"private Transform emblem"}</code> | <span className="api-desc">Backing field for `Emblem`.</span> |
| <Link id="m-emblemframe" /><code>{"private Transform emblemFrame"}</code> | <span className="api-desc">Backing field for `EmblemFrame`.</span> |
| <Link id="m-frontbottomedge" /><code>{"private Transform frontBottomEdge"}</code> | <span className="api-desc">Backing field for `FrontBottomEdge`.</span> |
| <Link id="m-frontbottomspine" /><code>{"private Transform frontBottomSpine"}</code> | <span className="api-desc">Backing field for `FrontBottomSpine`.</span> |
| <Link id="m-frontmiddleedge" /><code>{"private Transform frontMiddleEdge"}</code> | <span className="api-desc">Backing field for `FrontMiddleEdge`.</span> |
| <Link id="m-frontmiddlespine" /><code>{"private Transform frontMiddleSpine"}</code> | <span className="api-desc">Backing field for `FrontMiddleSpine`.</span> |
| <Link id="m-fronttopedge" /><code>{"private Transform frontTopEdge"}</code> | <span className="api-desc">Backing field for `FrontTopEdge`.</span> |
| <Link id="m-fronttopspine" /><code>{"private Transform frontTopSpine"}</code> | <span className="api-desc">Backing field for `FrontTopSpine`.</span> |
| <Link id="m-spinebottom" /><code>{"private Transform spineBottom"}</code> | <span className="api-desc">Backing field for `SpineBottom`.</span> |
| <Link id="m-spinemiddle" /><code>{"private Transform spineMiddle"}</code> | <span className="api-desc">Backing field for `SpineMiddle`.</span> |
| <Link id="m-spinetop" /><code>{"private Transform spineTop"}</code> | <span className="api-desc">Backing field for `SpineTop`.</span> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">Backing field for `TextRenderer`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backbottomedge-2" /><code>{"Transform BackBottomEdge { get; }"}</code> | <span className="api-desc">Attach point for flair on the back cover's bottom edge.</span> |
| <Link id="m-backbottomspine-2" /><code>{"Transform BackBottomSpine { get; }"}</code> | <span className="api-desc">Attach point for flair on the back cover's bottom spine side.</span> |
| <Link id="m-backmiddleedge-2" /><code>{"Transform BackMiddleEdge { get; }"}</code> | <span className="api-desc">Attach point for flair on the back cover's middle edge.</span> |
| <Link id="m-backmiddlespine-2" /><code>{"Transform BackMiddleSpine { get; }"}</code> | <span className="api-desc">Attach point for flair on the back cover's middle spine side.</span> |
| <Link id="m-backtopedge-2" /><code>{"Transform BackTopEdge { get; }"}</code> | <span className="api-desc">Attach point for flair on the back cover's top edge.</span> |
| <Link id="m-backtopspine-2" /><code>{"Transform BackTopSpine { get; }"}</code> | <span className="api-desc">Attach point for flair on the back cover's top spine side.</span> |
| <Link id="m-bookrenderers-2" /><code>{"Renderer[] BookRenderers { get; }"}</code> | <span className="api-desc">The book's own renderers; they get the book material.</span> |
| <Link id="m-emblem-2" /><code>{"Transform Emblem { get; }"}</code> | <span className="api-desc">Attach point for the cover emblem.</span> |
| <Link id="m-emblemframe-2" /><code>{"Transform EmblemFrame { get; }"}</code> | <span className="api-desc">Attach point for the emblem's frame.</span> |
| <Link id="m-frontbottomedge-2" /><code>{"Transform FrontBottomEdge { get; }"}</code> | <span className="api-desc">Attach point for flair on the front cover's bottom edge.</span> |
| <Link id="m-frontbottomspine-2" /><code>{"Transform FrontBottomSpine { get; }"}</code> | <span className="api-desc">Attach point for flair on the front cover's bottom spine side.</span> |
| <Link id="m-frontmiddleedge-2" /><code>{"Transform FrontMiddleEdge { get; }"}</code> | <span className="api-desc">Attach point for flair on the front cover's middle edge.</span> |
| <Link id="m-frontmiddlespine-2" /><code>{"Transform FrontMiddleSpine { get; }"}</code> | <span className="api-desc">Attach point for flair on the front cover's middle spine side.</span> |
| <Link id="m-fronttopedge-2" /><code>{"Transform FrontTopEdge { get; }"}</code> | <span className="api-desc">Attach point for flair on the front cover's top edge.</span> |
| <Link id="m-fronttopspine-2" /><code>{"Transform FrontTopSpine { get; }"}</code> | <span className="api-desc">Attach point for flair on the front cover's top spine side.</span> |
| <Link id="m-spinebottom-2" /><code>{"Transform SpineBottom { get; }"}</code> | <span className="api-desc">Attach point for flair at the bottom of the spine.</span> |
| <Link id="m-spinemiddle-2" /><code>{"Transform SpineMiddle { get; }"}</code> | <span className="api-desc">Attach point for flair in the middle of the spine.</span> |
| <Link id="m-spinetop-2" /><code>{"Transform SpineTop { get; }"}</code> | <span className="api-desc">Attach point for flair at the top of the spine.</span> |
| <Link id="m-textrenderer-2" /><code><Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" { get; }"}</code> | <span className="api-desc">Text renderer for the book's letter.</span> |

## Used in

Members of other types that take, return or hold a `FlairPositions`:

<div className="api-used-in">

[`Book.flairPositions`](/mod/game-api/types/alta-items/book#m-flairpositions).

</div>
