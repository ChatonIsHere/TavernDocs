---
title: "StatChangeHook"
description: "Base AI hook that grabs a stat on the creature or its target when its action starts, and lets subclasses change it at the start and end."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatChangeHook

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base AI hook that grabs a stat on the creature or its target when its action starts, and lets subclasses change it at the start and end. `FixedStatChangeHook` and `ProgressStatChangeHook` build on it.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Derived types** [`FixedStatChangeHook`](/mod/game-api/types/alta-intelligence/fixedstatchangehook), [`ProgressStatChangeHook`](/mod/game-api/types/alta-intelligence/progressstatchangehook)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StatChangeHook()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstats" /><code>{"protected Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> affectedStats"}</code> | The stat being changed, per running creature. Entries are only removed when the action ends. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istarget" /><code>{"private bool isTarget"}</code> | Change the stat on the creature's target instead of the creature. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | Which stat to change. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectonend" /><code>{"protected abstract void AffectOnEnd("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Subclass: change the stat when the action finishes or is cancelled. |
| <Link id="m-affectonstart" /><code>{"protected abstract void AffectOnStart("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Subclass: change the stat when the action starts. |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Calls `AffectOnEnd` and forgets the creature's stat, if one was found at the start. |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | When the action starts, finds `targetStat` on the creature (or its target), stores it and calls `AffectOnStart`. |
