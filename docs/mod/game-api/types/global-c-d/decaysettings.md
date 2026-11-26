---
title: "DecaySettings"
description: "Asset with decay timing, used by decay components such as BasicDecay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DecaySettings

A **class** in `Root.Township`, the global namespace.

Asset with decay timing, used by decay components such as `BasicDecay`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DecaySettings.Create`](/mod/game-api/types/global-c-d/decaysettings-create), [`PickupDecaySettings`](/mod/game-api/types/global-p/pickupdecaysettings)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/decaysettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DecaySettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. |
| <Link id="m-maximumdecaytime" /><code>{"private float maximumDecayTime"}</code> | Backing field for `MaximumDecayTime`, in seconds. Defaults to 60. |
| <Link id="m-minimumdecaytime" /><code>{"private float minimumDecayTime"}</code> | Backing field for `MinimumDecayTime`, in seconds. Defaults to 60. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-decaytime" /><code>{"float DecayTime { get; }"}</code> | A random time between the minimum and maximum, new on each read. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> | Whether decay is on. |
| <Link id="m-maximumdecaytime-2" /><code>{"float MaximumDecayTime { get; }"}</code> | Longest decay time in seconds. |
| <Link id="m-minimumdecaytime-2" /><code>{"float MinimumDecayTime { get; }"}</code> | Shortest decay time in seconds. |

## Used in

Members of other types that take, return or hold a `DecaySettings`:

[`BasicDecay.settings`](/mod/game-api/types/global-a-b/basicdecay#m-settings), [`BasicDecay.Settings`](/mod/game-api/types/global-a-b/basicdecay#m-settings-2).
