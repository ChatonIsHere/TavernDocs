---
title: "ActionTarget<TAgent>"
description: "A creature AI choice: an action, the target it applies to and how strongly it's weighted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionTarget&lt;TAgent&gt;

A **struct** in `Root.Township`, `Alta.Intelligence`.

A creature AI choice: an action, the target it applies to and how strongly it's weighted.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IActionTarget`](/game-api/types/alta-intelligence/iactiontarget)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionTarget("}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent> action, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float weight)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"readonly "}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent> Action"}</code> | The action to do. |
| <Link id="m-target" /><code>{"readonly "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target"}</code> | What the action is aimed at. |
| <Link id="m-weight" /><code>{"readonly float Weight"}</code> | The choice's score. |

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alta-intelligence-iactiontarget-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.IActionTarget.Target { get; }"}</code> |
| <Link id="m-alta-intelligence-iactiontarget-weight" /><code>{"private float Alta.Intelligence.IActionTarget.Weight { get; }"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ActionTarget&lt;TAgent>`:

[`ActionDecider<TAgent>.CurrentAction`](/game-api/types/alta-intelligence/actiondecider-tagent#m-currentaction), [`ActionDecider<TAgent>.GetBestAction`](/game-api/types/alta-intelligence/actiondecider-tagent#m-getbestaction), [`ActionDecider<TAgent>.GetBestBaseAction`](/game-api/types/alta-intelligence/actiondecider-tagent#m-getbestbaseaction), [`ActionDecider<TAgent>.GetBestTargetAction`](/game-api/types/alta-intelligence/actiondecider-tagent#m-getbesttargetaction), [`Agent<TThis>.currentAction`](/game-api/types/alta-intelligence/agent-tthis#m-currentaction), [`Agent<TThis>.GetBestAction`](/game-api/types/alta-intelligence/agent-tthis#m-getbestaction), [`Agent<TThis>.PreviewAction`](/game-api/types/alta-intelligence/agent-tthis#m-previewaction), [`Agent<TThis>.StartAction`](/game-api/types/alta-intelligence/agent-tthis#m-startaction), [`Dragonfly.Stunned`](/game-api/types/alta-intelligence/dragonfly#m-stunned), [`Dragonfly.stunnedActionMap`](/game-api/types/alta-intelligence/dragonfly#m-stunnedactionmap), [`Gotera.Stunned`](/game-api/types/alta-intelligence/gotera#m-stunned), [`Gotera.stunnedActionMap`](/game-api/types/alta-intelligence/gotera#m-stunnedactionmap), [`GreaterGotera.Stunned`](/game-api/types/alta-intelligence/greatergotera#m-stunned), [`GreaterGotera.stunnedActionMap`](/game-api/types/alta-intelligence/greatergotera#m-stunnedactionmap), [`Phantom.actionTargetMap`](/game-api/types/alta-intelligence/phantom#m-actiontargetmap), [`Spriggull.flailingAction`](/game-api/types/alta-intelligence/spriggull#m-flailingaction), [`Turabada.Stunned`](/game-api/types/alta-intelligence/turabada#m-stunned), [`Turabada.stunnedActionMap`](/game-api/types/alta-intelligence/turabada#m-stunnedactionmap).
