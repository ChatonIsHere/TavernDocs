---
title: "OneTimeEvent<T>"
description: "Event that fires once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeEvent&lt;T&gt;

A **class** in `Root.Township`, no namespace.

Event that fires once. Handlers added after it fired run straight away with the same arguments.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`TrackedEvent<T>`](/game-api/types/global-t-x/trackedevent-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OneTimeEvent(bool isBlockingDuplicateCall = true)"}</code> | Creates an `OneTimeEvent` from `isBlockingDuplicateCall`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-args" /><code>{"private object[] args"}</code> | Arguments from the invoke, replayed to late handlers. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Shared `AltaEvent` logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isblockingduplicatecall" /><code>{"bool IsBlockingDuplicateCall { get; }"}</code> | If on (the default), a second `Invoke` logs an error and does nothing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"override void Invoke(params object[] args)"}</code> | Fires the event and remembers the arguments; a second call is refused with an error when `IsBlockingDuplicateCall` is set. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> op_Addition("}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> | Adds a handler, or calls it at once if the event already fired. |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> op_Subtraction("}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> | Removes a handler. |

## Used in

Members of other types that take, return or hold a `OneTimeEvent&lt;T>`:

[`NetworkEntity.InitializationFinished`](/game-api/types/alta-networking/networkentity#m-initializationfinished), [`OneTimeEventTest.oneTimeEvent`](/game-api/types/global-m-o/onetimeeventtest#m-onetimeevent).
