---
title: "LocalMoveTest"
description: "Test component that moves or spins its object in a loop on the server, to test syncing of moving things."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalMoveTest

A **class** in `Root.Township`, no namespace.

Test component that moves or spins its object in a loop on the server, to test syncing of moving things.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Type`](/game-api/types/global-i-l/localmovetest-type)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalMoveTest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-magnitude" /><code>{"private float magnitude"}</code> | Distance of the sine movement. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Start position. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Start rotation. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Rate of the motion. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/global-i-l/localmovetest-type">{"LocalMoveTest.Type"}</Link>{" type"}</code> | Which motion to run: Y rotation, Y movement or X movement. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Server: spins the object around Y, or bobs it on Y or X with a sine wave, from its start pose. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Stores the start position and rotation. |

</details>
