---
title: "LocalLinkProvider"
description: "Do-nothing ILinkProvider used by LocalNetworkScene's spawn manager when there is no real network."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalLinkProvider

A **class** in `Root.Township`, the global namespace.

Do-nothing `ILinkProvider` used by `LocalNetworkScene`'s spawn manager when there is no real network.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`ILinkProvider`](/mod/game-api/types/alta-networking/ilinkprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalLinkProvider()"}</code> | <span className="api-desc">Creates a `LocalLinkProvider` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"void Empty("}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-fill" /><code>{"void Fill("}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-getentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | <span className="api-desc">Always returns null.</span> |
| <Link id="m-getlink" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" GetLink(uint identifier)"}</code> | <span className="api-desc">Returns a new link with identifier 0.</span> |
| <Link id="m-getnextlink" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" GetNextLink()"}</code> | <span className="api-desc">Always returns null.</span> |
