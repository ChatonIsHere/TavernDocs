---
title: "EnvironmentHandler"
description: "Client component that blends audio environment settings (reverb) towards the current EnvironmentNode over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentHandler

A **class** in `Root.Township`, no namespace.

Client component that blends audio environment settings (reverb) towards the current `EnvironmentNode` over time.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EnvironmentHandler()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustseconds" /><code>{"private float adjustSeconds"}</code> | Seconds a full blend takes. Defaults to 1. |
| <Link id="m-defaultenvironment" /><code>{"private "}<Link to="/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" defaultEnvironment"}</code> | Environment used when no other is set. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-environment" /><code><Link to="/game-api/types/global-e-h/environmentlerp">{"EnvironmentLerp"}</Link>{" Environment { get; private set; }"}</code> | The `EnvironmentLerp` that tracks the target environment and the blended values. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates the `EnvironmentLerp` from the default node and hooks its events. |
| <Link id="m-targetchanged" /><code>{"private void TargetChanged()"}</code> | Turns the component on when the target environment changes, so `Update` runs. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Advances the blend and turns the component off once it is done. |
| <Link id="m-updatereverb" /><code>{"private void UpdateReverb(float reverb)"}</code> | Called when the blended reverb changes. Empty in this build. |

</details>

## Used in

Members of other types that take, return or hold a `EnvironmentHandler`:

[`ChunkBasedEnvironment.environmentAssesser`](/game-api/types/global-c-d/chunkbasedenvironment#m-environmentassesser).
