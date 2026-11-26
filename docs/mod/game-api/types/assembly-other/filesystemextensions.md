---
title: "FileSystemExtensions"
description: "File system helpers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FileSystemExtensions

A **static class** in `Alta.IO`, `Alta.Utilities`.

File system helpers.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleardirectory" /><code>{"static void ClearDirectory(DirectoryInfo directory)"}</code> | Deletes every file and subfolder inside the directory, clearing read-only flags first. Keeps the directory itself. |
| <Link id="m-fullnamerelativetoproject" /><code>{"static string FullNameRelativeToProject(FileSystemInfo info)"}</code> | Turns a full path under the Unity data folder into an `Assets/...` project path with forward slashes. |
