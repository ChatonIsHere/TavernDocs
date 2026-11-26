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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`RemoteFiles.RemoteAltaFile<TFileType>`](/mod/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> | <span className="api-desc">True when the local file changed since its last backup.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backupinstant" /><code>{"void BackupInstant()"}</code> | <span className="api-desc">Copies the local file to the remote synchronously, blocking until done. Used by `BackupAllChanged` when asked for an instant backup.</span> |
| <Link id="m-backuptoremote" /><code>{"Task BackupToRemote()"}</code> | <span className="api-desc">Starts an async copy of the local file to the remote and resets the changed flag on success. Refuses if a backup is already running.</span> |
| <Link id="m-ensurecopied" /><code>{"Task EnsureCopied()"}</code> | <span className="api-desc">Copies the remote file to local the first time it is called and waits for that copy.</span> |

## Used in

Members of other types that take, return or hold a `IRemoteAltaFile`:

<div className="api-used-in">

[`RemoteFiles.allRemoteFiles`](/mod/game-api/types/assembly-other/remotefiles#m-allremotefiles), [`RemoteFiles.currentlyBackingUp`](/mod/game-api/types/assembly-other/remotefiles#m-currentlybackingup).

</div>
