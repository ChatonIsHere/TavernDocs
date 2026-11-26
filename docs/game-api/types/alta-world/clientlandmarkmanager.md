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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested types** [`MarkerEvent`](/game-api/types/alta-world/clientlandmarkmanager-markerevent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientLandmarkManager()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-icon" /><code>{"private "}<Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" icon"}</code> | Icon of the marker being read. |
| <Link id="m-index" /><code>{"private uint index"}</code> | Index of the marker being read. |
| <Link id="m-ismasked" /><code>{"private bool isMasked"}</code> | Mask flag of the marker being read. |
| <Link id="m-map" /><code>{"private "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | Map of the marker being read. |
| <Link id="m-markers" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> markers"}</code> | Known markers by index. |
| <Link id="m-position" /><code>{"private Vector2 position"}</code> | Position of the marker being read. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-markers-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> Markers { get; }"}</code> | All markers this player knows about. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/game-api/types/alta-world/clientlandmarkmanager-markerevent">{"ClientLandmarkManager.MarkerEvent"}</Link>{" Changed"}</code> | Raised when a marker is added, moved or removed (removed markers have a null `DiscoveredIcon`). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changesync" /><code>{"void ChangeSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: reads one marker change from the server. |
| <Link id="m-initialsync" /><code>{"void InitialSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: reads the full marker list sent when the player joins. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applysync" /><code>{"private void ApplySync()"}</code> | Adds, updates or (when the icon is null) removes the marker just read, then raises `Changed`. |

</details>

## Used in

Members of other types that take, return or hold a `ClientLandmarkManager`:

[`LandmarkManager.ClientLandmarkManager`](/game-api/types/alta-world/landmarkmanager#m-clientlandmarkmanager).
