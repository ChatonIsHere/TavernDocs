---
title: "LocalMoveTest"
description: "Test component that moves or spins its object in a loop on the server, to test syncing of moving things."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalMoveTest

A **class** in `Root.Township`, the global namespace.

Test component that moves or spins its object in a loop on the server, to test syncing of moving things.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Type`](/mod/game-api/types/global-i-l/localmovetest-type)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalMoveTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-magnitude" /><code>{"private float magnitude"}</code> | <span className="api-desc">Distance of the sine movement.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Start position.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Start rotation.</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Rate of the motion.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/localmovetest-type">{"LocalMoveTest.Type"}</Link>{" type"}</code> | <span className="api-desc">Which motion to run: Y rotation, Y movement or X movement.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Server: spins the object around Y, or bobs it on Y or X with a sine wave, from its start pose.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Stores the start position and rotation.</span> |

</details>
