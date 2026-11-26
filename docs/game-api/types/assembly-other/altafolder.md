---
title: "AltaFolder"
description: "A folder on disk that caches its AltaFile and AltaFolder children by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaFolder

A **class** in `Alta.IO`, `Alta.Utilities`.

A folder on disk that caches its `AltaFile` and `AltaFolder` children by name. Creates the directory if it is missing.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAltaFolder`](/game-api/types/assembly-other/ialtafolder)
- **Derived types** [`RemoteAltaFolder`](/game-api/types/assembly-other/remotealtafolder), [`S3RemoteFolder`](/game-api/types/assembly-other/s3remotefolder)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaFolder("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent, DirectoryInfo info)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-files" /><code>{"protected Dictionary<string, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> files"}</code> | Cache of opened files by name. |
| <Link id="m-subfolders" /><code>{"protected Dictionary<string, "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{"> subFolders"}</code> | Cache of opened subfolders by name. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allfiles" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> AllFiles { get; }"}</code> | Every file in the folder except `_backup` copies. Rescans the disk each time it is read. |
| <Link id="m-allsubfolders" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{"> AllSubFolders { get; }"}</code> | Every subfolder. Rescans the disk each time it is read. |
| <Link id="m-directoryinfo" /><code>{"DirectoryInfo DirectoryInfo { get; }"}</code> | The `DirectoryInfo` for this folder. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Folder name. |
| <Link id="m-parent" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" Parent { get; }"}</code> | The folder this one was opened from, or null for a root. |
| <Link id="m-path" /><code>{"string Path { get; }"}</code> | Full path of the folder. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"virtual void Delete()"}</code> | Unregisters the folder from its parent and deletes it with everything in it. Errors are logged. |
| <Link id="m-deleteasync" /><code>{"virtual Task DeleteAsync()"}</code> | Same as `Delete`, with the disk work on a background task. |
| <Link id="m-fileexists" /><code>{"virtual bool FileExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | Returns the file (cached or new) if it exists on disk. Does not create it. |
| <Link id="m-getfile" /><code>{"virtual "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> | Returns the cached file with this name, creating the wrapper if needed. The file does not have to exist yet. |
| <Link id="m-getsubfolder" /><code>{"virtual "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> | Returns the subfolder with this name, creating it on disk if it is missing. |
| <Link id="m-removefile" /><code>{"virtual void RemoveFile("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | Drops a file from the cache. Does not delete it. |
| <Link id="m-removesubfolder" /><code>{"void RemoveSubFolder(string name)"}</code> | Drops a subfolder from the cache by name. Does not delete it. |
| <Link id="m-subfolderexists" /><code>{"virtual bool SubfolderExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | Returns the subfolder if it exists on disk. Does not create it. |
| <Link id="m-unloadallfiles" /><code>{"virtual void UnloadAllFiles()"}</code> | Queues an unload on every cached file, through all subfolders, then clears both caches. |
| <Link id="m-findallfiles" /><code>{"protected virtual void FindAllFiles()"}</code> | Adds every file on disk except `_backup` copies to the cache. Used by `AllFiles`. |
| <Link id="m-findallsubfolders" /><code>{"protected virtual void FindAllSubFolders()"}</code> | Adds every subdirectory on disk to the cache. Used by `AllSubFolders`. |
