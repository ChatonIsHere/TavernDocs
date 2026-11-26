---
title: "SendToSafetyLocoAction"
description: "Locomotion modifier action asset that moves the local player back to their last safe position and plays a sound, for example on falling into water."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SendToSafetyLocoAction

A **class** in `Root.Township`, no namespace.

Locomotion modifier action asset that moves the local player back to their last safe position and plays a sound, for example on falling into water.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`LocomotionModifierAction`](/game-api/types/global-i-l/locomotionmodifieraction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SendToSafetyLocoAction()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-safetysound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" safetySound"}</code> | Old sound setting, migrated to `sound`. Default `WaterFell`. |
| <Link id="m-sound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" sound"}</code> | Sound set played when sent to safety. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"override void Begin("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Moves the local, living player to safety and, off headless, plays the safety sound at their feet. |
| <Link id="m-finish" /><code>{"override void Finish("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Does nothing. |
