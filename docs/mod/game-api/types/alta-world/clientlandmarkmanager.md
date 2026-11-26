---
title: "ClientLandmarkManager"
description: "Client copy of the map markers the server has told this player about."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientLandmarkManager

A **class** in `Root.Township`, `Alta.Map`.

Client copy of the map markers the server has told this player about. Reach it through `LandmarkManager.Instance.ClientLandmarkManager`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested types** [`MarkerEvent`](/mod/game-api/types/alta-world/clientlandmarkmanager-markerevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientLandmarkManager()"}</code> | <span className="api-desc">Creates a `ClientLandmarkManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-icon" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" icon"}</code> | <span className="api-desc">Icon of the marker being read.</span> |
| <Link id="m-index" /><code>{"private uint index"}</code> | <span className="api-desc">Index of the marker being read.</span> |
| <Link id="m-ismasked" /><code>{"private bool isMasked"}</code> | <span className="api-desc">Mask flag of the marker being read.</span> |
| <Link id="m-map" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | <span className="api-desc">Map of the marker being read.</span> |
| <Link id="m-markers" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> markers"}</code> | <span className="api-desc">Known markers by index.</span> |
| <Link id="m-position" /><code>{"private Vector2 position"}</code> | <span className="api-desc">Position of the marker being read.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-markers-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> Markers { get; }"}</code> | <span className="api-desc">All markers this player knows about.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/mod/game-api/types/alta-world/clientlandmarkmanager-markerevent">{"ClientLandmarkManager.MarkerEvent"}</Link>{" Changed"}</code> | <span className="api-desc">Raised when a marker is added, moved or removed (removed markers have a null `DiscoveredIcon`).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changesync" /><code>{"void ChangeSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: reads one marker change from the server.</span> |
| <Link id="m-initialsync" /><code>{"void InitialSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: reads the full marker list sent when the player joins.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applysync" /><code>{"private void ApplySync()"}</code> | <span className="api-desc">Adds, updates or (when the icon is null) removes the marker just read, then raises `Changed`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ClientLandmarkManager`:

<div className="api-used-in">

[`LandmarkManager.ClientLandmarkManager`](/mod/game-api/types/alta-world/landmarkmanager#m-clientlandmarkmanager).

</div>
