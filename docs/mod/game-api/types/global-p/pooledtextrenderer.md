---
title: "PooledTextRenderer"
description: "A pooled object that shows text through a TextRenderer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledTextRenderer

A **class** in `Root.Township`, the global namespace.

A pooled object that shows text through a `TextRenderer`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledTextRenderer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">The renderer that shows the text.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-text" /><code>{"string Text { get; set; }"}</code> | <span className="api-desc">The text shown.</span> |
