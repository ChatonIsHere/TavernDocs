---
title: "IRemoteAltaFile"
description: "A local file mirrored to a remote copy, as used by RemoteFiles."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRemoteAltaFile

An **interface** in `Alta.IO`, `Alta.Utilities`.

A local file mirrored to a remote copy, as used by `RemoteFiles`. `RemoteFiles.BackupAllChanged` backs up every changed one.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`RemoteFiles.RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> | True when the local file changed since its last backup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backupinstant" /><code>{"void BackupInstant()"}</code> | Copies the local file to the remote synchronously, blocking until done. Used by `BackupAllChanged` when asked for an instant backup. |
| <Link id="m-backuptoremote" /><code>{"Task BackupToRemote()"}</code> | Starts an async copy of the local file to the remote and resets the changed flag on success. Refuses if a backup is already running. |
| <Link id="m-ensurecopied" /><code>{"Task EnsureCopied()"}</code> | Copies the remote file to local the first time it is called and waits for that copy. |

## Used in

Members of other types that take, return or hold a `IRemoteAltaFile`:

[`RemoteFiles.allRemoteFiles`](/game-api/types/assembly-other/remotefiles#m-allremotefiles), [`RemoteFiles.currentlyBackingUp`](/game-api/types/assembly-other/remotefiles#m-currentlybackingup).
