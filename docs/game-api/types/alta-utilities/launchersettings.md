---
title: "LauncherSettings"
description: "Settings shared with the launcher, read through SettingsManager.LauncherConfig."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LauncherSettings

A **class** in `Root.Township`, `Alta.Utilities`.

Settings shared with the launcher, read through `SettingsManager.LauncherConfig`. Holds only the camera photo folder.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `Settings`, `ICloneable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LauncherSettings()"}</code> | Creates a `LauncherSettings` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cameraphotospath" /><code>{"string CameraPhotosPath { get; set; }"}</code> | Folder where hand camera photos are saved (`camera_photos_path` in JSON). Read and filled in by `Screenshot`. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | Returns a copy of the settings. |

</details>

## Used in

Members of other types that take, return or hold a `LauncherSettings`:

[`SettingsManager.launcherConfig`](/game-api/types/alta-utilities/settingsmanager#m-launcherconfig), [`SettingsManager.LauncherConfig`](/game-api/types/alta-utilities/settingsmanager#m-launcherconfig-2).
