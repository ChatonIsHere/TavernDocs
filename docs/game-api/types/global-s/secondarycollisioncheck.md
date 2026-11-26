---
title: "SecondaryCollisionCheck"
description: "Added to a held pickup by the local holder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SecondaryCollisionCheck

A **class** in `Root.Township`, no namespace.

Added to a held pickup by the local holder. When it hits another networked rigidbody, takes authority over it and reports the hit. Removes itself once nobody holds the pickup.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SecondaryCollisionCheck()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The held pickup on the same object. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's interaction ended event. |
| <Link id="m-destroycollisioncheck" /><code>{"private void DestroyCollisionCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Removes this component once the pickup has no interactors. |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | On hitting a `NetworkRigidbody`, lerps its authority to this client and sends a secondary collision through the pickup's rigidbody. |

</details>
