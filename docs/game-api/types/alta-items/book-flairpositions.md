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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`Book`](/game-api/types/alta-items/book)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlairPositions()"}</code> | Creates a `Book.FlairPositions` with default values. |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbottomedge" /><code>{"private Transform backBottomEdge"}</code> | Backing field for `BackBottomEdge`. |
| <Link id="m-backbottomspine" /><code>{"private Transform backBottomSpine"}</code> | Backing field for `BackBottomSpine`. |
| <Link id="m-backmiddleedge" /><code>{"private Transform backMiddleEdge"}</code> | Backing field for `BackMiddleEdge`. |
| <Link id="m-backmiddlespine" /><code>{"private Transform backMiddleSpine"}</code> | Backing field for `BackMiddleSpine`. |
| <Link id="m-backtopedge" /><code>{"private Transform backTopEdge"}</code> | Backing field for `BackTopEdge`. |
| <Link id="m-backtopspine" /><code>{"private Transform backTopSpine"}</code> | Backing field for `BackTopSpine`. |
| <Link id="m-bookrenderers" /><code>{"private Renderer[] bookRenderers"}</code> | Backing field for `BookRenderers`. |
| <Link id="m-emblem" /><code>{"private Transform emblem"}</code> | Backing field for `Emblem`. |
| <Link id="m-emblemframe" /><code>{"private Transform emblemFrame"}</code> | Backing field for `EmblemFrame`. |
| <Link id="m-frontbottomedge" /><code>{"private Transform frontBottomEdge"}</code> | Backing field for `FrontBottomEdge`. |
| <Link id="m-frontbottomspine" /><code>{"private Transform frontBottomSpine"}</code> | Backing field for `FrontBottomSpine`. |
| <Link id="m-frontmiddleedge" /><code>{"private Transform frontMiddleEdge"}</code> | Backing field for `FrontMiddleEdge`. |
| <Link id="m-frontmiddlespine" /><code>{"private Transform frontMiddleSpine"}</code> | Backing field for `FrontMiddleSpine`. |
| <Link id="m-fronttopedge" /><code>{"private Transform frontTopEdge"}</code> | Backing field for `FrontTopEdge`. |
| <Link id="m-fronttopspine" /><code>{"private Transform frontTopSpine"}</code> | Backing field for `FrontTopSpine`. |
| <Link id="m-spinebottom" /><code>{"private Transform spineBottom"}</code> | Backing field for `SpineBottom`. |
| <Link id="m-spinemiddle" /><code>{"private Transform spineMiddle"}</code> | Backing field for `SpineMiddle`. |
| <Link id="m-spinetop" /><code>{"private Transform spineTop"}</code> | Backing field for `SpineTop`. |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | Backing field for `TextRenderer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backbottomedge-2" /><code>{"Transform BackBottomEdge { get; }"}</code> | Attach point for flair on the back cover's bottom edge. |
| <Link id="m-backbottomspine-2" /><code>{"Transform BackBottomSpine { get; }"}</code> | Attach point for flair on the back cover's bottom spine side. |
| <Link id="m-backmiddleedge-2" /><code>{"Transform BackMiddleEdge { get; }"}</code> | Attach point for flair on the back cover's middle edge. |
| <Link id="m-backmiddlespine-2" /><code>{"Transform BackMiddleSpine { get; }"}</code> | Attach point for flair on the back cover's middle spine side. |
| <Link id="m-backtopedge-2" /><code>{"Transform BackTopEdge { get; }"}</code> | Attach point for flair on the back cover's top edge. |
| <Link id="m-backtopspine-2" /><code>{"Transform BackTopSpine { get; }"}</code> | Attach point for flair on the back cover's top spine side. |
| <Link id="m-bookrenderers-2" /><code>{"Renderer[] BookRenderers { get; }"}</code> | The book's own renderers; they get the book material. |
| <Link id="m-emblem-2" /><code>{"Transform Emblem { get; }"}</code> | Attach point for the cover emblem. |
| <Link id="m-emblemframe-2" /><code>{"Transform EmblemFrame { get; }"}</code> | Attach point for the emblem's frame. |
| <Link id="m-frontbottomedge-2" /><code>{"Transform FrontBottomEdge { get; }"}</code> | Attach point for flair on the front cover's bottom edge. |
| <Link id="m-frontbottomspine-2" /><code>{"Transform FrontBottomSpine { get; }"}</code> | Attach point for flair on the front cover's bottom spine side. |
| <Link id="m-frontmiddleedge-2" /><code>{"Transform FrontMiddleEdge { get; }"}</code> | Attach point for flair on the front cover's middle edge. |
| <Link id="m-frontmiddlespine-2" /><code>{"Transform FrontMiddleSpine { get; }"}</code> | Attach point for flair on the front cover's middle spine side. |
| <Link id="m-fronttopedge-2" /><code>{"Transform FrontTopEdge { get; }"}</code> | Attach point for flair on the front cover's top edge. |
| <Link id="m-fronttopspine-2" /><code>{"Transform FrontTopSpine { get; }"}</code> | Attach point for flair on the front cover's top spine side. |
| <Link id="m-spinebottom-2" /><code>{"Transform SpineBottom { get; }"}</code> | Attach point for flair at the bottom of the spine. |
| <Link id="m-spinemiddle-2" /><code>{"Transform SpineMiddle { get; }"}</code> | Attach point for flair in the middle of the spine. |
| <Link id="m-spinetop-2" /><code>{"Transform SpineTop { get; }"}</code> | Attach point for flair at the top of the spine. |
| <Link id="m-textrenderer-2" /><code><Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" { get; }"}</code> | Text renderer for the book's letter. |

## Used in

Members of other types that take, return or hold a `FlairPositions`:

[`Book.flairPositions`](/game-api/types/alta-items/book#m-flairpositions).
