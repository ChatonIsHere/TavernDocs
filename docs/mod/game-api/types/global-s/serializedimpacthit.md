---
title: "SerializedImpactHit"
description: "A tool hit packed for the network by ImpactSystemHitManager: the tool entity, where it hit and the damage values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedImpactHit

A **struct** in `Root.Township`, the global namespace.

A tool hit packed for the network by `ImpactSystemHitManager`: the tool entity, where it hit and the damage values.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedImpactHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Creates a `SerializedImpactHit` from `hit` and `tool`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-healthdamage" /><code>{"float healthDamage"}</code> | Health damage the hit deals. |
| <Link id="m-hiteffectiveness" /><code>{"float hitEffectiveness"}</code> | How effective the hit was. |
| <Link id="m-hitposition" /><code>{"Vector3 hitPosition"}</code> | World point of the hit. |
| <Link id="m-impacttype" /><code><Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType"}</code> | The kind of impact. |
| <Link id="m-isvalidhit" /><code>{"bool isValidHit"}</code> | Whether the hit counted as valid. |
| <Link id="m-multipliers" /><code>{"float multipliers"}</code> | Combined damage multipliers. |
| <Link id="m-toolentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity"}</code> | The network entity of the tool that hit. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes all the fields. |

## Used in

Members of other types that take, return or hold a `SerializedImpactHit`:

[`ImpactSystemHitManager.HandleReceivedImpactHit`](/mod/game-api/types/global-i-l/impactsystemhitmanager#m-handlereceivedimpacthit), [`ImpactSystemHitManager.syncHit`](/mod/game-api/types/global-i-l/impactsystemhitmanager#m-synchit), [`ImpactSystemHitManager.SyncImpactHit`](/mod/game-api/types/global-i-l/impactsystemhitmanager#m-syncimpacthit).
