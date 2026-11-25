---
title: "ModRepoClient"
description: "Fetches indexes and manifests from the trusted mod sources over NativeHttp."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModRepoClient

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

Fetches indexes and manifests from the trusted mod sources over `NativeHttp`. Runs off the main thread.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModRepoClient](/tavernlib-api/types/backend-mods/modrepoclient), [Sources and reconcile](/tavernlib-api/mod-manager/sources-and-reconcile#modrepoclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModRepoClient("}<Link to="/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, List<string> repos, DateTime? deadlineUtc = null)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-jsontimeoutseconds" /><code>{"private const int JsonTimeoutSeconds"}</code> |  |
| <Link id="m-maxjsonbytes" /><code>{"private const long MaxJsonBytes"}</code> |  |
| <Link id="m-supportedindexmajor" /><code>{"private const int SupportedIndexMajor"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fetchindexes" /><code><Link to="/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" FetchIndexes()"}</code> | Downloads every source's index and merges them. For each mod and major, the default source wins, then the highest version. |
| <Link id="m-fetchlatest" /><code><Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FetchLatest(string modId, string preferRepo)"}</code> | A mod's `latest.json` manifest, trying the preferred source first if it's trusted. |
| <Link id="m-fetchmanifest" /><code><Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FetchManifest(string modId, string version, string preferRepo)"}</code> | One version's manifest, trying the preferred source first. Throws if no source serves the right id and version. |
| <Link id="m-replacementsfrom" /><code>{"static List<"}<Link to="/tavernlib-api/types/backend-mods/modreplacement">{"ModReplacement"}</Link>{"> ReplacementsFrom(JObject index, string baseUrl)"}</code> | Reads a source index's `replaced` section, skipping malformed entries and ones that replace a mod with itself. |
| <Link id="m-validaterepoindex" /><code>{"static void ValidateRepoIndex(string url)"}</code> | Throws `ModManagerException` unless the URL serves a version 2 `repository.json` with a `mods` object. |
| <Link id="m-fetchmanifestleaf" /><code>{"private "}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FetchManifestLeaf(string modId, string leaf, string preferRepo, string what, string expectedVersion)"}</code> |  |
| <Link id="m-fetchrepoindex" /><code>{"private ValueTuple<List<"}<Link to="/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{">, List<"}<Link to="/tavernlib-api/types/backend-mods/modreplacement">{"ModReplacement"}</Link>{">> FetchRepoIndex(string baseUrl)"}</code> |  |
| <Link id="m-getjson" /><code>{"private JObject GetJson(string url)"}</code> |  |
| <Link id="m-issupported" /><code>{"private static bool IsSupported(JObject index)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ModRepoClient`:

[`ModReconciler.Pass._client`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-client).
