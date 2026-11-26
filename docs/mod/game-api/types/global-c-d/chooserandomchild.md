---
title: "ChooseRandomChild"
description: "Editor tool: turns on one weighted random child of this object (or none), using RandomChildWeight for weights."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChooseRandomChild

A **class** in `Root.Township`, the global namespace.

Editor tool: turns on one weighted random child of this object (or none), using `RandomChildWeight` for weights.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChooseRandomChild()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnrandomize" /><code>{"private bool btnRandomize"}</code> | <span className="api-desc">Inspector button that randomises all nested instances.</span> |
| <Link id="m-noneweight" /><code>{"private float noneWeight"}</code> | <span className="api-desc">Weight for choosing no child at all.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">When the button is pressed, randomises this and every nested `ChooseRandomChild`.</span> |
| <Link id="m-randomizechildren" /><code>{"private void RandomizeChildren()"}</code> | <span className="api-desc">Picks one child by weight (default 1) and activates only it; `noneWeight` is the chance to pick none.</span> |

</details>
