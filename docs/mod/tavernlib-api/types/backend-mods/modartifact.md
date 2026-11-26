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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [ModArtifact](/mod/tavernlib-api/types/backend-mods/modartifact), [Sources and reconcile](/mod/tavernlib-api/mod-manager/sources-and-reconcile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModArtifact()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-raw" /><code>{"private JObject _raw"}</code> | <span className="api-desc">The artifact's original JSON object, kept so a record can write it back.</span> |
| <Link id="m-keyorder" /><code>{"private static readonly string[] KeyOrder"}</code> | <span className="api-desc">Key order of an artifact in the compiled manifest, which a record keeps.</span> |
| <Link id="m-librarykeyorder" /><code>{"private static readonly string[] LibraryKeyOrder"}</code> | <span className="api-desc">Key order of a library dependency entry in a record.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-downloadurl" /><code>{"string DownloadUrl { get; private set; }"}</code> | <span className="api-desc">Where to download the build.</span> |
| <Link id="m-librarydependencies" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> LibraryDependencies { get; private set; }"}</code> | <span className="api-desc">Libraries the build needs in `UserLibs`.</span> |
| <Link id="m-package" /><code>{"string Package { get; private set; }"}</code> | <span className="api-desc">`dll` or `zip`, or something this build of TavernLib doesn't know.</span> |
| <Link id="m-sha256" /><code>{"string Sha256 { get; private set; }"}</code> | <span className="api-desc">The download's expected SHA-256, lower-case hex.</span> |
| <Link id="m-targets" /><code>{"List<string> Targets { get; private set; }"}</code> | <span className="api-desc">The targets the build is for, such as `server` or `client_windows`.</span> |
| <Link id="m-usable" /><code>{"bool Usable { get; }"}</code> | <span className="api-desc">True for the `dll` and `zip` packages.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-builds" /><code>{"bool Builds(string target)"}</code> | <span className="api-desc">True when the build is usable and lists that target.</span> |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" FromJson(JToken token, string idForMsg)"}</code> | <span className="api-desc">Parses one artifact. Throws `ModManagerException` when targets, `download_url`, `sha256` or the libraries are missing or malformed.</span> |
| <Link id="m-installname" /><code>{"string InstallName(string modId)"}</code> | <span className="api-desc">The file name a `dll` build is saved as: the URL's file name if it ends in `.dll`, otherwise `<modId>.dll`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reordered" /><code>{"private static JObject Reordered(JObject source, string[] order)"}</code> | <span className="api-desc">Copies a JSON object with the listed keys first, in that order, then any other keys.</span> |
| <Link id="m-torecordjson" /><code>{"internal JObject ToRecordJson()"}</code> | <span className="api-desc">Internal: the artifact's original JSON with keys in the manifest's order, for writing into a mod record.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ModArtifact`:

<div className="api-used-in">

[`ModManifest.ArtifactFor`](/mod/tavernlib-api/types/backend-mods/modmanifest#m-artifactfor), [`ModManifest.Artifacts`](/mod/tavernlib-api/types/backend-mods/modmanifest#m-artifacts), [`ModRecord.InstalledEntry`](/mod/tavernlib-api/types/backend-mods/modrecord#m-installedentry), [`ModRecord.ParsedArtifacts`](/mod/tavernlib-api/types/backend-mods/modrecord#m-parsedartifacts).

</div>
