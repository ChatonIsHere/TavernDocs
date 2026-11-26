---
title: "EnvironmentLerp"
description: "Blends audio environment values (reverb) from the current settings to a target EnvironmentNode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentLerp

A **class** in `Root.Township`, no namespace.

Blends audio environment values (reverb) from the current settings to a target `EnvironmentNode`. Owned by `EnvironmentHandler`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested types** [`Variable`](/game-api/types/global-e-h/environmentlerp-variable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnvironmentLerp("}<Link to="/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" defaultEnvironment)"}</code> | Creates an `EnvironmentLerp` from `defaultEnvironment`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private float progress"}</code> | How far the blend has gone, 0 to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code><Link to="/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" Default { get; private set; }"}</code> | Environment used when `SetEnvironment` gets null. |
| <Link id="m-reverb" /><code><Link to="/game-api/types/global-e-h/environmentlerp-variable">{"EnvironmentLerp.Variable"}</Link>{" Reverb { get; }"}</code> | The blended reverb value. |
| <Link id="m-target" /><code><Link to="/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" Target { get; private set; }"}</code> | The environment being blended towards. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-targetchanged" /><code>{"event Action TargetChanged"}</code> | Raised when the target environment changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenvironment" /><code>{"void SetEnvironment("}<Link to="/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" environment, bool isSnapping)"}</code> | Sets the target environment (null means default) and raises `TargetChanged`. With snapping, jumps there at once. |
| <Link id="m-update" /><code>{"bool Update(float amount)"}</code> | Advances the blend by the given amount. Returns true once it has passed the end. |

## Used in

Members of other types that take, return or hold a `EnvironmentLerp`:

[`EnvironmentHandler.Environment`](/game-api/types/global-e-h/environmenthandler#m-environment).
