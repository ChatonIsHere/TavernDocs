---
title: "ILinkProvider"
description: "interface ILinkProvider in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILinkProvider

An **interface** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`EntityManager`](/game-api/types/alta-networking/entitymanager), [`LocalLinkProvider`](/game-api/types/global-i-l/locallinkprovider)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"void Empty("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link)"}</code> |  |
| <Link id="m-fill" /><code>{"void Fill("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> |  |
| <Link id="m-getlink" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" GetLink(uint identifier)"}</code> |  |
| <Link id="m-getnextlink" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" GetNextLink()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ILinkProvider`:

[`ClientSpawnManager.ClientSpawnManager`](/game-api/types/alta-networking/clientspawnmanager#m-ctor), [`EntityManager.linkProvider`](/game-api/types/alta-networking/entitymanager#m-linkprovider), [`ServerSpawnManager.ServerSpawnManager`](/game-api/types/alta-networking/serverspawnmanager#m-ctor), [`SpawnManager.LinkProvider`](/game-api/types/alta-networking/spawnmanager#m-linkprovider), [`SpawnManager.SpawnManager`](/game-api/types/alta-networking/spawnmanager#m-ctor), [`LocalSpawnManager.LocalSpawnManager`](/game-api/types/global-i-l/localspawnmanager#m-ctor).
