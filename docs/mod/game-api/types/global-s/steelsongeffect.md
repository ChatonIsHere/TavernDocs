---
title: "SteelSongEffect"
description: "Pooled pulse effect for the Steel Song skill: a glowing copy of the forged model's mesh that fades out over the timing window."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteelSongEffect

A **class** in `Root.Township`, the global namespace.

Pooled pulse effect for the Steel Song skill: a glowing copy of the forged model's mesh that fades out over the timing window. Client side.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteelSongEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colorprogress" /><code>{"protected readonly int _ColorProgress"}</code> | <span className="api-desc">Shader property ID for `_ColorProgress`.</span> |
| <Link id="m-progress" /><code>{"protected readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for `_Progress`.</span> |
| <Link id="m-material" /><code>{"protected Material material"}</code> | <span className="api-desc">This effect's material instance, shared by its mesh effects.</span> |
| <Link id="m-meshanimation" /><code>{"protected Coroutine meshAnimation"}</code> | <span className="api-desc">The running `Animate` coroutine, if any.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Length of the current pulse in seconds; 0 when idle.</span> |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">Material that each effect copies in `Awake`.</span> |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> | <span className="api-desc">Pool definition for the mesh effect placed on the forged model.</span> |
| <Link id="m-mesheffects" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/mesheffect">{"MeshEffect"}</Link>{"> meshEffects"}</code> | <span className="api-desc">Mesh effects this pulse has spawned.</span> |
| <Link id="m-progress-2" /><code>{"private float progress"}</code> | <span className="api-desc">Pulse progress, counting down from 1 to 0.</span> |
| <Link id="m-timeprogresstoanimationprogress" /><code>{"private AnimationCurve timeProgressToAnimationProgress"}</code> | <span className="api-desc">Curve mapping pulse progress to the shader's `_Progress` value.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-remainigtime" /><code>{"float RemainigTime { get; }"}</code> | <span className="api-desc">Time left in the current pulse. `SteelSong` counts a hit as good when this is under its precision leeway.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffect" /><code>{"void InitializeEffect(Component component)"}</code> | <span className="api-desc">Spawns a mesh effect on the component's forged model using this effect's material, and starts the animation.</span> |
| <Link id="m-playeffect" /><code>{"void PlayEffect(float duration, float progress)"}</code> | <span className="api-desc">Restarts the pulse with a new duration and a colour progress (the streak level).</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Cleans up the mesh effects, then returns the object to its pool.</span> |
| <Link id="m-animate" /><code>{"protected IEnumerator Animate() (iterator)"}</code> | <span className="api-desc">Coroutine that runs progress from 1 down to 0 over the duration, then releases the effect.</span> |
| <Link id="m-cleaneffects" /><code>{"protected void CleanEffects()"}</code> | <span className="api-desc">Clears and releases every mesh effect this pulse created.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes this effect's own copy of the base material.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SteelSongEffect`:

<div className="api-used-in">

[`SteelSong.activeEffects`](/mod/game-api/types/global-s/steelsong#m-activeeffects).

</div>
