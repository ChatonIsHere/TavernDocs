---
title: "OldLandmarkSaveData1"
description: "Old save format (version 1) for Landmark."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OldLandmarkSaveData1

A **class** in `Root.Township`, `Alta.Map`.

Old save format (version 1) for `Landmark`. Migrated to `LandmarkSaveData` with the same fields.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OldLandmarkSaveData1()"}</code> | Creates an `OldLandmarkSaveData1` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon" /><code><Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" AwareIcon { get; set; }"}</code> | Icon shown when a player is aware of the landmark but has not discovered it. |
| <Link id="m-defaultstate" /><code><Link to="/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" DefaultState { get; set; }"}</code> | Discovery state players start with for this landmark. |
| <Link id="m-discovericon" /><code><Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" DiscoverIcon { get; set; }"}</code> | Icon shown once the landmark is discovered. |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | The landmark's index in its map. |
| <Link id="m-ismasked" /><code>{"bool IsMasked { get; set; }"}</code> | Whether the landmark is drawn below the map mask. |
| <Link id="m-map" /><code><Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" { get; set; }"}</code> | The `Map` asset the landmark belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Copies every field into a new `LandmarkSaveData`. |
