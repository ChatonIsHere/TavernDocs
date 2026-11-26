---
title: "LandmarkManagerSaveData"
description: "Save data for the LandmarkManager (save structure version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkManagerSaveData

A **class** in `Root.Township`, `Alta.Map`.

Save data for the `LandmarkManager` (save structure version 1). Holds the map markers.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NewSaveData<LandmarkManager, LandmarkManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LandmarkManager`](/mod/game-api/types/alta-world/landmarkmanager), [`LandmarkManagerSaveData`](/mod/game-api/types/alta-world/landmarkmanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkManagerSaveData()"}</code> | Creates a `LandmarkManagerSaveData` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-markers" /><code><Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"[] Markers { get; set; }"}</code> | The saved map markers. |

## Used in

Members of other types that take, return or hold a `LandmarkManagerSaveData`:

[`ServerLandmarkManager.LoadSave`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-loadsave), [`ServerLandmarkManager.Save`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-save).
