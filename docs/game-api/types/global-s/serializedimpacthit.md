---
title: "SerializedImpactHit"
description: "struct SerializedImpactHit in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedImpactHit

A **struct** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedImpactHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-healthdamage" /><code>{"float healthDamage"}</code> |  |
| <Link id="m-hiteffectiveness" /><code>{"float hitEffectiveness"}</code> |  |
| <Link id="m-hitposition" /><code>{"Vector3 hitPosition"}</code> |  |
| <Link id="m-impacttype" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType"}</code> |  |
| <Link id="m-isvalidhit" /><code>{"bool isValidHit"}</code> |  |
| <Link id="m-multipliers" /><code>{"float multipliers"}</code> |  |
| <Link id="m-toolentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SerializedImpactHit`:

[`ImpactSystemHitManager.HandleReceivedImpactHit`](/game-api/types/global-i-l/impactsystemhitmanager#m-handlereceivedimpacthit), [`ImpactSystemHitManager.syncHit`](/game-api/types/global-i-l/impactsystemhitmanager#m-synchit), [`ImpactSystemHitManager.SyncImpactHit`](/game-api/types/global-i-l/impactsystemhitmanager#m-syncimpacthit).
