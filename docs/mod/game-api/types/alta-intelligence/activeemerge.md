---
title: "ActiveEmerge"
description: "Wyrm action that comes up out of the ground near a living target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveEmerge

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm action that comes up out of the ground near a living target. Runs on the server as part of the wyrm AI.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmEmergeSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveEmerge()"}</code> | <span className="api-desc">Creates an `ActiveEmerge` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/activeemerge">{"ActiveEmerge"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/wyrmemergesettings">{"WyrmEmergeSettings"}</Link>{"> GetAction("}<Link to="/mod/game-api/types/alta-intelligence/wyrmemergesettings">{"WyrmEmergeSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Builds the emerge action: a living, not-bug target within `RadiusSquared`, with a random `Chance` roll.</span> |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Turns the wyrm to face its target, if it has one.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Shows the wyrm, switches to emerged actions, clears the animated bool and schedules the sense change.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesenses" /><code>{"private void ChangeSenses()"}</code> | <span className="api-desc">Applies the settings' `EmergedSenses`, unless the wyrm is being destroyed.</span> |
| <Link id="m-emergefinished" /><code>{"private void EmergeFinished("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">When the emerge ends, turns the wyrm's collision back on.</span> |

</details>
