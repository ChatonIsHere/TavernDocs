---
title: "ProfessionSkill.ActiveEffect"
description: "Tracks the pooled tool glow effect on one entity and which profession skills currently want it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkill.ActiveEffect

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks the pooled tool glow effect on one entity and which profession skills currently want it. `ProfessionSkill.RequestEffect` and `ReleaseEffect` keep one per entity identifier in a static map.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProfessionSkill`](/mod/game-api/types/global-p/professionskill)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Creates a `ProfessionSkill.ActiveEffect` from `entity`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity the effect belongs to. |
| <Link id="m-requestedskills" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{"> requestedSkills"}</code> | The skills currently asking for this effect. The effect is freed when this empties. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pooledobject" /><code><Link to="/mod/game-api/types/global-t-x/toolbasedeffectbase">{"ToolBasedEffectBase"}</Link>{" PooledObject { get; private set; }"}</code> | The `ToolBasedEffectBase` taken from `ProgressionSettings.ToolBasedEffect`. Null once released. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerelease" /><code>{"void ForceRelease()"}</code> | Returns the pooled effect to its pool no matter how many skills still want it, and unhooks the destroy event. |
| <Link id="m-release" /><code>{"bool Release("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Removes one skill's request. When none are left it returns the effect to the pool and returns true. |
| <Link id="m-request" /><code>{"bool Request("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Adds a skill to the set wanting the effect. Returns false if that skill had already asked. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyrelease" /><code>{"private void DestroyRelease("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Runs when the entity is destroyed by the scene and force-releases its effect through `ReleaseEffect`. |

</details>

## Used in

Members of other types that take, return or hold a `ActiveEffect`:

[`ProfessionSkill.activeEffects`](/mod/game-api/types/global-p/professionskill#m-activeeffects).
