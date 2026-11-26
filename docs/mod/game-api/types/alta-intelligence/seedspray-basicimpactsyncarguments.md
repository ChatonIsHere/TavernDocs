---
title: "SeedSpray.BasicImpactSyncArguments"
description: "Network copy of a seed's hit, sent by the server so clients apply the same impact to the struck entity's ImpactDetector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SeedSpray.BasicImpactSyncArguments

A **struct** in `Root.Township`, `Alta.Intelligence`.

Network copy of a seed's hit, sent by the server so clients apply the same impact to the struck entity's `ImpactDetector`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`SeedSpray`](/mod/game-api/types/alta-intelligence/seedspray)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicImpactSyncArguments("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" toolHit, uint struckID)"}</code> | <span className="api-desc">Creates a `SeedSpray.BasicImpactSyncArguments` from `toolHit` and `struckID`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basecrippledamage" /><code>{"float baseCrippleDamage"}</code> | <span className="api-desc">Base cripple damage of the hit.</span> |
| <Link id="m-basehealthdamage" /><code>{"float baseHealthDamage"}</code> | <span className="api-desc">Base health damage of the hit.</span> |
| <Link id="m-direction" /><code>{"Vector3 direction"}</code> | <span className="api-desc">Hit direction.</span> |
| <Link id="m-effectiveness" /><code>{"float effectiveness"}</code> | <span className="api-desc">Hit effectiveness.</span> |
| <Link id="m-impacttype" /><code>{"uint impactType"}</code> | <span className="api-desc">The `ImpactType` as a number.</span> |
| <Link id="m-multipliers" /><code>{"float multipliers"}</code> | <span className="api-desc">Damage multipliers.</span> |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | <span className="api-desc">Surface normal at the hit.</span> |
| <Link id="m-point" /><code>{"Vector3 point"}</code> | <span className="api-desc">Hit point.</span> |
| <Link id="m-struckid" /><code>{"uint struckID"}</code> | <span className="api-desc">Id of the struck entity.</span> |
| <Link id="m-wielderid" /><code>{"uint wielderID"}</code> | <span className="api-desc">Id of the entity that fired the seed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads every field.</span> |

## Used in

Members of other types that take, return or hold a `BasicImpactSyncArguments`:

<div className="api-used-in">

[`SeedSpray.syncBasicImpact`](/mod/game-api/types/alta-intelligence/seedspray#m-syncbasicimpact), [`SeedSpray.SyncBasicImpact`](/mod/game-api/types/alta-intelligence/seedspray#m-syncbasicimpact-2).

</div>
