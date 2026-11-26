---
title: "AddressableSystemWarmer"
description: "Initializes Addressables and checks the purchasable catalog when it wakes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddressableSystemWarmer

A **class** in `Root.Township`, no namespace.

Initializes Addressables and checks the purchasable catalog when it wakes.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AddressableSystemWarmer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | Initializes Addressables, then runs `Purchasable.CheckCatalogAsync`. |

</details>
