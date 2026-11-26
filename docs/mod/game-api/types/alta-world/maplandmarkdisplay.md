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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapLandmarkDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemarkers" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> activeMarkers"}</code> | <span className="api-desc">Markers shown, by index.</span> |
| <Link id="m-belowmaskmaterial" /><code>{"private Material belowMaskMaterial"}</code> | <span className="api-desc">Material for markers below the mask.</span> |
| <Link id="m-mapboard" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard"}</code> | <span className="api-desc">The map board this display belongs to.</span> |
| <Link id="m-markerprefab" /><code>{"private Image markerPrefab"}</code> | <span className="api-desc">Image prefab for a marker.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-abovethemaskmarkers" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> AboveTheMaskMarkers { get; }"}</code> | <span className="api-desc">Active markers drawn above the map mask.</span> |
| <Link id="m-belowthemaskmarkers" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> BelowTheMaskMarkers { get; }"}</code> | <span className="api-desc">Active markers drawn below the map mask.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the map board's client setup.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmarker" /><code>{"private void AddMarker("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | <span className="api-desc">Adds a marker if it has a discovered icon.</span> |
| <Link id="m-landmarkchanged" /><code>{"private void LandmarkChanged("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | <span className="api-desc">Adds a new marker or removes one whose icon was cleared.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from the client landmark manager.</span> |
| <Link id="m-removemarker" /><code>{"private void RemoveMarker("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | <span className="api-desc">Removes a marker from the active list.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard)"}</code> | <span className="api-desc">On client setup, subscribes to marker changes and adds all known markers.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MapLandmarkDisplay`:

<div className="api-used-in">

[`MapBoardDirectRenderer.landmarkDisplay`](/mod/game-api/types/alta-world/mapboarddirectrenderer#m-landmarkdisplay).

</div>
