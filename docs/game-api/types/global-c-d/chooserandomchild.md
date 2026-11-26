---
title: "ChooseRandomChild"
description: "Editor tool: turns on one weighted random child of this object (or none), using RandomChildWeight for weights."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChooseRandomChild

A **class** in `Root.Township`, no namespace.

Editor tool: turns on one weighted random child of this object (or none), using `RandomChildWeight` for weights.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChooseRandomChild()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnrandomize" /><code>{"private bool btnRandomize"}</code> | Inspector button that randomises all nested instances. |
| <Link id="m-noneweight" /><code>{"private float noneWeight"}</code> | Weight for choosing no child at all. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | When the button is pressed, randomises this and every nested `ChooseRandomChild`. |
| <Link id="m-randomizechildren" /><code>{"private void RandomizeChildren()"}</code> | Picks one child by weight (default 1) and activates only it; `noneWeight` is the chance to pick none. |

</details>
