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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NewSaveData<Landmark, LandmarkSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Landmark`](/mod/game-api/types/alta-world/landmark), [`LandmarkSaveData`](/mod/game-api/types/alta-world/landmarksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkSaveData()"}</code> | <span className="api-desc">Creates a `LandmarkSaveData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon" /><code><Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" AwareIcon { get; set; }"}</code> | <span className="api-desc">Icon shown when the player knows of the landmark.</span> |
| <Link id="m-defaultstate" /><code><Link to="/mod/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" DefaultState { get; set; }"}</code> | <span className="api-desc">Starting discovery state.</span> |
| <Link id="m-discovericon" /><code><Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" DiscoverIcon { get; set; }"}</code> | <span className="api-desc">Icon shown once discovered.</span> |
| <Link id="m-findaction" /><code><Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" FindAction { get; set; }"}</code> | <span className="api-desc">Achievement given for finding it.</span> |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | <span className="api-desc">Index of the landmark on its map.</span> |
| <Link id="m-ismasked" /><code>{"bool IsMasked { get; set; }"}</code> | <span className="api-desc">If true the marker is drawn below the map's mask layer, probably so undiscovered areas cover it.</span> |
| <Link id="m-map" /><code><Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The map it belongs to.</span> |
