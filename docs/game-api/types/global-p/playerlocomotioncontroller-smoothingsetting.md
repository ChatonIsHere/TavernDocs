---
title: "PlayerLocomotionController.SmoothingSetting"
description: "One movement smoothing level for remote players, picked by PlayerSmoothManager.SettingIndex."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLocomotionController.SmoothingSetting

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One movement smoothing level for remote players, picked by `PlayerSmoothManager.SettingIndex`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerLocomotionController`](/game-api/types/global-p/playerlocomotioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmoothingSetting()"}</code> | Creates a `PlayerLocomotionController.SmoothingSetting` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-locomotionlerp" /><code>{"private float locomotionLerp"}</code> | Backing field for `LocomotionLerp`. |
| <Link id="m-transformslerp" /><code>{"private float transformsLerp"}</code> | Backing field for `TransformsLerp`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-locomotionlerp-2" /><code>{"float LocomotionLerp { get; }"}</code> | Lerp used for the locomotion's fixed update. |
| <Link id="m-transformslerp-2" /><code>{"float TransformsLerp { get; }"}</code> | Lerp given to the smoothed network transforms. |

## Used in

Members of other types that take, return or hold a `SmoothingSetting`:

[`PlayerLocomotionController.smoothingSettings`](/game-api/types/global-p/playerlocomotioncontroller#m-smoothingsettings).
