---
title: "Action<TAgent>"
description: "abstract class Action<TAgent> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Action&lt;TAgent&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

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
| <Link id="m-calculatebasepreferred" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBasePreferred { get; set; }"}</code> |  |
| <Link id="m-calculatebaserequired" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBaseRequired { get; set; }"}</code> |  |
| <Link id="m-calculatetargetpreferred" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetPreferred { get; set; }"}</code> |  |
| <Link id="m-calculatetargetrequired" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetRequired { get; set; }"}</code> |  |
| <Link id="m-generalsettings" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/iactionsettings">{"IActionSettings"}</Link>{" GeneralSettings { get; }"}</code> |  |
| <Link id="m-isusingtarget" /><code>{"bool IsUsingTarget { get; set; }"}</code> |  |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> |  |
| <Link id="m-name" /><code>{"virtual string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" Start(TAgent agent)"}</code> |  |
