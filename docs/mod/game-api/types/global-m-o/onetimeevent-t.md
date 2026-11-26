---
title: "OneTimeEvent<T>"
description: "Event that fires once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeEvent&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

Event that fires once. Handlers added after it fired run straight away with the same arguments.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`TrackedEvent<T>`](/mod/game-api/types/global-t-x/trackedevent-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OneTimeEvent(bool isBlockingDuplicateCall = true)"}</code> | <span className="api-desc">Creates an `OneTimeEvent` from `isBlockingDuplicateCall`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-args" /><code>{"private object[] args"}</code> | <span className="api-desc">Arguments from the invoke, replayed to late handlers.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Shared `AltaEvent` logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isblockingduplicatecall" /><code>{"bool IsBlockingDuplicateCall { get; }"}</code> | <span className="api-desc">If on (the default), a second `Invoke` logs an error and does nothing.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"override void Invoke(params object[] args)"}</code> | <span className="api-desc">Fires the event and remembers the arguments; a second call is refused with an error when `IsBlockingDuplicateCall` is set.</span> |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> op_Addition("}<Link to="/mod/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> | <span className="api-desc">Adds a handler, or calls it at once if the event already fired.</span> |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> op_Subtraction("}<Link to="/mod/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> | <span className="api-desc">Removes a handler.</span> |

## Used in

Members of other types that take, return or hold a `OneTimeEvent&lt;T>`:

<div className="api-used-in">

[`NetworkEntity.InitializationFinished`](/mod/game-api/types/alta-networking/networkentity#m-initializationfinished), [`OneTimeEventTest.oneTimeEvent`](/mod/game-api/types/global-m-o/onetimeeventtest#m-onetimeevent).

</div>
