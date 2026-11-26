---
title: "Recycler.MeltingModelReference"
description: "A melting model inside the recycler's smelting area and the heat points touching it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Recycler.MeltingModelReference

A **private class** in `Root.Township`, `Alta.Blacksmithing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A melting model inside the recycler's smelting area and the heat points touching it. Private to `Recycler`, kept per entity while it is in the area.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`Recycler`](/game-api/types/alta-crafting/recycler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeltingModelReference("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" meltingModel)"}</code> | Creates a `Recycler.MeltingModelReference` from `meltingModel`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-affectingheatpoints" /><code>{"List<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> AffectingHeatPoints { get; }"}</code> | Heat points currently heating this model. |
| <Link id="m-meltingmodel" /><code><Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" "}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" { get; }"}</code> | The `MeltingModel` component of the item being melted. |

## Used in

Members of other types that take, return or hold a `MeltingModelReference`:

[`Recycler.affecting`](/game-api/types/alta-crafting/recycler#m-affecting), [`Recycler.destroyed`](/game-api/types/alta-crafting/recycler#m-destroyed), [`Recycler.readyToMelt`](/game-api/types/alta-crafting/recycler#m-readytomelt).
