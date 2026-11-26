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
| <Link id="m-ctor" /><code>{"TreeDecay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastdamage" /><code>{"private TimeSpan lastDamage"}</code> | <span className="api-desc">Timeline time of the last hit.</span> |
| <Link id="m-tree" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> | <span className="api-desc">The tree this decays.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-timermultiplier" /><code>{"protected override float TimerMultiplier { get; }"}</code> | <span className="api-desc">The tree's total size, so bigger trees probably take longer to decay.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Gets the `WoodcutTree` before the base setup.</span> |
| <Link id="m-decayfailed" /><code>{"protected override void DecayFailed()"}</code> | <span className="api-desc">Restarts the timer when decay was refused because of recent damage.</span> |
| <Link id="m-finishinitialize" /><code>{"protected override void FinishInitialize()"}</code> | <span className="api-desc">Hooks the tree's cut and damage events and checks its state a frame later.</span> |
| <Link id="m-isdecayvalid" /><code>{"protected override bool IsDecayValid(bool isStarting)"}</code> | <span className="api-desc">Allowed when the base allows it, the rigidbody isn't kinematic, and it's starting or 120 seconds have passed since the last hit.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkcut" /><code>{"private void CheckCut("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> | <span className="api-desc">On a cut, starts or shortens the timer if the tree has no chunking parent, otherwise cancels it.</span> |
| <Link id="m-parttookdamage" /><code>{"private void PartTookDamage("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree, float damage)"}</code> | <span className="api-desc">Records the time of the last hit.</span> |

</details>
