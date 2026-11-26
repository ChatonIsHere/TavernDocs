---
title: "AddressableSystemWarmer"
description: "Initializes Addressables and checks the purchasable catalog when it wakes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddressableSystemWarmer

A **class** in `Root.Township`, the global namespace.

Initializes Addressables and checks the purchasable catalog when it wakes.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AddressableSystemWarmer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | <span className="api-desc">Initializes Addressables, then runs `Purchasable.CheckCatalogAsync`.</span> |

</details>
