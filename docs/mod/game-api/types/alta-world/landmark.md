---
title: "Landmark"
description: "A point of interest that can appear on a map once a player is aware of it or has discovered it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Landmark

A **class** in `Root.Township`, `Alta.Map`.

A point of interest that can appear on a map once a player is aware of it or has discovered it. Server side; registers itself with `LandmarkManager` after spawning and is saved with its icons and state.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LandmarkSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LandmarkSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LandmarkSaveData`](/mod/game-api/types/alta-world/landmarksavedata), [`MovingLandmark`](/mod/game-api/types/alta-world/movinglandmark)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Landmark()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-iskeptafterunload" /><code>{"protected bool isKeptAfterUnload"}</code> | <span className="api-desc">Whether the landmark stays registered (and keeps its saved index) while its chunk is unloaded.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" awareIcon"}</code> | <span className="api-desc">Backing field for `AwareIcon`, the icon shown once a player knows of the landmark. Saved with the landmark.</span> |
| <Link id="m-defaultstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" defaultState"}</code> | <span className="api-desc">Backing field for `DefaultState`. Defaults to `Aware`; `Discovered` makes `DiscoverFor` do nothing.</span> |
| <Link id="m-discoveredicon" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" discoveredIcon"}</code> | <span className="api-desc">Backing field for `DiscoveredIcon`, the icon shown once a player has discovered the landmark. Saved.</span> |
| <Link id="m-findaction" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" findAction"}</code> | <span className="api-desc">Achievement the server completes for a player when they discover this landmark.</span> |
| <Link id="m-ismasked" /><code>{"private bool isMasked"}</code> | <span className="api-desc">Backing field for `IsMasked`. Defaults to true. Saved with the landmark.</span> |
| <Link id="m-map" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | <span className="api-desc">Backing field for `Map`, the map this landmark belongs to. Saved with the landmark.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon-2" /><code><Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" AwareIcon { get; set; }"}</code> | <span className="api-desc">Icon shown while a player is only aware of the landmark. Setting it resyncs the landmark.</span> |
| <Link id="m-defaultstate-2" /><code><Link to="/mod/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" DefaultState { get; }"}</code> | <span className="api-desc">Discovery state every player starts with for this landmark.</span> |
| <Link id="m-discoveredicon-2" /><code><Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" DiscoveredIcon { get; set; }"}</code> | <span className="api-desc">Icon shown once a player has discovered the landmark. Setting it resyncs the landmark.</span> |
| <Link id="m-index" /><code>{"uint Index { get; protected set; }"}</code> | <span className="api-desc">The index `LandmarkManager` gave this landmark, or 0 when not registered.</span> |
| <Link id="m-ismasked-2" /><code>{"bool IsMasked { get; }"}</code> | <span className="api-desc">Whether map boards draw this marker below the map's mask layer (probably hidden by unrevealed areas) instead of on top.</span> |
| <Link id="m-map-2" /><code><Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" { get; }"}</code> | <span className="api-desc">Which map this landmark belongs to.</span> |
| <Link id="m-position" /><code>{"Vector2 Position { get; }"}</code> | <span className="api-desc">The landmark's XZ position as a `Vector2`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awarefor" /><code>{"void AwareFor("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Makes the landmark known (but not discovered) for a player. Only does anything when the default state is `None`.</span> |
| <Link id="m-customizeicon" /><code>{"virtual void CustomizeIcon("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | <span className="api-desc">Hook to change the marker info for a specific player before it is sent. Does nothing by default.</span> |
| <Link id="m-deregister" /><code>{"void Deregister()"}</code> | <span className="api-desc">Removes the landmark from `LandmarkManager` and clears its `Index`.</span> |
| <Link id="m-discoverfor" /><code>{"void DiscoverFor("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Marks the landmark discovered for a player, registering first if needed. On the server it also completes the find achievement.</span> |
| <Link id="m-forcesync" /><code>{"void ForceSync()"}</code> | <span className="api-desc">Asks `LandmarkManager` to resend this landmark to players.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Server: registers the landmark on the next frame and hooks deregistering on destroy.</span> |
| <Link id="m-seticons" /><code>{"void SetIcons("}<Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" aware, "}<Link to="/mod/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" discovered)"}</code> | <span className="api-desc">Sets both icons at once and resyncs.</span> |
| <Link id="m-destroyed" /><code>{"protected virtual void Destroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Deregisters the landmark when its entity is destroyed (not when it is only unloaded).</span> |
| <Link id="m-register" /><code>{"protected virtual void Register()"}</code> | <span className="api-desc">Registers with `LandmarkManager` and stores the index, unless the entity is being destroyed.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awareforlocal" /><code>{"private void AwareForLocal()"}</code> | <span className="api-desc">Editor context-menu helper: calls `AwareFor` for the local `Player.Current`.</span> |
| <Link id="m-discoverforlocal" /><code>{"private void DiscoverForLocal()"}</code> | <span className="api-desc">Editor context-menu helper: calls `DiscoverFor` for the local `Player.Current`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Landmark`:

<div className="api-used-in">

[`LandmarkDiscoverZone.landmark`](/mod/game-api/types/alta-world/landmarkdiscoverzone#m-landmark), [`LandmarkManager.AwareFor`](/mod/game-api/types/alta-world/landmarkmanager#m-awarefor), [`LandmarkManager.Deregister`](/mod/game-api/types/alta-world/landmarkmanager#m-deregister), [`LandmarkManager.DiscoverFor`](/mod/game-api/types/alta-world/landmarkmanager#m-discoverfor), [`LandmarkManager.ForceSync`](/mod/game-api/types/alta-world/landmarkmanager#m-forcesync), [`LandmarkManager.Register`](/mod/game-api/types/alta-world/landmarkmanager#m-register), [`ServerLandmarkManager.AwareFor`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-awarefor), [`ServerLandmarkManager.Deregister`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-deregister), [`ServerLandmarkManager.DiscoverFor`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-discoverfor), [`ServerLandmarkManager.ForceSync`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-forcesync), [`ServerLandmarkManager.Register`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-register).

</div>
