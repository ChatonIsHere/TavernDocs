---
title: "SettingsManager"
description: "Static members, plus an instance that VContainer hands out as ISettingsManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsManager

A **class** in `Root.Township`, `Alta.Utilities`.

Static members, plus an instance that VContainer hands out as `ISettingsManager`.

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

| Member |
| --- |
| <Link id="m-gameconfig" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{"> gameConfig"}</code> |
| <Link id="m-launcherconfig" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/launchersettings">{"LauncherSettings"}</Link>{"> launcherConfig"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-game" /><code>{"ISettingsFileAccess Game { get; }"}</code> |
| <Link id="m-gameconfig-2" /><code>{"static "}<Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{"> GameConfig { get; }"}</code> |
| <Link id="m-launcher" /><code>{"ISettingsFileAccess Launcher { get; }"}</code> |
| <Link id="m-launcherconfig-2" /><code>{"static "}<Link to="/game-api/types/alta-utilities/settingsfileaccess-tsettings">{"SettingsFileAccess"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/launchersettings">{"LauncherSettings"}</Link>{"> LauncherConfig { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getsettingsfromstring" /><code>{"static bool GetSettingsFromString(string settingsName, out ISettingsFileAccess access)"}</code> |
