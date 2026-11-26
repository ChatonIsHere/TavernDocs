---
title: "AnimatedBoolAccess"
description: "Small helper that exposes one named bool of a NetworkAnimator as a Set method, so a UnityEvent can drive a networked animator bool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedBoolAccess

A **class** in `Root.Township`, `Alta.Networking.Animation`.

Small helper that exposes one named bool of a `NetworkAnimator` as a `Set` method, so a UnityEvent can drive a networked animator bool.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedBoolAccess()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbool" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" animatedBool"}</code> | <span className="api-desc">The looked-up networked bool.</span> |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | <span className="api-desc">The network animator holding the bool.</span> |
| <Link id="m-boolname" /><code>{"private string boolName"}</code> | <span className="api-desc">Name of the animator bool to drive.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(bool value)"}</code> | <span className="api-desc">Sets the networked animator bool to the given value.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes sure the animator is awake and looks up the bool by name.</span> |

</details>
