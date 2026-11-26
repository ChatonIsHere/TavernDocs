---
title: "S3CloudStorageRemoteFile"
description: "Remote-backed save file stored as an S3 object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3CloudStorageRemoteFile

A **class** in `Alta.IO`, `Alta.Utilities`.

Remote-backed save file stored as an S3 object. Used when the server starts with `/remote_saves s3 bucket:path`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`RemoteFiles.RemoteAltaFile<S3StorageFile>`](/mod/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3CloudStorageRemoteFile("}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" internalFile, "}<Link to="/mod/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{" remoteFileInfo)"}</code> | <span className="api-desc">Creates a `S3CloudStorageRemoteFile` from `internalFile` and `remoteFileInfo`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backuptoremoteinternal" /><code>{"protected override Task BackupToRemoteInternal()"}</code> | <span className="api-desc">Uploads the local file to the S3 object on a background task.</span> |
| <Link id="m-copyfromremoteinternal" /><code>{"protected override Task CopyFromRemoteInternal()"}</code> | <span className="api-desc">Downloads the S3 object over the local file on a background task.</span> |
