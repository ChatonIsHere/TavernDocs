---
title: "IDomainController"
description: "interface IDomainController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDomainController

An **interface** in `Root.Township`, `ATT.Domains`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`DomainController`](/game-api/types/game-other-namespaces/domaincontroller)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdomainforplayer" /><code>{"Task<"}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{"> CreateDomainForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-destroydomain" /><code>{"Task DestroyDomain("}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain)"}</code> |  |
| <Link id="m-getdomainforplayer" /><code><Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" GetDomainForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IDomainController`:

[`Domain.domainController`](/game-api/types/game-other-namespaces/domain#m-domaincontroller), [`Domain.Inject`](/game-api/types/game-other-namespaces/domain#m-inject), [`MicroTutorial.domainController`](/game-api/types/game-other-namespaces/microtutorial#m-domaincontroller), [`MicroTutorial.MicroTutorial`](/game-api/types/game-other-namespaces/microtutorial#m-ctor), [`MicroTutorialFactory.domainController`](/game-api/types/game-other-namespaces/microtutorialfactory#m-domaincontroller), [`MicroTutorialFactory.MicroTutorialFactory`](/game-api/types/game-other-namespaces/microtutorialfactory#m-ctor), [`MicroTutorialSystem.Inject`](/game-api/types/game-other-namespaces/microtutorialsystem#m-inject).
