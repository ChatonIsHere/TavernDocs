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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`IActionTarget`](/mod/game-api/types/alta-intelligence/iactiontarget)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionTarget("}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent> action, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float weight)"}</code> | <span className="api-desc">Creates an `ActionTarget` from `action`, `target` and `weight`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"readonly "}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent> Action"}</code> | <span className="api-desc">The action to do.</span> |
| <Link id="m-target" /><code>{"readonly "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target"}</code> | <span className="api-desc">What the action is aimed at.</span> |
| <Link id="m-weight" /><code>{"readonly float Weight"}</code> | <span className="api-desc">The choice's score.</span> |

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-iactiontarget-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.IActionTarget.Target { get; }"}</code> | <span className="api-desc">Explicit interface property returning the `Target` field.</span> |
| <Link id="m-alta-intelligence-iactiontarget-weight" /><code>{"private float Alta.Intelligence.IActionTarget.Weight { get; }"}</code> | <span className="api-desc">Explicit interface property returning the `Weight` field.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ActionTarget&lt;TAgent>`:

<div className="api-used-in">

[`ActionDecider<TAgent>.CurrentAction`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-currentaction), [`ActionDecider<TAgent>.GetBestAction`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-getbestaction), [`ActionDecider<TAgent>.GetBestBaseAction`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-getbestbaseaction), [`ActionDecider<TAgent>.GetBestTargetAction`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-getbesttargetaction), [`Agent<TThis>.currentAction`](/mod/game-api/types/alta-intelligence/agent-tthis#m-currentaction), [`Agent<TThis>.GetBestAction`](/mod/game-api/types/alta-intelligence/agent-tthis#m-getbestaction), [`Agent<TThis>.PreviewAction`](/mod/game-api/types/alta-intelligence/agent-tthis#m-previewaction), [`Agent<TThis>.StartAction`](/mod/game-api/types/alta-intelligence/agent-tthis#m-startaction), [`Dragonfly.Stunned`](/mod/game-api/types/alta-intelligence/dragonfly#m-stunned), [`Dragonfly.stunnedActionMap`](/mod/game-api/types/alta-intelligence/dragonfly#m-stunnedactionmap), [`Gotera.Stunned`](/mod/game-api/types/alta-intelligence/gotera#m-stunned), [`Gotera.stunnedActionMap`](/mod/game-api/types/alta-intelligence/gotera#m-stunnedactionmap), [`GreaterGotera.Stunned`](/mod/game-api/types/alta-intelligence/greatergotera#m-stunned), [`GreaterGotera.stunnedActionMap`](/mod/game-api/types/alta-intelligence/greatergotera#m-stunnedactionmap), [`Phantom.actionTargetMap`](/mod/game-api/types/alta-intelligence/phantom#m-actiontargetmap), [`Spriggull.flailingAction`](/mod/game-api/types/alta-intelligence/spriggull#m-flailingaction), [`Turabada.Stunned`](/mod/game-api/types/alta-intelligence/turabada#m-stunned), [`Turabada.stunnedActionMap`](/mod/game-api/types/alta-intelligence/turabada#m-stunnedactionmap).

</div>
