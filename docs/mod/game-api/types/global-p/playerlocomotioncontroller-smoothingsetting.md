---
title: "PlayerLocomotionController.SmoothingSetting"
description: "One movement smoothing level for remote players, picked by PlayerSmoothManager.SettingIndex."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLocomotionController.SmoothingSetting

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One movement smoothing level for remote players, picked by `PlayerSmoothManager.SettingIndex`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerLocomotionController`](/mod/game-api/types/global-p/playerlocomotioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmoothingSetting()"}</code> | <span className="api-desc">Creates a `PlayerLocomotionController.SmoothingSetting` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-locomotionlerp" /><code>{"private float locomotionLerp"}</code> | <span className="api-desc">Backing field for `LocomotionLerp`.</span> |
| <Link id="m-transformslerp" /><code>{"private float transformsLerp"}</code> | <span className="api-desc">Backing field for `TransformsLerp`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-locomotionlerp-2" /><code>{"float LocomotionLerp { get; }"}</code> | <span className="api-desc">Lerp used for the locomotion's fixed update.</span> |
| <Link id="m-transformslerp-2" /><code>{"float TransformsLerp { get; }"}</code> | <span className="api-desc">Lerp given to the smoothed network transforms.</span> |

## Used in

Members of other types that take, return or hold a `SmoothingSetting`:

<div className="api-used-in">

[`PlayerLocomotionController.smoothingSettings`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-smoothingsettings).

</div>
