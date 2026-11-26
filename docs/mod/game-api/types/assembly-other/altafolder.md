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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAltaFolder`](/mod/game-api/types/assembly-other/ialtafolder)
- **Derived types** [`RemoteAltaFolder`](/mod/game-api/types/assembly-other/remotealtafolder), [`S3RemoteFolder`](/mod/game-api/types/assembly-other/s3remotefolder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaFolder("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent, DirectoryInfo info)"}</code> | <span className="api-desc">Creates an `AltaFolder` from `parent` and `info`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-files" /><code>{"protected Dictionary<string, "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> files"}</code> | <span className="api-desc">Cache of opened files by name.</span> |
| <Link id="m-subfolders" /><code>{"protected Dictionary<string, "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{"> subFolders"}</code> | <span className="api-desc">Cache of opened subfolders by name.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allfiles" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> AllFiles { get; }"}</code> | <span className="api-desc">Every file in the folder except `_backup` copies. Rescans the disk each time it is read.</span> |
| <Link id="m-allsubfolders" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{"> AllSubFolders { get; }"}</code> | <span className="api-desc">Every subfolder. Rescans the disk each time it is read.</span> |
| <Link id="m-directoryinfo" /><code>{"DirectoryInfo DirectoryInfo { get; }"}</code> | <span className="api-desc">The `DirectoryInfo` for this folder.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Folder name.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" Parent { get; }"}</code> | <span className="api-desc">The folder this one was opened from, or null for a root.</span> |
| <Link id="m-path" /><code>{"string Path { get; }"}</code> | <span className="api-desc">Full path of the folder.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"virtual void Delete()"}</code> | <span className="api-desc">Unregisters the folder from its parent and deletes it with everything in it. Errors are logged.</span> |
| <Link id="m-deleteasync" /><code>{"virtual Task DeleteAsync()"}</code> | <span className="api-desc">Same as `Delete`, with the disk work on a background task.</span> |
| <Link id="m-fileexists" /><code>{"virtual bool FileExists(string name, out "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | <span className="api-desc">Returns the file (cached or new) if it exists on disk. Does not create it.</span> |
| <Link id="m-getfile" /><code>{"virtual "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> | <span className="api-desc">Returns the cached file with this name, creating the wrapper if needed. The file does not have to exist yet.</span> |
| <Link id="m-getsubfolder" /><code>{"virtual "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> | <span className="api-desc">Returns the subfolder with this name, creating it on disk if it is missing.</span> |
| <Link id="m-removefile" /><code>{"virtual void RemoveFile("}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | <span className="api-desc">Drops a file from the cache. Does not delete it.</span> |
| <Link id="m-removesubfolder" /><code>{"void RemoveSubFolder(string name)"}</code> | <span className="api-desc">Drops a subfolder from the cache by name. Does not delete it.</span> |
| <Link id="m-subfolderexists" /><code>{"virtual bool SubfolderExists(string name, out "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | <span className="api-desc">Returns the subfolder if it exists on disk. Does not create it.</span> |
| <Link id="m-unloadallfiles" /><code>{"virtual void UnloadAllFiles()"}</code> | <span className="api-desc">Queues an unload on every cached file, through all subfolders, then clears both caches.</span> |
| <Link id="m-findallfiles" /><code>{"protected virtual void FindAllFiles()"}</code> | <span className="api-desc">Adds every file on disk except `_backup` copies to the cache. Used by `AllFiles`.</span> |
| <Link id="m-findallsubfolders" /><code>{"protected virtual void FindAllSubFolders()"}</code> | <span className="api-desc">Adds every subdirectory on disk to the cache. Used by `AllSubFolders`.</span> |
