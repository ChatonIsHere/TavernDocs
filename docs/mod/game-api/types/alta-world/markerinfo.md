---
title: "MarkerInfo"
description: "What a client knows about one map landmark: its map, index, position, icons and state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarkerInfo

A **class** in `Root.Township`, `Alta.Map`.

What a client knows about one map landmark: its map, index, position, icons and state. Built by the client landmark manager and drawn by map boards.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarkerInfo()"}</code> | Creates a `MarkerInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon" /><code><Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" AwareIcon { get; set; }"}</code> | Icon for when the player is only aware of it. |
| <Link id="m-defaultstate" /><code><Link to="/mod/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" DefaultState { get; set; }"}</code> | Discovery state players start with. |
| <Link id="m-discoveredicon" /><code><Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" DiscoveredIcon { get; set; }"}</code> | Icon for when the player has discovered it. |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> | The landmark's index in `LandmarkManager`. |
| <Link id="m-iskeptafterunload" /><code>{"bool IsKeptAfterUnload { get; set; }"}</code> | Whether the landmark stays registered while its chunk is unloaded. |
| <Link id="m-ismasked" /><code>{"bool IsMasked { get; set; }"}</code> | Whether map boards draw it below the mask layer. |
| <Link id="m-map" /><code><Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" { get; set; }"}</code> | The map it belongs to. |
| <Link id="m-position" /><code>{"Vector2 Position { get; set; }"}</code> | XZ position of the landmark. |

## Used in

Members of other types that take, return or hold a `MarkerInfo`:

[`ClientLandmarkManager.markers`](/mod/game-api/types/alta-world/clientlandmarkmanager#m-markers), [`ClientLandmarkManager.Markers`](/mod/game-api/types/alta-world/clientlandmarkmanager#m-markers-2), [`ClientLandmarkManager.MarkerEvent.BeginInvoke`](/mod/game-api/types/alta-world/clientlandmarkmanager-markerevent#m-begininvoke), [`ClientLandmarkManager.MarkerEvent.Invoke`](/mod/game-api/types/alta-world/clientlandmarkmanager-markerevent#m-invoke), [`Landmark.CustomizeIcon`](/mod/game-api/types/alta-world/landmark#m-customizeicon), [`LandmarkManagerSaveData.Markers`](/mod/game-api/types/alta-world/landmarkmanagersavedata#m-markers), [`MapBoardDirectRenderer.CheckRenderLandmark`](/mod/game-api/types/alta-world/mapboarddirectrenderer#m-checkrenderlandmark), [`MapBoardRenderer.CheckRender`](/mod/game-api/types/alta-world/mapboardrenderer#m-checkrender), [`MapLandmarkDisplay.AboveTheMaskMarkers`](/mod/game-api/types/alta-world/maplandmarkdisplay#m-abovethemaskmarkers), [`MapLandmarkDisplay.activeMarkers`](/mod/game-api/types/alta-world/maplandmarkdisplay#m-activemarkers), [`MapLandmarkDisplay.AddMarker`](/mod/game-api/types/alta-world/maplandmarkdisplay#m-addmarker), [`MapLandmarkDisplay.BelowTheMaskMarkers`](/mod/game-api/types/alta-world/maplandmarkdisplay#m-belowthemaskmarkers), [`MapLandmarkDisplay.LandmarkChanged`](/mod/game-api/types/alta-world/maplandmarkdisplay#m-landmarkchanged), [`MapLandmarkDisplay.RemoveMarker`](/mod/game-api/types/alta-world/maplandmarkdisplay#m-removemarker), [`PlayerLandmark.CustomizeIcon`](/mod/game-api/types/alta-world/playerlandmark#m-customizeicon), [`ServerClientLandmarkManager.Aware`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-aware), [`ServerClientLandmarkManager.change`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-change), [`ServerClientLandmarkManager.Discover`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-discover), [`ServerClientLandmarkManager.IsAwareOrDiscovered`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-isawareordiscovered), [`ServerClientLandmarkManager.Remove`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-remove), [`ServerClientLandmarkManager.Sync`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-sync), [`ServerLandmarkManager.Markers`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-markers).
