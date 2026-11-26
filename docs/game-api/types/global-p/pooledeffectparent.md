---
title: "PooledEffectParent"
description: "Client: shows a pooled effect parented to this object while it is enabled, and releases it when disabled or when the parent entity is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledEffectParent

A **class** in `Root.Township`, no namespace.

Client: shows a pooled effect parented to this object while it is enabled, and releases it when disabled or when the parent entity is destroyed.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledEffectParent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | The pooled effect to show. |
| <Link id="m-parententity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parentEntity"}</code> | Optional entity whose destruction releases the effect. |
| <Link id="m-pooled" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled"}</code> | The effect currently shown, or null. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the parent entity's `DestroyedByScene` to release the effect. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Releases the effect on the next timeline tick. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Gets a pooled effect from `definition` under this transform. |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" released)"}</code> | Forgets the effect once it has been released. |

</details>
