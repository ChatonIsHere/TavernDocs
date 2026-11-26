---
title: "ActiveCatch"
description: "Wyrm action that catches a nearby fleshy target that isn't dangerous."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveCatch

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm action that catches a nearby fleshy target that isn't dangerous. Runs on the server as part of the wyrm AI.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmCatchSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveCatch()"}</code> | Creates an `ActiveCatch` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/activecatch">{"ActiveCatch"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/wyrmcatchsettings">{"WyrmCatchSettings"}</Link>{"> GetAction("}<Link to="/mod/game-api/types/alta-intelligence/wyrmcatchsettings">{"WyrmCatchSettings"}</Link>{" settings)"}</code> | Builds the catch action: needs a low danger, fleshy target within `Reach` of the wyrm. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing each tick. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Sets the action to last for the settings' `Duration`. |
