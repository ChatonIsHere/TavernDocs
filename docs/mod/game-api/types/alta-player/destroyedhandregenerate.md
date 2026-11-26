---
title: "DestroyedHandRegenerate"
description: "Marker added to a hand target object so the game can rebuild it if it gets destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyedHandRegenerate

A **class** in `Root.Township`, `Alta.Character`.

Marker added to a hand target object so the game can rebuild it if it gets destroyed. `HandTargetHandler` adds it and sets `Destroyed`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyedHandRegenerate()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"Action Destroyed"}</code> | <span className="api-desc">Callback run when the object is destroyed outside of quitting or reloading.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Calls `Destroyed` unless the application is quitting or reloading.</span> |

</details>
