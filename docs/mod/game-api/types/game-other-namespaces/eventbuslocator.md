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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Documented in** [Console, utilities and Alta assemblies](/mod/game-api/console-and-utilities/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventBusLocator()"}</code> | <span className="api-desc">Creates an `EventBusLocator` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instances" /><code>{"private static readonly Dictionary<Type, IEventBus> instances"}</code> | <span className="api-desc">Registered event buses, keyed by type.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static T Get<T>()"}</code> | <span className="api-desc">Returns the event bus registered for `T`. Logs an error and returns null if none is registered.</span> |
| <Link id="m-register" /><code>{"static void Register<T>(IEventBus eventBus)"}</code> | <span className="api-desc">Registers an event bus under the type `T`, replacing any earlier one.</span> |
