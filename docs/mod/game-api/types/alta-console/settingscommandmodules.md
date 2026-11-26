---
title: "SettingsCommandModules"
description: "Console module settings: reads and changes game or server settings by name, toggles settings, and sets info board text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsCommandModules

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `settings`: reads and changes game or server settings by name, toggles settings, and sets info board text.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`PopulationSettings`](/mod/game-api/types/alta-console/settingscommandmodules-populationsettings)
- **Attributes** `Module`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |

</details>

## Methods

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesetting" /><code>{"private static void ChangeSetting(string settingsTarget, string setting, string value)"}</code> | <span className="api-desc">`settings changesetting`: sets a bool, float, int or enum property on the `server` or game settings by name, then saves and notifies.</span> |
| <Link id="m-disableserverboard" /><code>{"private static void DisableServerBoard()"}</code> | <span className="api-desc">Server: `settings disable-board` turns off the in-game server settings board and saves the config.</span> |
| <Link id="m-enableserverboard" /><code>{"private static void EnableServerBoard()"}</code> | <span className="api-desc">Server: `settings enable-board` turns on the in-game server settings board and saves the config.</span> |
| <Link id="m-getproperties" /><code>{"private static IEnumerable<PropertyInfo> GetProperties(string settingsTarget)"}</code> | <span className="api-desc">Public properties of `ServerSettings` or `GameSettings`, hiding `DevOnly` ones unless the caller has `debug_features`.</span> |
| <Link id="m-heat" /><code>{"private static void Heat(float multiplier)"}</code> | <span className="api-desc">`settings heat`: sets the global heat conductivity multiplier on `HeatPoint`.</span> |
| <Link id="m-infoboard" /><code>{"private static void InfoBoard(string identifier, string value)"}</code> | <span className="api-desc">`settings infoboard`: writes text (max 500 chars, escapes unescaped) to the named info board file in the save and refreshes that board.</span> |
| <Link id="m-infoboardlist" /><code>{"private static IEnumerable<string> InfoBoardList() (iterator)"}</code> | <span className="api-desc">`settings infoboard-list`: lists the info board files in the save.</span> |
| <Link id="m-listpossivlevalues" /><code>{"private static IEnumerable<string> ListPossivleValues(string settingsTarget, string setting)"}</code> | <span className="api-desc">`settings possible`: lists the enum names a setting can take.</span> |
| <Link id="m-listsettings" /><code>{"private static ISettings ListSettings(string settingsTarget)"}</code> | <span className="api-desc">`settings list`: returns the settings object for the given target as a table.</span> |
| <Link id="m-resetserversettings" /><code>{"private static void ResetServerSettings()"}</code> | <span className="api-desc">Server: `settings reset` replaces all server settings with defaults.</span> |
| <Link id="m-save" /><code>{"private static void Save(bool isServer)"}</code> | <span className="api-desc">`settings save`: saves the server config, the game config, or both with no argument.</span> |
| <Link id="m-save-2" /><code>{"private static void Save()"}</code> | <span className="api-desc">`settings save`: saves the server config, the game config, or both with no argument.</span> |
| <Link id="m-toggleonsetting" /><code>{"private static void ToggleOnSetting(string setting, bool isOn = true)"}</code> | <span className="api-desc">Server: `settings settoggle` sets a registered `ToggleBool` setting on or off.</span> |
| <Link id="m-togglesetting" /><code>{"private static void ToggleSetting(string setting)"}</code> | <span className="api-desc">`settings toggle`: flips a registered `ToggleBool` setting.</span> |

</details>
