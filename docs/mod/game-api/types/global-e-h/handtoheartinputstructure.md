---
title: "HandToHeartInputStructure"
description: "Skill input asset that is active when a hand holding the item is close to the player's heart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandToHeartInputStructure

A **class** in `Root.Township`, the global namespace.

Skill input asset that is active when a hand holding the item is close to the player's heart.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`HandPositionStructure`](/mod/game-api/types/global-e-h/handpositionstructure)
- **Derived types** [`HandToHeartInputStructure.Create`](/mod/game-api/types/global-e-h/handtoheartinputstructure-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/handtoheartinputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandToHeartInputStructure()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-frombodypivottoheart" /><code>{"private Vector3 fromBodyPivotToHeart"}</code> | <span className="api-desc">Offset from the body target to the heart, in the body's rotation.</span> |
| <Link id="m-maxdistancetoheartsquared" /><code>{"private float maxDistanceToHeartSquared"}</code> | <span className="api-desc">Squared distance from the heart that counts as in position.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isinpositioninternal" /><code>{"protected override bool IsInPositionInternal("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">True when the nearest holding hand is within range of the heart point on the body target.</span> |
