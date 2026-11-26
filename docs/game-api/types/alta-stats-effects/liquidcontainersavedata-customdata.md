---
title: "LiquidContainerSaveData.CustomData"
description: "Saved description of a custom (non-preset) liquid: its colour, visuals, effects and chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerSaveData.CustomData

A **class** in `Root.Township`, `Alta.Liquid`.

Saved description of a custom (non-preset) liquid: its colour, visuals, effects and chunks. Used when the save data's `isCustom` is set.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`LiquidContainerSaveData`](/game-api/types/alta-stats-effects/liquidcontainersavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunks" /><code><Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"[] chunks"}</code> | Visual chunk definitions shown in the liquid. |
| <Link id="m-color" /><code>{"Color color"}</code> | Colour of the liquid. |
| <Link id="m-effects" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontainersavedata-effect">{"LiquidContainerSaveData.Effect"}</Link>{"[] effects"}</code> | Effects the liquid carries. |
| <Link id="m-isconsumablethroughskin" /><code>{"bool isConsumableThroughSkin"}</code> | Whether the liquid can be taken in through the skin. |
| <Link id="m-liquidvisualdata" /><code><Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisualData"}</code> | Visual settings for the liquid. |

## Used in

Members of other types that take, return or hold a `CustomData`:

[`LiquidContainerSaveData.customData`](/game-api/types/alta-stats-effects/liquidcontainersavedata#m-customdata), [`LiquidData.GetSave`](/game-api/types/alta-stats-effects/liquiddata#m-getsave), [`LiquidData.Load`](/game-api/types/alta-stats-effects/liquiddata#m-load).
