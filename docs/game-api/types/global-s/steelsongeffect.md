---
title: "SteelSongEffect"
description: "Pooled pulse effect for the Steel Song skill: a glowing copy of the forged model's mesh that fades out over the timing window."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteelSongEffect

A **class** in `Root.Township`, no namespace.

Pooled pulse effect for the Steel Song skill: a glowing copy of the forged model's mesh that fades out over the timing window. Client side.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SteelSongEffect()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colorprogress" /><code>{"protected readonly int _ColorProgress"}</code> | Shader property ID for `_ColorProgress`. |
| <Link id="m-progress" /><code>{"protected readonly int _Progress"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-material" /><code>{"protected Material material"}</code> | This effect's material instance, shared by its mesh effects. |
| <Link id="m-meshanimation" /><code>{"protected Coroutine meshAnimation"}</code> | The running `Animate` coroutine, if any. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Length of the current pulse in seconds; 0 when idle. |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | Material that each effect copies in `Awake`. |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> | Pool definition for the mesh effect placed on the forged model. |
| <Link id="m-mesheffects" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/mesheffect">{"MeshEffect"}</Link>{"> meshEffects"}</code> | Mesh effects this pulse has spawned. |
| <Link id="m-progress-2" /><code>{"private float progress"}</code> | Pulse progress, counting down from 1 to 0. |
| <Link id="m-timeprogresstoanimationprogress" /><code>{"private AnimationCurve timeProgressToAnimationProgress"}</code> | Curve mapping pulse progress to the shader's `_Progress` value. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-remainigtime" /><code>{"float RemainigTime { get; }"}</code> | Time left in the current pulse. `SteelSong` counts a hit as good when this is under its precision leeway. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffect" /><code>{"void InitializeEffect(Component component)"}</code> | Spawns a mesh effect on the component's forged model using this effect's material, and starts the animation. |
| <Link id="m-playeffect" /><code>{"void PlayEffect(float duration, float progress)"}</code> | Restarts the pulse with a new duration and a colour progress (the streak level). |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Cleans up the mesh effects, then returns the object to its pool. |
| <Link id="m-animate" /><code>{"protected IEnumerator Animate() (iterator)"}</code> | Coroutine that runs progress from 1 down to 0 over the duration, then releases the effect. |
| <Link id="m-cleaneffects" /><code>{"protected void CleanEffects()"}</code> | Clears and releases every mesh effect this pulse created. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes this effect's own copy of the base material. |

</details>

## Used in

Members of other types that take, return or hold a `SteelSongEffect`:

[`SteelSong.activeEffects`](/game-api/types/global-s/steelsong#m-activeeffects).
