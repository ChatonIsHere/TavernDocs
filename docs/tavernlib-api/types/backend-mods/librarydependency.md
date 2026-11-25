---
title: "LibraryDependency"
description: "A library a mod build needs in UserLibs, from the build's library_dependencies in its manifest."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LibraryDependency

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

A library a mod build needs in `UserLibs`, from the build's `library_dependencies` in its manifest.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [LibraryDependency](/tavernlib-api/types/backend-mods/librarydependency), [Sources and reconcile](/tavernlib-api/mod-manager/sources-and-reconcile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LibraryDependency()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-downloadurl" /><code>{"string DownloadUrl { get; private set; }"}</code> | Where to download the library. |
| <Link id="m-filename" /><code>{"string Filename { get; private set; }"}</code> | The file name it's saved as in `UserLibs`. |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The library's name. |
| <Link id="m-sha256" /><code>{"string Sha256 { get; private set; }"}</code> | The file's expected SHA-256, lower-case hex. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{" FromJson(JObject d)"}</code> | Parses one entry. Throws `ModManagerException` for a missing string field or a bad `sha256`. |

## Used in

Members of other types that take, return or hold a `LibraryDependency`:

[`ModArtifact.LibraryDependencies`](/tavernlib-api/types/backend-mods/modartifact#m-librarydependencies), [`ModInstaller.CheckSameLibrary`](/tavernlib-api/types/backend-mods/modinstaller#m-checksamelibrary), [`ModInstaller.CollectLibraryDependencies`](/tavernlib-api/types/backend-mods/modinstaller#m-collectlibrarydependencies), [`ModInstaller.InstallLibraryDependency`](/tavernlib-api/types/backend-mods/modinstaller#m-installlibrarydependency), [`ModReconciler.Pass.InstallClosure`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-installclosure), [`ModRecord.InstalledLibraries`](/tavernlib-api/types/backend-mods/modrecord#m-installedlibraries).
