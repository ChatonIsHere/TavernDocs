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
| <Link id="m-ctor" /><code>{"GameObjectLifetimeScope()"}</code> | <span className="api-desc">Creates a `GameObjectLifetimeScope` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoinjectself" /><code>{"private bool autoInjectSelf"}</code> | <span className="api-desc">If true, this game object is injected when the scope builds.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> | <span className="api-desc">If `autoInjectSelf` is on, adds this game object to the auto-inject list; warns if there is no parent scope.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: removes this game object from the serialized auto-inject list, since it is added at runtime.</span> |

</details>
