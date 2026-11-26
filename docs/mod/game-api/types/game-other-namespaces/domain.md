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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Domain()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | <span className="api-desc">Backing field for `Chunk`, the location chunk the domain's players spawn into.</span> |
| <Link id="m-defaultplayeryspawnoffset" /><code>{"private const float DefaultPlayerYSpawnOffset"}</code> | <span className="api-desc">Height above the domain's position used for the default spawn point: 1.5 metres.</span> |
| <Link id="m-domaincontroller" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController"}</code> | <span className="api-desc">Domain controller injected by VContainer, used by `DestroyDomain`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-networkprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" networkPrefab"}</code> | <span className="api-desc">Backing field for `NetworkPrefab`.</span> |
| <Link id="m-playerentrypoints" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{"> playerEntryPoints"}</code> | <span className="api-desc">Where each player was before entering, used by `GetPlayerEntryPoint` to send them back.</span> |
| <Link id="m-spawnpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{"? spawnPoint"}</code> | <span className="api-desc">Backing field for `SpawnPoint`. When unset, the getter fills it from the domain's own position plus 1.5 metres up.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk-2" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | <span className="api-desc">The domain's own location chunk, registered when the domain is created.</span> |
| <Link id="m-networkprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" { get; }"}</code> | <span className="api-desc">The domain's network prefab.</span> |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; private set; }"}</code> | <span className="api-desc">The player this domain belongs to.</span> |
| <Link id="m-spawnpoint-2" /><code><Link to="/mod/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Where players spawn inside the domain. Defaults to 1.5 m above the domain's origin.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroydomain" /><code>{"async Task DestroyDomain()"}</code> | <span className="api-desc">Asks the domain controller to destroy this domain.</span> |
| <Link id="m-getplayerentrypoint" /><code><Link to="/mod/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" GetPlayerEntryPoint("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Where the player was before entering, to send them back. Falls back to a random respawn point and logs an error.</span> |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" injectedDomainController)"}</code> | <span className="api-desc">Dependency injection hook that receives the `IDomainController`.</span> |
| <Link id="m-registerplayerentry" /><code>{"void RegisterPlayerEntry("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-utilities/spawnpoint">{"SpawnPoint"}</Link>{" entryPoint)"}</code> | <span className="api-desc">Records where a player entered from.</span> |
| <Link id="m-setplayer" /><code>{"void SetPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Sets the owning player. Called by the domain controller.</span> |
| <Link id="m-setspawnpoint" /><code>{"void SetSpawnPoint(Transform reference)"}</code> | <span className="api-desc">Sets where players spawn inside the domain from a transform.</span> |
| <Link id="m-spawnplayer" /><code>{"async void SpawnPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" iPlayer)"}</code> | <span className="api-desc">Saves the player's current spot as their entry point, despawns their body and spawns a new one at the domain's spawn point.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-despawnplayercontroller" /><code>{"private void DespawnPlayerController("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Records where the player was as their entry point, saves them and destroys their controller. Uses `Add`, so a second entry for the same player throws.</span> |
| <Link id="m-moveplayertospawnpoint" /><code>{"private void MovePlayerToSpawnPoint()"}</code> | <span className="api-desc">Moves the domain's `Player` (set by `SetPlayer`) to the spawn point and turns them to face its direction.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Domain`:

<div className="api-used-in">

[`DomainController.CreateDomain`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-createdomain), [`DomainController.CreateDomainForPlayer`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-createdomainforplayer), [`DomainController.DeregisterDomain`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-deregisterdomain), [`DomainController.DestroyDomain`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-destroydomain), [`DomainController.domainOffsetMap`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-domainoffsetmap), [`DomainController.GetDomainForPlayer`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-getdomainforplayer), [`DomainController.GetDomainIndex`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-getdomainindex), [`DomainController.universalDomainPrefab`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-universaldomainprefab), [`IDomainController.CreateDomainForPlayer`](/mod/game-api/types/game-other-namespaces/idomaincontroller#m-createdomainforplayer), [`IDomainController.DestroyDomain`](/mod/game-api/types/game-other-namespaces/idomaincontroller#m-destroydomain), [`IDomainController.GetDomainForPlayer`](/mod/game-api/types/game-other-namespaces/idomaincontroller#m-getdomainforplayer), [`MicroTutorial.domain`](/mod/game-api/types/game-other-namespaces/microtutorial#m-domain), [`PlayerInPositionObserver.domain`](/mod/game-api/types/game-other-namespaces/playerinpositionobserver#m-domain), [`PrefabInPositionObserver.domain`](/mod/game-api/types/game-other-namespaces/prefabinpositionobserver#m-domain).

</div>
