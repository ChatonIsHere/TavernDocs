---
title: "PickupExtension.Allowance"
description: "When a PickupExtension forwards grabs to its target: always, not to the player already holding it, or never while it's held."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupExtension.Allowance

An **private enum** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

When a `PickupExtension` forwards grabs to its target: always, not to the player already holding it, or never while it's held.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PickupExtension`](/mod/game-api/types/global-p/pickupextension)

## Values

| Member |
| --- |
| <Link id="m-everything" /><code>{"Everything = 0"}</code> |
| <Link id="m-refusesameplayer" /><code>{"RefuseSamePlayer = 1"}</code> |
| <Link id="m-refusewhileheld" /><code>{"RefuseWhileHeld = 2"}</code> |

## Used in

Members of other types that take, return or hold a `Allowance`:

<div className="api-used-in">

[`PickupExtension.allowance`](/mod/game-api/types/global-p/pickupextension#m-allowance).

</div>
