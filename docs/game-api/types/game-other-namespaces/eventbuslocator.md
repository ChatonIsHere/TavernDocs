---
title: "EventBusLocator"
description: "Static lookup for event buses by interface type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventBusLocator

A **class** in `Root.Township`, `ATT.EventBus`.

Static lookup for event buses by interface type. `ProjectLifetimeScope` registers the `ITownshipEventBus`, and game code gets it with `Get` to broadcast events.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Documented in** [Console, utilities and Alta assemblies](/game-api/console-and-utilities/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventBusLocator()"}</code> | Creates an `EventBusLocator` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instances" /><code>{"private static readonly Dictionary<Type, IEventBus> instances"}</code> | Registered event buses, keyed by type. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static T Get<T>()"}</code> | Returns the event bus registered for `T`. Logs an error and returns null if none is registered. |
| <Link id="m-register" /><code>{"static void Register<T>(IEventBus eventBus)"}</code> | Registers an event bus under the type `T`, replacing any earlier one. |
