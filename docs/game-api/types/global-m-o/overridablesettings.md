---
title: "OverridableSettings"
description: "abstract class OverridableSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OverridableSettings

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`BodyControllerSettings`](/game-api/types/alta-player/bodycontrollersettings), [`PickupTypeSetting`](/game-api/types/global-p/pickuptypesetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected OverridableSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedsettings" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-m-o/overridablesettings">{"OverridableSettings"}</Link>{", "}<Link to="/game-api/types/global-m-o/overridablesettings">{"OverridableSettings"}</Link>{"> instantiatedSettings"}</code> |  |
| <Link id="m-isoverridingsettings" /><code>{"private bool isOverridingSettings"}</code> |  |
| <Link id="m-selectedfieldsnames" /><code>{"private List<string> selectedFieldsNames"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isoverridingsettings-2" /><code>{"bool IsOverridingSettings { get; set; }"}</code> |  |
| <Link id="m-selectedfieldsnames-2" /><code>{"List<string> SelectedFieldsNames { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoverridensettings" /><code>{"T GetOverridenSettings<T>(T baseSettings)"}</code> |  |
| <Link id="m-getsettingsobject" /><code>{"T GetSettingsObject<T>()"}</code> |  |
