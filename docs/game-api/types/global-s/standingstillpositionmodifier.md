---
title: "StandingStillPositionModifier"
description: "Hand position input modifier asset for skills that only counts the hand as in position while the player is standing still."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StandingStillPositionModifier

A **class** in `Root.Township`, no namespace.

Hand position input modifier asset for skills that only counts the hand as in position while the player is standing still.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`HandPositionInputModifier`](/game-api/types/global-e-h/handpositioninputmodifier)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StandingStillPositionModifier()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxvelocitysquared" /><code>{"private float maxVelocitySquared"}</code> | Highest squared movement speed still treated as standing still. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyisinposition" /><code>{"override void ModifyIsInPosition("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, ref bool isInPosition)"}</code> | Clears `isInPosition` if the player's smooth locomotion speed is above the limit. |
