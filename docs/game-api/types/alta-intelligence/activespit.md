---
title: "ActiveSpit"
description: "Wyrm ranged spit attack action, preferring targets near BestRange."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveSpit

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm ranged spit attack action, preferring targets near `BestRange`. Runs on the server.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmSpitSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSpit()"}</code> | Creates an `ActiveSpit` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angle" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" angle"}</code> | Networked animator float for the spit's vertical aim angle, in radians. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/activespit">{"ActiveSpit"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/wyrmspitsettings">{"WyrmSpitSettings"}</Link>{"> GetAction("}<Link to="/game-api/types/alta-intelligence/wyrmspitsettings">{"WyrmSpitSettings"}</Link>{" settings)"}</code> | Builds the spit action: dangerous target within `MaximumRange`, best near `BestRange`, preferring living and hurt ones. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Faces the target and sets the aim angle float to the vertical angle toward it. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Fires a random spit trigger, grabs the aim angle float and sets the duration. |
