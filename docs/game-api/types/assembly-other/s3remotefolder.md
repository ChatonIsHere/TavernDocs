---
title: "S3RemoteFolder"
description: "class S3RemoteFolder in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3RemoteFolder

A **class** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`AltaFolder`](/game-api/types/assembly-other/altafolder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3RemoteFolder("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder, "}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteFolder)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-localfolder" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-remoteinfo" /><code>{"private "}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteInfo"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"override void Delete()"}</code> |  |
| <Link id="m-deleteasync" /><code>{"override async Task DeleteAsync()"}</code> |  |
| <Link id="m-fileexists" /><code>{"override bool FileExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> |  |
| <Link id="m-getfile" /><code><Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile("}<Link to="/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{" remoteFile)"}</code> |  |
| <Link id="m-getfile-2" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> |  |
| <Link id="m-getsubfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder("}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" remoteFolder)"}</code> |  |
| <Link id="m-getsubfolder-2" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> |  |
| <Link id="m-subfolderexists" /><code>{"override bool SubfolderExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> |  |
| <Link id="m-findallfiles" /><code>{"protected override void FindAllFiles()"}</code> |  |
| <Link id="m-findallsubfolders" /><code>{"protected override void FindAllSubFolders()"}</code> |  |
| <Link id="m-getstoragefilesubinfo" /><code>{"private "}<Link to="/game-api/types/assembly-other/s3storagefile">{"S3StorageFile"}</Link>{" GetStorageFileSubInfo(string name)"}</code> |  |
| <Link id="m-getstoragesubfolder" /><code>{"private "}<Link to="/game-api/types/assembly-other/s3storagefolder">{"S3StorageFolder"}</Link>{" GetStorageSubFolder(string name)"}</code> |  |
