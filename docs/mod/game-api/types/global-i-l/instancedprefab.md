---
title: "InstancedPrefab"
description: "Simple pool of plain (non-networked) prefab instances, keyed by prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstancedPrefab

A **class** in `Root.Township`, the global namespace.

Simple pool of plain (non-networked) prefab instances, keyed by prefab. Used by forest fill to place and recycle objects.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstancedPrefab()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameobject" /><code>{"private GameObject gameObject"}</code> | <span className="api-desc">Cached game object.</span> |
| <Link id="m-instances" /><code>{"private static Dictionary<GameObject, Stack<"}<Link to="/mod/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{">> instances"}</code> | <span className="api-desc">Static pools of free instances per prefab.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Cached transform.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"GameObject Prefab { get; private set; }"}</code> | <span className="api-desc">The prefab this instance came from, used as its pool key.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Hides the instance and pushes it back onto its prefab's pool.</span> |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" Get("}<Link to="/mod/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Pops a pooled instance of the prefab, or creates one (adding the component if needed). It comes back inactive or as instantiated.</span> |
| <Link id="m-get-2" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" Get(GameObject prefab)"}</code> | <span className="api-desc">Pops a pooled instance of the prefab, or creates one (adding the component if needed). It comes back inactive or as instantiated.</span> |
| <Link id="m-initialize" /><code>{"void Initialize(GameObject prefab)"}</code> | <span className="api-desc">Stores the source prefab and caches the transform and game object.</span> |
| <Link id="m-moveandenable" /><code>{"void MoveAndEnable(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | <span className="api-desc">Sets position, rotation and scale, then activates the instance.</span> |

## Used in

Members of other types that take, return or hold a `InstancedPrefab`:

<div className="api-used-in">

[`ForestFillCore.Destroy`](/mod/game-api/types/alta-world-generation/forestfillcore#m-destroy).

</div>
