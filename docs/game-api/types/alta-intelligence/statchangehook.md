---
title: "StatChangeHook"
description: "abstract class StatChangeHook in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatChangeHook

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Derived types** [`FixedStatChangeHook`](/game-api/types/alta-intelligence/fixedstatchangehook), [`ProgressStatChangeHook`](/game-api/types/alta-intelligence/progressstatchangehook)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StatChangeHook()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstats" /><code>{"protected Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> affectedStats"}</code> |  |
| <Link id="m-istarget" /><code>{"private bool isTarget"}</code> |  |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectonend" /><code>{"protected abstract void AffectOnEnd("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-affectonstart" /><code>{"protected abstract void AffectOnStart("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |  |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |  |
