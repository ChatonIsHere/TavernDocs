---
title: "HandToHeartInputStructure"
description: "Skill input asset that is active when a hand holding the item is close to the player's heart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandToHeartInputStructure

A **class** in `Root.Township`, no namespace.

Skill input asset that is active when a hand holding the item is close to the player's heart.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`HandPositionStructure`](/game-api/types/global-e-h/handpositionstructure)
- **Derived types** [`HandToHeartInputStructure.Create`](/game-api/types/global-e-h/handtoheartinputstructure-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/handtoheartinputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandToHeartInputStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-frombodypivottoheart" /><code>{"private Vector3 fromBodyPivotToHeart"}</code> | Offset from the body target to the heart, in the body's rotation. |
| <Link id="m-maxdistancetoheartsquared" /><code>{"private float maxDistanceToHeartSquared"}</code> | Squared distance from the heart that counts as in position. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isinpositioninternal" /><code>{"protected override bool IsInPositionInternal("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | True when the nearest holding hand is within range of the heart point on the body target. |
