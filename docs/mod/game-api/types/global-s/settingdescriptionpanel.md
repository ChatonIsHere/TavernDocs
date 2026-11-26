---
title: "SettingDescriptionPanel"
description: "In-world text panel that shows the name and description of the setting a player is looking at on a settings board."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingDescriptionPanel

A **class** in `Root.Township`, the global namespace.

In-world text panel that shows the name and description of the setting a player is looking at on a settings board. Client side; reached through `SettingsPanel.DescriptionPanel`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingDescriptionPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentsetting" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" currentSetting"}</code> | <span className="api-desc">The setting currently shown.</span> |
| <Link id="m-descriptiontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" descriptionText"}</code> | <span className="api-desc">Text for the setting's description.</span> |
| <Link id="m-fieldname" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" fieldName"}</code> | <span className="api-desc">Text for the setting's display name.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-showsetting" /><code>{"void ShowSetting("}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" setting)"}</code> | <span className="api-desc">Shows a setting's display name and description, if it isn't already the one shown.</span> |

## Used in

Members of other types that take, return or hold a `SettingDescriptionPanel`:

<div className="api-used-in">

[`SettingsPanel.descriptionPanel`](/mod/game-api/types/global-s/settingspanel#m-descriptionpanel), [`SettingsPanel.DescriptionPanel`](/mod/game-api/types/global-s/settingspanel#m-descriptionpanel-2).

</div>
