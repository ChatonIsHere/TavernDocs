---
title: "EventBus<T>"
description: "A simple in-process event bus for one event type T: listeners subscribe, and Send calls each one in order."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventBus&lt;T&gt;

A **class** in `Alta.EventBus.Runtime`, `Alta.EventBusSystem`.

A simple in-process event bus for one event type `T`: listeners subscribe, and `Send` calls each one in order.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IEventBus<T>`](/mod/game-api/types/assembly-other/ieventbus-t), [`IEventSource<T>`](/mod/game-api/types/assembly-other/ieventsource-t)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventBus()"}</code> | <span className="api-desc">Creates an `EventBus` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-duplicatelistenerlogprefix" /><code>{"const string DuplicateListenerLogPrefix"}</code> | <span className="api-desc">Text at the start of the error logged for a duplicate subscription.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-listeners" /><code>{"private readonly List<Action<T>> listeners"}</code> | <span className="api-desc">The subscribed listeners.</span> |
| <Link id="m-logger" /><code>{"private readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlistener" /><code>{"void AddListener(Action<T> listener)"}</code> | <span className="api-desc">Adds a listener. Adding the same delegate twice logs an error and is ignored.</span> |
| <Link id="m-removelistener" /><code>{"void RemoveListener(Action<T> listener)"}</code> | <span className="api-desc">Removes a listener if it is subscribed.</span> |
| <Link id="m-send" /><code>{"void Send(T eventObject)"}</code> | <span className="api-desc">Calls every listener with the event object, in subscription order.</span> |

## Used in

Members of other types that take, return or hold a `EventBus&lt;T>`:

<div className="api-used-in">

[`AnalyticsService.eventBus`](/mod/game-api/types/assembly-other/analyticsservice#m-eventbus).

</div>
