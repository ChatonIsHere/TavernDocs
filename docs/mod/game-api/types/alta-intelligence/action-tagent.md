---
title: "Action<TAgent>"
description: "Base for a creature action: its settings and the scoring rules the ActionDecider uses to pick it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Action&lt;TAgent&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a creature action: its settings and the scoring rules the `ActionDecider` uses to pick it. `Start` creates the running action.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`IAction<TAgent>`](/mod/game-api/types/alta-intelligence/iaction-intagent), [`IAction`](/mod/game-api/types/alta-intelligence/iaction-intagent)
- **Derived types** [`BasicAction<TAgent, TActive, TSettings>`](/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions), [Docks](/mod/game-api/items/docks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Action()"}</code> | <span className="api-desc">Creates an `Action` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-calculatebasepreferred" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBasePreferred { get; set; }"}</code> | <span className="api-desc">Preferred rules scored without a target. They can at most double or zero the score.</span> |
| <Link id="m-calculatebaserequired" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBaseRequired { get; set; }"}</code> | <span className="api-desc">Required rules scored without a target. A rule below 0 rules the action out.</span> |
| <Link id="m-calculatetargetpreferred" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetPreferred { get; set; }"}</code> | <span className="api-desc">Preferred rules scored for each possible target.</span> |
| <Link id="m-calculatetargetrequired" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetRequired { get; set; }"}</code> | <span className="api-desc">Required rules scored for each possible target.</span> |
| <Link id="m-generalsettings" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-intelligence/iactionsettings">{"IActionSettings"}</Link>{" GeneralSettings { get; }"}</code> | <span className="api-desc">The action's settings component.</span> |
| <Link id="m-isusingtarget" /><code>{"bool IsUsingTarget { get; set; }"}</code> | <span className="api-desc">Whether the action is scored per target.</span> |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | <span className="api-desc">The base score from the settings. Rolled again on each read if the settings add a random part.</span> |
| <Link id="m-name" /><code>{"virtual string Name { get; }"}</code> | <span className="api-desc">The settings object's name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" Start(TAgent agent)"}</code> | <span className="api-desc">Starts the action on an agent and returns the running action.</span> |
