---
title: "InputScaler"
description: "Scales its transform evenly by one number, set in the inspector or through Scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputScaler

A **class** in `Root.Township`, the global namespace.

Scales its transform evenly by one number, set in the inspector or through `Scale`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputScaler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Backing field for `Scale`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-scale-2" /><code>{"float Scale { get; set; }"}</code> | <span className="api-desc">Uniform scale. Setting it updates the transform at once.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Applies the scale on load.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Reapplies the scale when it is edited during play.</span> |

</details>
