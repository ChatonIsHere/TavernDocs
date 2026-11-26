---
title: "HsvLerp"
description: "Editor helper that fills an array with colours blended in HSV space between two colours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HsvLerp

A **class** in `Root.Township`, no namespace.

Editor helper that fills an array with colours blended in HSV space between two colours.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HsvLerp()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private Color end"}</code> | Last colour of the blend. |
| <Link id="m-isreversed" /><code>{"private bool isReversed"}</code> | If true, blends hue the long way round the wheel. |
| <Link id="m-results" /><code>{"private Color[] results"}</code> | Output colours; set its length to choose how many. |
| <Link id="m-start" /><code>{"private Color start"}</code> | First colour of the blend. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Fills `results` with colours from `start` to `end`, going round the hue wheel the short or long way. |

</details>
