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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`RemoteFiles`](/mod/game-api/types/assembly-other/remotefiles)
- **Inherits or implements** [`IAltaFile`](/mod/game-api/types/assembly-other/ialtafile), [`IRemoteAltaFile`](/mod/game-api/types/assembly-other/iremotealtafile)
- **Derived types** [`RemoteAltaFile`](/mod/game-api/types/assembly-other/remotealtafile), [`S3CloudStorageRemoteFile`](/mod/game-api/types/assembly-other/s3cloudstorageremotefile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteAltaFile("}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" internalFile, TFileType remoteFileInfo)"}</code> | <span className="api-desc">Creates a `RemoteFiles.RemoteAltaFile` from `internalFile` and `remoteFileInfo`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-localfile" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" localFile"}</code> | <span className="api-desc">The local working copy.</span> |
| <Link id="m-remotefileinfo" /><code>{"protected TFileType remoteFileInfo"}</code> | <span className="api-desc">Access to the remote copy.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backuptoremote" /><code>{"private Task backupToRemote"}</code> | <span className="api-desc">The backup task in progress, or null.</span> |
| <Link id="m-copyfromremote" /><code>{"private Task copyFromRemote"}</code> | <span className="api-desc">The download task in progress, or null.</span> |
| <Link id="m-hasbeencopied" /><code>{"private bool hasBeenCopied"}</code> | <span className="api-desc">Set once the first pull from remote has started.</span> |
| <Link id="m-timer" /><code>{"private Stopwatch timer"}</code> | <span className="api-desc">Stopwatch used to log how long copies take.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code><Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> | <span className="api-desc">The local file's loaded content.</span> |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | <span className="api-desc">The local file's full path.</span> |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> | <span className="api-desc">Whether the local file has unsaved-to-remote changes.</span> |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> | <span className="api-desc">Checks the remote file until the first copy, then the local file.</span> |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> | <span className="api-desc">Whether the local file is being read.</span> |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> | <span className="api-desc">Whether the local file is being written.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The local file's name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backupinstant" /><code>{"void BackupInstant()"}</code> | <span className="api-desc">Blocking backup of the local file to remote. Errors are logged, not thrown.</span> |
| <Link id="m-backuptoremote-2" /><code>{"Task BackupToRemote()"}</code> | <span className="api-desc">Starts an async backup unless one is already running for this file.</span> |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> | <span className="api-desc">Deletes the remote file, then the local one.</span> |
| <Link id="m-deleteasync" /><code>{"async Task DeleteAsync(bool isDeletingBackup = false)"}</code> | <span className="api-desc">Async version of `Delete`.</span> |
| <Link id="m-ensurecopied" /><code>{"async Task EnsureCopied()"}</code> | <span className="api-desc">Pulls the file from remote the first time it is called and waits for any copy still running.</span> |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> | <span className="api-desc">Passes through to the local file.</span> |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> | <span className="api-desc">Passes through to the local file.</span> |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | <span className="api-desc">Moves the local file only; the remote copy stays where it is.</span> |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> | <span className="api-desc">Passes through to the local file.</span> |
| <Link id="m-queueunloadasync" /><code>{"async Task QueueUnloadAsync()"}</code> | <span className="api-desc">Passes through to the local file.</span> |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> | <span className="api-desc">Pulls the file from remote if not done yet, then reads it from the local copy.</span> |
| <Link id="m-readasync-2" /><code>{"async Task<T> ReadAsync<T>(Func<T> create)"}</code> | <span className="api-desc">Pulls the file from remote if not done yet, then reads it from the local copy.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Refreshes both the remote and local file info.</span> |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> | <span className="api-desc">Clears the local file's changed flag.</span> |
| <Link id="m-writeasync" /><code>{"async void WriteAsync()"}</code> | <span className="api-desc">Waits for any running backup, then writes the local file.</span> |
| <Link id="m-backupinstantinternal" /><code>{"protected virtual void BackupInstantInternal()"}</code> | <span className="api-desc">Blocking upload. Default waits on `BackupToRemoteInternal`.</span> |
| <Link id="m-backuptoremoteinternal" /><code>{"protected abstract Task BackupToRemoteInternal()"}</code> | <span className="api-desc">Implemented by subclasses to upload the local file.</span> |
| <Link id="m-copyfromremoteinternal" /><code>{"protected abstract Task CopyFromRemoteInternal()"}</code> | <span className="api-desc">Implemented by subclasses to download the remote file.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Removes the file from `allRemoteFiles`. In practice that list keeps it alive, so this does not run.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backupasync" /><code>{"private async Task BackUpAsync()"}</code> | <span className="api-desc">Uploads the local file if it exists, clears the changed flag, and removes the file from the backing-up set.</span> |
| <Link id="m-copyfromremote-2" /><code>{"private async Task CopyFromRemote()"}</code> | <span className="api-desc">Downloads the remote file over the local one if it exists, then refreshes both.</span> |
| <Link id="m-waitforbackup" /><code>{"private Task WaitForBackup()"}</code> | <span className="api-desc">Returns the running backup task, or a completed task if none.</span> |

</details>
