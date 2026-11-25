---
title: "IRemoteAltaFile"
description: "interface IRemoteAltaFile in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRemoteAltaFile

An **interface** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`RemoteFiles.RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backupinstant" /><code>{"void BackupInstant()"}</code> |  |
| <Link id="m-backuptoremote" /><code>{"Task BackupToRemote()"}</code> |  |
| <Link id="m-ensurecopied" /><code>{"Task EnsureCopied()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IRemoteAltaFile`:

[`RemoteFiles.allRemoteFiles`](/game-api/types/assembly-other/remotefiles#m-allremotefiles), [`RemoteFiles.currentlyBackingUp`](/game-api/types/assembly-other/remotefiles#m-currentlybackingup).
