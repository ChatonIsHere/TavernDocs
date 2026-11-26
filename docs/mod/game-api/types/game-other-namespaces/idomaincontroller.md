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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`DomainController`](/mod/game-api/types/game-other-namespaces/domaincontroller)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdomainforplayer" /><code>{"Task<"}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{"> CreateDomainForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: spawns a domain for the player at the next free offset.</span> |
| <Link id="m-destroydomain" /><code>{"Task DestroyDomain("}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> | <span className="api-desc">Server: destroys a domain and clears its save.</span> |
| <Link id="m-getdomainforplayer" /><code><Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" GetDomainForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Returns the player's domain, or null.</span> |

## Used in

Members of other types that take, return or hold a `IDomainController`:

<div className="api-used-in">

[`Domain.domainController`](/mod/game-api/types/game-other-namespaces/domain#m-domaincontroller), [`Domain.Inject`](/mod/game-api/types/game-other-namespaces/domain#m-inject), [`MicroTutorial.domainController`](/mod/game-api/types/game-other-namespaces/microtutorial#m-domaincontroller), [`MicroTutorial.MicroTutorial`](/mod/game-api/types/game-other-namespaces/microtutorial#m-ctor), [`MicroTutorialFactory.domainController`](/mod/game-api/types/game-other-namespaces/microtutorialfactory#m-domaincontroller), [`MicroTutorialFactory.MicroTutorialFactory`](/mod/game-api/types/game-other-namespaces/microtutorialfactory#m-ctor), [`MicroTutorialSystem.Inject`](/mod/game-api/types/game-other-namespaces/microtutorialsystem#m-inject).

</div>
