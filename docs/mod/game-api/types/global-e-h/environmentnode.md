---
title: "EnvironmentNode"
description: "Component on a chunk that can override environment audio values (only reverb so far) for that area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentNode

A **class** in `Root.Township`, the global namespace.

Component on a chunk that can override environment audio values (only reverb so far) for that area. `ChunkBasedEnvironment` looks it up on the chunk and blends to it.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Variable`](/mod/game-api/types/global-e-h/environmentnode-variable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnvironmentNode()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reverb" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/environmentnode-variable">{"EnvironmentNode.Variable"}</Link>{" reverb"}</code> | Backing field for `Reverb`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-reverb-2" /><code><Link to="/mod/game-api/types/global-e-h/environmentnode-variable">{"EnvironmentNode.Variable"}</Link>{" Reverb { get; }"}</code> | The reverb value. Its `Get` returns this node's value when it overrides, otherwise the default node's value. |

## Used in

Members of other types that take, return or hold a `EnvironmentNode`:

[`EnvironmentHandler.defaultEnvironment`](/mod/game-api/types/global-e-h/environmenthandler#m-defaultenvironment), [`EnvironmentLerp.Default`](/mod/game-api/types/global-e-h/environmentlerp#m-default), [`EnvironmentLerp.EnvironmentLerp`](/mod/game-api/types/global-e-h/environmentlerp#m-ctor), [`EnvironmentLerp.SetEnvironment`](/mod/game-api/types/global-e-h/environmentlerp#m-setenvironment), [`EnvironmentLerp.Target`](/mod/game-api/types/global-e-h/environmentlerp#m-target).
