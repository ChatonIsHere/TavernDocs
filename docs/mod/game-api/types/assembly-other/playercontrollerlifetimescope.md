---
title: "PlayerControllerLifetimeScope"
description: "VContainer scope on a player controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerLifetimeScope

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

VContainer scope on a player controller. Injects the object like `GameObjectLifetimeScope` and registers its multi-lock model.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GameObjectLifetimeScope`](/mod/game-api/types/assembly-other/gameobjectlifetimescope)
- **Attributes** `DisallowMultipleComponent`
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerControllerLifetimeScope()"}</code> | <span className="api-desc">Creates a `PlayerControllerLifetimeScope` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-concreteplayercontrollermultilockmodel" /><code>{"private MonoBehaviour concretePlayerControllerMultiLockModel"}</code> | <span className="api-desc">Component that should implement `IPlayerControllerMultiLockModel`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> | <span className="api-desc">Runs the base setup, then registers the multi-lock model.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-registercontrolsafetylockmodel" /><code>{"private void RegisterControlSafetyLockModel(IContainerBuilder builder)"}</code> | <span className="api-desc">Binds `IPlayerControllerMultiLockModel` to the assigned component, or to a `FakePlayerControllerMultiLockModel` if it isn't one.</span> |

</details>
