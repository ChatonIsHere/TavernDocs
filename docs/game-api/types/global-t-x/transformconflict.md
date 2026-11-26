---
title: "TransformConflict"
description: "A component that just records two transforms that conflict with each other."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformConflict

A **class** in `Root.Township`, no namespace.

A component that just records two transforms that conflict with each other. Nothing else in the code uses it, so it is probably an editor or debugging marker.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformConflict()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-one" /><code>{"private Transform one"}</code> | Backing field for `One`. |
| <Link id="m-two" /><code>{"private Transform two"}</code> | Backing field for `Two`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-one-2" /><code>{"Transform One { get; }"}</code> | The first transform of the conflict. |
| <Link id="m-two-2" /><code>{"Transform Two { get; }"}</code> | The second transform of the conflict. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconflict" /><code>{"void CreateConflict(Transform one, Transform two)"}</code> | Stores the two conflicting transforms. |
