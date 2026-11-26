---
title: "ActiveDodge"
description: "Wyrm action that dodges a dangerous, fast moving target within reach."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveDodge

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm action that dodges a dangerous, fast moving target within reach. Runs on the server as part of the wyrm AI.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmDodgeSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveDodge()"}</code> | Creates an `ActiveDodge` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/activedodge">{"ActiveDodge"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/wyrmdodgesettings">{"WyrmDodgeSettings"}</Link>{"> GetAction("}<Link to="/mod/game-api/types/alta-intelligence/wyrmdodgesettings">{"WyrmDodgeSettings"}</Link>{" settings)"}</code> | Builds the dodge action: needs a dangerous target moving fast (velocity sense 1 to 5) within `Reach`. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing each tick. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Sets the action to last for the settings' `Duration`. |
