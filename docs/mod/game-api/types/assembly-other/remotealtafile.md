---
title: "RemoteAltaFile"
description: "Remote-backed save file where the remote copy is another path on disk (a mounted or network folder)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteAltaFile

A **class** in `Alta.IO`, `Alta.Utilities`.

Remote-backed save file where the remote copy is another path on disk (a mounted or network folder). Used when the server starts with `/remote_saves` and a type other than `s3`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`RemoteFiles.RemoteAltaFile<FileInfoWrapper>`](/mod/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteAltaFile("}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" internalFile, FileInfo remoteFileInfo)"}</code> | <span className="api-desc">Creates a `RemoteAltaFile` from `internalFile` and `remoteFileInfo`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backupinstantinternal" /><code>{"protected override void BackupInstantInternal()"}</code> | <span className="api-desc">Copies the local file over the remote file, blocking.</span> |
| <Link id="m-backuptoremoteinternal" /><code>{"protected override Task BackupToRemoteInternal()"}</code> | <span className="api-desc">Runs the same copy on a background task.</span> |
| <Link id="m-copyfromremoteinternal" /><code>{"protected override Task CopyFromRemoteInternal()"}</code> | <span className="api-desc">Copies the remote file over the local file on a background task.</span> |
