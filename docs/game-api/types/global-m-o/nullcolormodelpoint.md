---
title: "NullColorModelPoint"
description: "A colour model point that always gives 0 and never changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NullColorModelPoint

A **class** in `Root.Township`, no namespace.

A colour model point that always gives 0 and never changes. A placeholder for when no real point is needed.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`IColorModelPoint<NullColorModelPoint>`](/game-api/types/global-i-l/icolormodelpoint-outt)
- **Derived types** [`ForgedModel`](/game-api/types/alta-crafting/forgedmodel), [`HeatModel`](/game-api/types/alta-crafting/heatmodel), [`NullColorModelPoint`](/game-api/types/global-m-o/nullcolormodelpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NullColorModelPoint()"}</code> | Creates a `NullColorModelPoint` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colormodelvalue" /><code>{"float ColorModelValue { get; }"}</code> | Always 0. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{"> Changed"}</code> | Never raised. |

## Used in

Members of other types that take, return or hold a `NullColorModelPoint`:

[`WoodcutTreeBaker.NodeModified`](/game-api/types/alta-crafting/woodcuttreebaker#m-nodemodified), [`WoodcutTreeBakingHandler.ModifyColors`](/game-api/types/alta-crafting/woodcuttreebakinghandler#m-modifycolors), [`WoodcutTreeModel.Core`](/game-api/types/alta-crafting/woodcuttreemodel#m-core).
