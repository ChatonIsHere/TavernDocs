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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmSpinSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveSpin()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/activespin">{"ActiveSpin"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/wyrmspinsettings">{"WyrmSpinSettings"}</Link>{"> GetAction("}<Link to="/game-api/types/alta-intelligence/wyrmspinsettings">{"WyrmSpinSettings"}</Link>{" settings)"}</code> | Builds the spin action. Scores higher the further the target is from the wyrm's forward (up to 90 degrees), within `MaximumRange`. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Turns toward the target at 3 times the normal turn rate. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Does nothing; no duration or animation is set here. |
