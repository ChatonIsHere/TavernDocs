---
title: "DomainController"
description: "class DomainController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DomainController

A **class** in `Root.Township`, `ATT.Domains`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IDomainController`](/game-api/types/game-other-namespaces/idomaincontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DomainController()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-domainheight" /><code>{"private float domainHeight"}</code> |
| <Link id="m-domainoffsetmap" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{", int> domainOffsetMap"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-spacingbetweendomains" /><code>{"private float spacingBetweenDomains"}</code> |
| <Link id="m-syncadddomaintoaddedchunks" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> syncAddDomainToAddedChunks"}</code> |
| <Link id="m-syncremovedomainfromaddedchunks" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> syncRemoveDomainFromAddedChunks"}</code> |
| <Link id="m-universaldomainprefab" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" universalDomainPrefab"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-createdomainforplayer" /><code>{"async Task<"}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{"> CreateDomainForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-deregisterdomain" /><code>{"void DeregisterDomain("}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> |
| <Link id="m-destroydomain" /><code>{"async Task DestroyDomain("}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> |
| <Link id="m-getdomainforplayer" /><code><Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" GetDomainForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-createdomain" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" CreateDomain("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-getdomainindex" /><code>{"private int GetDomainIndex("}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> |
| <Link id="m-getnextavailableoffsetindex" /><code>{"private int GetNextAvailableOffsetIndex()"}</code> |
| <Link id="m-syncadddomaintoaddedchunks-2" /><code>{"private void SyncAddDomainToAddedChunks("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" domainChunk)"}</code> |
| <Link id="m-syncremovedomainfromaddedchunks-2" /><code>{"private void SyncRemoveDomainFromAddedChunks("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" domainChunk)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `DomainController`:

[`GameLifetimeScope.domainController`](/game-api/types/assembly-other/gamelifetimescope#m-domaincontroller).
