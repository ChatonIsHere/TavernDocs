---
title: "AltaFolder"
description: "class AltaFolder in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaFolder

A **class** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAltaFolder`](/game-api/types/assembly-other/ialtafolder)
- **Derived types** [`RemoteAltaFolder`](/game-api/types/assembly-other/remotealtafolder), [`S3RemoteFolder`](/game-api/types/assembly-other/s3remotefolder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaFolder("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" parent, DirectoryInfo info)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-files" /><code>{"protected Dictionary<string, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> files"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-subfolders" /><code>{"protected Dictionary<string, "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{"> subFolders"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allfiles" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> AllFiles { get; }"}</code> |  |
| <Link id="m-allsubfolders" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{"> AllSubFolders { get; }"}</code> |  |
| <Link id="m-directoryinfo" /><code>{"DirectoryInfo DirectoryInfo { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" Parent { get; }"}</code> |  |
| <Link id="m-path" /><code>{"string Path { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"virtual void Delete()"}</code> |  |
| <Link id="m-deleteasync" /><code>{"virtual Task DeleteAsync()"}</code> |  |
| <Link id="m-fileexists" /><code>{"virtual bool FileExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> |  |
| <Link id="m-getfile" /><code>{"virtual "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> |  |
| <Link id="m-getsubfolder" /><code>{"virtual "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> |  |
| <Link id="m-removefile" /><code>{"virtual void RemoveFile("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> |  |
| <Link id="m-removesubfolder" /><code>{"void RemoveSubFolder(string name)"}</code> |  |
| <Link id="m-subfolderexists" /><code>{"virtual bool SubfolderExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> |  |
| <Link id="m-unloadallfiles" /><code>{"virtual void UnloadAllFiles()"}</code> |  |
| <Link id="m-findallfiles" /><code>{"protected virtual void FindAllFiles()"}</code> |  |
| <Link id="m-findallsubfolders" /><code>{"protected virtual void FindAllSubFolders()"}</code> |  |
