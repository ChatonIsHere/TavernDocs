---
title: "Domain"
description: "class Domain in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Domain

A **class** in `Root.Township`, `ATT.Domains`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Domain()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-defaultplayeryspawnoffset" /><code>{"private const float DefaultPlayerYSpawnOffset"}</code> |  |
| <Link id="m-domaincontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-networkprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" networkPrefab"}</code> |  |
| <Link id="m-playerentrypoints" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{"> playerEntryPoints"}</code> |  |
| <Link id="m-spawnpoint" /><code>{"private "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{"? spawnPoint"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> |  |
| <Link id="m-networkprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" { get; }"}</code> |  |
| <Link id="m-player" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; private set; }"}</code> |  |
| <Link id="m-spawnpoint-2" /><code><Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroydomain" /><code>{"async Task DestroyDomain()"}</code> |  |
| <Link id="m-getplayerentrypoint" /><code><Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" GetPlayerEntryPoint("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" injectedDomainController)"}</code> |  |
| <Link id="m-registerplayerentry" /><code>{"void RegisterPlayerEntry("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" entryPoint)"}</code> |  |
| <Link id="m-setplayer" /><code>{"void SetPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-setspawnpoint" /><code>{"void SetSpawnPoint(Transform reference)"}</code> |  |
| <Link id="m-spawnplayer" /><code>{"async void SpawnPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" iPlayer)"}</code> |  |
| <Link id="m-despawnplayercontroller" /><code>{"private void DespawnPlayerController("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-moveplayertospawnpoint" /><code>{"private void MovePlayerToSpawnPoint()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Domain`:

[`DomainController.CreateDomain`](/game-api/types/game-other-namespaces/domaincontroller#m-createdomain), [`DomainController.CreateDomainForPlayer`](/game-api/types/game-other-namespaces/domaincontroller#m-createdomainforplayer), [`DomainController.DeregisterDomain`](/game-api/types/game-other-namespaces/domaincontroller#m-deregisterdomain), [`DomainController.DestroyDomain`](/game-api/types/game-other-namespaces/domaincontroller#m-destroydomain), [`DomainController.domainOffsetMap`](/game-api/types/game-other-namespaces/domaincontroller#m-domainoffsetmap), [`DomainController.GetDomainForPlayer`](/game-api/types/game-other-namespaces/domaincontroller#m-getdomainforplayer), [`DomainController.GetDomainIndex`](/game-api/types/game-other-namespaces/domaincontroller#m-getdomainindex), [`DomainController.universalDomainPrefab`](/game-api/types/game-other-namespaces/domaincontroller#m-universaldomainprefab), [`IDomainController.CreateDomainForPlayer`](/game-api/types/game-other-namespaces/idomaincontroller#m-createdomainforplayer), [`IDomainController.DestroyDomain`](/game-api/types/game-other-namespaces/idomaincontroller#m-destroydomain), [`IDomainController.GetDomainForPlayer`](/game-api/types/game-other-namespaces/idomaincontroller#m-getdomainforplayer), [`MicroTutorial.domain`](/game-api/types/game-other-namespaces/microtutorial#m-domain), [`PlayerInPositionObserver.domain`](/game-api/types/game-other-namespaces/playerinpositionobserver#m-domain), [`PrefabInPositionObserver.domain`](/game-api/types/game-other-namespaces/prefabinpositionobserver#m-domain).
