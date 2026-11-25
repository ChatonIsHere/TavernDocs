---
title: "TreeDecay"
description: "A BasicDecay on a tree: once a felled tree has come loose from its spawner (no chunking parent), it decays, but not while it's kinematic or within 120..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeDecay

A **class** in `Root.Township`, `Alta.Woodcutting`.

A `BasicDecay` on a tree: once a felled tree has come loose from its spawner (no chunking parent), it decays, but not while it's kinematic or within 120 seconds of its last hit.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`BasicDecay`](/game-api/types/global-a-b/basicdecay)
- **Attributes** `RequireComponent`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeDecay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastdamage" /><code>{"private TimeSpan lastDamage"}</code> |  |
| <Link id="m-tree" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-timermultiplier" /><code>{"protected override float TimerMultiplier { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-checkcut" /><code>{"private void CheckCut("}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree)"}</code> |  |
| <Link id="m-decayfailed" /><code>{"protected override void DecayFailed()"}</code> |  |
| <Link id="m-finishinitialize" /><code>{"protected override void FinishInitialize()"}</code> |  |
| <Link id="m-isdecayvalid" /><code>{"protected override bool IsDecayValid(bool isStarting)"}</code> |  |
| <Link id="m-parttookdamage" /><code>{"private void PartTookDamage("}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree, float damage)"}</code> |  |
