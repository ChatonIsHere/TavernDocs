---
title: "ImpactorSettings"
description: "Asset holding the shared settings for an impactor (a weapon or tool edge): immunity groups, hit and block effects, filters and hardness."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorSettings

A **class** in `Root.Township`, `Alta.Impact`.

Asset holding the shared settings for an impactor (a weapon or tool edge): immunity groups, hit and block effects, filters and hardness. Read through `ImpactGenerator`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`ResetConditions`](/mod/game-api/types/alta-items/impactorsettings-resetconditions)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactorSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectonblock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" effectOnBlock"}</code> | <span className="api-desc">Backing field for `EffectOnBlock`.</span> |
| <Link id="m-effectondamage" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" effectOnDamage"}</code> | <span className="api-desc">Backing field for `EffectOnDamage`.</span> |
| <Link id="m-filters" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactorfilter">{"ImpactorFilter"}</Link>{"[] filters"}</code> | <span className="api-desc">Backing field for `Filters`.</span> |
| <Link id="m-hardnesslevel" /><code>{"private uint hardnessLevel"}</code> | <span className="api-desc">Backing field for `HardnessLevel`.</span> |
| <Link id="m-immunitygroups" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> immunityGroups"}</code> | <span className="api-desc">Backing field for `ImmunityGroups`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effectonblock-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnBlock { get; }"}</code> | <span className="api-desc">Effect spawned at the contact point when a hit is blocked. Client only (skipped on headless servers).</span> |
| <Link id="m-effectondamage-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnDamage { get; }"}</code> | <span className="api-desc">Effect spawned at the contact point when a hit does damage.</span> |
| <Link id="m-filters-2" /><code><Link to="/mod/game-api/types/alta-items/impactorfilter">{"ImpactorFilter"}</Link>{"[] Filters { get; }"}</code> | <span className="api-desc">Filters an `Impactor` runs to decide whether a hit counts.</span> |
| <Link id="m-hardnesslevel-2" /><code>{"uint HardnessLevel { get; }"}</code> | <span className="api-desc">Hardness of the impactor. If the target detector is harder, the hit does no damage and plays the ineffective-hit effect.</span> |
| <Link id="m-immunitygroups-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> ImmunityGroups { get; }"}</code> | <span className="api-desc">Groups shared with the target detector; each shared group multiplies the hit's efficiency by its multiplier.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Compares every setting, including hardness, with another `ImpactorSettings`.</span> |
| <Link id="m-getcopy" /><code><Link to="/mod/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" GetCopy()"}</code> | <span className="api-desc">Returns a new in-memory copy with the immunity groups and filters copied into new collections.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash built from every setting; logs an error naming the asset when an entry is missing.</span> |

## Used in

Members of other types that take, return or hold a `ImpactorSettings`:

<div className="api-used-in">

[`ImpactGenerator.impactorSettings`](/mod/game-api/types/alta-items/impactgenerator#m-impactorsettings), [`ImpactGenerator.ImpactorSettings`](/mod/game-api/types/alta-items/impactgenerator#m-impactorsettings-2).

</div>
