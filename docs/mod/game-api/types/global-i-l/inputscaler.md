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
| <Link id="m-ctor" /><code>{"InputScaler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Backing field for `Scale`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-scale-2" /><code>{"float Scale { get; set; }"}</code> | Uniform scale. Setting it updates the transform at once. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Applies the scale on load. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Reapplies the scale when it is edited during play. |

</details>
