---
title: "SettingsFileAccess<TSettings>"
description: "Loads a settings class from a JSON file (with Resources defaults), watches the file for changes and saves it back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsFileAccess&lt;TSettings&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

Loads a settings class from a JSON file (with `Resources` defaults), watches the file for changes and saves it back. `SettingsManager.GameConfig` is one. See Settings and files.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ISettingsFileAccess`, `ISettings`
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#settingsfileaccess)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SettingsFileAccess(string databaseIdentifier)"}</code> |
| <Link id="m-ctor-2" /><code>{"SettingsFileAccess("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string name = null)"}</code> |
| <Link id="m-ctor-3" /><code>{"SettingsFileAccess()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-file" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> |
| <Link id="m-filesystemwatcher" /><code>{"private FileSystemWatcher fileSystemWatcher"}</code> |
| <Link id="m-isdummysettings" /><code>{"private readonly bool isDummySettings"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-settings" /><code>{"private TSettings settings"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings-2" /><code>{"TSettings Settings { get; }"}</code> | The current settings. Blocks to finish a read that is still in progress. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-alta-core-settings-isettingsfileaccess-basesettings" /><code>{"private ISettings Alta.Core.Settings.ISettingsFileAccess.BaseSettings { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<ISettings> Changed"}</code> | Raised with the settings as `ISettings` after each read or `SetAllSettings`. |
| <Link id="m-settingschanged" /><code>{"event Action<TSettings> SettingsChanged"}</code> | Raised on the main thread after each read or `SetAllSettings`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changefile" /><code>{"void ChangeFile("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string name = null)"}</code> | Loads defaults, then reads `name.json` from the folder and watches it for changes. |
| <Link id="m-notifysettingschanged" /><code>{"void NotifySettingsChanged()"}</code> | Raises `SettingsChanged` on the main thread. Does nothing for dummy settings. |
| <Link id="m-save" /><code>{"void Save()"}</code> | Writes the settings file. Does nothing for dummy settings. |
| <Link id="m-saveasync" /><code>{"async void SaveAsync()"}</code> | Waits for any read in progress, then writes the file. |
| <Link id="m-setallsettings" /><code>{"void SetAllSettings(TSettings newSettings)"}</code> | Replaces the whole settings object, saves it and raises the change events. |
| <Link id="m-tryget" /><code>{"bool TryGet<TValue>(string name, out TValue value)"}</code> | Reads a settings property by name. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Destructor: stops and disposes the file watcher. |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-createwatcher" /><code>{"private void CreateWatcher("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string fileName)"}</code> |
| <Link id="m-loaddefaults" /><code>{"private void LoadDefaults(string name)"}</code> |
| <Link id="m-onfilechanged" /><code>{"private void OnFileChanged(object sender, FileSystemEventArgs e)"}</code> |
| <Link id="m-startread" /><code>{"private async void StartRead()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SettingsFileAccess&lt;TSettings>`:

[`ServerHandler.ServerConfig`](/game-api/types/alta-networking/serverhandler#m-serverconfig), [`SettingsManager.gameConfig`](/game-api/types/alta-utilities/settingsmanager#m-gameconfig), [`SettingsManager.GameConfig`](/game-api/types/alta-utilities/settingsmanager#m-gameconfig-2), [`SettingsManager.launcherConfig`](/game-api/types/alta-utilities/settingsmanager#m-launcherconfig), [`SettingsManager.LauncherConfig`](/game-api/types/alta-utilities/settingsmanager#m-launcherconfig-2).
