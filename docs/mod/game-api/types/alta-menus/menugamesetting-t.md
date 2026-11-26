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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting`](/mod/game-api/types/alta-menus/menugamesetting)
- **Derived types** [`EnumMenuSettingBase`](/mod/game-api/types/alta-menus/enummenusettingbase), [`MenuToggleSetting`](/mod/game-api/types/alta-menus/menutogglesetting), [`StandardFloatAsEnum`](/mod/game-api/types/alta-menus/standardfloatasenum)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MenuGameSetting()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displaynametext" /><code>{"protected "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" displayNameText"}</code> | <span className="api-desc">Text that shows the setting's display name.</span> |
| <Link id="m-settingtodisplay" /><code>{"protected T settingToDisplay"}</code> | <span className="api-desc">The setting this row shows. Touching the row with a hand shows its description.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settingspanel" /><code>{"private "}<Link to="/mod/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" settingsPanel"}</code> | <span className="api-desc">Backing field for `SettingsPanel`, the parent panel found on first use.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingspanel-2" /><code>{"protected "}<Link to="/mod/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" "}<Link to="/mod/game-api/types/global-s/settingspanel">{"SettingsPanel"}</Link>{" { get; }"}</code> | <span className="api-desc">The `SettingsPanel` this row sits under, found on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | <span className="api-desc">Points the row at another setting and sets it up again.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor hook for subclasses. Empty by default.</span> |
| <Link id="m-setup" /><code>{"protected virtual void Setup()"}</code> | <span className="api-desc">Fills the row from the setting. The base writes the display name.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksetup" /><code>{"private void CheckSetup()"}</code> | <span className="api-desc">Hides the control if its setting is not valid on this build, otherwise calls `Setup`.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">When a player's hand touches the control, shows the setting's description on the settings panel.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `CheckSetup`.</span> |

</details>
