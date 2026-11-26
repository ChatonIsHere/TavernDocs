---
title: "AttackTest"
description: "Debug component that sets the animator's Attack bool while a key is held."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackTest

A **class** in `Root.Township`, the global namespace.

Debug component that sets the animator's `Attack` bool while a key is held.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">The animator on this object.</span> |
| <Link id="m-key" /><code>{"private KeyCode key"}</code> | <span className="api-desc">Key that drives the attack (Space by default).</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the animator on the same object.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Sets `Attack` to whether the key is held.</span> |

</details>
