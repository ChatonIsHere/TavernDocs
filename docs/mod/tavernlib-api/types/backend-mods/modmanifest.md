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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [ModManifest](/mod/tavernlib-api/types/backend-mods/modmanifest), [Sources and reconcile](/mod/tavernlib-api/mod-manager/sources-and-reconcile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModManifest()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-supportedmajor" /><code>{"internal const int SupportedMajor"}</code> | <span className="api-desc">Internal: 2, the only manifest schema version this build reads.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-artifacts" /><code>{"List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{"> Artifacts { get; private set; }"}</code> | <span className="api-desc">Every build, including ones with targets or packages this build doesn't know.</span> |
| <Link id="m-author" /><code>{"string Author { get; private set; }"}</code> | <span className="api-desc">The author. Defaults to the part of the id before the first dot.</span> |
| <Link id="m-dependencies" /><code>{"Dictionary<string, string> Dependencies { get; private set; }"}</code> | <span className="api-desc">Mod id to minimum version.</span> |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> | <span className="api-desc">The description. Empty if left out.</span> |
| <Link id="m-id" /><code>{"string Id { get; private set; }"}</code> | <span className="api-desc">The mod id, `Author.Repo`.</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The display name. Defaults to the id.</span> |
| <Link id="m-parityrequired" /><code>{"bool ParityRequired { get; private set; }"}</code> | <span className="api-desc">True if players joining a server with this mod must have the same version. Required in the manifest.</span> |
| <Link id="m-scenes" /><code>{"List<string> Scenes { get; private set; }"}</code> | <span className="api-desc">Scenes the mod works in (`normal`, `quest`, `tutorial`), or `null` for every scene.</span> |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; private set; }"}</code> | <span className="api-desc">The source the manifest was fetched from.</span> |
| <Link id="m-version" /><code>{"string Version { get; private set; }"}</code> | <span className="api-desc">The version, `MAJOR.MINOR.PATCH`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-artifactfor" /><code><Link to="/mod/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" ArtifactFor(string target)"}</code> | <span className="api-desc">The usable build for a target, or `null`.</span> |
| <Link id="m-fromjson" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FromJson(JObject d, string sourceRepo)"}</code> | <span className="api-desc">Parses a manifest. `null` (with a warning) for an unsupported schema; throws `ModManagerException` for a broken one.</span> |
| <Link id="m-runsin" /><code>{"static bool RunsIn(List<string> scenes, string scene)"}</code> | <span className="api-desc">True if the scene list is `null`, the scene is `null`, or the list has the scene.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-readparity" /><code>{"private static bool ReadParity(JToken value, string idForMsg)"}</code> | <span className="api-desc">Reads `parity_required`; throws if it isn't a boolean rather than guessing.</span> |
| <Link id="m-readscenes" /><code>{"private static List<string> ReadScenes(JToken value, string idForMsg)"}</code> | <span className="api-desc">Reads the `scenes` list; null means every scene, and an empty or non-string list throws.</span> |
| <Link id="m-sha256field" /><code>{"internal static string Sha256Field(JObject d, string where)"}</code> | <span className="api-desc">Internal: reads and checks a `sha256` field: 64 hex characters, returned lower case.</span> |
| <Link id="m-text" /><code>{"internal static string Text(JObject d, string key, string fallback, string where)"}</code> | <span className="api-desc">Internal: reads a string field, using the fallback when it's absent or null. Throws for any other type.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ModManifest`:

<div className="api-used-in">

[`ModDependencyResolver.ResolveDependencies`](/mod/tavernlib-api/types/backend-mods/moddependencyresolver#m-resolvedependencies), [`ModInstaller.CollectLibraryDependencies`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-collectlibrarydependencies), [`ModInstaller.InstallMod`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-installmod), [`ModInstaller.RefreshRecordMetadata`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-refreshrecordmetadata), [`ModReconciler.Pass.InstallClosure`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-installclosure), [`ModReconciler.Pass.Intact`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-intact), [`ModRecord.Build`](/mod/tavernlib-api/types/backend-mods/modrecord#m-build), [`ModRepoClient.FetchLatest`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-fetchlatest), [`ModRepoClient.FetchManifest`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-fetchmanifest), [`ModRepoClient.FetchManifestLeaf`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-fetchmanifestleaf).

</div>
