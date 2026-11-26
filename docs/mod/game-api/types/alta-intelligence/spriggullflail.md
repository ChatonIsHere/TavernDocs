---
title: "SpriggullFlail"
description: "Component on a spriggull that starts its flailing action when it is hit hard by a rigidbody on its hit collider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpriggullFlail

A **class** in `Root.Township`, `Alta.Intelligence`.

Component on a spriggull that starts its flailing action when it is hit hard by a rigidbody on its hit collider. The flail only starts on the server.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpriggullFlail()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitcollider" /><code>{"private Collider hitCollider"}</code> | <span className="api-desc">The only collider whose contacts count.</span> |
| <Link id="m-spriggull" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/spriggull">{"Spriggull"}</Link>{" spriggull"}</code> | <span className="api-desc">The spriggull that flails.</span> |
| <Link id="m-strongflailvelocity" /><code>{"private float strongFlailVelocity"}</code> | <span className="api-desc">Impulse at or above which flail strength is 1 (default 2).</span> |
| <Link id="m-weakflailvelocity" /><code>{"private float weakFlailVelocity"}</code> | <span className="api-desc">Impulse at or below which the hit is ignored (default 1).</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Ignores weak hits and any where a contact isn't on `hitCollider`; otherwise maps impulse to 0 to 1 and calls `Spriggull.BeginFlail` next frame.</span> |

</details>
