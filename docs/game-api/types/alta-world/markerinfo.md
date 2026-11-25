---
title: "MarkerInfo"
description: "class MarkerInfo in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarkerInfo

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarkerInfo()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon" /><code><Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" AwareIcon { get; set; }"}</code> |  |
| <Link id="m-defaultstate" /><code><Link to="/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" DefaultState { get; set; }"}</code> |  |
| <Link id="m-discoveredicon" /><code><Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" DiscoveredIcon { get; set; }"}</code> |  |
| <Link id="m-index" /><code>{"uint Index { get; set; }"}</code> |  |
| <Link id="m-iskeptafterunload" /><code>{"bool IsKeptAfterUnload { get; set; }"}</code> |  |
| <Link id="m-ismasked" /><code>{"bool IsMasked { get; set; }"}</code> |  |
| <Link id="m-map" /><code><Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector2 Position { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `MarkerInfo`:

[`ClientLandmarkManager.markers`](/game-api/types/alta-world/clientlandmarkmanager#m-markers), [`ClientLandmarkManager.Markers`](/game-api/types/alta-world/clientlandmarkmanager#m-markers-2), [`ClientLandmarkManager.MarkerEvent.BeginInvoke`](/game-api/types/alta-world/clientlandmarkmanager-markerevent#m-begininvoke), [`ClientLandmarkManager.MarkerEvent.Invoke`](/game-api/types/alta-world/clientlandmarkmanager-markerevent#m-invoke), [`Landmark.CustomizeIcon`](/game-api/types/alta-world/landmark#m-customizeicon), [`LandmarkManagerSaveData.Markers`](/game-api/types/alta-world/landmarkmanagersavedata#m-markers), [`MapBoardDirectRenderer.CheckRenderLandmark`](/game-api/types/alta-world/mapboarddirectrenderer#m-checkrenderlandmark), [`MapBoardRenderer.CheckRender`](/game-api/types/alta-world/mapboardrenderer#m-checkrender), [`MapLandmarkDisplay.AboveTheMaskMarkers`](/game-api/types/alta-world/maplandmarkdisplay#m-abovethemaskmarkers), [`MapLandmarkDisplay.activeMarkers`](/game-api/types/alta-world/maplandmarkdisplay#m-activemarkers), [`MapLandmarkDisplay.AddMarker`](/game-api/types/alta-world/maplandmarkdisplay#m-addmarker), [`MapLandmarkDisplay.BelowTheMaskMarkers`](/game-api/types/alta-world/maplandmarkdisplay#m-belowthemaskmarkers), [`MapLandmarkDisplay.LandmarkChanged`](/game-api/types/alta-world/maplandmarkdisplay#m-landmarkchanged), [`MapLandmarkDisplay.RemoveMarker`](/game-api/types/alta-world/maplandmarkdisplay#m-removemarker), [`PlayerLandmark.CustomizeIcon`](/game-api/types/alta-world/playerlandmark#m-customizeicon), [`ServerClientLandmarkManager.Aware`](/game-api/types/alta-world/serverclientlandmarkmanager#m-aware), [`ServerClientLandmarkManager.change`](/game-api/types/alta-world/serverclientlandmarkmanager#m-change), [`ServerClientLandmarkManager.Discover`](/game-api/types/alta-world/serverclientlandmarkmanager#m-discover), [`ServerClientLandmarkManager.IsAwareOrDiscovered`](/game-api/types/alta-world/serverclientlandmarkmanager#m-isawareordiscovered), [`ServerClientLandmarkManager.Remove`](/game-api/types/alta-world/serverclientlandmarkmanager#m-remove), [`ServerClientLandmarkManager.Sync`](/game-api/types/alta-world/serverclientlandmarkmanager#m-sync), [`ServerLandmarkManager.Markers`](/game-api/types/alta-world/serverlandmarkmanager#m-markers).
