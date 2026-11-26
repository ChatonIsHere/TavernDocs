---
title: "MapLandmarkDisplay"
description: "Keeps the list of landmark markers to show on a map board, following the client landmark manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapLandmarkDisplay

A **class** in `Root.Township`, `Alta.Map`.

Keeps the list of landmark markers to show on a map board, following the client landmark manager. Client side.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapLandmarkDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemarkers" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> activeMarkers"}</code> | Markers shown, by index. |
| <Link id="m-belowmaskmaterial" /><code>{"private Material belowMaskMaterial"}</code> | Material for markers below the mask. |
| <Link id="m-mapboard" /><code>{"private "}<Link to="/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard"}</code> | The map board this display belongs to. |
| <Link id="m-markerprefab" /><code>{"private Image markerPrefab"}</code> | Image prefab for a marker. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-abovethemaskmarkers" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> AboveTheMaskMarkers { get; }"}</code> | Active markers drawn above the map mask. |
| <Link id="m-belowthemaskmarkers" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> BelowTheMaskMarkers { get; }"}</code> | Active markers drawn below the map mask. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the map board's client setup. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmarker" /><code>{"private void AddMarker("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | Adds a marker if it has a discovered icon. |
| <Link id="m-landmarkchanged" /><code>{"private void LandmarkChanged("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | Adds a new marker or removes one whose icon was cleared. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the client landmark manager. |
| <Link id="m-removemarker" /><code>{"private void RemoveMarker("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | Removes a marker from the active list. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard)"}</code> | On client setup, subscribes to marker changes and adds all known markers. |

</details>

## Used in

Members of other types that take, return or hold a `MapLandmarkDisplay`:

[`MapBoardDirectRenderer.landmarkDisplay`](/game-api/types/alta-world/mapboarddirectrenderer#m-landmarkdisplay).
