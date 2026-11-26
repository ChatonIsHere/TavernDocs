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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `Settings`, `ICloneable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LauncherSettings()"}</code> | <span className="api-desc">Creates a `LauncherSettings` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cameraphotospath" /><code>{"string CameraPhotosPath { get; set; }"}</code> | <span className="api-desc">Folder where hand camera photos are saved (`camera_photos_path` in JSON). Read and filled in by `Screenshot`.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | <span className="api-desc">Returns a copy of the settings.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LauncherSettings`:

<div className="api-used-in">

[`SettingsManager.launcherConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-launcherconfig), [`SettingsManager.LauncherConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-launcherconfig-2).

</div>
