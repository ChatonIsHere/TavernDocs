---
title: "RandomChildWeight"
description: "Gives a child object a weight for ChooseRandomChild, which picks one child by weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomChildWeight

A **class** in `Root.Township`, the global namespace.

Gives a child object a weight for `ChooseRandomChild`, which picks one child by weight. Children without it count as weight 1.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomChildWeight()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-weight" /><code>{"private float weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | Weight of this child in a random pick, 1 by default. |
