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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedBoolAccess()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbool" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" animatedBool"}</code> | The looked-up networked bool. |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | The network animator holding the bool. |
| <Link id="m-boolname" /><code>{"private string boolName"}</code> | Name of the animator bool to drive. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(bool value)"}</code> | Sets the networked animator bool to the given value. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes sure the animator is awake and looks up the bool by name. |

</details>
