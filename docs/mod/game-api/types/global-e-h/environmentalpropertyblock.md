---
title: "EnvironmentalPropertyBlock"
description: "Holds the global wind direction and raises an event when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentalPropertyBlock

A **class** in `Root.Township`, the global namespace.

Holds the global wind direction and raises an event when it changes.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnvironmentalPropertyBlock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | <span className="api-desc">Material property block, not used in this code.</span> |
| <Link id="m-winddirection" /><code>{"private static Vector2 windDirection"}</code> | <span className="api-desc">Backing field for `WindDirection`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-winddirection-2" /><code>{"static Vector2 WindDirection { get; set; }"}</code> | <span className="api-desc">Global wind direction on the XZ plane; setting it raises `WindChanged`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-windchanged" /><code>{"static event Action WindChanged"}</code> | <span className="api-desc">Raised whenever `WindDirection` is set.</span> |
