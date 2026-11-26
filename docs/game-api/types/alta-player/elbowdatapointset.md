---
title: "ElbowDataPointSet"
description: "A ScriptableObject holding a list of elbow guide data points, used to place the player's elbows for given hand poses (see ElbowController)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElbowDataPointSet

A **class** in `Root.Township`, `Alta.Character`.

A ScriptableObject holding a list of elbow guide data points, used to place the player's elbows for given hand poses (see `ElbowController`).

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ElbowDataPointSet()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elbowdatapoints" /><code>{"private List<"}<Link to="/game-api/types/alta-player/elbowguidedatapoint">{"ElbowGuideDataPoint"}</Link>{"> elbowDataPoints"}</code> | Backing field for `DataPoints`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datapoints" /><code>{"List<"}<Link to="/game-api/types/alta-player/elbowguidedatapoint">{"ElbowGuideDataPoint"}</Link>{"> DataPoints { get; }"}</code> | The data point assets in the set. |
| <Link id="m-numberofdatapoints" /><code>{"int NumberOfDataPoints { get; set; }"}</code> | A plain settable count; nothing in this class keeps it in step with the list. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deletedatapoint" /><code>{"void DeleteDataPoint("}<Link to="/game-api/types/alta-player/elbowguidedatapoint">{"ElbowGuideDataPoint"}</Link>{" dataPoint)"}</code> | Removes a data point from the set and destroys its asset. Editor tooling. |

## Used in

Members of other types that take, return or hold a `ElbowDataPointSet`:

[`ElbowController.ElbowDataPoints`](/game-api/types/alta-player/elbowcontroller#m-elbowdatapoints), [`ElbowGuideDataPoint.dataPointSet`](/game-api/types/alta-player/elbowguidedatapoint#m-datapointset), [`ElbowGuideDataPoint.DataPointSet`](/game-api/types/alta-player/elbowguidedatapoint#m-datapointset-2), [`ElbowGuideDataPointRuntime.DataPointSet`](/game-api/types/alta-player/elbowguidedatapointruntime#m-datapointset), [`IElbowGuideDataPoint.DataPointSet`](/game-api/types/alta-player/ielbowguidedatapoint#m-datapointset), [`PlayerControllerSettings.elbowDataPointSet`](/game-api/types/alta-player/playercontrollersettings#m-elbowdatapointset), [`PlayerControllerSettings.ElbowDataPointSet`](/game-api/types/alta-player/playercontrollersettings#m-elbowdatapointset-2).
