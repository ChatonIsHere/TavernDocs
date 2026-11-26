---
title: "ToggleBool"
description: "A named on/off setting that registers itself in a static list so console commands can toggle it by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleBool

A **class** in `Root.Township`, the global namespace.

A named on/off setting that registers itself in a static list so console commands can toggle it by name. Examples: `immortals`, `damagepopup`, `xppopup`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleBool(string name, bool defaultValue = false)"}</code> | <span className="api-desc">Creates a `ToggleBool` from `name` and `defaultValue`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-toggleablesettings" /><code>{"static Dictionary<string, "}<Link to="/mod/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{"> toggleableSettings"}</code> | <span className="api-desc">Every registered setting by name, used by the settings console commands.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"private bool value"}</code> | <span className="api-desc">Backing field for `Value`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The name the setting is registered under.</span> |
| <Link id="m-value-2" /><code>{"bool Value { get; set; }"}</code> | <span className="api-desc">The current state. Setting a new value logs it and raises `Toggled`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-toggled" /><code>{"event Action<bool> Toggled"}</code> | <span className="api-desc">Raised with the new value when `Value` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | <span className="api-desc">Removes this setting from `toggleableSettings`.</span> |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | <span className="api-desc">Flips `Value`.</span> |

## Used in

Members of other types that take, return or hold a `ToggleBool`:

<div className="api-used-in">

[`PickupTypeSettings.DamageMessage`](/mod/game-api/types/global-p/pickuptypesettings#m-damagemessage), [`PickupTypeSettings.HasPopup`](/mod/game-api/types/global-p/pickuptypesettings#m-haspopup), [`PlayerHealth.ArePlayersAvoidingDamage`](/mod/game-api/types/global-p/playerhealth#m-areplayersavoidingdamage), [`PlayerProgressionManager.experiencePopup`](/mod/game-api/types/global-p/playerprogressionmanager#m-experiencepopup).

</div>
