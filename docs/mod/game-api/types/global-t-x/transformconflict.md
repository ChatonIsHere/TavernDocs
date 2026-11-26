---
title: "TransformConflict"
description: "A component that just records two transforms that conflict with each other."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformConflict

A **class** in `Root.Township`, the global namespace.

A component that just records two transforms that conflict with each other. Nothing else in the code uses it, so it is probably an editor or debugging marker.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformConflict()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-one" /><code>{"private Transform one"}</code> | <span className="api-desc">Backing field for `One`.</span> |
| <Link id="m-two" /><code>{"private Transform two"}</code> | <span className="api-desc">Backing field for `Two`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-one-2" /><code>{"Transform One { get; }"}</code> | <span className="api-desc">The first transform of the conflict.</span> |
| <Link id="m-two-2" /><code>{"Transform Two { get; }"}</code> | <span className="api-desc">The second transform of the conflict.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconflict" /><code>{"void CreateConflict(Transform one, Transform two)"}</code> | <span className="api-desc">Stores the two conflicting transforms.</span> |
