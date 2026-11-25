---
title: "ModArtifact"
description: "A class in TavernLib, TavernLib.Backend.Mods."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModArtifact

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

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
| <Link id="m-downloadurl" /><code>{"string DownloadUrl { get; private set; }"}</code> |  |
| <Link id="m-librarydependencies" /><code>{"List<"}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> LibraryDependencies { get; private set; }"}</code> |  |
| <Link id="m-package" /><code>{"string Package { get; private set; }"}</code> |  |
| <Link id="m-sha256" /><code>{"string Sha256 { get; private set; }"}</code> |  |
| <Link id="m-targets" /><code>{"List<string> Targets { get; private set; }"}</code> |  |
| <Link id="m-usable" /><code>{"bool Usable { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-builds" /><code>{"bool Builds(string target)"}</code> |  |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" FromJson(JToken token, string idForMsg)"}</code> |  |
| <Link id="m-installname" /><code>{"string InstallName(string modId)"}</code> |  |
| <Link id="m-reordered" /><code>{"private static JObject Reordered(JObject source, string[] order)"}</code> |  |
| <Link id="m-torecordjson" /><code>{"internal JObject ToRecordJson()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ModArtifact`:

[`ModManifest.ArtifactFor`](/tavernlib-api/types/backend-mods/modmanifest#m-artifactfor), [`ModManifest.Artifacts`](/tavernlib-api/types/backend-mods/modmanifest#m-artifacts), [`ModRecord.InstalledEntry`](/tavernlib-api/types/backend-mods/modrecord#m-installedentry), [`ModRecord.ParsedArtifacts`](/tavernlib-api/types/backend-mods/modrecord#m-parsedartifacts).
