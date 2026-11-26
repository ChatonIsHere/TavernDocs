---
title: "Bone"
description: "Editor helper that draws gizmo lines from this transform to each child, to show a bone chain."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Bone

A **class** in `Root.Township`, no namespace.

Editor helper that draws gizmo lines from this transform to each child, to show a bone chain.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Bone()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | Gizmo line colour. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws a line to each child in `color`. |

</details>

## Used in

Members of other types that take, return or hold a `Bone`:

[`CopyBone.autoFind`](/game-api/types/global-c-d/copybone#m-autofind), [`CopyBone.bone`](/game-api/types/global-c-d/copybone#m-bone).
