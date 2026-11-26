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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Derived types** [`ForgedModel`](/mod/game-api/types/alta-crafting/forgedmodel), [`LiquidContainer`](/mod/game-api/types/alta-stats-effects/liquidcontainer), [`ColoredExplosive`](/mod/game-api/types/global-c-d/coloredexplosive), [`PhysicalMaterialPart`](/mod/game-api/types/global-p/physicalmaterialpart)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkallowed" /><code>{"bool CheckAllowed("}<Link to="/mod/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | <span className="api-desc">Whether this item can stack with another item's matching component.</span> |

## Used in

Members of other types that take, return or hold a `IInterfereWithDocking`:

<div className="api-used-in">

[`ForgedModel.CheckAllowed`](/mod/game-api/types/alta-crafting/forgedmodel#m-checkallowed), [`LiquidContainer.CheckAllowed`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-checkallowed), [`ColoredExplosive.CheckAllowed`](/mod/game-api/types/global-c-d/coloredexplosive#m-checkallowed), [`PhysicalMaterialPart.CheckAllowed`](/mod/game-api/types/global-p/physicalmaterialpart#m-checkallowed), [`Pickup.interfereWithDocking`](/mod/game-api/types/global-p/pickup#m-interferewithdocking), [`Pickup.InterfereWithDocking`](/mod/game-api/types/global-p/pickup#m-interferewithdocking-2).

</div>
