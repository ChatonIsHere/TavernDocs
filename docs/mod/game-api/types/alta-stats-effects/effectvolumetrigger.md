---
title: "EffectVolumeTrigger"
description: "VolumeTrigger that applies a list of effect definitions to effect handlers that enter it and reverses them when they leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectVolumeTrigger

A **class** in `Root.Township`, `Alta.Alchemy`.

`VolumeTrigger` that applies a list of effect definitions to effect handlers that enter it and reverses them when they leave. Server only; disabled on clients.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`VolumeTrigger`](/mod/game-api/types/global-t-x/volumetrigger)
- **Nested types** [`Effect`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger-effect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectVolumeTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectvolumetrigger-effect">{"EffectVolumeTrigger.Effect"}</Link>{"[] effects"}</code> | The effect definitions and strengths to apply, set in the inspector. |
| <Link id="m-isserver" /><code>{"private bool isServer"}</code> | Cached `NetworkSceneManager.IsServer` from `Awake`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckingforeffecthandler" /><code>{"override bool IsCheckingForEffectHandler { get; }"}</code> | True on the server, so the base trigger tracks effect handlers there only. |
| <Link id="m-ischeckingforrigidbody" /><code>{"override bool IsCheckingForRigidbody { get; }"}</code> | True on the server, so the base trigger tracks rigidbodies there only. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-effecthandlerentered" /><code>{"protected override void EffectHandlerEntered("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Applies every listed effect at its strength and adds the handler to `ActiveEffectTargets`. |
| <Link id="m-effecthandlerleft" /><code>{"protected override void EffectHandlerLeft("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Applies every listed effect at negative strength and removes the handler from `ActiveEffectTargets`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches whether this is the server and disables the component if not. |

</details>
