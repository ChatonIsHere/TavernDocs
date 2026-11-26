---
title: "MenuGameSetting<T>"
description: "Base for one setting row in the in-game settings panel, showing a setting of type T."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MenuGameSetting&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Menu`.

Base for one setting row in the in-game settings panel, showing a setting of type `T`. Client only. Hides itself if the setting isn't valid on this platform.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting`](/game-api/types/alta-menus/menugamesetting)
- **Derived types** [`EnumMenuSettingBase`](/game-api/types/alta-menus/enummenusettingbase), [`MenuToggleSetting`](/game-api/types/alta-menus/menutogglesetting), [`StandardFloatAsEnum`](/game-api/types/alta-menus/standardfloatasenum)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MenuGameSetting()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displaynametext" /><code>{"protected "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" displayNameText"}</code> | Text that shows the setting's display name. |
| <Link id="m-settingtodisplay" /><code>{"protected T settingToDisplay"}</code> | The setting this row shows. Touching the row with a hand shows its description. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settingspanel" /><code>{"private "}<Link to="/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" settingsPanel"}</code> | Backing field for `SettingsPanel`, the parent panel found on first use. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingspanel-2" /><code>{"protected "}<Link to="/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" "}<Link to="/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" { get; }"}</code> | The `SettingsPanel` this row sits under, found on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | Points the row at another setting and sets it up again. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor hook for subclasses. Empty by default. |
| <Link id="m-setup" /><code>{"protected virtual void Setup()"}</code> | Fills the row from the setting. The base writes the display name. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksetup" /><code>{"private void CheckSetup()"}</code> | Hides the control if its setting is not valid on this build, otherwise calls `Setup`. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | When a player's hand touches the control, shows the setting's description on the settings panel. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Calls `CheckSetup`. |

</details>
