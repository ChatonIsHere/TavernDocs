---
title: "ClimbingTowerProgressionVisualizerSaveData"
description: "Save data for ClimbingTowerProgressionVisualizer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerProgressionVisualizerSaveData

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Save data for `ClimbingTowerProgressionVisualizer`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<ClimbingTowerProgressionVisualizer, ClimbingTowerProgressionVisualizerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ClimbingTowerProgressionVisualizer`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer), [`ClimbingTowerProgressionVisualizerSaveData`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerProgressionVisualizerSaveData()"}</code> | <span className="api-desc">Creates a `ClimbingTowerProgressionVisualizerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gaugeheights" /><code>{"float[] GaugeHeights"}</code> | <span className="api-desc">Saved height of each progress gauge.</span> |
| <Link id="m-orbindexes" /><code>{"uint[] OrbIndexes"}</code> | <span className="api-desc">Saved orb indexes shown by the visualizer.</span> |

## Used in

Members of other types that take, return or hold a `ClimbingTowerProgressionVisualizerSaveData`:

<div className="api-used-in">

[`ClimbingTowerProgressionVisualizer.Load`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-load), [`ClimbingTowerProgressionVisualizer.Save`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-save).

</div>
