---
title: "TreeDecay"
description: "Server decay for a WoodcutTree: once the tree has no chunking parent its decay timer runs, scaled by tree size, and it won't decay within two minutes of..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeDecay

A **class** in `Root.Township`, `Alta.Woodcutting`.

Server decay for a `WoodcutTree`: once the tree has no chunking parent its decay timer runs, scaled by tree size, and it won't decay within two minutes of being hit.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`BasicDecay`](/mod/game-api/types/global-a-b/basicdecay)
- **Attributes** `RequireComponent`
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeDecay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastdamage" /><code>{"private TimeSpan lastDamage"}</code> | Timeline time of the last hit. |
| <Link id="m-tree" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> | The tree this decays. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-timermultiplier" /><code>{"protected override float TimerMultiplier { get; }"}</code> | The tree's total size, so bigger trees probably take longer to decay. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Gets the `WoodcutTree` before the base setup. |
| <Link id="m-decayfailed" /><code>{"protected override void DecayFailed()"}</code> | Restarts the timer when decay was refused because of recent damage. |
| <Link id="m-finishinitialize" /><code>{"protected override void FinishInitialize()"}</code> | Hooks the tree's cut and damage events and checks its state a frame later. |
| <Link id="m-isdecayvalid" /><code>{"protected override bool IsDecayValid(bool isStarting)"}</code> | Allowed when the base allows it, the rigidbody isn't kinematic, and it's starting or 120 seconds have passed since the last hit. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkcut" /><code>{"private void CheckCut("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | On a cut, starts or shortens the timer if the tree has no chunking parent, otherwise cancels it. |
| <Link id="m-parttookdamage" /><code>{"private void PartTookDamage("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree, float damage)"}</code> | Records the time of the last hit. |

</details>
