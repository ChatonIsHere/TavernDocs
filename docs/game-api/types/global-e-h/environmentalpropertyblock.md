---
title: "EnvironmentalPropertyBlock"
description: "Holds the global wind direction and raises an event when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentalPropertyBlock

A **class** in `Root.Township`, no namespace.

Holds the global wind direction and raises an event when it changes.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EnvironmentalPropertyBlock()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | Material property block, not used in this code. |
| <Link id="m-winddirection" /><code>{"private static Vector2 windDirection"}</code> | Backing field for `WindDirection`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-winddirection-2" /><code>{"static Vector2 WindDirection { get; set; }"}</code> | Global wind direction on the XZ plane; setting it raises `WindChanged`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-windchanged" /><code>{"static event Action WindChanged"}</code> | Raised whenever `WindDirection` is set. |
