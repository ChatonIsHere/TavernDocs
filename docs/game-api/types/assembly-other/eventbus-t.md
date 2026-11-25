---
title: "EventBus<T>"
description: "class EventBus<T> in Alta.EventBus.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventBus&lt;T&gt;

A **class** in `Alta.EventBus.Runtime`, `Alta.EventBusSystem`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IEventBus<T>`](/game-api/types/assembly-other/ieventbus-t), [`IEventSource<T>`](/game-api/types/assembly-other/ieventsource-t)
- **Documented in** [Event buses and services](/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventBus()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-duplicatelistenerlogprefix" /><code>{"const string DuplicateListenerLogPrefix"}</code> |  |
| <Link id="m-listeners" /><code>{"private readonly List<Action<T>> listeners"}</code> |  |
| <Link id="m-logger" /><code>{"private readonly Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlistener" /><code>{"void AddListener(Action<T> listener)"}</code> |  |
| <Link id="m-removelistener" /><code>{"void RemoveListener(Action<T> listener)"}</code> |  |
| <Link id="m-send" /><code>{"void Send(T eventObject)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EventBus&lt;T>`:

[`AnalyticsService.eventBus`](/game-api/types/assembly-other/analyticsservice#m-eventbus).
