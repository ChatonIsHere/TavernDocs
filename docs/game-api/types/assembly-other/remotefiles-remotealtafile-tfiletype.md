---
title: "RemoteFiles.RemoteAltaFile<TFileType>"
description: "abstract class RemoteFiles.RemoteAltaFile<TFileType> in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteFiles.RemoteAltaFile&lt;TFileType&gt;

An **abstract class** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`RemoteFiles`](/game-api/types/assembly-other/remotefiles)
- **Inherits or implements** [`IAltaFile`](/game-api/types/assembly-other/ialtafile), [`IRemoteAltaFile`](/game-api/types/assembly-other/iremotealtafile)
- **Derived types** [`RemoteAltaFile`](/game-api/types/assembly-other/remotealtafile), [`S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteAltaFile("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" internalFile, TFileType remoteFileInfo)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-backuptoremote" /><code>{"private Task backupToRemote"}</code> |  |
| <Link id="m-copyfromremote" /><code>{"private Task copyFromRemote"}</code> |  |
| <Link id="m-hasbeencopied" /><code>{"private bool hasBeenCopied"}</code> |  |
| <Link id="m-localfile" /><code>{"protected "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" localFile"}</code> |  |
| <Link id="m-remotefileinfo" /><code>{"protected TFileType remoteFileInfo"}</code> |  |
| <Link id="m-timer" /><code>{"private Stopwatch timer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code><Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> |  |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> |  |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> |  |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> |  |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> |  |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backupinstant" /><code>{"void BackupInstant()"}</code> |  |
| <Link id="m-backuptoremote-2" /><code>{"Task BackupToRemote()"}</code> |  |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> |  |
| <Link id="m-deleteasync" /><code>{"async Task DeleteAsync(bool isDeletingBackup = false)"}</code> |  |
| <Link id="m-ensurecopied" /><code>{"async Task EnsureCopied()"}</code> |  |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> |  |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> |  |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> |  |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> |  |
| <Link id="m-queueunloadasync" /><code>{"async Task QueueUnloadAsync()"}</code> |  |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> |  |
| <Link id="m-readasync-2" /><code>{"async Task<T> ReadAsync<T>(Func<T> create)"}</code> |  |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |  |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> |  |
| <Link id="m-writeasync" /><code>{"async void WriteAsync()"}</code> |  |
| <Link id="m-backupasync" /><code>{"private async Task BackUpAsync()"}</code> |  |
| <Link id="m-backupinstantinternal" /><code>{"protected virtual void BackupInstantInternal()"}</code> |  |
| <Link id="m-backuptoremoteinternal" /><code>{"protected abstract Task BackupToRemoteInternal()"}</code> |  |
| <Link id="m-copyfromremote-2" /><code>{"private async Task CopyFromRemote()"}</code> |  |
| <Link id="m-copyfromremoteinternal" /><code>{"protected abstract Task CopyFromRemoteInternal()"}</code> |  |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |  |
| <Link id="m-waitforbackup" /><code>{"private Task WaitForBackup()"}</code> |  |
