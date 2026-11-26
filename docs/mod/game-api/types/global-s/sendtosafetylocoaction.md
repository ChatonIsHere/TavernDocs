---
title: "SendToSafetyLocoAction"
description: "Locomotion modifier action asset that moves the local player back to their last safe position and plays a sound, for example on falling into water."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SendToSafetyLocoAction

A **class** in `Root.Township`, the global namespace.

Locomotion modifier action asset that moves the local player back to their last safe position and plays a sound, for example on falling into water.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`LocomotionModifierAction`](/mod/game-api/types/global-i-l/locomotionmodifieraction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SendToSafetyLocoAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-safetysound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" safetySound"}</code> | <span className="api-desc">Old sound setting, migrated to `sound`. Default `WaterFell`.</span> |
| <Link id="m-sound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" sound"}</code> | <span className="api-desc">Sound set played when sent to safety.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"override void Begin("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Moves the local, living player to safety and, off headless, plays the safety sound at their feet.</span> |
| <Link id="m-finish" /><code>{"override void Finish("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Does nothing.</span> |
