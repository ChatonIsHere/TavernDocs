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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IDomainController`](/mod/game-api/types/game-other-namespaces/idomaincontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DomainController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-domainheight" /><code>{"private float domainHeight"}</code> | <span className="api-desc">Y position domains are spawned at (default -200).</span> |
| <Link id="m-domainoffsetmap" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{", int> domainOffsetMap"}</code> | <span className="api-desc">Each live domain and the slot index it was spawned at.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-spacingbetweendomains" /><code>{"private float spacingBetweenDomains"}</code> | <span className="api-desc">Distance along Z between domain slots (default 400).</span> |
| <Link id="m-syncadddomaintoaddedchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> syncAddDomainToAddedChunks"}</code> | <span className="api-desc">Method sync (SyncE) that sends a new domain chunk to clients.</span> |
| <Link id="m-syncremovedomainfromaddedchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> syncRemoveDomainFromAddedChunks"}</code> | <span className="api-desc">Method sync (SyncD) that tells clients to drop a domain chunk.</span> |
| <Link id="m-universaldomainprefab" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" universalDomainPrefab"}</code> | <span className="api-desc">The `Domain` prefab spawned for each player's domain.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdomainforplayer" /><code>{"async Task<"}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{"> CreateDomainForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: creates a domain for the player, syncs its chunk to clients, clears its save, force-loads it and removes its entities.</span> |
| <Link id="m-deregisterdomain" /><code>{"void DeregisterDomain("}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> | <span className="api-desc">Removes a domain from the offset map so its slot can be reused. Does not destroy it.</span> |
| <Link id="m-destroydomain" /><code>{"async Task DestroyDomain("}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> | <span className="api-desc">Server: tells clients to drop the domain chunk, deregisters it, destroys the domain entity and clears the chunk's save.</span> |
| <Link id="m-getdomainforplayer" /><code><Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" GetDomainForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Returns the domain whose player is the given player, or null.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the two method syncs used to add and remove domain chunks on clients.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the object name and entity identifier.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createdomain" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" CreateDomain("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Spawns `universalDomainPrefab` at the next free offset, assigns the player and registers its chunk as a location chunk.</span> |
| <Link id="m-getdomainindex" /><code>{"private int GetDomainIndex("}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> | <span className="api-desc">Returns the offset slot index a domain was given.</span> |
| <Link id="m-getnextavailableoffsetindex" /><code>{"private int GetNextAvailableOffsetIndex()"}</code> | <span className="api-desc">Returns the lowest slot index no domain is using.</span> |
| <Link id="m-syncadddomaintoaddedchunks-2" /><code>{"private void SyncAddDomainToAddedChunks("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" domainChunk)"}</code> | <span className="api-desc">Sync handler: on clients, fixes the received domain chunk's bounds and registers it with `LocationChunkHelper`.</span> |
| <Link id="m-syncremovedomainfromaddedchunks-2" /><code>{"private void SyncRemoveDomainFromAddedChunks("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" domainChunk)"}</code> | <span className="api-desc">Sync handler: on clients, deregisters the received domain chunk from `LocationChunkHelper`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DomainController`:

<div className="api-used-in">

[`GameLifetimeScope.domainController`](/mod/game-api/types/assembly-other/gamelifetimescope#m-domaincontroller).

</div>
