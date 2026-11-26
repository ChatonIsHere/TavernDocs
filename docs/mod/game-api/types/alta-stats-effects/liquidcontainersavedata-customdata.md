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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`LiquidContainerSaveData`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomData()"}</code> | <span className="api-desc">Creates a `LiquidContainerSaveData.CustomData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunks" /><code><Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"[] chunks"}</code> | <span className="api-desc">Visual chunk definitions shown in the liquid.</span> |
| <Link id="m-color" /><code>{"Color color"}</code> | <span className="api-desc">Colour of the liquid.</span> |
| <Link id="m-effects" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-effect">{"LiquidContainerSaveData.Effect"}</Link>{"[] effects"}</code> | <span className="api-desc">Effects the liquid carries.</span> |
| <Link id="m-isconsumablethroughskin" /><code>{"bool isConsumableThroughSkin"}</code> | <span className="api-desc">Whether the liquid can be taken in through the skin.</span> |
| <Link id="m-liquidvisualdata" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisualData"}</code> | <span className="api-desc">Visual settings for the liquid.</span> |

## Used in

Members of other types that take, return or hold a `CustomData`:

<div className="api-used-in">

[`LiquidContainerSaveData.customData`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata#m-customdata), [`LiquidData.GetSave`](/mod/game-api/types/alta-stats-effects/liquiddata#m-getsave), [`LiquidData.Load`](/mod/game-api/types/alta-stats-effects/liquiddata#m-load).

</div>
