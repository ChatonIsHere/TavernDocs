---
title: "Festivity"
description: "A seasonal event asset with a start and end date."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Festivity

A **class** in `Root.Township`, the global namespace.

A seasonal event asset with a start and end date. `FestivityManager` turns it on and off on the server and syncs the state to clients.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`HashedGeneralValue<Festivity>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Festivity`](/mod/game-api/types/global-e-h/festivity), [`Festivity.Create`](/mod/game-api/types/global-e-h/festivity-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/festivity-create)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Festivity()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" end"}</code> | <span className="api-desc">Backing field for `End`, the month, day and hour the festivity ends.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Backing field for `IsActivated`. Not saved; set at run time.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |
| <Link id="m-start" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" start"}</code> | <span className="api-desc">Backing field for `Start`, the month, day and hour the festivity starts.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-end-2" /><code><Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" End { get; }"}</code> | <span className="api-desc">Month, day and hour the festivity ends.</span> |
| <Link id="m-isactivated" /><code>{"bool IsActivated { get; set; }"}</code> | <span className="api-desc">Whether the festivity is running now. Set by `FestivityManager`, which resets it from the dates every second.</span> |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> | <span className="api-desc">Inspector switch. The server only activates enabled festivities, rechecking the dates every second.</span> |
| <Link id="m-start-2" /><code><Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" Start { get; }"}</code> | <span className="api-desc">Month, day and hour the festivity starts.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-activationchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{"> ActivationChanged"}</code> | <span className="api-desc">Raised when `IsActivated` changes.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setactive" /><code>{"private void SetActive(bool value)"}</code> | <span className="api-desc">Changes the active state and raises `ActivationChanged` if it differs.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Festivity`:

<div className="api-used-in">

[`Distribution<TThis, T, TItem, TFestivityGroup>.BaseFestivityGroup.festivity`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-basefestivitygroup#m-festivity), [`Distribution<TThis, T, TItem, TFestivityGroup>.BaseFestivityGroup.Festivity`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-basefestivitygroup#m-festivity-2), [`LootTable.FestivityList.festivity`](/mod/game-api/types/alta-world-generation/loottable-festivitylist#m-festivity), [`LootTable.FestivityList.Festivity`](/mod/game-api/types/alta-world-generation/loottable-festivitylist#m-festivity-2), [`PopulationDefinition.FestivePrefabGroup.festivity`](/mod/game-api/types/alta-world-generation/populationdefinition-festiveprefabgroup#m-festivity), [`Filter.targetFestivity`](/mod/game-api/types/alta-customization/filter#m-targetfestivity), [`AutoFestiveAchievement.festivity`](/mod/game-api/types/game-other-namespaces/autofestiveachievement#m-festivity), [`FestiveFeature.festivity`](/mod/game-api/types/global-e-h/festivefeature#m-festivity), [`FestiveFeature.OnFestivityActivationChanged`](/mod/game-api/types/global-e-h/festivefeature#m-onfestivityactivationchanged), [`FestivityCommandModule.Inspect`](/mod/game-api/types/global-e-h/festivitycommandmodule#m-inspect), [`FestivityCommandModule.StartFestivity`](/mod/game-api/types/global-e-h/festivitycommandmodule#m-startfestivity), [`FestivityCommandModule.StopFestivity`](/mod/game-api/types/global-e-h/festivitycommandmodule#m-stopfestivity), [`FestivityManager.SetFestivityActive`](/mod/game-api/types/global-e-h/festivitymanager#m-setfestivityactive), [`FestivityManager.sync`](/mod/game-api/types/global-e-h/festivitymanager#m-sync), [`FestivityManager.SyncFestivity`](/mod/game-api/types/global-e-h/festivitymanager#m-syncfestivity).

</div>
