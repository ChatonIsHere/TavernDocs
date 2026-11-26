---
title: "AltaFile"
description: "class AltaFile in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaFile

A **class** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAltaFile`](/game-api/types/assembly-other/ialtafile)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaFile("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent, FileInfo info)"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-allwriting" /><code>{"private static HashSet<Task> allWriting"}</code> |
| <Link id="m-backup" /><code>{"private FileInfo backup"}</code> |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" content"}</code> |
| <Link id="m-fileinfo" /><code>{"private FileInfo fileInfo"}</code> |
| <Link id="m-isunloading" /><code>{"private bool isUnloading"}</code> |
| <Link id="m-iswaitingforwritecancel" /><code>{"private bool isWaitingForWriteCancel"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-parent" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent"}</code> |
| <Link id="m-readingtask" /><code>{"private Task readingTask"}</code> |
| <Link id="m-temp" /><code>{"private FileInfo temp"}</code> |
| <Link id="m-writecancel" /><code>{"private CancellationTokenSource writeCancel"}</code> |
| <Link id="m-writingtask" /><code>{"private Task writingTask"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-content-2" /><code><Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; private set; }"}</code> |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> |
| <Link id="m-lastaccess" /><code>{"DateTime LastAccess { get; }"}</code> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |
| <Link id="m-size" /><code>{"long Size { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> |
| <Link id="m-deleteasync" /><code>{"async Task DeleteAsync(bool isDeletingBackup = false)"}</code> |
| <Link id="m-finishallasync" /><code>{"static async Task FinishAllAsync()"}</code> |
| <Link id="m-finishallwriting" /><code>{"static void FinishAllWriting()"}</code> |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> |
| <Link id="m-queueunloadasync" /><code>{"async Task QueueUnloadAsync()"}</code> |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> |
| <Link id="m-readasync-2" /><code>{"async Task<T> ReadAsync<T>(Func<T> create)"}</code> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> |
| <Link id="m-writeasync" /><code>{"async void WriteAsync()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getalternative" /><code>{"private FileInfo GetAlternative(string suffix)"}</code> |
| <Link id="m-readingtask-2" /><code>{"private void ReadingTask<T>(Func<T> create)"}</code> |
| <Link id="m-writingtaskasync" /><code>{"private async void WritingTaskAsync(Task waitFor, CancellationToken token, "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" writingClone)"}</code> |

</details>
