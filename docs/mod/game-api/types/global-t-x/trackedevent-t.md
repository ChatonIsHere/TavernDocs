---
title: "TrackedEvent<T>"
description: "A delegate list you add to with + and fire with Invoke, which remembers whether it has fired."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrackedEvent&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

A delegate list you add to with `+` and fire with `Invoke`, which remembers whether it has fired. Used for the client's entity-spawned listeners and as the base of `OneTimeEvent<T>`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Derived types** [`OneTimeEvent<T>`](/mod/game-api/types/global-m-o/onetimeevent-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrackedEvent()"}</code> | <span className="api-desc">Creates a `TrackedEvent` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-eventhandlers" /><code>{"protected readonly List<T> eventHandlers"}</code> | <span className="api-desc">The handlers added so far.</span> |
| <Link id="m-eventhandlersbuffer" /><code>{"protected readonly List<T> eventHandlersBuffer"}</code> | <span className="api-desc">Copy of the handlers used during `Invoke`, so handlers can remove themselves safely.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Shared logger (the `AltaEvent` logger) for parameter mismatches and handler exceptions.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinvoked" /><code>{"bool IsInvoked { get; set; }"}</code> | <span className="api-desc">True once `Invoke` has run.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Removes every handler.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(params object[] args)"}</code> | <span className="api-desc">Calls every handler with the arguments, last added first, then sets `IsInvoked`. Logs and skips if the arguments don't match.</span> |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> op_Addition("}<Link to="/mod/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> | <span className="api-desc">Adds a handler and returns the same event.</span> |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> op_Subtraction("}<Link to="/mod/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> | <span className="api-desc">Removes a handler and returns the same event.</span> |
| <Link id="m-hascorrectparameters" /><code>{"protected bool HasCorrectParameters(object[] args)"}</code> | <span className="api-desc">Checks the arguments match the first handler's parameter types. True when there are no handlers.</span> |
| <Link id="m-invokehandler" /><code>{"protected void InvokeHandler(T handler, object[] args)"}</code> | <span className="api-desc">Calls one handler, logging any exception instead of throwing it.</span> |

## Used in

Members of other types that take, return or hold a `TrackedEvent&lt;T>`:

<div className="api-used-in">

[`ClientSpawnManager.entitySpawnedListeners`](/mod/game-api/types/alta-networking/clientspawnmanager#m-entityspawnedlisteners), [`ClientSpawnManager.RunSpawnEvent`](/mod/game-api/types/alta-networking/clientspawnmanager#m-runspawnevent), [`ClientSpawnManager.SpawnEvent`](/mod/game-api/types/alta-networking/clientspawnmanager#m-spawnevent).

</div>
