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
| <Link id="m-ctor" /><code>{"ActiveEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Creates a `ProfessionSkill.ActiveEffect` from `entity`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity the effect belongs to.</span> |
| <Link id="m-requestedskills" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{"> requestedSkills"}</code> | <span className="api-desc">The skills currently asking for this effect. The effect is freed when this empties.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pooledobject" /><code><Link to="/mod/game-api/types/global-t-x/toolbasedeffectbase">{"ToolBasedEffectBase"}</Link>{" PooledObject { get; private set; }"}</code> | <span className="api-desc">The `ToolBasedEffectBase` taken from `ProgressionSettings.ToolBasedEffect`. Null once released.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerelease" /><code>{"void ForceRelease()"}</code> | <span className="api-desc">Returns the pooled effect to its pool no matter how many skills still want it, and unhooks the destroy event.</span> |
| <Link id="m-release" /><code>{"bool Release("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Removes one skill's request. When none are left it returns the effect to the pool and returns true.</span> |
| <Link id="m-request" /><code>{"bool Request("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Adds a skill to the set wanting the effect. Returns false if that skill had already asked.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyrelease" /><code>{"private void DestroyRelease("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Runs when the entity is destroyed by the scene and force-releases its effect through `ReleaseEffect`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ActiveEffect`:

<div className="api-used-in">

[`ProfessionSkill.activeEffects`](/mod/game-api/types/global-p/professionskill#m-activeeffects).

</div>
