---
title: "SetStepSoundOverrideLocoAction"
description: "Locomotion modifier action asset that swaps the player's footstep sound while it is active, for example to wading in water."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetStepSoundOverrideLocoAction

A **class** in `Root.Township`, the global namespace.

Locomotion modifier action asset that swaps the player's footstep sound while it is active, for example to wading in water.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`LocomotionModifierAction`](/mod/game-api/types/global-i-l/locomotionmodifieraction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetStepSoundOverrideLocoAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stepsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" stepSound"}</code> | The footstep sound to use while the action runs. Defaults to `WaterWading`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"override void Begin("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Sets the player's locomotion `OverrideStepSound` to `stepSound`. |
| <Link id="m-finish" /><code>{"override void Finish("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Clears the step sound override back to `SoundEffect.None`. |
