---
title: "ClientLandmarkManager"
description: "class ClientLandmarkManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientLandmarkManager

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested types** [`MarkerEvent`](/game-api/types/alta-world/clientlandmarkmanager-markerevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientLandmarkManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-icon" /><code>{"private "}<Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" icon"}</code> |  |
| <Link id="m-index" /><code>{"private uint index"}</code> |  |
| <Link id="m-ismasked" /><code>{"private bool isMasked"}</code> |  |
| <Link id="m-map" /><code>{"private "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> |  |
| <Link id="m-markers" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> markers"}</code> |  |
| <Link id="m-position" /><code>{"private Vector2 position"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-markers-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> Markers { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/game-api/types/alta-world/clientlandmarkmanager-markerevent">{"ClientLandmarkManager.MarkerEvent"}</Link>{" Changed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changesync" /><code>{"void ChangeSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-initialsync" /><code>{"void InitialSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-applysync" /><code>{"private void ApplySync()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ClientLandmarkManager`:

[`LandmarkManager.ClientLandmarkManager`](/game-api/types/alta-world/landmarkmanager#m-clientlandmarkmanager).
