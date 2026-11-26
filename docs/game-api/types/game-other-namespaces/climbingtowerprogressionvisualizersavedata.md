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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<ClimbingTowerProgressionVisualizer, ClimbingTowerProgressionVisualizerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ClimbingTowerProgressionVisualizer`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer), [`ClimbingTowerProgressionVisualizerSaveData`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerProgressionVisualizerSaveData()"}</code> | Creates a `ClimbingTowerProgressionVisualizerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gaugeheights" /><code>{"float[] GaugeHeights"}</code> | Saved height of each progress gauge. |
| <Link id="m-orbindexes" /><code>{"uint[] OrbIndexes"}</code> | Saved orb indexes shown by the visualizer. |

## Used in

Members of other types that take, return or hold a `ClimbingTowerProgressionVisualizerSaveData`:

[`ClimbingTowerProgressionVisualizer.Load`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-load), [`ClimbingTowerProgressionVisualizer.Save`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-save).
