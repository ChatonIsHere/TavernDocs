---
title: "ILinkProvider"
description: "Hands out and tracks network entity links (identifier slots)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILinkProvider

An **interface** in `Root.Township`, `Alta.Networking.Internal`.

Hands out and tracks network entity links (identifier slots). `EntityManager` is the main implementation; `LocalLinkProvider` is another.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`EntityManager`](/mod/game-api/types/alta-networking/entitymanager), [`LocalLinkProvider`](/mod/game-api/types/global-i-l/locallinkprovider)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"void Empty("}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link)"}</code> | Clears a link so its slot can be reused. |
| <Link id="m-fill" /><code>{"void Fill("}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Puts an entity into a link. |
| <Link id="m-getentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | The entity with this identifier, or null. |
| <Link id="m-getlink" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" GetLink(uint identifier)"}</code> | The link for an identifier. |
| <Link id="m-getnextlink" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" GetNextLink()"}</code> | The next free link for a new entity. |

## Used in

Members of other types that take, return or hold a `ILinkProvider`:

[`ClientSpawnManager.ClientSpawnManager`](/mod/game-api/types/alta-networking/clientspawnmanager#m-ctor), [`EntityManager.linkProvider`](/mod/game-api/types/alta-networking/entitymanager#m-linkprovider), [`ServerSpawnManager.ServerSpawnManager`](/mod/game-api/types/alta-networking/serverspawnmanager#m-ctor), [`SpawnManager.LinkProvider`](/mod/game-api/types/alta-networking/spawnmanager#m-linkprovider), [`SpawnManager.SpawnManager`](/mod/game-api/types/alta-networking/spawnmanager#m-ctor), [`LocalSpawnManager.LocalSpawnManager`](/mod/game-api/types/global-i-l/localspawnmanager#m-ctor).
