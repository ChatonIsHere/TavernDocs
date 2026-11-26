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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmDigSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveDig()"}</code> | <span className="api-desc">Creates an `ActiveDig` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private const float Duration"}</code> | <span className="api-desc">Unused constant of 2.5 seconds; the real duration comes from the settings.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/activedig">{"ActiveDig"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/wyrmdigsettings">{"WyrmDigSettings"}</Link>{"> GetAction("}<Link to="/mod/game-api/types/alta-intelligence/wyrmdigsettings">{"WyrmDigSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Builds the dig action. Its score grows with idle time over `MaxStrengthDuration`, with a `FailChance` of scoring 0.</span> |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Does nothing each tick.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Switches to burrowed actions, sets the `Burrowed` animator bool and schedules the sense change after `ChangeSenseDelay`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesenses" /><code>{"private void ChangeSenses()"}</code> | <span className="api-desc">Zeroes the wyrm's senses and applies the settings' `DugSenses`.</span> |
| <Link id="m-digfinished" /><code>{"private void DigFinished("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">When the dig ends, hides the wyrm's GameObjects and turns off its collision.</span> |

</details>
