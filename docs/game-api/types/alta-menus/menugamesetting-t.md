---
title: "MenuGameSetting<T>"
description: "abstract class MenuGameSetting<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MenuGameSetting&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting`](/game-api/types/alta-menus/menugamesetting)
- **Derived types** [`EnumMenuSettingBase`](/game-api/types/alta-menus/enummenusettingbase), [`MenuToggleSetting`](/game-api/types/alta-menus/menutogglesetting), [`StandardFloatAsEnum`](/game-api/types/alta-menus/standardfloatasenum)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MenuGameSetting()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displaynametext" /><code>{"protected "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" displayNameText"}</code> |  |
| <Link id="m-settingspanel" /><code>{"private "}<Link to="/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" settingsPanel"}</code> |  |
| <Link id="m-settingtodisplay" /><code>{"protected T settingToDisplay"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingspanel-2" /><code>{"protected "}<Link to="/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" "}<Link to="/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> |  |
| <Link id="m-checksetup" /><code>{"private void CheckSetup()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-setup" /><code>{"protected virtual void Setup()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
