---
title: "ServerLockCollection"
description: "class ServerLockCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerLockCollection

A **class** in `Root.Township`, `Alta.Networking.Servers`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IEnumerable<ServerJoinLock>`, `IEnumerable`
- **Documented in** [Server lifecycle](/game-api/networking/server-lifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerLockCollection()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-locks" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-networking/serverjoinlock">{"ServerJoinLock"}</Link>{"> locks"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/game-api/types/alta-networking/serverjoinlock">{"ServerJoinLock"}</Link>{" serverLock)"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/alta-networking/serverjoinlock">{"ServerJoinLock"}</Link>{"> GetEnumerator()"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/alta-networking/serverjoinlock">{"ServerJoinLock"}</Link>{" serverLock)"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerLockCollection`:

[`ServerHandler.ServerLocks`](/game-api/types/alta-networking/serverhandler#m-serverlocks).
