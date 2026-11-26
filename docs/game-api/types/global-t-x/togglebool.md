---
title: "ToggleBool"
description: "A named on/off setting that registers itself in a static list so console commands can toggle it by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleBool

A **class** in `Root.Township`, no namespace.

A named on/off setting that registers itself in a static list so console commands can toggle it by name. Examples: `immortals`, `damagepopup`, `xppopup`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ToggleBool(string name, bool defaultValue = false)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-toggleablesettings" /><code>{"static Dictionary<string, "}<Link to="/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{"> toggleableSettings"}</code> | Every registered setting by name, used by the settings console commands. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"private bool value"}</code> | Backing field for `Value`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The name the setting is registered under. |
| <Link id="m-value-2" /><code>{"bool Value { get; set; }"}</code> | The current state. Setting a new value logs it and raises `Toggled`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-toggled" /><code>{"event Action<bool> Toggled"}</code> | Raised with the new value when `Value` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | Removes this setting from `toggleableSettings`. |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | Flips `Value`. |

## Used in

Members of other types that take, return or hold a `ToggleBool`:

[`PickupTypeSettings.DamageMessage`](/game-api/types/global-p/pickuptypesettings#m-damagemessage), [`PickupTypeSettings.HasPopup`](/game-api/types/global-p/pickuptypesettings#m-haspopup), [`PlayerHealth.ArePlayersAvoidingDamage`](/game-api/types/global-p/playerhealth#m-areplayersavoidingdamage), [`PlayerProgressionManager.experiencePopup`](/game-api/types/global-p/playerprogressionmanager#m-experiencepopup).
