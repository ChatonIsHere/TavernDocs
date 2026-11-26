---
title: "PlayerEffectManager.EffectApplication"
description: "Private helper of PlayerEffectManager that shows one pooled effect (smoke, burn or a stat buff or debuff) at one EffectPosition on the player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.EffectApplication

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper of `PlayerEffectManager` that shows one pooled effect (smoke, burn or a stat buff or debuff) at one `EffectPosition` on the player.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/mod/game-api/types/global-p/playereffectmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectApplication("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition, "}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition)"}</code> | Creates a `PlayerEffectManager.EffectApplication` from `definition` and `effectPosition`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | The pool definition the effect comes from. |
| <Link id="m-effectposition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition"}</code> | Where on the body the effect is placed. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffect" /><code><Link to="/mod/game-api/types/global-p/playereffectparticle">{"PlayerEffectParticle"}</Link>{" ActiveEffect { get; private set; }"}</code> | The pooled particle currently shown, or null. |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | False when no definition was given, meaning the effect is culled at this position; every method then does nothing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> | Takes the effect from the pool and places it, if it is not already showing. |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | Releases the active effect back to the pool. |
| <Link id="m-setsize" /><code>{"void SetSize(float size)"}</code> | Activates the effect and scales it by the position's size times the given value. |

## Used in

Members of other types that take, return or hold a `EffectApplication`:

[`PlayerEffectManager.RunStatEffectCommand`](/mod/game-api/types/global-p/playereffectmanager#m-runstateffectcommand), [`PlayerEffectManager.EffectPointStatus.burnActiveEffectDefinition`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus#m-burnactiveeffectdefinition), [`PlayerEffectManager.EffectPointStatus.Item`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus#m-item), [`PlayerEffectManager.EffectPointStatus.smokeActiveEffectDefinition`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus#m-smokeactiveeffectdefinition), [`PlayerEffectManager.EffectPointStatus.statEffectsDefinition`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus#m-stateffectsdefinition).
