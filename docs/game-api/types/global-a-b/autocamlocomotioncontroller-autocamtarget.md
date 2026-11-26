---
title: "AutoCamLocomotionController.AutoCamTarget"
description: "A player body the auto camera can frame, rebuilt every frame by AutoCamLocomotionController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCamLocomotionController.AutoCamTarget

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A player body the auto camera can frame, rebuilt every frame by `AutoCamLocomotionController`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested in** [`AutoCamLocomotionController`](/game-api/types/global-a-b/autocamlocomotioncontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AutoCamTarget()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscontained" /><code>{"bool IsContained { get; set; }"}</code> | Whether this player is within `MaximumDistance` of the focused player, so the camera frames them too. |
| <Link id="m-transform" /><code>{"Transform Transform { get; set; }"}</code> | The player character's body transform. |

## Used in

Members of other types that take, return or hold a `AutoCamTarget`:

[`AutoCamLocomotionController.targets`](/game-api/types/global-a-b/autocamlocomotioncontroller#m-targets).
