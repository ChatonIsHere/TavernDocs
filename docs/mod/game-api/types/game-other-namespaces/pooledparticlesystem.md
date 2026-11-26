---
title: "PooledParticleSystem"
description: "A pooled VFX object that knows how long it plays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledParticleSystem

A **class** in `Root.Township`, `Features`.

A pooled VFX object that knows how long it plays. Used by `GenericVFXController` and the downed state effects.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledParticleSystem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Backing field for `Duration`.</span> |
| <Link id="m-shouldautodisable" /><code>{"private bool shouldAutoDisable"}</code> | <span className="api-desc">Backing field for `ShouldAutoDisable`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">How long the effect plays, in seconds (default 2). Callers wait this long before stopping it.</span> |
| <Link id="m-shouldautodisable-2" /><code>{"bool ShouldAutoDisable { get; }"}</code> | <span className="api-desc">When true, `GenericVFXController` stops the effect by itself after `Duration` seconds.</span> |

## Used in

Members of other types that take, return or hold a `PooledParticleSystem`:

<div className="api-used-in">

[`DownedState.StopParticleEffect`](/mod/game-api/types/alta-player/downedstate#m-stopparticleeffect), [`GenericVFXController.activePooledSystems`](/mod/game-api/types/game-other-namespaces/genericvfxcontroller#m-activepooledsystems), [`GenericVFXController.StopAllTargetSystems`](/mod/game-api/types/game-other-namespaces/genericvfxcontroller#m-stopalltargetsystems), [`GenericVFXController.StopAllTargetSystemsWithIndex`](/mod/game-api/types/game-other-namespaces/genericvfxcontroller#m-stopalltargetsystemswithindex), [`GenericVFXController.StopTargetSystem`](/mod/game-api/types/game-other-namespaces/genericvfxcontroller#m-stoptargetsystem).

</div>
