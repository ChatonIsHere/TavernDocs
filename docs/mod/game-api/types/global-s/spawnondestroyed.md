---
title: "SpawnOnDestroyed"
description: "Client: plays a pooled effect where the object was when it is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnOnDestroyed

A **class** in `Root.Township`, the global namespace.

Client: plays a pooled effect where the object was when it is destroyed. Skipped on headless servers and during app quit.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnOnDestroyed()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pooldefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" poolDefinition"}</code> | <span className="api-desc">The pooled effect to spawn.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"virtual void Awake()"}</code> | <span className="api-desc">Hooks app quit so no effect spawns while shutting down.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Gets the pooled effect at this position and rotation, unless headless or quitting.</span> |
| <Link id="m-quit" /><code>{"private void Quit()"}</code> | <span className="api-desc">Clears the pool definition so `OnDestroy` does nothing.</span> |

</details>
