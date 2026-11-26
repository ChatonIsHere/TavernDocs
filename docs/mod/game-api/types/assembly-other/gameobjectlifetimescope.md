---
title: "GameObjectLifetimeScope"
description: "VContainer scope on a single game object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameObjectLifetimeScope

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

VContainer scope on a single game object. With `autoInjectSelf` on, the object it sits on gets its dependencies injected from the parent scope.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`AbstractAltaLifetimeScope`](/mod/game-api/types/assembly-other/abstractaltalifetimescope)
- **Derived types** [`PlayerControllerLifetimeScope`](/mod/game-api/types/assembly-other/playercontrollerlifetimescope)
- **Attributes** `DisallowMultipleComponent`
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameObjectLifetimeScope()"}</code> | Creates a `GameObjectLifetimeScope` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoinjectself" /><code>{"private bool autoInjectSelf"}</code> | If true, this game object is injected when the scope builds. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> | If `autoInjectSelf` is on, adds this game object to the auto-inject list; warns if there is no parent scope. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: removes this game object from the serialized auto-inject list, since it is added at runtime. |

</details>
