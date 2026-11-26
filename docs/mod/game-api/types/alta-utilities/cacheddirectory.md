---
title: "CachedDirectory"
description: "A pair of folders used by asset baking: a project folder and the temporary folder its assets are moved to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CachedDirectory

A **class** in `Root.Township`, `Alta.AssetBaking`.

A pair of folders used by asset baking: a project folder and the temporary folder its assets are moved to. `AssetBakingSettings.ProjectToUnbakedDirectoriesMap` lists them.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CachedDirectory(string projectPath, string cachePath)"}</code> | Creates a `CachedDirectory` from `projectPath` and `cachePath`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachepath" /><code>{"string CachePath { get; }"}</code> | The temporary cache folder, with directory separators fixed for the platform. |
| <Link id="m-projectpath" /><code>{"string ProjectPath { get; }"}</code> | The folder in the project, with directory separators fixed for the platform. |

## Used in

Members of other types that take, return or hold a `CachedDirectory`:

[`AssetBakingSettings.ProjectToUnbakedDirectoriesMap`](/mod/game-api/types/alta-utilities/assetbakingsettings#m-projecttounbakeddirectoriesmap).
