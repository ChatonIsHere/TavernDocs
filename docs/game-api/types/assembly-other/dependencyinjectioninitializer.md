---
title: "DependencyInjectionInitializer"
description: "Runs very early (execution order -15000) and creates the project lifetime scope in built players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DependencyInjectionInitializer

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Runs very early (execution order -15000) and creates the project lifetime scope in built players.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `DefaultExecutionOrder`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DependencyInjectionInitializer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-projectlifetimescope" /><code>{"private "}<Link to="/game-api/types/assembly-other/projectlifetimescope">{"ProjectLifetimeScope"}</Link>{" projectLifetimeScope"}</code> | The project lifetime scope prefab. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Instantiates the project lifetime scope, except in the editor. |

</details>
