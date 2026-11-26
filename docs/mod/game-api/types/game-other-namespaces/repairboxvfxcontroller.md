---
title: "RepairBoxVfxController"
description: "VFX controller for the repair box."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxVfxController

A **class** in `Root.Township`, `Features`.

VFX controller for the repair box. Each method plays or stops one effect from the `GenericVFXController` list by a configured index.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GenericVFXController`](/mod/game-api/types/game-other-namespaces/genericvfxcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBoxVfxController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-itemdepositedvfxindex" /><code>{"private int itemDepositedVfxIndex"}</code> | <span className="api-desc">Index of the item deposited effect (default 0).</span> |
| <Link id="m-refundvfxindex" /><code>{"private int refundVfxIndex"}</code> | <span className="api-desc">Index of the refund effect (default 3).</span> |
| <Link id="m-repaircompletedvfxindex" /><code>{"private int repairCompletedVfxIndex"}</code> | <span className="api-desc">Index of the repair completed effect (default 1).</span> |
| <Link id="m-vortexvfxindex" /><code>{"private int vortexVfxIndex"}</code> | <span className="api-desc">Index of the vortex effect (default 2).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playitemdepositedvfx" /><code>{"void PlayItemDepositedVfx()"}</code> | <span className="api-desc">Plays the effect for an item being put into the box.</span> |
| <Link id="m-playitemrefundedvfx" /><code>{"void PlayItemRefundedVfx()"}</code> | <span className="api-desc">Plays the effect for an item being refunded.</span> |
| <Link id="m-playrepaircompletedvfx" /><code>{"void PlayRepairCompletedVfx()"}</code> | <span className="api-desc">Plays the effect for a finished repair.</span> |
| <Link id="m-playvortexvfx" /><code>{"void PlayVortexVfx()"}</code> | <span className="api-desc">Starts the vortex effect.</span> |
| <Link id="m-stopvortexvfx" /><code>{"void StopVortexVfx()"}</code> | <span className="api-desc">Stops the vortex effect.</span> |

## Used in

Members of other types that take, return or hold a `RepairBoxVfxController`:

<div className="api-used-in">

[`RepairBox.repairBoxVfxController`](/mod/game-api/types/global-q-r/repairbox#m-repairboxvfxcontroller).

</div>
