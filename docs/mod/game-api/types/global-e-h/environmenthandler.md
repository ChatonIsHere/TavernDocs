---
title: "EnvironmentHandler"
description: "Client component that blends audio environment settings (reverb) towards the current EnvironmentNode over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentHandler

A **class** in `Root.Township`, the global namespace.

Client component that blends audio environment settings (reverb) towards the current `EnvironmentNode` over time.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnvironmentHandler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustseconds" /><code>{"private float adjustSeconds"}</code> | <span className="api-desc">Seconds a full blend takes. Defaults to 1.</span> |
| <Link id="m-defaultenvironment" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/environmentnode">{"EnvironmentNode"}</Link>{" defaultEnvironment"}</code> | <span className="api-desc">Environment used when no other is set.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-environment" /><code><Link to="/mod/game-api/types/global-e-h/environmentlerp">{"EnvironmentLerp"}</Link>{" Environment { get; private set; }"}</code> | <span className="api-desc">The `EnvironmentLerp` that tracks the target environment and the blended values.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates the `EnvironmentLerp` from the default node and hooks its events.</span> |
| <Link id="m-targetchanged" /><code>{"private void TargetChanged()"}</code> | <span className="api-desc">Turns the component on when the target environment changes, so `Update` runs.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Advances the blend and turns the component off once it is done.</span> |
| <Link id="m-updatereverb" /><code>{"private void UpdateReverb(float reverb)"}</code> | <span className="api-desc">Called when the blended reverb changes. Empty in this build.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EnvironmentHandler`:

<div className="api-used-in">

[`ChunkBasedEnvironment.environmentAssesser`](/mod/game-api/types/global-c-d/chunkbasedenvironment#m-environmentassesser).

</div>
