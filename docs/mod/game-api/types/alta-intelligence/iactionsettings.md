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
| <Link id="m-cancancelselfwithsametarget" /><code>{"bool CanCancelSelfWithSameTarget { get; }"}</code> | <span className="api-desc">If false, picking this action again on the same target restarts it instead of cancelling and starting a new one.</span> |
| <Link id="m-cancelpriority" /><code>{"int CancelPriority { get; }"}</code> | <span className="api-desc">This action is only considered if its priority is at least the running action's `MinimumCancelPriority`.</span> |
| <Link id="m-iscancellable" /><code>{"bool IsCancellable { get; }"}</code> | <span className="api-desc">If false the action can't be cancelled once running.</span> |
| <Link id="m-minimumcancelpriority" /><code>{"int MinimumCancelPriority { get; }"}</code> | <span className="api-desc">While this action runs, only actions with at least this `CancelPriority` can replace it.</span> |
| <Link id="m-minimumcancelweighting" /><code>{"float MinimumCancelWeighting { get; }"}</code> | <span className="api-desc">While this action runs, a replacement must score above this weight.</span> |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | <span className="api-desc">Base weighting. `ActionComponent` can add a random extra on each read.</span> |
| <Link id="m-name" /><code>{"string name { get; }"}</code> | <span className="api-desc">The action's name.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-used" /><code>{"event "}<Link to="/mod/game-api/types/alta-intelligence/actionsettingsusedhandler">{"ActionSettingsUsedHandler"}</Link>{" Used"}</code> | <span className="api-desc">Fires each time the action starts.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleused" /><code>{"void HandleUsed("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Called each time the action starts. The first call initializes the `IAiHook` components, then `Used` fires.</span> |

## Used in

Members of other types that take, return or hold a `IActionSettings`:

<div className="api-used-in">

[`Action<TAgent>.GeneralSettings`](/mod/game-api/types/alta-intelligence/action-tagent#m-generalsettings), [`BasicAction<TAgent, TActive, TSettings>.GeneralSettings`](/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings#m-generalsettings), [`IAction.GeneralSettings`](/mod/game-api/types/alta-intelligence/iaction#m-generalsettings).

</div>
