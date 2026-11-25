---
title: "ModArtifact"
description: "One build of a mod from its manifest: which targets it's for, where to download it and how it's packaged."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModArtifact

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

One build of a mod from its manifest: which targets it's for, where to download it and how it's packaged.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModArtifact](/tavernlib-api/types/backend-mods/modartifact), [Sources and reconcile](/tavernlib-api/mod-manager/sources-and-reconcile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModArtifact()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-raw" /><code>{"private JObject _raw"}</code> |  |
| <Link id="m-keyorder" /><code>{"private static readonly string[] KeyOrder"}</code> |  |
| <Link id="m-librarykeyorder" /><code>{"private static readonly string[] LibraryKeyOrder"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-downloadurl" /><code>{"string DownloadUrl { get; private set; }"}</code> | Where to download the build. |
| <Link id="m-librarydependencies" /><code>{"List<"}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> LibraryDependencies { get; private set; }"}</code> | Libraries the build needs in `UserLibs`. |
| <Link id="m-package" /><code>{"string Package { get; private set; }"}</code> | `dll` or `zip`, or something this build of TavernLib doesn't know. |
| <Link id="m-sha256" /><code>{"string Sha256 { get; private set; }"}</code> | The download's expected SHA-256, lower-case hex. |
| <Link id="m-targets" /><code>{"List<string> Targets { get; private set; }"}</code> | The targets the build is for, such as `server` or `client_windows`. |
| <Link id="m-usable" /><code>{"bool Usable { get; }"}</code> | True for the `dll` and `zip` packages. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-builds" /><code>{"bool Builds(string target)"}</code> | True when the build is usable and lists that target. |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" FromJson(JToken token, string idForMsg)"}</code> | Parses one artifact. Throws `ModManagerException` when targets, `download_url`, `sha256` or the libraries are missing or malformed. |
| <Link id="m-installname" /><code>{"string InstallName(string modId)"}</code> | The file name a `dll` build is saved as: the URL's file name if it ends in `.dll`, otherwise `<modId>.dll`. |
| <Link id="m-reordered" /><code>{"private static JObject Reordered(JObject source, string[] order)"}</code> |  |
| <Link id="m-torecordjson" /><code>{"internal JObject ToRecordJson()"}</code> | Internal: the artifact's original JSON with keys in the manifest's order, for writing into a mod record. |

## Used in

Members of other types that take, return or hold a `ModArtifact`:

[`ModManifest.ArtifactFor`](/tavernlib-api/types/backend-mods/modmanifest#m-artifactfor), [`ModManifest.Artifacts`](/tavernlib-api/types/backend-mods/modmanifest#m-artifacts), [`ModRecord.InstalledEntry`](/tavernlib-api/types/backend-mods/modrecord#m-installedentry), [`ModRecord.ParsedArtifacts`](/tavernlib-api/types/backend-mods/modrecord#m-parsedartifacts).
