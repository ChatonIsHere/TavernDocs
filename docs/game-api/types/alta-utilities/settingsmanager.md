---
title: "SettingsManager"
description: "Gives access to the game's settings files: GameConfiguration in the storage folder and LauncherSettings in the install folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsManager

A **class** in `Root.Township`, `Alta.Utilities`.

Gives access to the game's settings files: `GameConfiguration` in the storage folder and `LauncherSettings` in the install folder. Loaded on first use.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ISettingsManager`
- **Attributes** `UsedImplicitly`
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#settingsmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SettingsManager()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameconfig" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{"> gameConfig"}</code> | Backing field for `GameConfig`. |
| <Link id="m-launcherconfig" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/launchersettings">{"LauncherSettings"}</Link>{"> launcherConfig"}</code> | Backing field for `LauncherConfig`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-game" /><code>{"ISettingsFileAccess Game { get; }"}</code> | Instance access to `GameConfig`. |
| <Link id="m-gameconfig-2" /><code>{"static "}<Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{"> GameConfig { get; }"}</code> | The `GameConfiguration` settings file in the storage folder, created on first access. |
| <Link id="m-launcher" /><code>{"ISettingsFileAccess Launcher { get; }"}</code> | Instance access to `LauncherConfig`. |
| <Link id="m-launcherconfig-2" /><code>{"static "}<Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/launchersettings">{"LauncherSettings"}</Link>{"> LauncherConfig { get; }"}</code> | The `LauncherSettings` file in the game's install folder, created on first access. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsettingsfromstring" /><code>{"static bool GetSettingsFromString(string settingsName, out ISettingsFileAccess access)"}</code> | Looks up settings by name: "game" gives the game config, "server" the running server's config. Used by console commands. |
