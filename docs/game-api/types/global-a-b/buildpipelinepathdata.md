---
title: "BuildPipelinePathData"
description: "Editor build helper that stores the output folders for Windows, Linux and Android builds in a temporary asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildPipelinePathData

A **class** in `Root.Township`, no namespace.

Editor build helper that stores the output folders for Windows, Linux and Android builds in a temporary asset. Its loading code is stripped in the game build, so it isn't usable at runtime.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BuildPipelinePathData()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidpath" /><code>{"private string androidPath"}</code> | Backing field for `AndroidPath`. |
| <Link id="m-data" /><code>{"private static "}<Link to="/game-api/types/global-a-b/buildpipelinepathdata">{"BuildPipelinePathData"}</Link>{" data"}</code> | The loaded data asset. Never set in this build. |
| <Link id="m-extension" /><code>{"private const string extension"}</code> | Asset file extension, `.asset`. |
| <Link id="m-filename" /><code>{"private const string fileName"}</code> | Asset file name, `BuildPathData`. |
| <Link id="m-filepath" /><code>{"private const string filePath"}</code> | Asset folder, `Assets/Temporary/BuildPath`. |
| <Link id="m-linuxpath" /><code>{"private string linuxPath"}</code> | Backing field for `LinuxPath`. |
| <Link id="m-windowspath" /><code>{"private string windowsPath"}</code> | Backing field for `WindowsPath`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-androidpath-2" /><code>{"static string AndroidPath { get; set; }"}</code> | Android build output folder. |
| <Link id="m-linuxpath-2" /><code>{"static string LinuxPath { get; set; }"}</code> | Linux build output folder. |
| <Link id="m-windowspath-2" /><code>{"static string WindowsPath { get; set; }"}</code> | Windows build output folder. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ensuredata" /><code>{"private static void EnsureData()"}</code> | Loads or creates the data asset in the editor. Empty in this build. |
| <Link id="m-markdirty" /><code>{"private void MarkDirty()"}</code> | Marks the asset as changed in the editor. Empty in this build. |

</details>
