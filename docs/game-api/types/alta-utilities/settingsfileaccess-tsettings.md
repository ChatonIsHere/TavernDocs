---
title: "SettingsFileAccess<TSettings>"
description: "When it's made it:"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsFileAccess&lt;TSettings&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

When it's made it:

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ISettingsFileAccess`, `ISettings`
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#settingsfileaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsFileAccess(string databaseIdentifier)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"SettingsFileAccess("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string name = null)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"SettingsFileAccess()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-file" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> |  |
| <Link id="m-filesystemwatcher" /><code>{"private FileSystemWatcher fileSystemWatcher"}</code> |  |
| <Link id="m-isdummysettings" /><code>{"private readonly bool isDummySettings"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-settings" /><code>{"private TSettings settings"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings-2" /><code>{"TSettings Settings { get; }"}</code> |  |
| <Link id="m-alta-core-settings-isettingsfileaccess-basesettings" /><code>{"private ISettings Alta.Core.Settings.ISettingsFileAccess.BaseSettings { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<ISettings> Changed"}</code> |  |
| <Link id="m-settingschanged" /><code>{"event Action<TSettings> SettingsChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changefile" /><code>{"void ChangeFile("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string name = null)"}</code> |  |
| <Link id="m-notifysettingschanged" /><code>{"void NotifySettingsChanged()"}</code> |  |
| <Link id="m-save" /><code>{"void Save()"}</code> |  |
| <Link id="m-saveasync" /><code>{"async void SaveAsync()"}</code> |  |
| <Link id="m-setallsettings" /><code>{"void SetAllSettings(TSettings newSettings)"}</code> |  |
| <Link id="m-tryget" /><code>{"bool TryGet<TValue>(string name, out TValue value)"}</code> |  |
| <Link id="m-createwatcher" /><code>{"private void CreateWatcher("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string fileName)"}</code> |  |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |  |
| <Link id="m-loaddefaults" /><code>{"private void LoadDefaults(string name)"}</code> |  |
| <Link id="m-onfilechanged" /><code>{"private void OnFileChanged(object sender, FileSystemEventArgs e)"}</code> |  |
| <Link id="m-startread" /><code>{"private async void StartRead()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SettingsFileAccess&lt;TSettings>`:

[`ServerHandler.ServerConfig`](/game-api/types/alta-networking/serverhandler#m-serverconfig), [`SettingsManager.gameConfig`](/game-api/types/alta-utilities/settingsmanager#m-gameconfig), [`SettingsManager.GameConfig`](/game-api/types/alta-utilities/settingsmanager#m-gameconfig-2), [`SettingsManager.launcherConfig`](/game-api/types/alta-utilities/settingsmanager#m-launcherconfig), [`SettingsManager.LauncherConfig`](/game-api/types/alta-utilities/settingsmanager#m-launcherconfig-2).
