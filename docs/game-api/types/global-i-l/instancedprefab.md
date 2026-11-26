---
title: "InstancedPrefab"
description: "Simple pool of plain (non-networked) prefab instances, keyed by prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstancedPrefab

A **class** in `Root.Township`, no namespace.

Simple pool of plain (non-networked) prefab instances, keyed by prefab. Used by forest fill to place and recycle objects.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstancedPrefab()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameobject" /><code>{"private GameObject gameObject"}</code> | Cached game object. |
| <Link id="m-instances" /><code>{"private static Dictionary<GameObject, Stack<"}<Link to="/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{">> instances"}</code> | Static pools of free instances per prefab. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | Cached transform. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"GameObject Prefab { get; private set; }"}</code> | The prefab this instance came from, used as its pool key. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Hides the instance and pushes it back onto its prefab's pool. |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" Get("}<Link to="/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" prefab)"}</code> | Pops a pooled instance of the prefab, or creates one (adding the component if needed). It comes back inactive or as instantiated. |
| <Link id="m-get-2" /><code>{"static "}<Link to="/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" Get(GameObject prefab)"}</code> | Pops a pooled instance of the prefab, or creates one (adding the component if needed). It comes back inactive or as instantiated. |
| <Link id="m-initialize" /><code>{"void Initialize(GameObject prefab)"}</code> | Stores the source prefab and caches the transform and game object. |
| <Link id="m-moveandenable" /><code>{"void MoveAndEnable(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | Sets position, rotation and scale, then activates the instance. |

## Used in

Members of other types that take, return or hold a `InstancedPrefab`:

[`ForestFillCore.Destroy`](/game-api/types/alta-world-generation/forestfillcore#m-destroy).
