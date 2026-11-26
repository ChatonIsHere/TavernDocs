---
title: "NullColorModelPoint"
description: "A colour model point that always gives 0 and never changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NullColorModelPoint

A **class** in `Root.Township`, the global namespace.

A colour model point that always gives 0 and never changes. A placeholder for when no real point is needed.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`IColorModelPoint<NullColorModelPoint>`](/mod/game-api/types/global-i-l/icolormodelpoint-outt)
- **Derived types** [`ForgedModel`](/mod/game-api/types/alta-crafting/forgedmodel), [`HeatModel`](/mod/game-api/types/alta-crafting/heatmodel), [`NullColorModelPoint`](/mod/game-api/types/global-m-o/nullcolormodelpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NullColorModelPoint()"}</code> | <span className="api-desc">Creates a `NullColorModelPoint` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colormodelvalue" /><code>{"float ColorModelValue { get; }"}</code> | <span className="api-desc">Always 0.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{"> Changed"}</code> | <span className="api-desc">Never raised.</span> |

## Used in

Members of other types that take, return or hold a `NullColorModelPoint`:

<div className="api-used-in">

[`WoodcutTreeBaker.NodeModified`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-nodemodified), [`WoodcutTreeBakingHandler.ModifyColors`](/mod/game-api/types/alta-crafting/woodcuttreebakinghandler#m-modifycolors), [`WoodcutTreeModel.Core`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-core).

</div>
