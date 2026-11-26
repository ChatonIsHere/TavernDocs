---
title: "LocalNetworkScene.InitializeOnAwake"
description: "Helper LocalNetworkScene adds to an inactive entity so it is initialized when it first wakes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalNetworkScene.InitializeOnAwake

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Helper `LocalNetworkScene` adds to an inactive entity so it is initialized when it first wakes.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LocalNetworkScene`](/mod/game-api/types/global-i-l/localnetworkscene)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InitializeOnAwake()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Initializes this object's `NetworkEntity` through the current `LocalNetworkScene`. |

</details>
