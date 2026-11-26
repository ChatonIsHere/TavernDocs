---
title: "SpeedModifierLocoAction"
description: "Locomotion modifier action asset that scales the player's movement speed while active, for example in deep water."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpeedModifierLocoAction

A **class** in `Root.Township`, no namespace.

Locomotion modifier action asset that scales the player's movement speed while active, for example in deep water.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`LocomotionModifierAction`](/game-api/types/global-i-l/locomotionmodifieraction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpeedModifierLocoAction()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-speedmodifier" /><code>{"private float speedModifier"}</code> | Speed multiplier applied while active. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"override void Begin("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Sets the player's `EnvironmentSpeedModifier` to `speedModifier`. |
| <Link id="m-finish" /><code>{"override void Finish("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Resets `EnvironmentSpeedModifier` to 1. |
