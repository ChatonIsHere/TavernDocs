---
title: "Festivity"
description: "A seasonal event asset with a start and end date."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Festivity

A **class** in `Root.Township`, no namespace.

A seasonal event asset with a start and end date. `FestivityManager` turns it on and off on the server and syncs the state to clients.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`HashedGeneralValue<Festivity>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Festivity`](/game-api/types/global-e-h/festivity), [`Festivity.Create`](/game-api/types/global-e-h/festivity-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/festivity-create)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Festivity()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private "}<Link to="/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" end"}</code> | Backing field for `End`, the month, day and hour the festivity ends. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Backing field for `IsActivated`. Not saved; set at run time. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. |
| <Link id="m-start" /><code>{"private "}<Link to="/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" start"}</code> | Backing field for `Start`, the month, day and hour the festivity starts. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-end-2" /><code><Link to="/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" End { get; }"}</code> | Month, day and hour the festivity ends. |
| <Link id="m-isactivated" /><code>{"bool IsActivated { get; set; }"}</code> | Whether the festivity is running now. Set by `FestivityManager`, which resets it from the dates every second. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> | Inspector switch. The server only activates enabled festivities, rechecking the dates every second. |
| <Link id="m-start-2" /><code><Link to="/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" Start { get; }"}</code> | Month, day and hour the festivity starts. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-activationchanged" /><code>{"event Action<"}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{"> ActivationChanged"}</code> | Raised when `IsActivated` changes. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setactive" /><code>{"private void SetActive(bool value)"}</code> | Changes the active state and raises `ActivationChanged` if it differs. |

</details>

## Used in

Members of other types that take, return or hold a `Festivity`:

[`Distribution<TThis, T, TItem, TFestivityGroup>.BaseFestivityGroup.festivity`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-basefestivitygroup#m-festivity), [`Distribution<TThis, T, TItem, TFestivityGroup>.BaseFestivityGroup.Festivity`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-basefestivitygroup#m-festivity-2), [`LootTable.FestivityList.festivity`](/game-api/types/alta-world-generation/loottable-festivitylist#m-festivity), [`LootTable.FestivityList.Festivity`](/game-api/types/alta-world-generation/loottable-festivitylist#m-festivity-2), [`PopulationDefinition.FestivePrefabGroup.festivity`](/game-api/types/alta-world-generation/populationdefinition-festiveprefabgroup#m-festivity), [`Filter.targetFestivity`](/game-api/types/alta-customization/filter#m-targetfestivity), [`AutoFestiveAchievement.festivity`](/game-api/types/game-other-namespaces/autofestiveachievement#m-festivity), [`FestiveFeature.festivity`](/game-api/types/global-e-h/festivefeature#m-festivity), [`FestiveFeature.OnFestivityActivationChanged`](/game-api/types/global-e-h/festivefeature#m-onfestivityactivationchanged), [`FestivityCommandModule.Inspect`](/game-api/types/global-e-h/festivitycommandmodule#m-inspect), [`FestivityCommandModule.StartFestivity`](/game-api/types/global-e-h/festivitycommandmodule#m-startfestivity), [`FestivityCommandModule.StopFestivity`](/game-api/types/global-e-h/festivitycommandmodule#m-stopfestivity), [`FestivityManager.SetFestivityActive`](/game-api/types/global-e-h/festivitymanager#m-setfestivityactive), [`FestivityManager.sync`](/game-api/types/global-e-h/festivitymanager#m-sync), [`FestivityManager.SyncFestivity`](/game-api/types/global-e-h/festivitymanager#m-syncfestivity).
