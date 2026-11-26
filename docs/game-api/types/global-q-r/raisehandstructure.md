---
title: "RaiseHandStructure"
description: "Tutorial input check asset: in position when the hands holding a pickup are raised a set height above the player's head."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaiseHandStructure

A **class** in `Root.Township`, no namespace.

Tutorial input check asset: in position when the hands holding a pickup are raised a set height above the player's head. Made from the Create menu.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`HandPositionStructure`](/game-api/types/global-e-h/handpositionstructure)
- **Derived types** [`RaiseHandStructure.Create`](/game-api/types/global-q-r/raisehandstructure-create)
- **Nested types** [`Create`](/game-api/types/global-q-r/raisehandstructure-create)

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
| <Link id="m-isinpositioninternal" /><code>{"protected override bool IsInPositionInternal("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | True when the average height of the hands holding the pickup is more than `minHeightHandToHead` above the head. |
