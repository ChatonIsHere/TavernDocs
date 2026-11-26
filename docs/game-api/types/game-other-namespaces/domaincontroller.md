---
title: "DomainController"
description: "Creates and destroys per-player domains: private copies of a location spawned in a row under the map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DomainController

A **class** in `Root.Township`, `ATT.Domains`.

Creates and destroys per-player domains: private copies of a location spawned in a row under the map. Server creates them; clients get the domain chunk registered by sync.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IDomainController`](/game-api/types/game-other-namespaces/idomaincontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DomainController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-domainheight" /><code>{"private float domainHeight"}</code> | Y position domains are spawned at (default -200). |
| <Link id="m-domainoffsetmap" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{", int> domainOffsetMap"}</code> | Each live domain and the slot index it was spawned at. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-spacingbetweendomains" /><code>{"private float spacingBetweenDomains"}</code> | Distance along Z between domain slots (default 400). |
| <Link id="m-syncadddomaintoaddedchunks" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> syncAddDomainToAddedChunks"}</code> | Method sync (SyncE) that sends a new domain chunk to clients. |
| <Link id="m-syncremovedomainfromaddedchunks" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> syncRemoveDomainFromAddedChunks"}</code> | Method sync (SyncD) that tells clients to drop a domain chunk. |
| <Link id="m-universaldomainprefab" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" universalDomainPrefab"}</code> | The `Domain` prefab spawned for each player's domain. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdomainforplayer" /><code>{"async Task<"}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{"> CreateDomainForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: creates a domain for the player, syncs its chunk to clients, clears its save, force-loads it and removes its entities. |
| <Link id="m-deregisterdomain" /><code>{"void DeregisterDomain("}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> | Removes a domain from the offset map so its slot can be reused. Does not destroy it. |
| <Link id="m-destroydomain" /><code>{"async Task DestroyDomain("}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> | Server: tells clients to drop the domain chunk, deregisters it, destroys the domain entity and clears the chunk's save. |
| <Link id="m-getdomainforplayer" /><code><Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" GetDomainForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Returns the domain whose player is the given player, or null. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the two method syncs used to add and remove domain chunks on clients. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the object name and entity identifier. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createdomain" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" CreateDomain("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Spawns `universalDomainPrefab` at the next free offset, assigns the player and registers its chunk as a location chunk. |
| <Link id="m-getdomainindex" /><code>{"private int GetDomainIndex("}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> | Returns the offset slot index a domain was given. |
| <Link id="m-getnextavailableoffsetindex" /><code>{"private int GetNextAvailableOffsetIndex()"}</code> | Returns the lowest slot index no domain is using. |
| <Link id="m-syncadddomaintoaddedchunks-2" /><code>{"private void SyncAddDomainToAddedChunks("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" domainChunk)"}</code> | Sync handler: on clients, fixes the received domain chunk's bounds and registers it with `LocationChunkHelper`. |
| <Link id="m-syncremovedomainfromaddedchunks-2" /><code>{"private void SyncRemoveDomainFromAddedChunks("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" domainChunk)"}</code> | Sync handler: on clients, deregisters the received domain chunk from `LocationChunkHelper`. |

</details>

## Used in

Members of other types that take, return or hold a `DomainController`:

[`GameLifetimeScope.domainController`](/game-api/types/assembly-other/gamelifetimescope#m-domaincontroller).
