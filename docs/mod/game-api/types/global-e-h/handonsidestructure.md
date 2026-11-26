---
title: "HandOnSideStructure"
description: "Skill input asset that is active when the hands holding the item are level with the head and out to the side or behind it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandOnSideStructure

A **class** in `Root.Township`, the global namespace.

Skill input asset that is active when the hands holding the item are level with the head and out to the side or behind it.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`HandPositionStructure`](/mod/game-api/types/global-e-h/handpositionstructure)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandOnSideStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxheightdifferencefromhead" /><code>{"private float maxHeightDifferenceFromHead"}</code> | Largest vertical gap allowed between the hands and the head. |
| <Link id="m-minanglefromforward" /><code>{"private float minAngleFromForward"}</code> | Dot product limit against the head's flat forward; the hands' direction must be below it. |
| <Link id="m-minhorizontaldistancefromhead" /><code>{"private float minHorizontalDistanceFromHead"}</code> | Squared minimum horizontal distance between the hands and the head. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isinpositioninternal" /><code>{"protected override bool IsInPositionInternal("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | True when the average hand position is within the height limit, far enough from the head, and outside the forward angle. |
