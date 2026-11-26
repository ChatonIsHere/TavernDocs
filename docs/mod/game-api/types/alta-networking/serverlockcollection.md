---
title: "ServerLockCollection"
description: "The set of join locks on a server, held as ServerHandler.ServerLocks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerLockCollection

A **class** in `Root.Township`, `Alta.Networking.Servers`.

The set of join locks on a server, held as `ServerHandler.ServerLocks`. While any lock is in it, the server turns away joining players with the highest-level lock's message (used during wipes).

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `IEnumerable<ServerJoinLock>`, `IEnumerable`
- **Documented in** [Server lifecycle](/mod/game-api/networking/server-lifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerLockCollection()"}</code> | Creates a `ServerLockCollection` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-locks" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-networking/serverjoinlock">{"ServerJoinLock"}</Link>{"> locks"}</code> | The active locks. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of active locks; above zero means players can't join. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/mod/game-api/types/alta-networking/serverjoinlock">{"ServerJoinLock"}</Link>{" serverLock)"}</code> | Adds a lock and logs it. Returns false if it was already there. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/alta-networking/serverjoinlock">{"ServerJoinLock"}</Link>{"> GetEnumerator()"}</code> | Enumerates the active locks. |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/mod/game-api/types/alta-networking/serverjoinlock">{"ServerJoinLock"}</Link>{" serverLock)"}</code> | Removes a lock and logs it. Returns false if it wasn't there. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the active locks. |

</details>

## Used in

Members of other types that take, return or hold a `ServerLockCollection`:

[`ServerHandler.ServerLocks`](/mod/game-api/types/alta-networking/serverhandler#m-serverlocks).
