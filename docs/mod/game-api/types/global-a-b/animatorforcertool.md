---
title: "AnimatorForcerTool"
description: "Inspector debug tool that sets integer parameters on an animator and forces it into a named state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatorForcerTool

A **class** in `Root.Township`, the global namespace.

Inspector debug tool that sets integer parameters on an animator and forces it into a named state.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatorForcerTool()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Animator to force.</span> |
| <Link id="m-btnapply" /><code>{"private bool btnApply"}</code> | <span className="api-desc">Inspector button that calls `Apply`.</span> |
| <Link id="m-layer" /><code>{"private int layer"}</code> | <span className="api-desc">Animator layer the state is on.</span> |
| <Link id="m-parametername" /><code>{"private string[] parameterName"}</code> | <span className="api-desc">Integer parameter names, paired by index with `parameterValue`.</span> |
| <Link id="m-parametervalue" /><code>{"private int[] parameterValue"}</code> | <span className="api-desc">Values set on the matching parameters.</span> |
| <Link id="m-statename" /><code>{"private string stateName"}</code> | <span className="api-desc">State to play.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"private void Apply()"}</code> | <span className="api-desc">Sets each listed integer parameter, plays the state from the start on the layer, then advances the animator one second.</span> |

</details>
