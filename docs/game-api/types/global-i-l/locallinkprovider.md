---
title: "LocalLinkProvider"
description: "Do-nothing ILinkProvider used by LocalNetworkScene's spawn manager when there is no real network."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalLinkProvider

A **class** in `Root.Township`, no namespace.

Do-nothing `ILinkProvider` used by `LocalNetworkScene`'s spawn manager when there is no real network.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`ILinkProvider`](/game-api/types/alta-networking/ilinkprovider)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocalLinkProvider()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"void Empty("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link)"}</code> | Does nothing. |
| <Link id="m-fill" /><code>{"void Fill("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Does nothing. |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | Always returns null. |
| <Link id="m-getlink" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" GetLink(uint identifier)"}</code> | Returns a new link with identifier 0. |
| <Link id="m-getnextlink" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" GetNextLink()"}</code> | Always returns null. |
