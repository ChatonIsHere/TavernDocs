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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `ISettingsManager`
- **Attributes** `UsedImplicitly`
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#settingsmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsManager()"}</code> | <span className="api-desc">Creates a `SettingsManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameconfig" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/mod/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{"> gameConfig"}</code> | <span className="api-desc">Backing field for `GameConfig`.</span> |
| <Link id="m-launcherconfig" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/mod/game-api/types/alta-utilities/launchersettings">{"LauncherSettings"}</Link>{"> launcherConfig"}</code> | <span className="api-desc">Backing field for `LauncherConfig`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-game" /><code>{"ISettingsFileAccess Game { get; }"}</code> | <span className="api-desc">Instance access to `GameConfig`.</span> |
| <Link id="m-gameconfig-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/mod/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{"> GameConfig { get; }"}</code> | <span className="api-desc">The `GameConfiguration` settings file in the storage folder, created on first access.</span> |
| <Link id="m-launcher" /><code>{"ISettingsFileAccess Launcher { get; }"}</code> | <span className="api-desc">Instance access to `LauncherConfig`.</span> |
| <Link id="m-launcherconfig-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/mod/game-api/types/alta-utilities/launchersettings">{"LauncherSettings"}</Link>{"> LauncherConfig { get; }"}</code> | <span className="api-desc">The `LauncherSettings` file in the game's install folder, created on first access.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsettingsfromstring" /><code>{"static bool GetSettingsFromString(string settingsName, out ISettingsFileAccess access)"}</code> | <span className="api-desc">Looks up settings by name: "game" gives the game config, "server" the running server's config. Used by console commands.</span> |
