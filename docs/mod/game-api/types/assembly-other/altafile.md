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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAltaFile`](/mod/game-api/types/assembly-other/ialtafile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaFile("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent, FileInfo info)"}</code> | <span className="api-desc">Creates an `AltaFile` from `parent` and `info`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allwriting" /><code>{"private static HashSet<Task> allWriting"}</code> | <span className="api-desc">Static set of every save in progress, used by `FinishAllWriting` and `FinishAllAsync`.</span> |
| <Link id="m-backup" /><code>{"private FileInfo backup"}</code> | <span className="api-desc">The `name_backup.ext` file that holds the previous version after a save.</span> |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" content"}</code> | <span className="api-desc">Backing field for `Content`.</span> |
| <Link id="m-fileinfo" /><code>{"private FileInfo fileInfo"}</code> | <span className="api-desc">The `FileInfo` for the file on disk.</span> |
| <Link id="m-isunloading" /><code>{"private bool isUnloading"}</code> | <span className="api-desc">Set when an unload was asked for during a save; the content is disposed when the save ends.</span> |
| <Link id="m-iswaitingforwritecancel" /><code>{"private bool isWaitingForWriteCancel"}</code> | <span className="api-desc">True while `WriteAsync` waits for a cancelled earlier save, so further save calls only cancel and return.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-parent" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent"}</code> | <span className="api-desc">The folder to unregister from on delete. The constructor never assigns it, so it stays null.</span> |
| <Link id="m-readingtask" /><code>{"private Task readingTask"}</code> | <span className="api-desc">The read in progress, or null.</span> |
| <Link id="m-temp" /><code>{"private FileInfo temp"}</code> | <span className="api-desc">The `name_temp.ext` file a save writes to before swapping it in.</span> |
| <Link id="m-writecancel" /><code>{"private CancellationTokenSource writeCancel"}</code> | <span className="api-desc">Cancels the save in progress when a newer save starts.</span> |
| <Link id="m-writingtask" /><code>{"private Task writingTask"}</code> | <span className="api-desc">The save in progress, or null.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content-2" /><code><Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> | <span className="api-desc">The loaded content. Setting it disposes the old content; logs an error if set while a read is running.</span> |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | <span className="api-desc">Full path of the file on disk.</span> |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; private set; }"}</code> | <span className="api-desc">True once a save has replaced the file on disk, until `ResetHasChanged` is called.</span> |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> | <span className="api-desc">Whether the file exists, from the cached `FileInfo` (call `Refresh` for a fresh answer).</span> |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> | <span className="api-desc">True while a background read is running.</span> |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> | <span className="api-desc">True while a background save is running.</span> |
| <Link id="m-lastaccess" /><code>{"DateTime LastAccess { get; }"}</code> | <span className="api-desc">Last access time of the file, in UTC.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">File name with extension.</span> |
| <Link id="m-size" /><code>{"long Size { get; }"}</code> | <span className="api-desc">File size in bytes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> | <span className="api-desc">Deletes the file from disk and drops its content. Pass true to delete the `_backup` copy as well.</span> |
| <Link id="m-deleteasync" /><code>{"async Task DeleteAsync(bool isDeletingBackup = false)"}</code> | <span className="api-desc">Same as `Delete`, but the disk work runs on a background task.</span> |
| <Link id="m-finishallasync" /><code>{"static async Task FinishAllAsync()"}</code> | <span className="api-desc">Static: waits for every save still running across all files, logging any failure.</span> |
| <Link id="m-finishallwriting" /><code>{"static void FinishAllWriting()"}</code> | <span className="api-desc">Static: blocks until every save still running across all files has finished.</span> |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> | <span className="api-desc">Blocks until the current read finishes.</span> |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> | <span className="api-desc">Blocks until the current save finishes.</span> |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | <span className="api-desc">Moves the file, and its `_backup` copy if there is one, into another folder.</span> |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> | <span className="api-desc">Disposes the loaded content now, or after the current save if one is running. Refused while reading.</span> |
| <Link id="m-queueunloadasync" /><code>{"async Task QueueUnloadAsync()"}</code> | <span className="api-desc">Like `QueueUnload`, but waits for the current save before returning.</span> |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> | <span className="api-desc">Reads and parses the file on a background task, or returns the loaded content if it is already that type. Gives null if the file is missing.</span> |
| <Link id="m-readasync-2" /><code>{"async Task<T> ReadAsync<T>(Func<T> create)"}</code> | <span className="api-desc">Reads and parses the file on a background task, or returns the loaded content if it is already that type. Gives null if the file is missing.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Refreshes the cached file info from disk.</span> |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> | <span className="api-desc">Clears `HasChanged`.</span> |
| <Link id="m-writeasync" /><code>{"async void WriteAsync()"}</code> | <span className="api-desc">Saves a clone of the content in the background. A newer save cancels an older one still pending. Does nothing without content.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getalternative" /><code>{"private FileInfo GetAlternative(string suffix)"}</code> | <span className="api-desc">Builds the path of a sibling file named `name_suffix.ext`. Used for the `_backup` and `_temp` files.</span> |
| <Link id="m-readingtask-2" /><code>{"private void ReadingTask<T>(Func<T> create)"}</code> | <span className="api-desc">Background body of `ReadAsync`: opens the file, creates the format object and reads into it. Logs errors instead of throwing.</span> |
| <Link id="m-writingtaskasync" /><code>{"private async void WritingTaskAsync(Task waitFor, CancellationToken token, "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" writingClone)"}</code> | <span className="api-desc">Background body of `WriteAsync`: writes the `_temp` file, then swaps it in and keeps the old file as `_backup`.</span> |

</details>
