---
title: "RaiseHandStructure"
description: "Tutorial input check asset: in position when the hands holding a pickup are raised a set height above the player's head."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaiseHandStructure

A **class** in `Root.Township`, the global namespace.

Tutorial input check asset: in position when the hands holding a pickup are raised a set height above the player's head. Made from the Create menu.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`HandPositionStructure`](/mod/game-api/types/global-e-h/handpositionstructure)
- **Derived types** [`RaiseHandStructure.Create`](/mod/game-api/types/global-q-r/raisehandstructure-create)
- **Nested types** [`Create`](/mod/game-api/types/global-q-r/raisehandstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaiseHandStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minheighthandtohead" /><code>{"private float minHeightHandToHead"}</code> | How far above the head the hands must be. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isinpositioninternal" /><code>{"protected override bool IsInPositionInternal("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | True when the average height of the hands holding the pickup is more than `minHeightHandToHead` above the head. |
