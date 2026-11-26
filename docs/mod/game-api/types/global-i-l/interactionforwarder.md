---
title: "InteractionForwarder"
description: "An interactable that forwards its interactions to another interactable, for example a separate grab collider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractionForwarder

A **class** in `Root.Township`, the global namespace.

An interactable that forwards its interactions to another interactable, for example a separate grab collider.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`Interactable`](/mod/game-api/types/global-i-l/interactable)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractionForwarder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" target"}</code> | The interactable that receives forwarded interactions. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Adds `target` to `ForwardTo`. |

</details>
