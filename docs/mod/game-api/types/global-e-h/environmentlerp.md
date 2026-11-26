---
title: "EnvironmentLerp"
description: "Blends audio environment values (reverb) from the current settings to a target EnvironmentNode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentLerp

A **class** in `Root.Township`, the global namespace.

Blends audio environment values (reverb) from the current settings to a target `EnvironmentNode`. Owned by `EnvironmentHandler`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested types** [`Variable`](/mod/game-api/types/global-e-h/environmentlerp-variable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnvironmentLerp("}<Link to="/mod/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" defaultEnvironment)"}</code> | <span className="api-desc">Creates an `EnvironmentLerp` from `defaultEnvironment`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">How far the blend has gone, 0 to 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code><Link to="/mod/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" Default { get; private set; }"}</code> | <span className="api-desc">Environment used when `SetEnvironment` gets null.</span> |
| <Link id="m-reverb" /><code><Link to="/mod/game-api/types/global-e-h/environmentlerp-variable">{"EnvironmentLerp.Variable"}</Link>{" Reverb { get; }"}</code> | <span className="api-desc">The blended reverb value.</span> |
| <Link id="m-target" /><code><Link to="/mod/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" Target { get; private set; }"}</code> | <span className="api-desc">The environment being blended towards.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-targetchanged" /><code>{"event Action TargetChanged"}</code> | <span className="api-desc">Raised when the target environment changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenvironment" /><code>{"void SetEnvironment("}<Link to="/mod/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" environment, bool isSnapping)"}</code> | <span className="api-desc">Sets the target environment (null means default) and raises `TargetChanged`. With snapping, jumps there at once.</span> |
| <Link id="m-update" /><code>{"bool Update(float amount)"}</code> | <span className="api-desc">Advances the blend by the given amount. Returns true once it has passed the end.</span> |

## Used in

Members of other types that take, return or hold a `EnvironmentLerp`:

<div className="api-used-in">

[`EnvironmentHandler.Environment`](/mod/game-api/types/global-e-h/environmenthandler#m-environment).

</div>
