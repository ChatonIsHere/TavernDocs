---
title: "RemoteAltaFolder"
description: "Save folder that mirrors a local folder to a second directory on disk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteAltaFolder

A **class** in `Alta.IO`, `Alta.Utilities`.

Save folder that mirrors a local folder to a second directory on disk. Files and subfolders it hands out are `RemoteAltaFile` and `RemoteAltaFolder`. Set up by `AltaIO` from `/remote_saves`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`AltaFolder`](/game-api/types/assembly-other/altafolder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteAltaFolder("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder, DirectoryInfo remoteInfo)"}</code> | Creates a `RemoteAltaFolder` from `localFolder` and `remoteInfo`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localfolder" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" localFolder"}</code> | The local folder that holds the working copies. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-remoteinfo" /><code>{"private DirectoryInfo remoteInfo"}</code> | The remote directory. Created in the constructor if missing. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"override void Delete()"}</code> | Deletes the remote directory and its files, then the local folder. |
| <Link id="m-fileexists" /><code>{"override bool FileExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | Checks the remote directory for the file and, if found, caches and returns a remote-backed file. |
| <Link id="m-getfile" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> | Returns the cached remote-backed file for the name, creating it if needed. |
| <Link id="m-getsubfolder" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> | Returns the cached remote-backed subfolder, creating it if needed. |
| <Link id="m-subfolderexists" /><code>{"override bool SubfolderExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | Checks the remote directory for the subfolder and, if found, caches and returns it. |
| <Link id="m-findallfiles" /><code>{"protected override void FindAllFiles()"}</code> | Loads every file in the remote directory, skipping names containing `_backup`. |
| <Link id="m-findallsubfolders" /><code>{"protected override void FindAllSubFolders()"}</code> | Loads every subdirectory of the remote directory. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getremotedirectory" /><code>{"private DirectoryInfo GetRemoteDirectory(string name)"}</code> | Builds the remote `DirectoryInfo` for a subfolder name. |
| <Link id="m-getremotefileinfo" /><code>{"private FileInfo GetRemoteFileInfo(string name)"}</code> | Builds the remote `FileInfo` for a file name. |

</details>
