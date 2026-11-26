---
title: "StencilBufferNumberPool"
description: "Hands out unique stencil buffer values (1 to 250) so effects don't share a stencil number."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StencilBufferNumberPool

A **static class** in `Root.Township`, the global namespace.

Hands out unique stencil buffer values (1 to 250) so effects don't share a stencil number.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastused" /><code>{"private static int lastUsed"}</code> | <span className="api-desc">Index the next search starts from.</span> |
| <Link id="m-used" /><code>{"private static bool[] used"}</code> | <span className="api-desc">Which stencil slots are taken.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getstencilbuffernumber" /><code>{"static int GetStencilBufferNumber()"}</code> | <span className="api-desc">Returns a free stencil number and marks it used. Returns 1 if all are taken.</span> |
| <Link id="m-releasestencilbuffernumber" /><code>{"static void ReleaseStencilBufferNumber(int stencilNumber)"}</code> | <span className="api-desc">Marks a stencil number as free again.</span> |
