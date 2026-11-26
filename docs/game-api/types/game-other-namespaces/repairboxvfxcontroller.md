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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GenericVFXController`](/game-api/types/game-other-namespaces/genericvfxcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RepairBoxVfxController()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-itemdepositedvfxindex" /><code>{"private int itemDepositedVfxIndex"}</code> | Index of the item deposited effect (default 0). |
| <Link id="m-refundvfxindex" /><code>{"private int refundVfxIndex"}</code> | Index of the refund effect (default 3). |
| <Link id="m-repaircompletedvfxindex" /><code>{"private int repairCompletedVfxIndex"}</code> | Index of the repair completed effect (default 1). |
| <Link id="m-vortexvfxindex" /><code>{"private int vortexVfxIndex"}</code> | Index of the vortex effect (default 2). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playitemdepositedvfx" /><code>{"void PlayItemDepositedVfx()"}</code> | Plays the effect for an item being put into the box. |
| <Link id="m-playitemrefundedvfx" /><code>{"void PlayItemRefundedVfx()"}</code> | Plays the effect for an item being refunded. |
| <Link id="m-playrepaircompletedvfx" /><code>{"void PlayRepairCompletedVfx()"}</code> | Plays the effect for a finished repair. |
| <Link id="m-playvortexvfx" /><code>{"void PlayVortexVfx()"}</code> | Starts the vortex effect. |
| <Link id="m-stopvortexvfx" /><code>{"void StopVortexVfx()"}</code> | Stops the vortex effect. |

## Used in

Members of other types that take, return or hold a `RepairBoxVfxController`:

[`RepairBox.repairBoxVfxController`](/game-api/types/global-q-r/repairbox#m-repairboxvfxcontroller).
