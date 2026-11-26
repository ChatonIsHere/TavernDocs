---
title: "OverridableSettings"
description: "Base for settings assets where one asset can override chosen fields of another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OverridableSettings

An **abstract class** in `Root.Township`, the global namespace.

Base for settings assets where one asset can override chosen fields of another. `GetOverridenSettings` builds and caches a copy of the base with the selected fields taken from this asset.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`BodyControllerSettings`](/mod/game-api/types/alta-player/bodycontrollersettings), [`PickupTypeSetting`](/mod/game-api/types/global-p/pickuptypesetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected OverridableSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedsettings" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/global-m-o/overridablesettings">{"OverridableSettings"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/overridablesettings">{"OverridableSettings"}</Link>{"> instantiatedSettings"}</code> | Cache of built override copies, keyed by the overriding asset. |
| <Link id="m-isoverridingsettings" /><code>{"private bool isOverridingSettings"}</code> | Backing field for `IsOverridingSettings`. |
| <Link id="m-selectedfieldsnames" /><code>{"private List<string> selectedFieldsNames"}</code> | Backing field for `SelectedFieldsNames`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isoverridingsettings-2" /><code>{"bool IsOverridingSettings { get; set; }"}</code> | Whether this asset is set up as an override. Set in the editor. |
| <Link id="m-selectedfieldsnames-2" /><code>{"List<string> SelectedFieldsNames { get; set; }"}</code> | Names of the fields this asset overrides on the base settings. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoverridensettings" /><code>{"T GetOverridenSettings<T>(T baseSettings)"}</code> | Returns a cached copy of the base settings with each selected field copied from this asset, by reflection. |
| <Link id="m-getsettingsobject" /><code>{"T GetSettingsObject<T>()"}</code> | Returns this asset cast to the requested settings type. |
