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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `ISettingsFileAccess`, `ISettings`
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#settingsfileaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsFileAccess(string databaseIdentifier)"}</code> | <span className="api-desc">Creates a `SettingsFileAccess` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"SettingsFileAccess("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string name = null)"}</code> | <span className="api-desc">Creates a `SettingsFileAccess` with default values.</span> |
| <Link id="m-ctor-3" /><code>{"SettingsFileAccess()"}</code> | <span className="api-desc">Creates a `SettingsFileAccess` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-file" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> | <span className="api-desc">The settings file (on disk, or a database settings file).</span> |
| <Link id="m-filesystemwatcher" /><code>{"private FileSystemWatcher fileSystemWatcher"}</code> | <span className="api-desc">Watcher for changes to the settings file.</span> |
| <Link id="m-isdummysettings" /><code>{"private readonly bool isDummySettings"}</code> | <span className="api-desc">True for the no-file constructor: settings live in memory only and saving does nothing.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-settings" /><code>{"private TSettings settings"}</code> | <span className="api-desc">The loaded settings; read through `Settings`, which waits for a pending read to finish.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings-2" /><code>{"TSettings Settings { get; }"}</code> | <span className="api-desc">The current settings. Blocks to finish a read that is still in progress.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-core-settings-isettingsfileaccess-basesettings" /><code>{"private ISettings Alta.Core.Settings.ISettingsFileAccess.BaseSettings { get; }"}</code> | <span className="api-desc">The loaded settings as plain `ISettings`.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<ISettings> Changed"}</code> | <span className="api-desc">Raised with the settings as `ISettings` after each read or `SetAllSettings`.</span> |
| <Link id="m-settingschanged" /><code>{"event Action<TSettings> SettingsChanged"}</code> | <span className="api-desc">Raised on the main thread after each read or `SetAllSettings`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changefile" /><code>{"void ChangeFile("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string name = null)"}</code> | <span className="api-desc">Loads defaults, then reads `name.json` from the folder and watches it for changes.</span> |
| <Link id="m-notifysettingschanged" /><code>{"void NotifySettingsChanged()"}</code> | <span className="api-desc">Raises `SettingsChanged` on the main thread. Does nothing for dummy settings.</span> |
| <Link id="m-save" /><code>{"void Save()"}</code> | <span className="api-desc">Writes the settings file. Does nothing for dummy settings.</span> |
| <Link id="m-saveasync" /><code>{"async void SaveAsync()"}</code> | <span className="api-desc">Waits for any read in progress, then writes the file.</span> |
| <Link id="m-setallsettings" /><code>{"void SetAllSettings(TSettings newSettings)"}</code> | <span className="api-desc">Replaces the whole settings object, saves it and raises the change events.</span> |
| <Link id="m-tryget" /><code>{"bool TryGet<TValue>(string name, out TValue value)"}</code> | <span className="api-desc">Reads a settings property by name.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Destructor: stops and disposes the file watcher.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createwatcher" /><code>{"private void CreateWatcher("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string fileName)"}</code> | <span className="api-desc">Watches the settings file on disk so edits to it are reloaded.</span> |
| <Link id="m-loaddefaults" /><code>{"private void LoadDefaults(string name)"}</code> | <span className="api-desc">Loads defaults from a `Resources` text asset named after the file plus `_Defaults`, or a new instance if there is none.</span> |
| <Link id="m-onfilechanged" /><code>{"private void OnFileChanged(object sender, FileSystemEventArgs e)"}</code> | <span className="api-desc">File watcher handler that reloads the file when it is written.</span> |
| <Link id="m-startread" /><code>{"private async void StartRead()"}</code> | <span className="api-desc">Reads the file into the settings; if there is no file yet, writes the defaults. Then raises `SettingsChanged`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SettingsFileAccess&lt;TSettings>`:

<div className="api-used-in">

[`ServerHandler.ServerConfig`](/mod/game-api/types/alta-networking/serverhandler#m-serverconfig), [`SettingsManager.gameConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-gameconfig), [`SettingsManager.GameConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-gameconfig-2), [`SettingsManager.launcherConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-launcherconfig), [`SettingsManager.LauncherConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-launcherconfig-2).

</div>
