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
| <Link id="m-ctor" /><code>{"CachedDirectory(string projectPath, string cachePath)"}</code> | <span className="api-desc">Creates a `CachedDirectory` from `projectPath` and `cachePath`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachepath" /><code>{"string CachePath { get; }"}</code> | <span className="api-desc">The temporary cache folder, with directory separators fixed for the platform.</span> |
| <Link id="m-projectpath" /><code>{"string ProjectPath { get; }"}</code> | <span className="api-desc">The folder in the project, with directory separators fixed for the platform.</span> |

## Used in

Members of other types that take, return or hold a `CachedDirectory`:

<div className="api-used-in">

[`AssetBakingSettings.ProjectToUnbakedDirectoriesMap`](/mod/game-api/types/alta-utilities/assetbakingsettings#m-projecttounbakeddirectoriesmap).

</div>
