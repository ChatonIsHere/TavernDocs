---
title: "AltaFile"
description: "A file on disk with cached typed content (IAltaFileFormat), background reads, and saves that go through a _temp file and keep a _backup copy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaFile

A **class** in `Alta.IO`, `Alta.Utilities`.

A file on disk with cached typed content (`IAltaFileFormat`), background reads, and saves that go through a `_temp` file and keep a `_backup` copy. Get one from `AltaFolder.GetFile`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAltaFile`](/game-api/types/assembly-other/ialtafile)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaFile("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent, FileInfo info)"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allwriting" /><code>{"private static HashSet<Task> allWriting"}</code> | Static set of every save in progress, used by `FinishAllWriting` and `FinishAllAsync`. |
| <Link id="m-backup" /><code>{"private FileInfo backup"}</code> | The `name_backup.ext` file that holds the previous version after a save. |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" content"}</code> | Backing field for `Content`. |
| <Link id="m-fileinfo" /><code>{"private FileInfo fileInfo"}</code> | The `FileInfo` for the file on disk. |
| <Link id="m-isunloading" /><code>{"private bool isUnloading"}</code> | Set when an unload was asked for during a save; the content is disposed when the save ends. |
| <Link id="m-iswaitingforwritecancel" /><code>{"private bool isWaitingForWriteCancel"}</code> | True while `WriteAsync` waits for a cancelled earlier save, so further save calls only cancel and return. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-parent" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent"}</code> | The folder to unregister from on delete. The constructor never assigns it, so it stays null. |
| <Link id="m-readingtask" /><code>{"private Task readingTask"}</code> | The read in progress, or null. |
| <Link id="m-temp" /><code>{"private FileInfo temp"}</code> | The `name_temp.ext` file a save writes to before swapping it in. |
| <Link id="m-writecancel" /><code>{"private CancellationTokenSource writeCancel"}</code> | Cancels the save in progress when a newer save starts. |
| <Link id="m-writingtask" /><code>{"private Task writingTask"}</code> | The save in progress, or null. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content-2" /><code><Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> | The loaded content. Setting it disposes the old content; logs an error if set while a read is running. |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | Full path of the file on disk. |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; private set; }"}</code> | True once a save has replaced the file on disk, until `ResetHasChanged` is called. |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> | Whether the file exists, from the cached `FileInfo` (call `Refresh` for a fresh answer). |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> | True while a background read is running. |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> | True while a background save is running. |
| <Link id="m-lastaccess" /><code>{"DateTime LastAccess { get; }"}</code> | Last access time of the file, in UTC. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | File name with extension. |
| <Link id="m-size" /><code>{"long Size { get; }"}</code> | File size in bytes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> | Deletes the file from disk and drops its content. Pass true to delete the `_backup` copy as well. |
| <Link id="m-deleteasync" /><code>{"async Task DeleteAsync(bool isDeletingBackup = false)"}</code> | Same as `Delete`, but the disk work runs on a background task. |
| <Link id="m-finishallasync" /><code>{"static async Task FinishAllAsync()"}</code> | Static: waits for every save still running across all files, logging any failure. |
| <Link id="m-finishallwriting" /><code>{"static void FinishAllWriting()"}</code> | Static: blocks until every save still running across all files has finished. |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> | Blocks until the current read finishes. |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> | Blocks until the current save finishes. |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | Moves the file, and its `_backup` copy if there is one, into another folder. |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> | Disposes the loaded content now, or after the current save if one is running. Refused while reading. |
| <Link id="m-queueunloadasync" /><code>{"async Task QueueUnloadAsync()"}</code> | Like `QueueUnload`, but waits for the current save before returning. |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> | Reads and parses the file on a background task, or returns the loaded content if it is already that type. Gives null if the file is missing. |
| <Link id="m-readasync-2" /><code>{"async Task<T> ReadAsync<T>(Func<T> create)"}</code> | Reads and parses the file on a background task, or returns the loaded content if it is already that type. Gives null if the file is missing. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Refreshes the cached file info from disk. |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> | Clears `HasChanged`. |
| <Link id="m-writeasync" /><code>{"async void WriteAsync()"}</code> | Saves a clone of the content in the background. A newer save cancels an older one still pending. Does nothing without content. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getalternative" /><code>{"private FileInfo GetAlternative(string suffix)"}</code> | Builds the path of a sibling file named `name_suffix.ext`. Used for the `_backup` and `_temp` files. |
| <Link id="m-readingtask-2" /><code>{"private void ReadingTask<T>(Func<T> create)"}</code> | Background body of `ReadAsync`: opens the file, creates the format object and reads into it. Logs errors instead of throwing. |
| <Link id="m-writingtaskasync" /><code>{"private async void WritingTaskAsync(Task waitFor, CancellationToken token, "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" writingClone)"}</code> | Background body of `WriteAsync`: writes the `_temp` file, then swaps it in and keeps the old file as `_backup`. |

</details>
