---
title: "IEventBus<T>"
description: "An event source that can also send: anything holding it can raise T events to every listener."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IEventBus&lt;T&gt;

An **interface** in `Alta.EventBus.Runtime`, `Alta.EventBusSystem`.

An event source that can also send: anything holding it can raise `T` events to every listener.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IEventSource<T>`](/game-api/types/assembly-other/ieventsource-t)
- **Derived types** [`EventBus<T>`](/game-api/types/assembly-other/eventbus-t)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-send" /><code>{"void Send(T eventObject)"}</code> | Raises the event, passing `eventObject` to every listener added through `AddListener`. |
