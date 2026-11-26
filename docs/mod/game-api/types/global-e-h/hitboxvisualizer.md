---
title: "HitboxVisualizer"
description: "Debug visual for a capsule hitbox: scales an object to the capsule's height and shows it only while the collider is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HitboxVisualizer

A **class** in `Root.Township`, the global namespace.

Debug visual for a capsule hitbox: scales an object to the capsule's height and shows it only while the collider is enabled.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HitboxVisualizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-capsulecollider" /><code>{"private CapsuleCollider capsuleCollider"}</code> | <span className="api-desc">The hitbox being shown.</span> |
| <Link id="m-visual" /><code>{"private GameObject visual"}</code> | <span className="api-desc">Object that draws the hitbox.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Scales the visual by the capsule's height.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Shows the visual only while the capsule collider is enabled.</span> |

</details>
