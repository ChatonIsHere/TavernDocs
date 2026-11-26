---
title: "RecreateArgumentMode"
description: "When a MethodSyncClass makes a new argument object while reading a message: only if its value is null, always, or never (reuse the existing one)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecreateArgumentMode

An **enum** in `Root.Township`, `Alta.Networking`.

When a `MethodSyncClass` makes a new argument object while reading a message: only if its value is null, always, or never (reuse the existing one).

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Values

| Member |
| --- |
| <Link id="m-always" /><code>{"Always = 1"}</code> |
| <Link id="m-ifnull" /><code>{"IfNull = 0"}</code> |
| <Link id="m-never" /><code>{"Never = 2"}</code> |

## Used in

Members of other types that take, return or hold a `RecreateArgumentMode`:

[`MethodSyncClass<T>.MethodSyncClass<T>`](/mod/game-api/types/alta-networking/methodsyncclass-t#m-ctor), [`MethodSyncClass<T>.recreateArgumentMode`](/mod/game-api/types/alta-networking/methodsyncclass-t#m-recreateargumentmode).
