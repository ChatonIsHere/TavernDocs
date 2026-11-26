---
title: "ServerJoinLock"
description: "A reason the server is refusing joins, such as a wipe or a console lock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerJoinLock

A **struct** in `Root.Township`, `Alta.Networking.Servers`.

A reason the server is refusing joins, such as a wipe or a console lock. Kept in the server's `ServerLocks`; while any exist, join requests are denied with the highest-level lock's message.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`ServerLockCollection`](/mod/game-api/types/alta-networking/serverlockcollection)
- **Documented in** [Server lifecycle](/mod/game-api/networking/server-lifecycle)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-level" /><code>{"int level"}</code> | <span className="api-desc">Priority of the lock; the highest-level lock's message is shown to refused players.</span> |
| <Link id="m-message" /><code>{"string message"}</code> | <span className="api-desc">Fixed message shown to players refused by this lock.</span> |
| <Link id="m-messagegenerator" /><code>{"Func<string> messageGenerator"}</code> | <span className="api-desc">Optional function that builds the message each time, for messages that change (like a countdown).</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message-2" /><code>{"string Message { get; }"}</code> | <span className="api-desc">The lock message, from `messageGenerator` when set, otherwise `message`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the message and level as text.</span> |

## Used in

Members of other types that take, return or hold a `ServerJoinLock`:

<div className="api-used-in">

[`ServerLockCollection.Add`](/mod/game-api/types/alta-networking/serverlockcollection#m-add), [`ServerLockCollection.GetEnumerator`](/mod/game-api/types/alta-networking/serverlockcollection#m-getenumerator), [`ServerLockCollection.locks`](/mod/game-api/types/alta-networking/serverlockcollection#m-locks), [`ServerLockCollection.Remove`](/mod/game-api/types/alta-networking/serverlockcollection#m-remove).

</div>
