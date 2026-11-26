---
title: "BlockLevel"
description: "Flags for how much a pickup blocks a hit from an impact tool: can't block, blocks physical only, blocks everything, or unblockable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlockLevel

An **enum** in `Root.Township`, the global namespace.

Flags for how much a pickup blocks a hit from an impact tool: can't block, blocks physical only, blocks everything, or unblockable. Set on `Pickup.BlockLevel`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-blockeverything" /><code>{"BlockEverything = 4"}</code> |
| <Link id="m-blockphysicalonly" /><code>{"BlockPhysicalOnly = 2"}</code> |
| <Link id="m-cantblock" /><code>{"CantBlock = 1"}</code> |
| <Link id="m-unblockable" /><code>{"Unblockable = 99"}</code> |

## Used in

Members of other types that take, return or hold a `BlockLevel`:

[`ImpactTool.GenerateHit`](/mod/game-api/types/alta-items/impacttool#m-generatehit), [`ImpactTool.requiredBlockLevel`](/mod/game-api/types/alta-items/impacttool#m-requiredblocklevel), [`Pickup.blockLevel`](/mod/game-api/types/global-p/pickup#m-blocklevel), [`Pickup.BlockLevel`](/mod/game-api/types/global-p/pickup#m-blocklevel-2).
