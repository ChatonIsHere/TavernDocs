---
title: "ActiveDig"
description: "Wyrm action that burrows back underground after it has been idle a while."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveDig

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm action that burrows back underground after it has been idle a while. Runs on the server as part of the wyrm AI.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmDigSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveDig()"}</code> | Creates an `ActiveDig` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private const float Duration"}</code> | Unused constant of 2.5 seconds; the real duration comes from the settings. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/activedig">{"ActiveDig"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/wyrmdigsettings">{"WyrmDigSettings"}</Link>{"> GetAction("}<Link to="/game-api/types/alta-intelligence/wyrmdigsettings">{"WyrmDigSettings"}</Link>{" settings)"}</code> | Builds the dig action. Its score grows with idle time over `MaxStrengthDuration`, with a `FailChance` of scoring 0. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing each tick. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Switches to burrowed actions, sets the `Burrowed` animator bool and schedules the sense change after `ChangeSenseDelay`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesenses" /><code>{"private void ChangeSenses()"}</code> | Zeroes the wyrm's senses and applies the settings' `DugSenses`. |
| <Link id="m-digfinished" /><code>{"private void DigFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | When the dig ends, hides the wyrm's GameObjects and turns off its collision. |

</details>
