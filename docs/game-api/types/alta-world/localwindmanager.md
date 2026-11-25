---
title: "LocalWindManager"
description: "class LocalWindManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalWindManager

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocalWindManager()"}</code> |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-availablepatterns" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> availablePatterns"}</code> |
| <Link id="m-cloudsrotation" /><code>{"private float cloudsRotation"}</code> |
| <Link id="m-cloudsspeedmultiplier" /><code>{"private float cloudsSpeedMultiplier"}</code> |
| <Link id="m-directionchangelerpspeed" /><code>{"private float directionChangeLerpSpeed"}</code> |
| <Link id="m-islerpingdirection" /><code>{"private bool isLerpingDirection"}</code> |
| <Link id="m-maxvaluetolerp" /><code>{"private float maxValueToLerp"}</code> |
| <Link id="m-networkcloudrotation" /><code>{"private float networkCloudRotation"}</code> |
| <Link id="m-newdirection" /><code>{"private Vector2 newDirection"}</code> |
| <Link id="m-winddirection" /><code>{"private Vector2 windDirection"}</code> |
| <Link id="m-windmap" /><code>{"private Texture2D windMap"}</code> |
| <Link id="m-windmapoffset" /><code>{"private Vector2 windMapOffset"}</code> |
| <Link id="m-windmapoffsetnetwork" /><code>{"private Vector2 windMapOffsetNetwork"}</code> |
| <Link id="m-windmapscale" /><code>{"private float windMapScale"}</code> |
| <Link id="m-windspeed" /><code>{"private float windSpeed"}</code> |
| <Link id="m-windstrength" /><code>{"private float windStrength"}</code> |
| <Link id="m-worldposition" /><code>{"private float worldPosition"}</code> |
| <Link id="m-worldsize" /><code>{"private float worldSize"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-availablepatterns-2" /><code>{"List<"}<Link to="/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> AvailablePatterns { get; }"}</code> |
| <Link id="m-winddirection-2" /><code>{"Vector2 WindDirection { get; set; }"}</code> |
| <Link id="m-windspeed-2" /><code>{"float WindSpeed { get; }"}</code> |
| <Link id="m-windstrength-2" /><code>{"float WindStrength { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-readpattern" /><code>{"void ReadPattern("}<Link to="/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{" pattern)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-changewinddirection" /><code>{"private void ChangeWindDirection(Vector2 direction)"}</code> |
| <Link id="m-changewindspeed" /><code>{"private void ChangeWindSpeed(float speed)"}</code> |
| <Link id="m-changewindstrength" /><code>{"private void ChangeWindStrength(float strength)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |
| <Link id="m-updateshader" /><code>{"private void UpdateShader()"}</code> |
| <Link id="m-updatewindparameters" /><code>{"private void UpdateWindParameters()"}</code> |

</details>
