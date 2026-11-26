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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledParticleSystem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Backing field for `Duration`. |
| <Link id="m-shouldautodisable" /><code>{"private bool shouldAutoDisable"}</code> | Backing field for `ShouldAutoDisable`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | How long the effect plays, in seconds (default 2). Callers wait this long before stopping it. |
| <Link id="m-shouldautodisable-2" /><code>{"bool ShouldAutoDisable { get; }"}</code> | When true, `GenericVFXController` stops the effect by itself after `Duration` seconds. |

## Used in

Members of other types that take, return or hold a `PooledParticleSystem`:

[`DownedState.StopParticleEffect`](/game-api/types/alta-player/downedstate#m-stopparticleeffect), [`GenericVFXController.activePooledSystems`](/game-api/types/game-other-namespaces/genericvfxcontroller#m-activepooledsystems), [`GenericVFXController.StopAllTargetSystems`](/game-api/types/game-other-namespaces/genericvfxcontroller#m-stopalltargetsystems), [`GenericVFXController.StopAllTargetSystemsWithIndex`](/game-api/types/game-other-namespaces/genericvfxcontroller#m-stopalltargetsystemswithindex), [`GenericVFXController.StopTargetSystem`](/game-api/types/game-other-namespaces/genericvfxcontroller#m-stoptargetsystem).
