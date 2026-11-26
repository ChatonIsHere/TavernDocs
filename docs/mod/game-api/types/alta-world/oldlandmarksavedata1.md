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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OldLandmarkSaveData1()"}</code> | <span className="api-desc">Creates an `OldLandmarkSaveData1` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon" /><code><Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" AwareIcon { get; set; }"}</code> | <span className="api-desc">Icon shown when a player is aware of the landmark but has not discovered it.</span> |
| <Link id="m-defaultstate" /><code><Link to="/mod/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" DefaultState { get; set; }"}</code> | <span className="api-desc">Discovery state players start with for this landmark.</span> |
| <Link id="m-discovericon" /><code><Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" DiscoverIcon { get; set; }"}</code> | <span className="api-desc">Icon shown once the landmark is discovered.</span> |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | <span className="api-desc">The landmark's index in its map.</span> |
| <Link id="m-ismasked" /><code>{"bool IsMasked { get; set; }"}</code> | <span className="api-desc">Whether the landmark is drawn below the map mask.</span> |
| <Link id="m-map" /><code><Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The `Map` asset the landmark belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies every field into a new `LandmarkSaveData`.</span> |
