---
title: "BoundsContainer"
description: "A Bounds with a world rotation, for testing whether a point lies inside a rotated box."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoundsContainer

A **class** in `Root.Township`, no namespace.

A `Bounds` with a world rotation, for testing whether a point lies inside a rotated box.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoundsContainer()"}</code> | Creates a `BoundsContainer` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"Bounds bounds"}</code> | The box, in rotated space. |
| <Link id="m-worldrotation" /><code>{"Quaternion worldRotation"}</code> | The box's rotation. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkposition" /><code>{"bool CheckPosition(Vector3 position)"}</code> | Rotates the point by the inverse rotation and checks it against the bounds. The bounds centre is in that rotated space. |
