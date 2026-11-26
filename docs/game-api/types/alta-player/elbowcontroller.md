---
title: "ElbowController"
description: "Character rig component that places the elbow IK hint by matching the hand's pose against a set of recorded elbow data points and averaging the best matches."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElbowController

A **class** in `Root.Township`, `Alta.Character`.

Character rig component that places the elbow IK hint by matching the hand's pose against a set of recorded elbow data points and averaging the best matches.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ElbowController()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagepoint" /><code>{"private Vector3 averagePoint"}</code> | Last computed elbow hint position in world space. |
| <Link id="m-averagepointvisual" /><code>{"private GameObject averagePointVisual"}</code> | Debug sphere showing `averagePoint`. |
| <Link id="m-bestmatches" /><code>{"private List<"}<Link to="/game-api/types/alta-player/elbowdatapointscore">{"ElbowDataPointScore"}</Link>{"> bestMatches"}</code> | Sorted list of the best scoring data points this update. |
| <Link id="m-body" /><code>{"private Transform body"}</code> | Backing field for `Body`. |
| <Link id="m-datapointdistancesquared" /><code>{"private float[] dataPointDistanceSquared"}</code> | Scratch array of squared distances from the hand to each data point. |
| <Link id="m-datapoints" /><code>{"private List<"}<Link to="/game-api/types/alta-player/ielbowguidedatapoint">{"IElbowGuideDataPoint"}</Link>{"> dataPoints"}</code> | Data points for this hand, mirrored where needed. |
| <Link id="m-datapointvisuals" /><code>{"private List<GameObject> dataPointVisuals"}</code> | Debug spheres for the best matches. |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | Backing field for `Elbow`. |
| <Link id="m-elbowtarget" /><code>{"private Transform elbowTarget"}</code> | Backing field for `ElbowTarget`. |
| <Link id="m-handindex" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | Backing field for `HandIndex`. |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> | Backing field for `HandTarget`. |
| <Link id="m-numberofbestmatchedtoaverage" /><code>{"private int numberOfBestMatchedToAverage"}</code> | Backing field for `NumberOfBestMatchedToAverage`. |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | Backing field for `Shoulder`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; set; }"}</code> | Body transform that hand positions and data points are measured in. |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; set; }"}</code> | The elbow (forearm) bone. |
| <Link id="m-elbowdatapoints" /><code><Link to="/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" ElbowDataPoints { get; set; }"}</code> | The shared `ElbowDataPointSet` on `PlayerSettings`. Setting it only works if none is set yet. |
| <Link id="m-elbowtarget-2" /><code>{"Transform ElbowTarget { get; set; }"}</code> | The elbow hint transform moved towards the best match each fixed update. |
| <Link id="m-handindex-2" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> | Which arm this is; data points for the other hand are mirrored. |
| <Link id="m-handtarget-2" /><code>{"Transform HandTarget { get; set; }"}</code> | Hand IK target used to pick matching data points. |
| <Link id="m-numberofbestmatchedtoaverage-2" /><code>{"int NumberOfBestMatchedToAverage { get; set; }"}</code> | How many of the best data points are averaged. Read from settings in `Awake`. |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; set; }"}</code> | The shoulder bone. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" Settings { get; }"}</code> | Shortcut to `PlayerSettings.ElbowControllerSettings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Moves the elbow target towards the best hint position at a speed from the settings curve. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates debug visuals if enabled, reads the match count from settings and loads the data points. |
| <Link id="m-createdatapointvisuals" /><code>{"private void CreateDataPointVisuals()"}</code> | Debug: spawns small spheres for the best matches (red) and their average (green). |
| <Link id="m-findbestelbowhintposition" /><code>{"private Vector3 FindBestElbowHintPosition()"}</code> | Scores data points by hand position and rotation and returns the (optionally weighted) average elbow hint of the best ones. |
| <Link id="m-populatedatapointlists" /><code>{"private void PopulateDataPointLists()"}</code> | Loads the data points, mirroring those recorded for the other hand. |
| <Link id="m-updatedatapointvisuals" /><code>{"private void UpdateDataPointVisuals()"}</code> | Debug: moves the match spheres to the current best points, rebuilding them if the count changed. |

</details>

## Used in

Members of other types that take, return or hold a `ElbowController`:

[`ArmIKController.elbowController`](/game-api/types/alta-player/armikcontroller#m-elbowcontroller), [`ArmIKController.ElbowController`](/game-api/types/alta-player/armikcontroller#m-elbowcontroller-2).
