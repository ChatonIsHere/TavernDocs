---
title: "TavernEvents.TavernEvent<T>"
description: "An event mods can subscribe to but only TavernLib can raise."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernEvents.TavernEvent&lt;T&gt;

A **class** in `TavernLib`, `TavernLib.Utils`.

An event mods can subscribe to but only TavernLib can raise. Used for `TavernEvents.SocketCreated` and `Roles.RolesChanged`.

- **Listed in** [TavernLib.Utils](/tavernlib-api/types/utils)
- **Nested in** [`TavernEvents`](/tavernlib-api/types/utils/tavernevents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TavernEvent()"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"private event Action<T> Handlers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-subscribe" /><code>{"void Subscribe(Action<T> handler)"}</code> | Adds a handler. |
| <Link id="m-unsubscribe" /><code>{"void Unsubscribe(Action<T> handler)"}</code> | Removes a handler. Pass the same delegate you subscribed, not a new lambda. |
| <Link id="m-invoke" /><code>{"internal void Invoke(T arg)"}</code> | Internal: raises the event, calling every handler with `arg`. Nothing catches a handler's exception. |

## Used in

Members of other types that take, return or hold a `TavernEvent&lt;T>`:

[`Roles.RolesChanged`](/tavernlib-api/types/moddingapi/roles#m-roleschanged), [`TavernEvents.SocketCreated`](/tavernlib-api/types/utils/tavernevents#m-socketcreated).
