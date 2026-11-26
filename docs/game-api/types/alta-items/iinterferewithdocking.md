---
title: "IInterfereWithDocking"
description: "A component that can stop two items from stacking in one dock, such as liquid containers with different contents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInterfereWithDocking

An **interface** in `Root.Township`, `Alta.Inventory`.

A component that can stop two items from stacking in one dock, such as liquid containers with different contents. Checked when an item is docked onto one already there.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`ForgedModel`](/game-api/types/alta-crafting/forgedmodel), [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer), [`ColoredExplosive`](/game-api/types/global-c-d/coloredexplosive), [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkallowed" /><code>{"bool CheckAllowed("}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | Whether this item can stack with another item's matching component. |

## Used in

Members of other types that take, return or hold a `IInterfereWithDocking`:

[`ForgedModel.CheckAllowed`](/game-api/types/alta-crafting/forgedmodel#m-checkallowed), [`LiquidContainer.CheckAllowed`](/game-api/types/alta-stats-effects/liquidcontainer#m-checkallowed), [`ColoredExplosive.CheckAllowed`](/game-api/types/global-c-d/coloredexplosive#m-checkallowed), [`PhysicalMaterialPart.CheckAllowed`](/game-api/types/global-p/physicalmaterialpart#m-checkallowed), [`Pickup.interfereWithDocking`](/game-api/types/global-p/pickup#m-interferewithdocking), [`Pickup.InterfereWithDocking`](/game-api/types/global-p/pickup#m-interferewithdocking-2).
