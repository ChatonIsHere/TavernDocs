---
title: "LocalWindManager"
description: "Non-networked copy of GrassManager: same wind and cloud shader updates, no syncing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalWindManager

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

Non-networked copy of `GrassManager`: same wind and cloud shader updates, no syncing. Destroys itself on a headless server.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalWindManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepatterns" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> availablePatterns"}</code> | Backing field for `AvailablePatterns`. |
| <Link id="m-cloudsrotation" /><code>{"private float cloudsRotation"}</code> | Cloud rotation as a fraction of a turn, wrapping at 1. |
| <Link id="m-cloudsspeedmultiplier" /><code>{"private float cloudsSpeedMultiplier"}</code> | Scales how fast clouds turn with the wind. |
| <Link id="m-directionchangelerpspeed" /><code>{"private float directionChangeLerpSpeed"}</code> | Lerp amount per frame when turning; 1 snaps at once. |
| <Link id="m-islerpingdirection" /><code>{"private bool isLerpingDirection"}</code> | True while turning toward `newDirection`. |
| <Link id="m-maxvaluetolerp" /><code>{"private float maxValueToLerp"}</code> | Copied from `GrassManager`; not read here. |
| <Link id="m-networkcloudrotation" /><code>{"private float networkCloudRotation"}</code> | Copied from `GrassManager`; not read here. |
| <Link id="m-newdirection" /><code>{"private Vector2 newDirection"}</code> | Direction being turned toward. |
| <Link id="m-winddirection" /><code>{"private Vector2 windDirection"}</code> | Backing field for `WindDirection`. |
| <Link id="m-windmap" /><code>{"private Texture2D windMap"}</code> | Wind noise texture given to shaders as `_WindMap`. |
| <Link id="m-windmapoffset" /><code>{"private Vector2 windMapOffset"}</code> | Current scroll offset of the wind map. |
| <Link id="m-windmapoffsetnetwork" /><code>{"private Vector2 windMapOffsetNetwork"}</code> | Copied from `GrassManager`; not read here. |
| <Link id="m-windmapscale" /><code>{"private float windMapScale"}</code> | World size of one wind map tile; shaders get its inverse. |
| <Link id="m-windspeed" /><code>{"private float windSpeed"}</code> | Backing field for `WindSpeed`. |
| <Link id="m-windstrength" /><code>{"private float windStrength"}</code> | Backing field for `WindStrength`. |
| <Link id="m-worldposition" /><code>{"private float worldPosition"}</code> | Serialized world origin. Not read in this build. |
| <Link id="m-worldsize" /><code>{"private float worldSize"}</code> | World size used to turn wind movement into cloud rotation. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablepatterns-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{"> AvailablePatterns { get; }"}</code> | Wind patterns that can be applied with `ReadPattern`. |
| <Link id="m-winddirection-2" /><code>{"Vector2 WindDirection { get; set; }"}</code> | Wind direction on the ground plane. Setting it updates the shader off headless. |
| <Link id="m-windspeed-2" /><code>{"float WindSpeed { get; }"}</code> | How fast the wind map scrolls. |
| <Link id="m-windstrength-2" /><code>{"float WindStrength { get; }"}</code> | How strongly grass bends. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readpattern" /><code>{"void ReadPattern("}<Link to="/mod/game-api/types/global-t-x/windpattern">{"WindPattern"}</Link>{" pattern)"}</code> | Applies a pattern's speed and strength (not direction). |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | On headless, drops the wind map and destroys itself; otherwise sets the global wind map shader values. |
| <Link id="m-changewinddirection" /><code>{"private void ChangeWindDirection(Vector2 direction)"}</code> | Starts turning toward a new (normalized) direction. |
| <Link id="m-changewindspeed" /><code>{"private void ChangeWindSpeed(float speed)"}</code> | Sets the wind speed, not below 0. |
| <Link id="m-changewindstrength" /><code>{"private void ChangeWindStrength(float strength)"}</code> | Sets the wind strength, not below 0, and updates the shader. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: normalizes the direction and updates the shader. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Lerps the direction, scrolls the wind map and cloud rotation by speed, and updates shaders. |
| <Link id="m-updateshader" /><code>{"private void UpdateShader()"}</code> | Sets the global cloud rotation values from `cloudsRotation`, then the wind parameters. |
| <Link id="m-updatewindparameters" /><code>{"private void UpdateWindParameters()"}</code> | Sets the global `_WindParameters`: wind map offset and direction times strength. |

</details>
