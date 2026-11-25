---
title: "ImpactorFilter"
description: "abstract class ImpactorFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorFilter

An **abstract class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ChiselingFilterSettings`](/game-api/types/alta-crafting/chiselingfiltersettings), [`ImpactorAreaFilter<T>`](/game-api/types/alta-items/impactorareafilter-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ImpactorFilter()"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-checkfilter" /><code>{"abstract bool CheckFilter("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out float multiplier)"}</code> |

## Used in

Members of other types that take, return or hold a `ImpactorFilter`:

[`ImpactorSettings.filters`](/game-api/types/alta-items/impactorsettings#m-filters), [`ImpactorSettings.Filters`](/game-api/types/alta-items/impactorsettings#m-filters-2).
