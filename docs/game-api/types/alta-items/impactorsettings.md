---
title: "ImpactorSettings"
description: "class ImpactorSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorSettings

A **class** in `Root.Township`, `Alta.Impact`.

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

| Member |
| --- |
| <Link id="m-effectonblock" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" effectOnBlock"}</code> |
| <Link id="m-effectondamage" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" effectOnDamage"}</code> |
| <Link id="m-filters" /><code>{"private "}<Link to="/game-api/types/alta-items/impactorfilter">{"ImpactorFilter"}</Link>{"[] filters"}</code> |
| <Link id="m-hardnesslevel" /><code>{"private uint hardnessLevel"}</code> |
| <Link id="m-immunitygroups" /><code>{"private List<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> immunityGroups"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-effectonblock-2" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnBlock { get; }"}</code> |
| <Link id="m-effectondamage-2" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnDamage { get; }"}</code> |
| <Link id="m-filters-2" /><code><Link to="/game-api/types/alta-items/impactorfilter">{"ImpactorFilter"}</Link>{"[] Filters { get; }"}</code> |
| <Link id="m-hardnesslevel-2" /><code>{"uint HardnessLevel { get; }"}</code> |
| <Link id="m-immunitygroups-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> ImmunityGroups { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |
| <Link id="m-getcopy" /><code><Link to="/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" GetCopy()"}</code> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |

## Used in

Members of other types that take, return or hold a `ImpactorSettings`:

[`ImpactGenerator.impactorSettings`](/game-api/types/alta-items/impactgenerator#m-impactorsettings), [`ImpactGenerator.ImpactorSettings`](/game-api/types/alta-items/impactgenerator#m-impactorsettings-2).
