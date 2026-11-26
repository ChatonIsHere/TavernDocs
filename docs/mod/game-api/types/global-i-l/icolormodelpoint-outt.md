---
title: "IColorModelPoint<T>"
description: "A point whose value drives one colour channel of a ColorModel, written into mesh vertex colours by bone weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IColorModelPoint&lt;T&gt;

An **interface** in `Root.Township`, the global namespace.

A point whose value drives one colour channel of a `ColorModel`, written into mesh vertex colours by bone weight. Used for forging and heat (for example `ForgedPoint`).

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`ForgedPoint`](/mod/game-api/types/alta-crafting/forgedpoint), [`MetalHeatPoint`](/mod/game-api/types/alta-crafting/metalheatpoint), [`NullColorModelPoint`](/mod/game-api/types/global-m-o/nullcolormodelpoint), [`WoodcutPointData`](/mod/game-api/types/global-t-x/woodcutpointdata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colormodelvalue" /><code>{"float ColorModelValue { get; }"}</code> | The value written into the colour channel. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<T> Changed"}</code> | Fired when the value changes, so the model can update its colours. |
