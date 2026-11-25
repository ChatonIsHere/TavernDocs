---
title: "TrackedEvent<T>"
description: "class TrackedEvent<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrackedEvent&lt;T&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Derived types** [`OneTimeEvent<T>`](/game-api/types/global-m-o/onetimeevent-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrackedEvent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-eventhandlers" /><code>{"protected readonly List<T> eventHandlers"}</code> |  |
| <Link id="m-eventhandlersbuffer" /><code>{"protected readonly List<T> eventHandlersBuffer"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinvoked" /><code>{"bool IsInvoked { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke(params object[] args)"}</code> |  |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> op_Addition("}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> |  |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> op_Subtraction("}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> |  |
| <Link id="m-hascorrectparameters" /><code>{"protected bool HasCorrectParameters(object[] args)"}</code> |  |
| <Link id="m-invokehandler" /><code>{"protected void InvokeHandler(T handler, object[] args)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TrackedEvent&lt;T>`:

[`ClientSpawnManager.entitySpawnedListeners`](/game-api/types/alta-networking/clientspawnmanager#m-entityspawnedlisteners), [`ClientSpawnManager.RunSpawnEvent`](/game-api/types/alta-networking/clientspawnmanager#m-runspawnevent), [`ClientSpawnManager.SpawnEvent`](/game-api/types/alta-networking/clientspawnmanager#m-spawnevent).
