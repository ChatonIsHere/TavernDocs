---
title: "AnimatorBoolAccess"
description: "Small helper that sets one bool on a plain Unity Animator, so a UnityEvent can drive it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatorBoolAccess

A **class** in `Root.Township`, `Alta.Networking.Animation`.

Small helper that sets one bool on a plain Unity `Animator`, so a UnityEvent can drive it. Local only, not networked.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatorBoolAccess()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">The Unity animator.</span> |
| <Link id="m-boolname" /><code>{"private string boolName"}</code> | <span className="api-desc">Name of the animator bool.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(bool value)"}</code> | <span className="api-desc">Sets the animator bool to the given value.</span> |
