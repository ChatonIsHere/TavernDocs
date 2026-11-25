---
title: "MapLandmarkDisplay"
description: "class MapLandmarkDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapLandmarkDisplay

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MapLandmarkDisplay()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activemarkers" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> activeMarkers"}</code> |
| <Link id="m-belowmaskmaterial" /><code>{"private Material belowMaskMaterial"}</code> |
| <Link id="m-mapboard" /><code>{"private "}<Link to="/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard"}</code> |
| <Link id="m-markerprefab" /><code>{"private Image markerPrefab"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-abovethemaskmarkers" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> AboveTheMaskMarkers { get; }"}</code> |
| <Link id="m-belowthemaskmarkers" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> BelowTheMaskMarkers { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addmarker" /><code>{"private void AddMarker("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> |
| <Link id="m-landmarkchanged" /><code>{"private void LandmarkChanged("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-removemarker" /><code>{"private void RemoveMarker("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `MapLandmarkDisplay`:

[`MapBoardDirectRenderer.landmarkDisplay`](/game-api/types/alta-world/mapboarddirectrenderer#m-landmarkdisplay).
