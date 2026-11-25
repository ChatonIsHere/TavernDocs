---
title: "TrackedEvent<T>"
description: "A delegate list you add to with + and fire with Invoke, which remembers whether it has fired. Used for the client's entity-spawned listeners and as th"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrackedEvent&lt;T&gt;

A **class** in `Root.Township`, no namespace.

A delegate list you add to with `+` and fire with `Invoke`, which remembers whether it has fired. Used for the client's entity-spawned listeners and as the base of `OneTimeEvent<T>`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Derived types** [`OneTimeEvent<T>`](/game-api/types/global-m-o/onetimeevent-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrackedEvent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-eventhandlers" /><code>{"protected readonly List<T> eventHandlers"}</code> | The handlers added so far. |
| <Link id="m-eventhandlersbuffer" /><code>{"protected readonly List<T> eventHandlersBuffer"}</code> | Copy of the handlers used during `Invoke`, so handlers can remove themselves safely. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinvoked" /><code>{"bool IsInvoked { get; set; }"}</code> | True once `Invoke` has run. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes every handler. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(params object[] args)"}</code> | Calls every handler with the arguments, last added first, then sets `IsInvoked`. Logs and skips if the arguments don't match. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> op_Addition("}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> | Adds a handler and returns the same event. |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> op_Subtraction("}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> | Removes a handler and returns the same event. |
| <Link id="m-hascorrectparameters" /><code>{"protected bool HasCorrectParameters(object[] args)"}</code> | Checks the arguments match the first handler's parameter types. True when there are no handlers. |
| <Link id="m-invokehandler" /><code>{"protected void InvokeHandler(T handler, object[] args)"}</code> | Calls one handler, logging any exception instead of throwing it. |

## Used in

Members of other types that take, return or hold a `TrackedEvent&lt;T>`:

[`ClientSpawnManager.entitySpawnedListeners`](/game-api/types/alta-networking/clientspawnmanager#m-entityspawnedlisteners), [`ClientSpawnManager.RunSpawnEvent`](/game-api/types/alta-networking/clientspawnmanager#m-runspawnevent), [`ClientSpawnManager.SpawnEvent`](/game-api/types/alta-networking/clientspawnmanager#m-spawnevent).
