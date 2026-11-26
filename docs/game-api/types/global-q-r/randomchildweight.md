---
title: "RandomChildWeight"
description: "Gives a child object a weight for ChooseRandomChild, which picks one child by weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomChildWeight

A **class** in `Root.Township`, no namespace.

Gives a child object a weight for `ChooseRandomChild`, which picks one child by weight. Children without it count as weight 1.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RandomChildWeight()"}</code> |

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
