---
title: "LiquidGravityAdjustment"
description: "Maps a liquid's thickness (0 to 100) to how its surface moves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidGravityAdjustment

A **static class** in `Root.Township`, `Alta.Liquid`.

Maps a liquid's thickness (0 to 100) to how its surface moves.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Attributes** `Extension`

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumdrag" /><code>{"private const float MaximumDrag"}</code> | <span className="api-desc">Drag at full thickness.</span> |
| <Link id="m-maximumgravity" /><code>{"private const float MaximumGravity"}</code> | <span className="api-desc">Gravity multiplier at zero thickness.</span> |
| <Link id="m-maximummovementmultiplier" /><code>{"private const float MaximumMovementMultiplier"}</code> | <span className="api-desc">Movement multiplier at zero thickness.</span> |
| <Link id="m-minimumdrag" /><code>{"private const float MinimumDrag"}</code> | <span className="api-desc">Drag at zero thickness.</span> |
| <Link id="m-minimumgravity" /><code>{"private const float MinimumGravity"}</code> | <span className="api-desc">Gravity multiplier at full thickness.</span> |
| <Link id="m-minimummovementmultiplier" /><code>{"private const float MinimumMovementMultiplier"}</code> | <span className="api-desc">Movement multiplier at full thickness.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setthickness" /><code>{"static void SetThickness("}<Link to="/mod/game-api/types/alta-stats-effects/liquidgravity">{"LiquidGravity"}</Link>{" liquidGravity, int thickness)"}</code> | <span className="api-desc">Thicker liquid gets less gravity, more drag and less movement on its `LiquidGravity`.</span> |
