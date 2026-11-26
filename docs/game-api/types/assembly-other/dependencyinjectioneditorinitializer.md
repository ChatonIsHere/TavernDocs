---
title: "DependencyInjectionEditorInitializer"
description: "Editor asset holding a reference to the project lifetime scope."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DependencyInjectionEditorInitializer

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Editor asset holding a reference to the project lifetime scope. Has no behaviour in this build.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DependencyInjectionEditorInitializer()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-projectlifetimescope" /><code>{"private "}<Link to="/game-api/types/assembly-other/projectlifetimescope">{"ProjectLifetimeScope"}</Link>{" projectLifetimeScope"}</code> | The project lifetime scope prefab. |

</details>
