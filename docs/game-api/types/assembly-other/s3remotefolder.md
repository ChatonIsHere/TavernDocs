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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`AltaFolder`](/game-api/types/assembly-other/altafolder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3RemoteFolder("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder, "}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteFolder)"}</code> | Creates a `S3RemoteFolder` from `localFolder` and `remoteFolder`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localfolder" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder"}</code> | The local folder that holds the working copies. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-remoteinfo" /><code>{"private "}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteInfo"}</code> | The S3 folder (bucket and key prefix). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"override void Delete()"}</code> | Deletes the S3 folder, then the local folder. |
| <Link id="m-deleteasync" /><code>{"override async Task DeleteAsync()"}</code> | Async version of `Delete`. |
| <Link id="m-fileexists" /><code>{"override bool FileExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | Checks S3 for the file and, if found, caches and returns a remote-backed file. |
| <Link id="m-getfile" /><code><Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile("}<Link to="/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{" remoteFile)"}</code> | Returns the cached remote-backed file by name or by S3 file, creating it if needed. |
| <Link id="m-getfile-2" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> | Returns the cached remote-backed file by name or by S3 file, creating it if needed. |
| <Link id="m-getsubfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder("}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteFolder)"}</code> | Returns the cached remote-backed subfolder by name or by S3 folder, creating it if needed. |
| <Link id="m-getsubfolder-2" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> | Returns the cached remote-backed subfolder by name or by S3 folder, creating it if needed. |
| <Link id="m-subfolderexists" /><code>{"override bool SubfolderExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | Always returns true; creates and caches the subfolder without checking S3. |
| <Link id="m-findallfiles" /><code>{"protected override void FindAllFiles()"}</code> | Loads every file listed in the S3 folder, skipping names containing `_backup`. |
| <Link id="m-findallsubfolders" /><code>{"protected override void FindAllSubFolders()"}</code> | Loads every subfolder listed in the S3 folder. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getstoragefilesubinfo" /><code>{"private "}<Link to="/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{" GetStorageFileSubInfo(string name)"}</code> | Builds the S3 file for a name under this folder's key. |
| <Link id="m-getstoragesubfolder" /><code>{"private "}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" GetStorageSubFolder(string name)"}</code> | Builds the S3 folder for a name under this folder's key. |

</details>
