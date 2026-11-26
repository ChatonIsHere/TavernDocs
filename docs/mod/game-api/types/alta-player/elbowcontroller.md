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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagepoint" /><code>{"private Vector3 averagePoint"}</code> | <span className="api-desc">Last computed elbow hint position in world space.</span> |
| <Link id="m-averagepointvisual" /><code>{"private GameObject averagePointVisual"}</code> | <span className="api-desc">Debug sphere showing `averagePoint`.</span> |
| <Link id="m-bestmatches" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/elbowdatapointscore">{"ElbowDataPointScore"}</Link>{"> bestMatches"}</code> | <span className="api-desc">Sorted list of the best scoring data points this update.</span> |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Backing field for `Body`.</span> |
| <Link id="m-datapointdistancesquared" /><code>{"private float[] dataPointDistanceSquared"}</code> | <span className="api-desc">Scratch array of squared distances from the hand to each data point.</span> |
| <Link id="m-datapoints" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/ielbowguidedatapoint">{"IElbowGuideDataPoint"}</Link>{"> dataPoints"}</code> | <span className="api-desc">Data points for this hand, mirrored where needed.</span> |
| <Link id="m-datapointvisuals" /><code>{"private List<GameObject> dataPointVisuals"}</code> | <span className="api-desc">Debug spheres for the best matches.</span> |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | <span className="api-desc">Backing field for `Elbow`.</span> |
| <Link id="m-elbowtarget" /><code>{"private Transform elbowTarget"}</code> | <span className="api-desc">Backing field for `ElbowTarget`.</span> |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | <span className="api-desc">Backing field for `HandIndex`.</span> |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> | <span className="api-desc">Backing field for `HandTarget`.</span> |
| <Link id="m-numberofbestmatchedtoaverage" /><code>{"private int numberOfBestMatchedToAverage"}</code> | <span className="api-desc">Backing field for `NumberOfBestMatchedToAverage`.</span> |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | <span className="api-desc">Backing field for `Shoulder`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; set; }"}</code> | <span className="api-desc">Body transform that hand positions and data points are measured in.</span> |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; set; }"}</code> | <span className="api-desc">The elbow (forearm) bone.</span> |
| <Link id="m-elbowdatapoints" /><code><Link to="/mod/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" ElbowDataPoints { get; set; }"}</code> | <span className="api-desc">The shared `ElbowDataPointSet` on `PlayerSettings`. Setting it only works if none is set yet.</span> |
| <Link id="m-elbowtarget-2" /><code>{"Transform ElbowTarget { get; set; }"}</code> | <span className="api-desc">The elbow hint transform moved towards the best match each fixed update.</span> |
| <Link id="m-handindex-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which arm this is; data points for the other hand are mirrored.</span> |
| <Link id="m-handtarget-2" /><code>{"Transform HandTarget { get; set; }"}</code> | <span className="api-desc">Hand IK target used to pick matching data points.</span> |
| <Link id="m-numberofbestmatchedtoaverage-2" /><code>{"int NumberOfBestMatchedToAverage { get; set; }"}</code> | <span className="api-desc">How many of the best data points are averaged. Read from settings in `Awake`.</span> |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; set; }"}</code> | <span className="api-desc">The shoulder bone.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">Shortcut to `PlayerSettings.ElbowControllerSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Moves the elbow target towards the best hint position at a speed from the settings curve.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates debug visuals if enabled, reads the match count from settings and loads the data points.</span> |
| <Link id="m-createdatapointvisuals" /><code>{"private void CreateDataPointVisuals()"}</code> | <span className="api-desc">Debug: spawns small spheres for the best matches (red) and their average (green).</span> |
| <Link id="m-findbestelbowhintposition" /><code>{"private Vector3 FindBestElbowHintPosition()"}</code> | <span className="api-desc">Scores data points by hand position and rotation and returns the (optionally weighted) average elbow hint of the best ones.</span> |
| <Link id="m-populatedatapointlists" /><code>{"private void PopulateDataPointLists()"}</code> | <span className="api-desc">Loads the data points, mirroring those recorded for the other hand.</span> |
| <Link id="m-updatedatapointvisuals" /><code>{"private void UpdateDataPointVisuals()"}</code> | <span className="api-desc">Debug: moves the match spheres to the current best points, rebuilding them if the count changed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ElbowController`:

<div className="api-used-in">

[`ArmIKController.elbowController`](/mod/game-api/types/alta-player/armikcontroller#m-elbowcontroller), [`ArmIKController.ElbowController`](/mod/game-api/types/alta-player/armikcontroller#m-elbowcontroller-2).

</div>
