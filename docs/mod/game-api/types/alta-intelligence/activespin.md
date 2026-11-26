---
title: "ActiveSpin"
description: "Wyrm spin attack action, chosen more when the target is off to the side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveSpin

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm spin attack action, chosen more when the target is off to the side. Runs on the server.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmSpinSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSpin()"}</code> | <span className="api-desc">Creates an `ActiveSpin` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/activespin">{"ActiveSpin"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/wyrmspinsettings">{"WyrmSpinSettings"}</Link>{"> GetAction("}<Link to="/mod/game-api/types/alta-intelligence/wyrmspinsettings">{"WyrmSpinSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Builds the spin action. Scores higher the further the target is from the wyrm's forward (up to 90 degrees), within `MaximumRange`.</span> |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Turns toward the target at 3 times the normal turn rate.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Does nothing; no duration or animation is set here.</span> |
