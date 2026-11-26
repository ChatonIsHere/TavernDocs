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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImpactImmunityGroup.Create`](/game-api/types/alta-items/impactimmunitygroup-create)
- **Nested types** [`Create`](/game-api/types/alta-items/impactimmunitygroup-create)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactImmunityGroup()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Backing field for `Multiplier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; }"}</code> | Efficiency multiplier (0 to 1) for hits between a tool and detector that share this group. |

## Used in

Members of other types that take, return or hold a `ImpactImmunityGroup`:

[`ImpactDetector.immunityGroups`](/game-api/types/alta-items/impactdetector#m-immunitygroups), [`ImpactDetector.ImmunityGroups`](/game-api/types/alta-items/impactdetector#m-immunitygroups-2), [`ImpactGenerator.ImmunityGroups`](/game-api/types/alta-items/impactgenerator#m-immunitygroups), [`ImpactorSettings.immunityGroups`](/game-api/types/alta-items/impactorsettings#m-immunitygroups), [`ImpactorSettings.ImmunityGroups`](/game-api/types/alta-items/impactorsettings#m-immunitygroups-2).
