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
| <Link id="m-ctor" /><code>{"protected OverridableSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedsettings" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/global-m-o/overridablesettings">{"OverridableSettings"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/overridablesettings">{"OverridableSettings"}</Link>{"> instantiatedSettings"}</code> | <span className="api-desc">Cache of built override copies, keyed by the overriding asset.</span> |
| <Link id="m-isoverridingsettings" /><code>{"private bool isOverridingSettings"}</code> | <span className="api-desc">Backing field for `IsOverridingSettings`.</span> |
| <Link id="m-selectedfieldsnames" /><code>{"private List<string> selectedFieldsNames"}</code> | <span className="api-desc">Backing field for `SelectedFieldsNames`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isoverridingsettings-2" /><code>{"bool IsOverridingSettings { get; set; }"}</code> | <span className="api-desc">Whether this asset is set up as an override. Set in the editor.</span> |
| <Link id="m-selectedfieldsnames-2" /><code>{"List<string> SelectedFieldsNames { get; set; }"}</code> | <span className="api-desc">Names of the fields this asset overrides on the base settings.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoverridensettings" /><code>{"T GetOverridenSettings<T>(T baseSettings)"}</code> | <span className="api-desc">Returns a cached copy of the base settings with each selected field copied from this asset, by reflection.</span> |
| <Link id="m-getsettingsobject" /><code>{"T GetSettingsObject<T>()"}</code> | <span className="api-desc">Returns this asset cast to the requested settings type.</span> |
