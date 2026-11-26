---
title: "ActionSet<TAgent>"
description: "An agent's available AI actions, split into actions that need a target and actions that do not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionSet&lt;TAgent&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

An agent's available AI actions, split into actions that need a target and actions that do not.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionSet()"}</code> | <span className="api-desc">Creates an `ActionSet` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseactions" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent>> baseActions"}</code> | <span className="api-desc">Backing field for `BaseActions`: actions that don't use a target.</span> |
| <Link id="m-targetactions" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent>> targetActions"}</code> | <span className="api-desc">Backing field for `TargetActions`: actions that use a target.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseactions-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent>> BaseActions { get; }"}</code> | <span className="api-desc">Actions that do not need a target.</span> |
| <Link id="m-targetactions-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent>> TargetActions { get; }"}</code> | <span className="api-desc">Actions that need a target.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addaction" /><code>{"void AddAction("}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent> action)"}</code> | <span className="api-desc">Adds an action to the target or base set, by its `IsUsingTarget`.</span> |
| <Link id="m-removeaction" /><code>{"void RemoveAction("}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent> action)"}</code> | <span className="api-desc">Removes an action from its set.</span> |

## Used in

Members of other types that take, return or hold a `ActionSet&lt;TAgent>`:

<div className="api-used-in">

[`ActionComponentSet.actionSet`](/mod/game-api/types/alta-intelligence/actioncomponentset#m-actionset), [`ActionComponentSet.GetActionSet`](/mod/game-api/types/alta-intelligence/actioncomponentset#m-getactionset), [`ActionDecider<TAgent>.PossibilitySet`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-possibilityset), [`Agent<TThis>.actionComponentSets`](/mod/game-api/types/alta-intelligence/agent-tthis#m-actioncomponentsets), [`Babu.PassiveActions`](/mod/game-api/types/alta-intelligence/babu#m-passiveactions-2), [`DeathFern.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/deathfern#m-passiveactionsetmap), [`Dragonfly.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/dragonfly#m-passiveactionsetmap), [`FireBug.emergeAction`](/mod/game-api/types/alta-intelligence/firebug#m-emergeaction), [`FireBug.loseControlAction`](/mod/game-api/types/alta-intelligence/firebug#m-losecontrolaction), [`FireBug.regainControlAction`](/mod/game-api/types/alta-intelligence/firebug#m-regaincontrolaction), [`Gotera.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/gotera#m-passiveactionsetmap), [`GreaterGotera.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/greatergotera#m-passiveactionsetmap), [`Phantom.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/phantom#m-passiveactionsetmap), [`Schmeechee.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/schmeechee#m-passiveactionsetmap), [`Spriggull.PassiveActions`](/mod/game-api/types/alta-intelligence/spriggull#m-passiveactions-2), [`Turabada.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/turabada#m-passiveactionsetmap), [`Wyrm.BurrowedActions`](/mod/game-api/types/alta-intelligence/wyrm#m-burrowedactions-2), [`Wyrm.BurrowedPossibilitySet`](/mod/game-api/types/alta-intelligence/wyrm#m-burrowedpossibilityset), [`Wyrm.EmergedActions`](/mod/game-api/types/alta-intelligence/wyrm#m-emergedactions-2), [`Wyrm.EmergedPossibilitySet`](/mod/game-api/types/alta-intelligence/wyrm#m-emergedpossibilityset).

</div>
