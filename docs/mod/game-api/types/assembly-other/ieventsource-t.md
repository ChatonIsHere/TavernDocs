---
title: "IEventSource<T>"
description: "The listen-only side of an event bus: lets code subscribe to T events without being able to send them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IEventSource&lt;T&gt;

An **interface** in `Alta.EventBus.Runtime`, `Alta.EventBusSystem`.

The listen-only side of an event bus: lets code subscribe to `T` events without being able to send them.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AnalyticsService`](/mod/game-api/types/assembly-other/analyticsservice), [`IAnalyticsService`](/mod/game-api/types/assembly-other/ianalyticsservice), [`EventBus<T>`](/mod/game-api/types/assembly-other/eventbus-t), [`IEventBus<T>`](/mod/game-api/types/assembly-other/ieventbus-t)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlistener" /><code>{"void AddListener(Action<T> listener)"}</code> | Subscribes a callback that runs each time a `T` event is sent. |
| <Link id="m-removelistener" /><code>{"void RemoveListener(Action<T> listener)"}</code> | Unsubscribes a callback added with `AddListener`. |
