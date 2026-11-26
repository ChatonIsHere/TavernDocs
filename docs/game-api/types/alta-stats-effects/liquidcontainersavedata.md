---
title: "LiquidContainerSaveData"
description: "Save data for a LiquidContainer (save version 1): its fill level, whether it can be filled or emptied, and either a preset liquid or custom liquid data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerSaveData

A **class** in `Root.Township`, `Alta.Liquid`.

Save data for a `LiquidContainer` (save version 1): its fill level, whether it can be filled or emptied, and either a preset liquid or custom liquid data.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NewSaveData<LiquidContainer, LiquidContainerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer), [`LiquidContainerSaveData`](/game-api/types/alta-stats-effects/liquidcontainersavedata)
- **Nested types** [`CustomData`](/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata), [`Effect`](/game-api/types/alta-stats-effects/liquidcontainersavedata-effect)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContainerSaveData()"}</code> | Creates a `LiquidContainerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canaddto" /><code>{"bool canAddTo"}</code> | Whether liquid can be poured into the container. |
| <Link id="m-canremovefrom" /><code>{"bool canRemoveFrom"}</code> | Whether liquid can be poured out of the container. |
| <Link id="m-contentlevel" /><code>{"int contentLevel"}</code> | How full the container is, as an integer level. |
| <Link id="m-customdata" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata">{"LiquidContainerSaveData.CustomData"}</Link>{" customData"}</code> | The colour, effects, visuals and chunks of a custom liquid. Used when `isCustom` is true. |
| <Link id="m-hascontent" /><code>{"bool hasContent"}</code> | Whether the container holds any liquid. |
| <Link id="m-iscustom" /><code>{"bool isCustom"}</code> | True when the content is a custom mix (stored in `customData`) rather than a `preset`. |
| <Link id="m-preset" /><code><Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" preset"}</code> | The liquid definition of the content when it is not custom. |
