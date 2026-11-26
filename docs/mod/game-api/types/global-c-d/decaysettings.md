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
| <Link id="m-ctor" /><code>{"DecaySettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |
| <Link id="m-maximumdecaytime" /><code>{"private float maximumDecayTime"}</code> | <span className="api-desc">Backing field for `MaximumDecayTime`, in seconds. Defaults to 60.</span> |
| <Link id="m-minimumdecaytime" /><code>{"private float minimumDecayTime"}</code> | <span className="api-desc">Backing field for `MinimumDecayTime`, in seconds. Defaults to 60.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-decaytime" /><code>{"float DecayTime { get; }"}</code> | <span className="api-desc">A random time between the minimum and maximum, new on each read.</span> |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> | <span className="api-desc">Whether decay is on.</span> |
| <Link id="m-maximumdecaytime-2" /><code>{"float MaximumDecayTime { get; }"}</code> | <span className="api-desc">Longest decay time in seconds.</span> |
| <Link id="m-minimumdecaytime-2" /><code>{"float MinimumDecayTime { get; }"}</code> | <span className="api-desc">Shortest decay time in seconds.</span> |

## Used in

Members of other types that take, return or hold a `DecaySettings`:

<div className="api-used-in">

[`BasicDecay.settings`](/mod/game-api/types/global-a-b/basicdecay#m-settings), [`BasicDecay.Settings`](/mod/game-api/types/global-a-b/basicdecay#m-settings-2).

</div>
