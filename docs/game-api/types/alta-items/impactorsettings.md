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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`ResetConditions`](/game-api/types/alta-items/impactorsettings-resetconditions)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactorSettings()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectonblock" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" effectOnBlock"}</code> | Backing field for `EffectOnBlock`. |
| <Link id="m-effectondamage" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" effectOnDamage"}</code> | Backing field for `EffectOnDamage`. |
| <Link id="m-filters" /><code>{"private "}<Link to="/game-api/types/alta-items/impactorfilter">{"ImpactorFilter"}</Link>{"[] filters"}</code> | Backing field for `Filters`. |
| <Link id="m-hardnesslevel" /><code>{"private uint hardnessLevel"}</code> | Backing field for `HardnessLevel`. |
| <Link id="m-immunitygroups" /><code>{"private List<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> immunityGroups"}</code> | Backing field for `ImmunityGroups`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effectonblock-2" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnBlock { get; }"}</code> | Effect spawned at the contact point when a hit is blocked. Client only (skipped on headless servers). |
| <Link id="m-effectondamage-2" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnDamage { get; }"}</code> | Effect spawned at the contact point when a hit does damage. |
| <Link id="m-filters-2" /><code><Link to="/game-api/types/alta-items/impactorfilter">{"ImpactorFilter"}</Link>{"[] Filters { get; }"}</code> | Filters an `Impactor` runs to decide whether a hit counts. |
| <Link id="m-hardnesslevel-2" /><code>{"uint HardnessLevel { get; }"}</code> | Hardness of the impactor. If the target detector is harder, the hit does no damage and plays the ineffective-hit effect. |
| <Link id="m-immunitygroups-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> ImmunityGroups { get; }"}</code> | Groups shared with the target detector; each shared group multiplies the hit's efficiency by its multiplier. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Compares every setting, including hardness, with another `ImpactorSettings`. |
| <Link id="m-getcopy" /><code><Link to="/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" GetCopy()"}</code> | Returns a new in-memory copy with the immunity groups and filters copied into new collections. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash built from every setting; logs an error naming the asset when an entry is missing. |

## Used in

Members of other types that take, return or hold a `ImpactorSettings`:

[`ImpactGenerator.impactorSettings`](/game-api/types/alta-items/impactgenerator#m-impactorsettings), [`ImpactGenerator.ImpactorSettings`](/game-api/types/alta-items/impactgenerator#m-impactorsettings-2).
