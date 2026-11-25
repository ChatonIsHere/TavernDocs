---
title: "ServerJoinLock"
description: "struct ServerJoinLock in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerJoinLock

A **struct** in `Root.Township`, `Alta.Networking.Servers`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`ServerLockCollection`](/game-api/types/alta-networking/serverlockcollection)
- **Documented in** [Server lifecycle](/game-api/networking/server-lifecycle)

## Fields

| Member |
| --- |
| <Link id="m-level" /><code>{"int level"}</code> |
| <Link id="m-message" /><code>{"string message"}</code> |
| <Link id="m-messagegenerator" /><code>{"Func<string> messageGenerator"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-message-2" /><code>{"string Message { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |

## Used in

Members of other types that take, return or hold a `ServerJoinLock`:

[`ServerLockCollection.Add`](/game-api/types/alta-networking/serverlockcollection#m-add), [`ServerLockCollection.GetEnumerator`](/game-api/types/alta-networking/serverlockcollection#m-getenumerator), [`ServerLockCollection.locks`](/game-api/types/alta-networking/serverlockcollection#m-locks), [`ServerLockCollection.Remove`](/game-api/types/alta-networking/serverlockcollection#m-remove).
