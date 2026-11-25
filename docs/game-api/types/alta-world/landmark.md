---
title: "Landmark"
description: "class Landmark in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Landmark

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LandmarkSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LandmarkSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LandmarkSaveData`](/game-api/types/alta-world/landmarksavedata), [`MovingLandmark`](/game-api/types/alta-world/movinglandmark)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Landmark()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon" /><code>{"private "}<Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" awareIcon"}</code> |  |
| <Link id="m-defaultstate" /><code>{"private "}<Link to="/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" defaultState"}</code> |  |
| <Link id="m-discoveredicon" /><code>{"private "}<Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" discoveredIcon"}</code> |  |
| <Link id="m-findaction" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" findAction"}</code> |  |
| <Link id="m-iskeptafterunload" /><code>{"protected bool isKeptAfterUnload"}</code> |  |
| <Link id="m-ismasked" /><code>{"private bool isMasked"}</code> |  |
| <Link id="m-map" /><code>{"private "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awareicon-2" /><code><Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" AwareIcon { get; set; }"}</code> |  |
| <Link id="m-defaultstate-2" /><code><Link to="/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{" DefaultState { get; }"}</code> |  |
| <Link id="m-discoveredicon-2" /><code><Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" DiscoveredIcon { get; set; }"}</code> |  |
| <Link id="m-index" /><code>{"uint Index { get; protected set; }"}</code> |  |
| <Link id="m-ismasked-2" /><code>{"bool IsMasked { get; }"}</code> |  |
| <Link id="m-map-2" /><code><Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" { get; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector2 Position { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awarefor" /><code>{"void AwareFor("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-customizeicon" /><code>{"virtual void CustomizeIcon("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> |  |
| <Link id="m-deregister" /><code>{"void Deregister()"}</code> |  |
| <Link id="m-discoverfor" /><code>{"void DiscoverFor("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-forcesync" /><code>{"void ForceSync()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-seticons" /><code>{"void SetIcons("}<Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" aware, "}<Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" discovered)"}</code> |  |
| <Link id="m-awareforlocal" /><code>{"private void AwareForLocal()"}</code> |  |
| <Link id="m-destroyed" /><code>{"protected virtual void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-discoverforlocal" /><code>{"private void DiscoverForLocal()"}</code> |  |
| <Link id="m-register" /><code>{"protected virtual void Register()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Landmark`:

[`LandmarkDiscoverZone.landmark`](/game-api/types/alta-world/landmarkdiscoverzone#m-landmark), [`LandmarkManager.AwareFor`](/game-api/types/alta-world/landmarkmanager#m-awarefor), [`LandmarkManager.Deregister`](/game-api/types/alta-world/landmarkmanager#m-deregister), [`LandmarkManager.DiscoverFor`](/game-api/types/alta-world/landmarkmanager#m-discoverfor), [`LandmarkManager.ForceSync`](/game-api/types/alta-world/landmarkmanager#m-forcesync), [`LandmarkManager.Register`](/game-api/types/alta-world/landmarkmanager#m-register), [`ServerLandmarkManager.AwareFor`](/game-api/types/alta-world/serverlandmarkmanager#m-awarefor), [`ServerLandmarkManager.Deregister`](/game-api/types/alta-world/serverlandmarkmanager#m-deregister), [`ServerLandmarkManager.DiscoverFor`](/game-api/types/alta-world/serverlandmarkmanager#m-discoverfor), [`ServerLandmarkManager.ForceSync`](/game-api/types/alta-world/serverlandmarkmanager#m-forcesync), [`ServerLandmarkManager.Register`](/game-api/types/alta-world/serverlandmarkmanager#m-register).
