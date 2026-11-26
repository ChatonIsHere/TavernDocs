---
title: "RuntimePlatformObject"
description: "Turns its GameObject off unless the game is running on one of the chosen platforms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuntimePlatformObject

A **class** in `Root.Township`, no namespace.

Turns its GameObject off unless the game is running on one of the chosen platforms.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RuntimePlatformObject()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetplatforms" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatforms"}</code> | Platforms the object stays active on. Default Windows. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Runs the platform check. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Runs the platform check again. |
| <Link id="m-run" /><code>{"private void Run()"}</code> | Sets the GameObject active only if `targetPlatforms` includes the current runtime platform. |

</details>
