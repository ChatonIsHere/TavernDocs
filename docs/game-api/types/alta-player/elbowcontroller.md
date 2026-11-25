---
title: "ElbowController"
description: "class ElbowController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElbowController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-averagepoint" /><code>{"private Vector3 averagePoint"}</code> |  |
| <Link id="m-averagepointvisual" /><code>{"private GameObject averagePointVisual"}</code> |  |
| <Link id="m-bestmatches" /><code>{"private List<"}<Link to="/game-api/types/alta-player/elbowdatapointscore">{"ElbowDataPointScore"}</Link>{"> bestMatches"}</code> |  |
| <Link id="m-body" /><code>{"private Transform body"}</code> |  |
| <Link id="m-datapointdistancesquared" /><code>{"private float[] dataPointDistanceSquared"}</code> |  |
| <Link id="m-datapoints" /><code>{"private List<"}<Link to="/game-api/types/alta-player/ielbowguidedatapoint">{"IElbowGuideDataPoint"}</Link>{"> dataPoints"}</code> |  |
| <Link id="m-datapointvisuals" /><code>{"private List<GameObject> dataPointVisuals"}</code> |  |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> |  |
| <Link id="m-elbowtarget" /><code>{"private Transform elbowTarget"}</code> |  |
| <Link id="m-handindex" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> |  |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> |  |
| <Link id="m-numberofbestmatchedtoaverage" /><code>{"private int numberOfBestMatchedToAverage"}</code> |  |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; set; }"}</code> |  |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; set; }"}</code> |  |
| <Link id="m-elbowdatapoints" /><code><Link to="/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" ElbowDataPoints { get; set; }"}</code> |  |
| <Link id="m-elbowtarget-2" /><code>{"Transform ElbowTarget { get; set; }"}</code> |  |
| <Link id="m-handindex-2" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-handtarget-2" /><code>{"Transform HandTarget { get; set; }"}</code> |  |
| <Link id="m-numberofbestmatchedtoaverage-2" /><code>{"int NumberOfBestMatchedToAverage { get; set; }"}</code> |  |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; set; }"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-createdatapointvisuals" /><code>{"private void CreateDataPointVisuals()"}</code> |  |
| <Link id="m-findbestelbowhintposition" /><code>{"private Vector3 FindBestElbowHintPosition()"}</code> |  |
| <Link id="m-populatedatapointlists" /><code>{"private void PopulateDataPointLists()"}</code> |  |
| <Link id="m-updatedatapointvisuals" /><code>{"private void UpdateDataPointVisuals()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ElbowController`:

[`ArmIKController.elbowController`](/game-api/types/alta-player/armikcontroller#m-elbowcontroller), [`ArmIKController.ElbowController`](/game-api/types/alta-player/armikcontroller#m-elbowcontroller-2).
