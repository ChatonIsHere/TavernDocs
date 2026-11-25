---
title: "OneTimeEvent<T>"
description: "class OneTimeEvent<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeEvent&lt;T&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`TrackedEvent<T>`](/game-api/types/global-t-x/trackedevent-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OneTimeEvent(bool isBlockingDuplicateCall = true)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-args" /><code>{"private object[] args"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isblockingduplicatecall" /><code>{"bool IsBlockingDuplicateCall { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"override void Invoke(params object[] args)"}</code> |  |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> op_Addition("}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> |  |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> op_Subtraction("}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<T> altaEvent, T eventHandler)"}</code> |  |

## Used in

Members of other types that take, return or hold a `OneTimeEvent&lt;T>`:

[`NetworkEntity.InitializationFinished`](/game-api/types/alta-networking/networkentity#m-initializationfinished), [`OneTimeEventTest.oneTimeEvent`](/game-api/types/global-m-o/onetimeeventtest#m-onetimeevent).
