---
title: "PooledEffectParent"
description: "Client: shows a pooled effect parented to this object while it is enabled, and releases it when disabled or when the parent entity is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledEffectParent

A **class** in `Root.Township`, the global namespace.

Client: shows a pooled effect parented to this object while it is enabled, and releases it when disabled or when the parent entity is destroyed.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledEffectParent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The pooled effect to show.</span> |
| <Link id="m-parententity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parentEntity"}</code> | <span className="api-desc">Optional entity whose destruction releases the effect.</span> |
| <Link id="m-pooled" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled"}</code> | <span className="api-desc">The effect currently shown, or null.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the parent entity's `DestroyedByScene` to release the effect.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Releases the effect on the next timeline tick.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Gets a pooled effect from `definition` under this transform.</span> |
| <Link id="m-released" /><code>{"private void Released("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" released)"}</code> | <span className="api-desc">Forgets the effect once it has been released.</span> |

</details>
