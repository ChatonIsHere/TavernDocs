---
title: "DiscoveryState"
description: "How much a player knows about a map landmark: nothing, aware of it, or discovered."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiscoveryState

An **enum** in `Root.Township`, `Alta.Map`.

How much a player knows about a map landmark: nothing, aware of it, or discovered. Landmarks can start in a default state.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Values

| Member |
| --- |
| <Link id="m-aware" /><code>{"Aware = 1"}</code> |
| <Link id="m-discovered" /><code>{"Discovered = 2"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |

## Used in

Members of other types that take, return or hold a `DiscoveryState`:

[`Landmark.defaultState`](/game-api/types/alta-world/landmark#m-defaultstate), [`Landmark.DefaultState`](/game-api/types/alta-world/landmark#m-defaultstate-2), [`LandmarkSaveData.DefaultState`](/game-api/types/alta-world/landmarksavedata#m-defaultstate), [`MarkerInfo.DefaultState`](/game-api/types/alta-world/markerinfo#m-defaultstate), [`OldLandmarkSaveData1.DefaultState`](/game-api/types/alta-world/oldlandmarksavedata1#m-defaultstate), [`ServerLandmarkManager.DefaultStates`](/game-api/types/alta-world/serverlandmarkmanager#m-defaultstates).
