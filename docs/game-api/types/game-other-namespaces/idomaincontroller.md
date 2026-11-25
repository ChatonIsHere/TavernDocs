---
title: "IDomainController"
description: "Creates and tracks per-player domains (spawned areas tied to one player)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDomainController

An **interface** in `Root.Township`, `ATT.Domains`.

Creates and tracks per-player domains (spawned areas tied to one player). Implemented by `DomainController` and bound in `GameLifetimeScope`. Create and destroy are server only.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`DomainController`](/game-api/types/game-other-namespaces/domaincontroller)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdomainforplayer" /><code>{"Task<"}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{"> CreateDomainForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: spawns a domain for the player at the next free offset. |
| <Link id="m-destroydomain" /><code>{"Task DestroyDomain("}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> | Server: destroys a domain and clears its save. |
| <Link id="m-getdomainforplayer" /><code><Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" GetDomainForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Returns the player's domain, or null. |

## Used in

Members of other types that take, return or hold a `IDomainController`:

[`Domain.domainController`](/game-api/types/game-other-namespaces/domain#m-domaincontroller), [`Domain.Inject`](/game-api/types/game-other-namespaces/domain#m-inject), [`MicroTutorial.domainController`](/game-api/types/game-other-namespaces/microtutorial#m-domaincontroller), [`MicroTutorial.MicroTutorial`](/game-api/types/game-other-namespaces/microtutorial#m-ctor), [`MicroTutorialFactory.domainController`](/game-api/types/game-other-namespaces/microtutorialfactory#m-domaincontroller), [`MicroTutorialFactory.MicroTutorialFactory`](/game-api/types/game-other-namespaces/microtutorialfactory#m-ctor), [`MicroTutorialSystem.Inject`](/game-api/types/game-other-namespaces/microtutorialsystem#m-inject).
