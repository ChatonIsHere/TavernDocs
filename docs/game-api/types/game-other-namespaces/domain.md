---
title: "Domain"
description: "A private space for one player, spawned by DomainController below the map (y -200, spaced 400 apart)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Domain

A **class** in `Root.Township`, `ATT.Domains`.

A private space for one player, spawned by `DomainController` below the map (y -200, spaced 400 apart). The micro tutorial uses one: the player's body is despawned and respawned inside, then returned to where they entered.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Domain()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> |
| <Link id="m-defaultplayeryspawnoffset" /><code>{"private const float DefaultPlayerYSpawnOffset"}</code> |
| <Link id="m-domaincontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-networkprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" networkPrefab"}</code> |
| <Link id="m-playerentrypoints" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{"> playerEntryPoints"}</code> |
| <Link id="m-spawnpoint" /><code>{"private "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{"? spawnPoint"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | The domain's own location chunk, registered when the domain is created. |
| <Link id="m-networkprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" { get; }"}</code> | The domain's network prefab. |
| <Link id="m-player" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; private set; }"}</code> | The player this domain belongs to. |
| <Link id="m-spawnpoint-2" /><code><Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" { get; set; }"}</code> | Where players spawn inside the domain. Defaults to 1.5 m above the domain's origin. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroydomain" /><code>{"async Task DestroyDomain()"}</code> | Asks the domain controller to destroy this domain. |
| <Link id="m-getplayerentrypoint" /><code><Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" GetPlayerEntryPoint("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Where the player was before entering, to send them back. Falls back to a random respawn point and logs an error. |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" injectedDomainController)"}</code> | Dependency injection hook that receives the `IDomainController`. |
| <Link id="m-registerplayerentry" /><code>{"void RegisterPlayerEntry("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" entryPoint)"}</code> | Records where a player entered from. |
| <Link id="m-setplayer" /><code>{"void SetPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sets the owning player. Called by the domain controller. |
| <Link id="m-setspawnpoint" /><code>{"void SetSpawnPoint(Transform reference)"}</code> | Sets where players spawn inside the domain from a transform. |
| <Link id="m-spawnplayer" /><code>{"async void SpawnPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" iPlayer)"}</code> | Saves the player's current spot as their entry point, despawns their body and spawns a new one at the domain's spawn point. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-despawnplayercontroller" /><code>{"private void DespawnPlayerController("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-moveplayertospawnpoint" /><code>{"private void MovePlayerToSpawnPoint()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Domain`:

[`DomainController.CreateDomain`](/game-api/types/game-other-namespaces/domaincontroller#m-createdomain), [`DomainController.CreateDomainForPlayer`](/game-api/types/game-other-namespaces/domaincontroller#m-createdomainforplayer), [`DomainController.DeregisterDomain`](/game-api/types/game-other-namespaces/domaincontroller#m-deregisterdomain), [`DomainController.DestroyDomain`](/game-api/types/game-other-namespaces/domaincontroller#m-destroydomain), [`DomainController.domainOffsetMap`](/game-api/types/game-other-namespaces/domaincontroller#m-domainoffsetmap), [`DomainController.GetDomainForPlayer`](/game-api/types/game-other-namespaces/domaincontroller#m-getdomainforplayer), [`DomainController.GetDomainIndex`](/game-api/types/game-other-namespaces/domaincontroller#m-getdomainindex), [`DomainController.universalDomainPrefab`](/game-api/types/game-other-namespaces/domaincontroller#m-universaldomainprefab), [`IDomainController.CreateDomainForPlayer`](/game-api/types/game-other-namespaces/idomaincontroller#m-createdomainforplayer), [`IDomainController.DestroyDomain`](/game-api/types/game-other-namespaces/idomaincontroller#m-destroydomain), [`IDomainController.GetDomainForPlayer`](/game-api/types/game-other-namespaces/idomaincontroller#m-getdomainforplayer), [`MicroTutorial.domain`](/game-api/types/game-other-namespaces/microtutorial#m-domain), [`PlayerInPositionObserver.domain`](/game-api/types/game-other-namespaces/playerinpositionobserver#m-domain), [`PrefabInPositionObserver.domain`](/game-api/types/game-other-namespaces/prefabinpositionobserver#m-domain).
