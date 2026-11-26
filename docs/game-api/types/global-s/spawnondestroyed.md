---
title: "SpawnOnDestroyed"
description: "Client: plays a pooled effect where the object was when it is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnOnDestroyed

A **class** in `Root.Township`, no namespace.

Client: plays a pooled effect where the object was when it is destroyed. Skipped on headless servers and during app quit.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnOnDestroyed()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pooldefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" poolDefinition"}</code> | The pooled effect to spawn. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"virtual void Awake()"}</code> | Hooks app quit so no effect spawns while shutting down. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Gets the pooled effect at this position and rotation, unless headless or quitting. |
| <Link id="m-quit" /><code>{"private void Quit()"}</code> | Clears the pool definition so `OnDestroy` does nothing. |

</details>
