---
title: "BuildPipelinePathData"
description: "Editor build helper that stores the output folders for Windows, Linux and Android builds in a temporary asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildPipelinePathData

A **class** in `Root.Township`, the global namespace.

Editor build helper that stores the output folders for Windows, Linux and Android builds in a temporary asset. Its loading code is stripped in the game build, so it isn't usable at runtime.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildPipelinePathData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidpath" /><code>{"private string androidPath"}</code> | <span className="api-desc">Backing field for `AndroidPath`.</span> |
| <Link id="m-data" /><code>{"private static "}<Link to="/mod/game-api/types/global-a-b/buildpipelinepathdata">{"BuildPipelinePathData"}</Link>{" data"}</code> | <span className="api-desc">The loaded data asset. Never set in this build.</span> |
| <Link id="m-extension" /><code>{"private const string extension"}</code> | <span className="api-desc">Asset file extension, `.asset`.</span> |
| <Link id="m-filename" /><code>{"private const string fileName"}</code> | <span className="api-desc">Asset file name, `BuildPathData`.</span> |
| <Link id="m-filepath" /><code>{"private const string filePath"}</code> | <span className="api-desc">Asset folder, `Assets/Temporary/BuildPath`.</span> |
| <Link id="m-linuxpath" /><code>{"private string linuxPath"}</code> | <span className="api-desc">Backing field for `LinuxPath`.</span> |
| <Link id="m-windowspath" /><code>{"private string windowsPath"}</code> | <span className="api-desc">Backing field for `WindowsPath`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-androidpath-2" /><code>{"static string AndroidPath { get; set; }"}</code> | <span className="api-desc">Android build output folder.</span> |
| <Link id="m-linuxpath-2" /><code>{"static string LinuxPath { get; set; }"}</code> | <span className="api-desc">Linux build output folder.</span> |
| <Link id="m-windowspath-2" /><code>{"static string WindowsPath { get; set; }"}</code> | <span className="api-desc">Windows build output folder.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ensuredata" /><code>{"private static void EnsureData()"}</code> | <span className="api-desc">Loads or creates the data asset in the editor. Empty in this build.</span> |
| <Link id="m-markdirty" /><code>{"private void MarkDirty()"}</code> | <span className="api-desc">Marks the asset as changed in the editor. Empty in this build.</span> |

</details>
