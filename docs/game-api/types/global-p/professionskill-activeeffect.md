---
title: "ProfessionSkill.ActiveEffect"
description: "class ProfessionSkill.ActiveEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkill.ActiveEffect

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`ProfessionSkill`](/game-api/types/global-p/professionskill)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-requestedskills" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{"> requestedSkills"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pooledobject" /><code><Link to="/game-api/types/global-t-x/toolbasedeffectbase">{"ToolBasedEffectBase"}</Link>{" PooledObject { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerelease" /><code>{"void ForceRelease()"}</code> |  |
| <Link id="m-release" /><code>{"bool Release("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |  |
| <Link id="m-request" /><code>{"bool Request("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |  |
| <Link id="m-destroyrelease" /><code>{"private void DestroyRelease("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ActiveEffect`:

[`ProfessionSkill.activeEffects`](/game-api/types/global-p/professionskill#m-activeeffects).
