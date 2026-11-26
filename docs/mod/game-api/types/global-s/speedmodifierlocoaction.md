---
title: "SpeedModifierLocoAction"
description: "Locomotion modifier action asset that scales the player's movement speed while active, for example in deep water."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpeedModifierLocoAction

A **class** in `Root.Township`, the global namespace.

Locomotion modifier action asset that scales the player's movement speed while active, for example in deep water.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`LocomotionModifierAction`](/mod/game-api/types/global-i-l/locomotionmodifieraction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpeedModifierLocoAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-speedmodifier" /><code>{"private float speedModifier"}</code> | <span className="api-desc">Speed multiplier applied while active.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"override void Begin("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Sets the player's `EnvironmentSpeedModifier` to `speedModifier`.</span> |
| <Link id="m-finish" /><code>{"override void Finish("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Resets `EnvironmentSpeedModifier` to 1.</span> |
