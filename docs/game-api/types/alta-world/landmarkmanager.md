---
title: "LandmarkManager"
description: "class LandmarkManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkManager

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`SingletonBehaviour<LandmarkManager>`](/game-api/types/assembly-other/singletonbehaviour-t), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour), [`ISavable<LandmarkManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LandmarkManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LandmarkManager`](/game-api/types/alta-world/landmarkmanager), [`LandmarkManagerSaveData`](/game-api/types/alta-world/landmarkmanagersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changesync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-initialsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync"}</code> |  |
| <Link id="m-map" /><code>{"private "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientlandmarkmanager" /><code><Link to="/game-api/types/alta-world/clientlandmarkmanager">{"ClientLandmarkManager"}</Link>{" "}<Link to="/game-api/types/alta-world/clientlandmarkmanager">{"ClientLandmarkManager"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-serverlandmarkmanager" /><code><Link to="/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" "}<Link to="/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awarefor" /><code>{"void AwareFor("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> |  |
| <Link id="m-discoverfor" /><code>{"void DiscoverFor("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-forcesync" /><code>{"static void ForceSync("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> |  |
| <Link id="m-register" /><code>{"static uint Register("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, bool isKeptAfterUnload)"}</code> |  |
| <Link id="m-wipeplayersave" /><code>{"async Task WipePlayerSave(int identifier)"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
