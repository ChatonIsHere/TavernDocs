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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`SeedSpray`](/game-api/types/alta-intelligence/seedspray)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicImpactSyncArguments("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" toolHit, uint struckID)"}</code> | Creates a `SeedSpray.BasicImpactSyncArguments` from `toolHit` and `struckID`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basecrippledamage" /><code>{"float baseCrippleDamage"}</code> | Base cripple damage of the hit. |
| <Link id="m-basehealthdamage" /><code>{"float baseHealthDamage"}</code> | Base health damage of the hit. |
| <Link id="m-direction" /><code>{"Vector3 direction"}</code> | Hit direction. |
| <Link id="m-effectiveness" /><code>{"float effectiveness"}</code> | Hit effectiveness. |
| <Link id="m-impacttype" /><code>{"uint impactType"}</code> | The `ImpactType` as a number. |
| <Link id="m-multipliers" /><code>{"float multipliers"}</code> | Damage multipliers. |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | Surface normal at the hit. |
| <Link id="m-point" /><code>{"Vector3 point"}</code> | Hit point. |
| <Link id="m-struckid" /><code>{"uint struckID"}</code> | Id of the struck entity. |
| <Link id="m-wielderid" /><code>{"uint wielderID"}</code> | Id of the entity that fired the seed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads every field. |

## Used in

Members of other types that take, return or hold a `BasicImpactSyncArguments`:

[`SeedSpray.syncBasicImpact`](/game-api/types/alta-intelligence/seedspray#m-syncbasicimpact), [`SeedSpray.SyncBasicImpact`](/game-api/types/alta-intelligence/seedspray#m-syncbasicimpact-2).
