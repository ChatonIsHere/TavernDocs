---
title: "SettingDescriptionPanel"
description: "In-world text panel that shows the name and description of the setting a player is looking at on a settings board."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingDescriptionPanel

A **class** in `Root.Township`, no namespace.

In-world text panel that shows the name and description of the setting a player is looking at on a settings board. Client side; reached through `SettingsPanel.DescriptionPanel`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingDescriptionPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentsetting" /><code>{"private "}<Link to="/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" currentSetting"}</code> | The setting currently shown. |
| <Link id="m-descriptiontext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" descriptionText"}</code> | Text for the setting's description. |
| <Link id="m-fieldname" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" fieldName"}</code> | Text for the setting's display name. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-showsetting" /><code>{"void ShowSetting("}<Link to="/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" setting)"}</code> | Shows a setting's display name and description, if it isn't already the one shown. |

## Used in

Members of other types that take, return or hold a `SettingDescriptionPanel`:

[`SettingsPanel.descriptionPanel`](/game-api/types/global-s/settingspanel#m-descriptionpanel), [`SettingsPanel.DescriptionPanel`](/game-api/types/global-s/settingspanel#m-descriptionpanel-2).
