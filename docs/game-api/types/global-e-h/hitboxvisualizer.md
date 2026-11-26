---
title: "HitboxVisualizer"
description: "Debug visual for a capsule hitbox: scales an object to the capsule's height and shows it only while the collider is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HitboxVisualizer

A **class** in `Root.Township`, no namespace.

Debug visual for a capsule hitbox: scales an object to the capsule's height and shows it only while the collider is enabled.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HitboxVisualizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-capsulecollider" /><code>{"private CapsuleCollider capsuleCollider"}</code> | The hitbox being shown. |
| <Link id="m-visual" /><code>{"private GameObject visual"}</code> | Object that draws the hitbox. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Scales the visual by the capsule's height. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Shows the visual only while the capsule collider is enabled. |

</details>
