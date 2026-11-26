---
title: "ImpactImmunityGroup"
description: "Asset for an impact immunity group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactImmunityGroup

A **class** in `Root.Township`, `Alta.Impact`.

Asset for an impact immunity group. When a tool and a detector share a group, the hit's efficiency is multiplied by the group's `Multiplier` (see `ImpactTool`).

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImpactImmunityGroup.Create`](/mod/game-api/types/alta-items/impactimmunitygroup-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/impactimmunitygroup-create)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactImmunityGroup()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Backing field for `Multiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; }"}</code> | <span className="api-desc">Efficiency multiplier (0 to 1) for hits between a tool and detector that share this group.</span> |

## Used in

Members of other types that take, return or hold a `ImpactImmunityGroup`:

<div className="api-used-in">

[`ImpactDetector.immunityGroups`](/mod/game-api/types/alta-items/impactdetector#m-immunitygroups), [`ImpactDetector.ImmunityGroups`](/mod/game-api/types/alta-items/impactdetector#m-immunitygroups-2), [`ImpactGenerator.ImmunityGroups`](/mod/game-api/types/alta-items/impactgenerator#m-immunitygroups), [`ImpactorSettings.immunityGroups`](/mod/game-api/types/alta-items/impactorsettings#m-immunitygroups), [`ImpactorSettings.ImmunityGroups`](/mod/game-api/types/alta-items/impactorsettings#m-immunitygroups-2).

</div>
