---
title: "ImpactorFilter"
description: "Base ScriptableObject for a filter on contact points, listed in ImpactorSettings.Filters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorFilter

An **abstract class** in `Root.Township`, `Alta.Impact`.

Base ScriptableObject for a filter on contact points, listed in `ImpactorSettings.Filters`. `ChiselingFilterSettings` is one.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ChiselingFilterSettings`](/mod/game-api/types/alta-crafting/chiselingfiltersettings), [`ImpactorAreaFilter<T>`](/mod/game-api/types/alta-items/impactorareafilter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ImpactorFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkfilter" /><code>{"abstract bool CheckFilter("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out float multiplier)"}</code> | Whether the contact point passes, with a multiplier to apply. |

## Used in

Members of other types that take, return or hold a `ImpactorFilter`:

[`ImpactorSettings.filters`](/mod/game-api/types/alta-items/impactorsettings#m-filters), [`ImpactorSettings.Filters`](/mod/game-api/types/alta-items/impactorsettings#m-filters-2).
