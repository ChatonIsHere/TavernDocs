---
title: "LandmarkSaveData"
description: "Save data for a map Landmark: which map and index it is, its icons, starting discovery state and the achievement for finding it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkSaveData

A **class** in `Root.Township`, `Alta.Map`.

Save data for a map `Landmark`: which map and index it is, its icons, starting discovery state and the achievement for finding it.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NewSaveData<Landmark, LandmarkSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Landmark`](/game-api/types/alta-world/landmark), [`LandmarkSaveData`](/game-api/types/alta-world/landmarksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkSaveData()"}</code> | Creates a `LandmarkSaveData` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon" /><code><Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" AwareIcon { get; set; }"}</code> | Icon shown when the player knows of the landmark. |
| <Link id="m-defaultstate" /><code><Link to="/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" DefaultState { get; set; }"}</code> | Starting discovery state. |
| <Link id="m-discovericon" /><code><Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" DiscoverIcon { get; set; }"}</code> | Icon shown once discovered. |
| <Link id="m-findaction" /><code><Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" FindAction { get; set; }"}</code> | Achievement given for finding it. |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | Index of the landmark on its map. |
| <Link id="m-ismasked" /><code>{"bool IsMasked { get; set; }"}</code> | If true the marker is drawn below the map's mask layer, probably so undiscovered areas cover it. |
| <Link id="m-map" /><code><Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" { get; set; }"}</code> | The map it belongs to. |
