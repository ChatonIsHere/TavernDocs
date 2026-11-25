---
title: "ModManifest"
description: "A class in TavernLib, TavernLib.Backend.Mods."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModManifest

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModManifest](/tavernlib-api/types/backend-mods/modmanifest), [Sources and reconcile](/tavernlib-api/mod-manager/sources-and-reconcile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModManifest()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-supportedmajor" /><code>{"internal const int SupportedMajor"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-artifacts" /><code>{"List<"}<Link to="/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{"> Artifacts { get; private set; }"}</code> |  |
| <Link id="m-author" /><code>{"string Author { get; private set; }"}</code> |  |
| <Link id="m-dependencies" /><code>{"Dictionary<string, string> Dependencies { get; private set; }"}</code> |  |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> |  |
| <Link id="m-id" /><code>{"string Id { get; private set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> |  |
| <Link id="m-parityrequired" /><code>{"bool ParityRequired { get; private set; }"}</code> |  |
| <Link id="m-scenes" /><code>{"List<string> Scenes { get; private set; }"}</code> |  |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; private set; }"}</code> |  |
| <Link id="m-version" /><code>{"string Version { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-artifactfor" /><code><Link to="/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" ArtifactFor(string target)"}</code> |  |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FromJson(JObject d, string sourceRepo)"}</code> |  |
| <Link id="m-runsin" /><code>{"static bool RunsIn(List<string> scenes, string scene)"}</code> |  |
| <Link id="m-readparity" /><code>{"private static bool ReadParity(JToken value, string idForMsg)"}</code> |  |
| <Link id="m-readscenes" /><code>{"private static List<string> ReadScenes(JToken value, string idForMsg)"}</code> |  |
| <Link id="m-sha256field" /><code>{"internal static string Sha256Field(JObject d, string where)"}</code> |  |
| <Link id="m-text" /><code>{"internal static string Text(JObject d, string key, string fallback, string where)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ModManifest`:

[`ModDependencyResolver.ResolveDependencies`](/tavernlib-api/types/backend-mods/moddependencyresolver#m-resolvedependencies), [`ModInstaller.CollectLibraryDependencies`](/tavernlib-api/types/backend-mods/modinstaller#m-collectlibrarydependencies), [`ModInstaller.InstallMod`](/tavernlib-api/types/backend-mods/modinstaller#m-installmod), [`ModInstaller.RefreshRecordMetadata`](/tavernlib-api/types/backend-mods/modinstaller#m-refreshrecordmetadata), [`ModReconciler.Pass.InstallClosure`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-installclosure), [`ModReconciler.Pass.Intact`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-intact), [`ModRecord.Build`](/tavernlib-api/types/backend-mods/modrecord#m-build), [`ModRepoClient.FetchLatest`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchlatest), [`ModRepoClient.FetchManifest`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchmanifest), [`ModRepoClient.FetchManifestLeaf`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchmanifestleaf).
