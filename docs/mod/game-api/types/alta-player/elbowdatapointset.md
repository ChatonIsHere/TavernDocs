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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowDataPointSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elbowdatapoints" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/elbowguidedatapoint">{"ElbowGuideDataPoint"}</Link>{"> elbowDataPoints"}</code> | <span className="api-desc">Backing field for `DataPoints`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datapoints" /><code>{"List<"}<Link to="/mod/game-api/types/alta-player/elbowguidedatapoint">{"ElbowGuideDataPoint"}</Link>{"> DataPoints { get; }"}</code> | <span className="api-desc">The data point assets in the set.</span> |
| <Link id="m-numberofdatapoints" /><code>{"int NumberOfDataPoints { get; set; }"}</code> | <span className="api-desc">A plain settable count; nothing in this class keeps it in step with the list.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deletedatapoint" /><code>{"void DeleteDataPoint("}<Link to="/mod/game-api/types/alta-player/elbowguidedatapoint">{"ElbowGuideDataPoint"}</Link>{" dataPoint)"}</code> | <span className="api-desc">Removes a data point from the set and destroys its asset. Editor tooling.</span> |

## Used in

Members of other types that take, return or hold a `ElbowDataPointSet`:

<div className="api-used-in">

[`ElbowController.ElbowDataPoints`](/mod/game-api/types/alta-player/elbowcontroller#m-elbowdatapoints), [`ElbowGuideDataPoint.dataPointSet`](/mod/game-api/types/alta-player/elbowguidedatapoint#m-datapointset), [`ElbowGuideDataPoint.DataPointSet`](/mod/game-api/types/alta-player/elbowguidedatapoint#m-datapointset-2), [`ElbowGuideDataPointRuntime.DataPointSet`](/mod/game-api/types/alta-player/elbowguidedatapointruntime#m-datapointset), [`IElbowGuideDataPoint.DataPointSet`](/mod/game-api/types/alta-player/ielbowguidedatapoint#m-datapointset), [`PlayerControllerSettings.elbowDataPointSet`](/mod/game-api/types/alta-player/playercontrollersettings#m-elbowdatapointset), [`PlayerControllerSettings.ElbowDataPointSet`](/mod/game-api/types/alta-player/playercontrollersettings#m-elbowdatapointset-2).

</div>
