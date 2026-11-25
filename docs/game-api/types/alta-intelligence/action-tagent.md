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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IAction<TAgent>`](/game-api/types/alta-intelligence/iaction-intagent), [`IAction`](/game-api/types/alta-intelligence/iaction-intagent)
- **Derived types** [`BasicAction<TAgent, TActive, TSettings>`](/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions), [Docks](/game-api/items/docks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Action()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-calculatebasepreferred" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBasePreferred { get; set; }"}</code> | Preferred rules scored without a target. They can at most double or zero the score. |
| <Link id="m-calculatebaserequired" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBaseRequired { get; set; }"}</code> | Required rules scored without a target. A rule below 0 rules the action out. |
| <Link id="m-calculatetargetpreferred" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetPreferred { get; set; }"}</code> | Preferred rules scored for each possible target. |
| <Link id="m-calculatetargetrequired" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetRequired { get; set; }"}</code> | Required rules scored for each possible target. |
| <Link id="m-generalsettings" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/iactionsettings">{"IActionSettings"}</Link>{" GeneralSettings { get; }"}</code> | The action's settings component. |
| <Link id="m-isusingtarget" /><code>{"bool IsUsingTarget { get; set; }"}</code> | Whether the action is scored per target. |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | The base score from the settings. Rolled again on each read if the settings add a random part. |
| <Link id="m-name" /><code>{"virtual string Name { get; }"}</code> | The settings object's name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" Start(TAgent agent)"}</code> | Starts the action on an agent and returns the running action. |
