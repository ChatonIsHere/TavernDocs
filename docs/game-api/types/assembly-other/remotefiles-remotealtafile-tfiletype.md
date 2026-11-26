---
title: "RemoteFiles.RemoteAltaFile<TFileType>"
description: "Base for a save file that works on a local copy and syncs it with a remote store (disk path or S3)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteFiles.RemoteAltaFile&lt;TFileType&gt;

An **abstract class** in `Alta.IO`, `Alta.Utilities`.

Base for a save file that works on a local copy and syncs it with a remote store (disk path or S3). The local copy is pulled from remote on first read and pushed back on backup.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`RemoteFiles`](/game-api/types/assembly-other/remotefiles)
- **Inherits or implements** [`IAltaFile`](/game-api/types/assembly-other/ialtafile), [`IRemoteAltaFile`](/game-api/types/assembly-other/iremotealtafile)
- **Derived types** [`RemoteAltaFile`](/game-api/types/assembly-other/remotealtafile), [`S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteAltaFile("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" internalFile, TFileType remoteFileInfo)"}</code> | Creates a `RemoteFiles.RemoteAltaFile` from `internalFile` and `remoteFileInfo`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-localfile" /><code>{"protected "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" localFile"}</code> | The local working copy. |
| <Link id="m-remotefileinfo" /><code>{"protected TFileType remoteFileInfo"}</code> | Access to the remote copy. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backuptoremote" /><code>{"private Task backupToRemote"}</code> | The backup task in progress, or null. |
| <Link id="m-copyfromremote" /><code>{"private Task copyFromRemote"}</code> | The download task in progress, or null. |
| <Link id="m-hasbeencopied" /><code>{"private bool hasBeenCopied"}</code> | Set once the first pull from remote has started. |
| <Link id="m-timer" /><code>{"private Stopwatch timer"}</code> | Stopwatch used to log how long copies take. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code><Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> | The local file's loaded content. |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | The local file's full path. |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> | Whether the local file has unsaved-to-remote changes. |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> | Checks the remote file until the first copy, then the local file. |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> | Whether the local file is being read. |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> | Whether the local file is being written. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The local file's name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backupinstant" /><code>{"void BackupInstant()"}</code> | Blocking backup of the local file to remote. Errors are logged, not thrown. |
| <Link id="m-backuptoremote-2" /><code>{"Task BackupToRemote()"}</code> | Starts an async backup unless one is already running for this file. |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> | Deletes the remote file, then the local one. |
| <Link id="m-deleteasync" /><code>{"async Task DeleteAsync(bool isDeletingBackup = false)"}</code> | Async version of `Delete`. |
| <Link id="m-ensurecopied" /><code>{"async Task EnsureCopied()"}</code> | Pulls the file from remote the first time it is called and waits for any copy still running. |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> | Passes through to the local file. |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> | Passes through to the local file. |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | Moves the local file only; the remote copy stays where it is. |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> | Passes through to the local file. |
| <Link id="m-queueunloadasync" /><code>{"async Task QueueUnloadAsync()"}</code> | Passes through to the local file. |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> | Pulls the file from remote if not done yet, then reads it from the local copy. |
| <Link id="m-readasync-2" /><code>{"async Task<T> ReadAsync<T>(Func<T> create)"}</code> | Pulls the file from remote if not done yet, then reads it from the local copy. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Refreshes both the remote and local file info. |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> | Clears the local file's changed flag. |
| <Link id="m-writeasync" /><code>{"async void WriteAsync()"}</code> | Waits for any running backup, then writes the local file. |
| <Link id="m-backupinstantinternal" /><code>{"protected virtual void BackupInstantInternal()"}</code> | Blocking upload. Default waits on `BackupToRemoteInternal`. |
| <Link id="m-backuptoremoteinternal" /><code>{"protected abstract Task BackupToRemoteInternal()"}</code> | Implemented by subclasses to upload the local file. |
| <Link id="m-copyfromremoteinternal" /><code>{"protected abstract Task CopyFromRemoteInternal()"}</code> | Implemented by subclasses to download the remote file. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Removes the file from `allRemoteFiles`. In practice that list keeps it alive, so this does not run. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backupasync" /><code>{"private async Task BackUpAsync()"}</code> | Uploads the local file if it exists, clears the changed flag, and removes the file from the backing-up set. |
| <Link id="m-copyfromremote-2" /><code>{"private async Task CopyFromRemote()"}</code> | Downloads the remote file over the local one if it exists, then refreshes both. |
| <Link id="m-waitforbackup" /><code>{"private Task WaitForBackup()"}</code> | Returns the running backup task, or a completed task if none. |

</details>
