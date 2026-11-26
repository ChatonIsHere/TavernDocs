---
title: "S3RemoteFolder"
description: "Save folder that mirrors a local folder to an S3 prefix."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3RemoteFolder

A **class** in `Alta.IO`, `Alta.Utilities`.

Save folder that mirrors a local folder to an S3 prefix. Hands out `S3CloudStorageRemoteFile` files and `S3RemoteFolder` subfolders. `AltaIO` makes the root one for `/remote_saves s3`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`AltaFolder`](/mod/game-api/types/assembly-other/altafolder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3RemoteFolder("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder, "}<Link to="/mod/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteFolder)"}</code> | <span className="api-desc">Creates a `S3RemoteFolder` from `localFolder` and `remoteFolder`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localfolder" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder"}</code> | <span className="api-desc">The local folder that holds the working copies.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-remoteinfo" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteInfo"}</code> | <span className="api-desc">The S3 folder (bucket and key prefix).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"override void Delete()"}</code> | <span className="api-desc">Deletes the S3 folder, then the local folder.</span> |
| <Link id="m-deleteasync" /><code>{"override async Task DeleteAsync()"}</code> | <span className="api-desc">Async version of `Delete`.</span> |
| <Link id="m-fileexists" /><code>{"override bool FileExists(string name, out "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | <span className="api-desc">Checks S3 for the file and, if found, caches and returns a remote-backed file.</span> |
| <Link id="m-getfile" /><code><Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile("}<Link to="/mod/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{" remoteFile)"}</code> | <span className="api-desc">Returns the cached remote-backed file by name or by S3 file, creating it if needed.</span> |
| <Link id="m-getfile-2" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> | <span className="api-desc">Returns the cached remote-backed file by name or by S3 file, creating it if needed.</span> |
| <Link id="m-getsubfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder("}<Link to="/mod/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteFolder)"}</code> | <span className="api-desc">Returns the cached remote-backed subfolder by name or by S3 folder, creating it if needed.</span> |
| <Link id="m-getsubfolder-2" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> | <span className="api-desc">Returns the cached remote-backed subfolder by name or by S3 folder, creating it if needed.</span> |
| <Link id="m-subfolderexists" /><code>{"override bool SubfolderExists(string name, out "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | <span className="api-desc">Always returns true; creates and caches the subfolder without checking S3.</span> |
| <Link id="m-findallfiles" /><code>{"protected override void FindAllFiles()"}</code> | <span className="api-desc">Loads every file listed in the S3 folder, skipping names containing `_backup`.</span> |
| <Link id="m-findallsubfolders" /><code>{"protected override void FindAllSubFolders()"}</code> | <span className="api-desc">Loads every subfolder listed in the S3 folder.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getstoragefilesubinfo" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{" GetStorageFileSubInfo(string name)"}</code> | <span className="api-desc">Builds the S3 file for a name under this folder's key.</span> |
| <Link id="m-getstoragesubfolder" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" GetStorageSubFolder(string name)"}</code> | <span className="api-desc">Builds the S3 folder for a name under this folder's key.</span> |

</details>
