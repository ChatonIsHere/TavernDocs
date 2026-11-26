---
title: "ElbowControllerSettings"
description: "Settings asset for ElbowController, which places the elbow IK hint by matching the hand pose against recorded elbow samples."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElbowControllerSettings

A **class** in `Root.Township`, `Alta.Character`.

Settings asset for `ElbowController`, which places the elbow IK hint by matching the hand pose against recorded elbow samples.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ElbowControllerSettings.Create`](/mod/game-api/types/alta-player/elbowcontrollersettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/elbowcontrollersettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowControllerSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elbowtargetspeedcurve" /><code>{"private AnimationCurve elbowTargetSpeedCurve"}</code> | Maps the distance between the current and best elbow target to how fast the elbow moves there. |
| <Link id="m-isloggingbesttargets" /><code>{"private bool isLoggingBestTargets"}</code> | Debug: logs the best matching data points every physics step. |
| <Link id="m-isshowingbesttargets" /><code>{"private bool isShowingBestTargets"}</code> | Debug: makes visual markers for the best matching data points. |
| <Link id="m-isusingweightedaverage" /><code>{"private bool isUsingWeightedAverage"}</code> | Averages the best matches weighted by how well they score. Default true. |
| <Link id="m-minimumassessedpoints" /><code>{"private int minimumAssessedPoints"}</code> | How many data points must be scored before the search stops widening. Default 15. |
| <Link id="m-numberofbestmatchedtoaverage" /><code>{"private int numberOfBestMatchedToAverage"}</code> | How many of the best matching data points are averaged for the elbow position. Default 1. |
| <Link id="m-positionmultiplier" /><code>{"private float positionMultiplier"}</code> | Weight of hand position difference when scoring a data point. |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | Weight of hand rotation difference when scoring a data point. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elbowtargetspeedcurve-2" /><code>{"AnimationCurve ElbowTargetSpeedCurve { get; }"}</code> | Lerp speed of the elbow target, keyed by its distance from the new best position. |
| <Link id="m-isloggingbesttargets-2" /><code>{"bool IsLoggingBestTargets { get; }"}</code> | Debug: logs the best matched samples every fixed update. |
| <Link id="m-isshowingbesttargets-2" /><code>{"bool IsShowingBestTargets { get; }"}</code> | Debug: shows markers at the best matched samples and their average. |
| <Link id="m-isusingweightedaverage-2" /><code>{"bool IsUsingWeightedAverage { get; }"}</code> | If true the best matches are averaged weighted by how well they match, otherwise evenly. |
| <Link id="m-minimumassessedpoints-2" /><code>{"int MinimumAssessedPoints { get; }"}</code> | The search widens its distance band until at least this many samples have been scored. |
| <Link id="m-numberofbestmatchedtoaverage-2" /><code>{"int NumberOfBestMatchedToAverage { get; }"}</code> | How many of the best matching samples are averaged. |
| <Link id="m-positionmultiplier-2" /><code>{"float PositionMultiplier { get; }"}</code> | Weight of hand position difference in a sample's match score. |
| <Link id="m-rotationmultiplier-2" /><code>{"float RotationMultiplier { get; }"}</code> | Weight of hand rotation difference in a sample's match score. |

## Used in

Members of other types that take, return or hold a `ElbowControllerSettings`:

[`ElbowController.Settings`](/mod/game-api/types/alta-player/elbowcontroller#m-settings), [`PlayerControllerSettings.elbowControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-elbowcontrollersettings), [`PlayerControllerSettings.ElbowControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-elbowcontrollersettings-2).
