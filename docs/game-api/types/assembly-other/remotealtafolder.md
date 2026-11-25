---
title: "RemoteAltaFolder"
description: "class RemoteAltaFolder in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteAltaFolder

A **class** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`AltaFolder`](/game-api/types/assembly-other/altafolder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteAltaFolder("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder, DirectoryInfo remoteInfo)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-localfolder" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-remoteinfo" /><code>{"private DirectoryInfo remoteInfo"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"override void Delete()"}</code> |  |
| <Link id="m-fileexists" /><code>{"override bool FileExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> |  |
| <Link id="m-getfile" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> |  |
| <Link id="m-getsubfolder" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> |  |
| <Link id="m-subfolderexists" /><code>{"override bool SubfolderExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> |  |
| <Link id="m-findallfiles" /><code>{"protected override void FindAllFiles()"}</code> |  |
| <Link id="m-findallsubfolders" /><code>{"protected override void FindAllSubFolders()"}</code> |  |
| <Link id="m-getremotedirectory" /><code>{"private DirectoryInfo GetRemoteDirectory(string name)"}</code> |  |
| <Link id="m-getremotefileinfo" /><code>{"private FileInfo GetRemoteFileInfo(string name)"}</code> |  |
