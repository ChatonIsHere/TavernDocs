---
title: "IActionSettings"
description: "Settings every AI action has: its weighting and the rules for cancelling it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IActionSettings

An **interface** in `Root.Township`, `Alta.Intelligence`.

Settings every AI action has: its weighting and the rules for cancelling it. Implemented by `ActionComponent`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cancancelselfwithsametarget" /><code>{"bool CanCancelSelfWithSameTarget { get; }"}</code> | If false, picking this action again on the same target restarts it instead of cancelling and starting a new one. |
| <Link id="m-cancelpriority" /><code>{"int CancelPriority { get; }"}</code> | This action is only considered if its priority is at least the running action's `MinimumCancelPriority`. |
| <Link id="m-iscancellable" /><code>{"bool IsCancellable { get; }"}</code> | If false the action can't be cancelled once running. |
| <Link id="m-minimumcancelpriority" /><code>{"int MinimumCancelPriority { get; }"}</code> | While this action runs, only actions with at least this `CancelPriority` can replace it. |
| <Link id="m-minimumcancelweighting" /><code>{"float MinimumCancelWeighting { get; }"}</code> | While this action runs, a replacement must score above this weight. |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | Base weighting. `ActionComponent` can add a random extra on each read. |
| <Link id="m-name" /><code>{"string name { get; }"}</code> | The action's name. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-used" /><code>{"event "}<Link to="/mod/game-api/types/alta-intelligence/actionsettingsusedhandler">{"ActionSettingsUsedHandler"}</Link>{" Used"}</code> | Fires each time the action starts. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleused" /><code>{"void HandleUsed("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Called each time the action starts. The first call initializes the `IAiHook` components, then `Used` fires. |

## Used in

Members of other types that take, return or hold a `IActionSettings`:

[`Action<TAgent>.GeneralSettings`](/mod/game-api/types/alta-intelligence/action-tagent#m-generalsettings), [`BasicAction<TAgent, TActive, TSettings>.GeneralSettings`](/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings#m-generalsettings), [`IAction.GeneralSettings`](/mod/game-api/types/alta-intelligence/iaction#m-generalsettings).
