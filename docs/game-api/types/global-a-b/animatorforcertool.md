---
title: "AnimatorForcerTool"
description: "Inspector debug tool that sets integer parameters on an animator and forces it into a named state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatorForcerTool

A **class** in `Root.Township`, no namespace.

Inspector debug tool that sets integer parameters on an animator and forces it into a named state.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatorForcerTool()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Animator to force. |
| <Link id="m-btnapply" /><code>{"private bool btnApply"}</code> | Inspector button that calls `Apply`. |
| <Link id="m-layer" /><code>{"private int layer"}</code> | Animator layer the state is on. |
| <Link id="m-parametername" /><code>{"private string[] parameterName"}</code> | Integer parameter names, paired by index with `parameterValue`. |
| <Link id="m-parametervalue" /><code>{"private int[] parameterValue"}</code> | Values set on the matching parameters. |
| <Link id="m-statename" /><code>{"private string stateName"}</code> | State to play. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"private void Apply()"}</code> | Sets each listed integer parameter, plays the state from the start on the layer, then advances the animator one second. |

</details>
