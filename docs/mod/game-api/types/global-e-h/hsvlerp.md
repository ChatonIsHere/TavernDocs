---
title: "HsvLerp"
description: "Editor helper that fills an array with colours blended in HSV space between two colours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HsvLerp

A **class** in `Root.Township`, the global namespace.

Editor helper that fills an array with colours blended in HSV space between two colours.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HsvLerp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private Color end"}</code> | <span className="api-desc">Last colour of the blend.</span> |
| <Link id="m-isreversed" /><code>{"private bool isReversed"}</code> | <span className="api-desc">If true, blends hue the long way round the wheel.</span> |
| <Link id="m-results" /><code>{"private Color[] results"}</code> | <span className="api-desc">Output colours; set its length to choose how many.</span> |
| <Link id="m-start" /><code>{"private Color start"}</code> | <span className="api-desc">First colour of the blend.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Fills `results` with colours from `start` to `end`, going round the hue wheel the short or long way.</span> |

</details>
