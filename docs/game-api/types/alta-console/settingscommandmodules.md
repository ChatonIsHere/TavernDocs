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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`PopulationSettings`](/game-api/types/alta-console/settingscommandmodules-populationsettings)
- **Attributes** `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesetting" /><code>{"private static void ChangeSetting(string settingsTarget, string setting, string value)"}</code> | `settings changesetting`: sets a bool, float, int or enum property on the `server` or game settings by name, then saves and notifies. |
| <Link id="m-disableserverboard" /><code>{"private static void DisableServerBoard()"}</code> | Server: `settings disable-board` turns off the in-game server settings board and saves the config. |
| <Link id="m-enableserverboard" /><code>{"private static void EnableServerBoard()"}</code> | Server: `settings enable-board` turns on the in-game server settings board and saves the config. |
| <Link id="m-getproperties" /><code>{"private static IEnumerable<PropertyInfo> GetProperties(string settingsTarget)"}</code> | Public properties of `ServerSettings` or `GameSettings`, hiding `DevOnly` ones unless the caller has `debug_features`. |
| <Link id="m-heat" /><code>{"private static void Heat(float multiplier)"}</code> | `settings heat`: sets the global heat conductivity multiplier on `HeatPoint`. |
| <Link id="m-infoboard" /><code>{"private static void InfoBoard(string identifier, string value)"}</code> | `settings infoboard`: writes text (max 500 chars, escapes unescaped) to the named info board file in the save and refreshes that board. |
| <Link id="m-infoboardlist" /><code>{"private static IEnumerable<string> InfoBoardList() (iterator)"}</code> | `settings infoboard-list`: lists the info board files in the save. |
| <Link id="m-listpossivlevalues" /><code>{"private static IEnumerable<string> ListPossivleValues(string settingsTarget, string setting)"}</code> | `settings possible`: lists the enum names a setting can take. |
| <Link id="m-listsettings" /><code>{"private static ISettings ListSettings(string settingsTarget)"}</code> | `settings list`: returns the settings object for the given target as a table. |
| <Link id="m-resetserversettings" /><code>{"private static void ResetServerSettings()"}</code> | Server: `settings reset` replaces all server settings with defaults. |
| <Link id="m-save" /><code>{"private static void Save(bool isServer)"}</code> | `settings save`: saves the server config, the game config, or both with no argument. |
| <Link id="m-save-2" /><code>{"private static void Save()"}</code> | `settings save`: saves the server config, the game config, or both with no argument. |
| <Link id="m-toggleonsetting" /><code>{"private static void ToggleOnSetting(string setting, bool isOn = true)"}</code> | Server: `settings settoggle` sets a registered `ToggleBool` setting on or off. |
| <Link id="m-togglesetting" /><code>{"private static void ToggleSetting(string setting)"}</code> | `settings toggle`: flips a registered `ToggleBool` setting. |

</details>
