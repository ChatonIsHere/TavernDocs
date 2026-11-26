---
title: "RuntimePlatformObject"
description: "Turns its GameObject off unless the game is running on one of the chosen platforms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuntimePlatformObject

A **class** in `Root.Township`, the global namespace.

Turns its GameObject off unless the game is running on one of the chosen platforms.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RuntimePlatformObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetplatforms" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatforms"}</code> | <span className="api-desc">Platforms the object stays active on. Default Windows.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Runs the platform check.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Runs the platform check again.</span> |
| <Link id="m-run" /><code>{"private void Run()"}</code> | <span className="api-desc">Sets the GameObject active only if `targetPlatforms` includes the current runtime platform.</span> |

</details>
