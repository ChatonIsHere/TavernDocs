---
title: "SecondaryCollisionCheck"
description: "Added to a held pickup by the local holder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SecondaryCollisionCheck

A **class** in `Root.Township`, the global namespace.

Added to a held pickup by the local holder. When it hits another networked rigidbody, takes authority over it and reports the hit. Removes itself once nobody holds the pickup.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SecondaryCollisionCheck()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The held pickup on the same object.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's interaction ended event.</span> |
| <Link id="m-destroycollisioncheck" /><code>{"private void DestroyCollisionCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Removes this component once the pickup has no interactors.</span> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">On hitting a `NetworkRigidbody`, lerps its authority to this client and sends a secondary collision through the pickup's rigidbody.</span> |

</details>
