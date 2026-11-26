---
title: "AnimationRandomStart"
description: "Client component that jumps an animator forward by a random time at start so copies of the same animation don't play in step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationRandomStart

A **class** in `Root.Township`, no namespace.

Client component that jumps an animator forward by a random time at start so copies of the same animation don't play in step.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimationRandomStart()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | The animator to offset. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Client: advances the animator by a random 0 to 1000 seconds. |

</details>
