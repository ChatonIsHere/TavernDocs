---
title: "IActionSettings"
description: "interface IActionSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IActionSettings

An **interface** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cancancelselfwithsametarget" /><code>{"bool CanCancelSelfWithSameTarget { get; }"}</code> |  |
| <Link id="m-cancelpriority" /><code>{"int CancelPriority { get; }"}</code> |  |
| <Link id="m-iscancellable" /><code>{"bool IsCancellable { get; }"}</code> |  |
| <Link id="m-minimumcancelpriority" /><code>{"int MinimumCancelPriority { get; }"}</code> |  |
| <Link id="m-minimumcancelweighting" /><code>{"float MinimumCancelWeighting { get; }"}</code> |  |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string name { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-used" /><code>{"event "}<Link to="/game-api/types/alta-intelligence/actionsettingsusedhandler">{"ActionSettingsUsedHandler"}</Link>{" Used"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleused" /><code>{"void HandleUsed("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IActionSettings`:

[`Action<TAgent>.GeneralSettings`](/game-api/types/alta-intelligence/action-tagent#m-generalsettings), [`BasicAction<TAgent, TActive, TSettings>.GeneralSettings`](/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings#m-generalsettings), [`IAction.GeneralSettings`](/game-api/types/alta-intelligence/iaction#m-generalsettings).
