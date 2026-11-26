---
title: "ModManifest"
description: "One version of one mod, from a source's manifests folder (schema version 2 only)."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModManifest

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

One version of one mod, from a source's `manifests` folder (schema version 2 only).

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModManifest](/tavernlib-api/types/backend-mods/modmanifest), [Sources and reconcile](/tavernlib-api/mod-manager/sources-and-reconcile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModManifest()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-supportedmajor" /><code>{"internal const int SupportedMajor"}</code> | Internal: 2, the only manifest schema version this build reads. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-artifacts" /><code>{"List<"}<Link to="/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{"> Artifacts { get; private set; }"}</code> | Every build, including ones with targets or packages this build doesn't know. |
| <Link id="m-author" /><code>{"string Author { get; private set; }"}</code> | The author. Defaults to the part of the id before the first dot. |
| <Link id="m-dependencies" /><code>{"Dictionary<string, string> Dependencies { get; private set; }"}</code> | Mod id to minimum version. |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> | The description. Empty if left out. |
| <Link id="m-id" /><code>{"string Id { get; private set; }"}</code> | The mod id, `Author.Repo`. |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The display name. Defaults to the id. |
| <Link id="m-parityrequired" /><code>{"bool ParityRequired { get; private set; }"}</code> | True if players joining a server with this mod must have the same version. Required in the manifest. |
| <Link id="m-scenes" /><code>{"List<string> Scenes { get; private set; }"}</code> | Scenes the mod works in (`normal`, `quest`, `tutorial`), or `null` for every scene. |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; private set; }"}</code> | The source the manifest was fetched from. |
| <Link id="m-version" /><code>{"string Version { get; private set; }"}</code> | The version, `MAJOR.MINOR.PATCH`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-artifactfor" /><code><Link to="/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" ArtifactFor(string target)"}</code> | The usable build for a target, or `null`. |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FromJson(JObject d, string sourceRepo)"}</code> | Parses a manifest. `null` (with a warning) for an unsupported schema; throws `ModManagerException` for a broken one. |
| <Link id="m-runsin" /><code>{"static bool RunsIn(List<string> scenes, string scene)"}</code> | True if the scene list is `null`, the scene is `null`, or the list has the scene. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-readparity" /><code>{"private static bool ReadParity(JToken value, string idForMsg)"}</code> | Reads `parity_required`; throws if it isn't a boolean rather than guessing. |
| <Link id="m-readscenes" /><code>{"private static List<string> ReadScenes(JToken value, string idForMsg)"}</code> | Reads the `scenes` list; null means every scene, and an empty or non-string list throws. |
| <Link id="m-sha256field" /><code>{"internal static string Sha256Field(JObject d, string where)"}</code> | Internal: reads and checks a `sha256` field: 64 hex characters, returned lower case. |
| <Link id="m-text" /><code>{"internal static string Text(JObject d, string key, string fallback, string where)"}</code> | Internal: reads a string field, using the fallback when it's absent or null. Throws for any other type. |

</details>

## Used in

Members of other types that take, return or hold a `ModManifest`:

[`ModDependencyResolver.ResolveDependencies`](/tavernlib-api/types/backend-mods/moddependencyresolver#m-resolvedependencies), [`ModInstaller.CollectLibraryDependencies`](/tavernlib-api/types/backend-mods/modinstaller#m-collectlibrarydependencies), [`ModInstaller.InstallMod`](/tavernlib-api/types/backend-mods/modinstaller#m-installmod), [`ModInstaller.RefreshRecordMetadata`](/tavernlib-api/types/backend-mods/modinstaller#m-refreshrecordmetadata), [`ModReconciler.Pass.InstallClosure`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-installclosure), [`ModReconciler.Pass.Intact`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-intact), [`ModRecord.Build`](/tavernlib-api/types/backend-mods/modrecord#m-build), [`ModRepoClient.FetchLatest`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchlatest), [`ModRepoClient.FetchManifest`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchmanifest), [`ModRepoClient.FetchManifestLeaf`](/tavernlib-api/types/backend-mods/modrepoclient#m-fetchmanifestleaf).
