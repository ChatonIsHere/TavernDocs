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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionSet()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseactions" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent>> baseActions"}</code> | Backing field for `BaseActions`: actions that don't use a target. |
| <Link id="m-targetactions" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent>> targetActions"}</code> | Backing field for `TargetActions`: actions that use a target. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseactions-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent>> BaseActions { get; }"}</code> | Actions that do not need a target. |
| <Link id="m-targetactions-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent>> TargetActions { get; }"}</code> | Actions that need a target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addaction" /><code>{"void AddAction("}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent> action)"}</code> | Adds an action to the target or base set, by its `IsUsingTarget`. |
| <Link id="m-removeaction" /><code>{"void RemoveAction("}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TAgent> action)"}</code> | Removes an action from its set. |

## Used in

Members of other types that take, return or hold a `ActionSet&lt;TAgent>`:

[`ActionComponentSet.actionSet`](/game-api/types/alta-intelligence/actioncomponentset#m-actionset), [`ActionComponentSet.GetActionSet`](/game-api/types/alta-intelligence/actioncomponentset#m-getactionset), [`ActionDecider<TAgent>.PossibilitySet`](/game-api/types/alta-intelligence/actiondecider-tagent#m-possibilityset), [`Agent<TThis>.actionComponentSets`](/game-api/types/alta-intelligence/agent-tthis#m-actioncomponentsets), [`Babu.PassiveActions`](/game-api/types/alta-intelligence/babu#m-passiveactions-2), [`DeathFern.passiveActionSetMap`](/game-api/types/alta-intelligence/deathfern#m-passiveactionsetmap), [`Dragonfly.passiveActionSetMap`](/game-api/types/alta-intelligence/dragonfly#m-passiveactionsetmap), [`FireBug.emergeAction`](/game-api/types/alta-intelligence/firebug#m-emergeaction), [`FireBug.loseControlAction`](/game-api/types/alta-intelligence/firebug#m-losecontrolaction), [`FireBug.regainControlAction`](/game-api/types/alta-intelligence/firebug#m-regaincontrolaction), [`Gotera.passiveActionSetMap`](/game-api/types/alta-intelligence/gotera#m-passiveactionsetmap), [`GreaterGotera.passiveActionSetMap`](/game-api/types/alta-intelligence/greatergotera#m-passiveactionsetmap), [`Phantom.passiveActionSetMap`](/game-api/types/alta-intelligence/phantom#m-passiveactionsetmap), [`Schmeechee.passiveActionSetMap`](/game-api/types/alta-intelligence/schmeechee#m-passiveactionsetmap), [`Spriggull.PassiveActions`](/game-api/types/alta-intelligence/spriggull#m-passiveactions-2), [`Turabada.passiveActionSetMap`](/game-api/types/alta-intelligence/turabada#m-passiveactionsetmap), [`Wyrm.BurrowedActions`](/game-api/types/alta-intelligence/wyrm#m-burrowedactions-2), [`Wyrm.BurrowedPossibilitySet`](/game-api/types/alta-intelligence/wyrm#m-burrowedpossibilityset), [`Wyrm.EmergedActions`](/game-api/types/alta-intelligence/wyrm#m-emergedactions-2), [`Wyrm.EmergedPossibilitySet`](/game-api/types/alta-intelligence/wyrm#m-emergedpossibilityset).
