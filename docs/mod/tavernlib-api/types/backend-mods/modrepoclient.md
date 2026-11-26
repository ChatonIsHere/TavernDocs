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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [ModRepoClient](/mod/tavernlib-api/types/backend-mods/modrepoclient), [Sources and reconcile](/mod/tavernlib-api/mod-manager/sources-and-reconcile#modrepoclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModRepoClient("}<Link to="/mod/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, List<string> repos, DateTime? deadlineUtc = null)"}</code> | <span className="api-desc">Sets up the client with an HTTP helper, the repo URLs and an optional deadline.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-jsontimeoutseconds" /><code>{"private const int JsonTimeoutSeconds"}</code> | <span className="api-desc">Time allowed for one JSON fetch (15 seconds), shortened if the pass deadline is nearer.</span> |
| <Link id="m-maxjsonbytes" /><code>{"private const long MaxJsonBytes"}</code> | <span className="api-desc">Largest JSON download accepted (8 MB).</span> |
| <Link id="m-supportedindexmajor" /><code>{"private const int SupportedIndexMajor"}</code> | <span className="api-desc">The repository index schema version this build reads (2).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fetchindexes" /><code><Link to="/mod/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" FetchIndexes()"}</code> | <span className="api-desc">Downloads every source's index and merges them. For each mod and major, the default source wins, then the highest version.</span> |
| <Link id="m-fetchlatest" /><code><Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FetchLatest(string modId, string preferRepo)"}</code> | <span className="api-desc">A mod's `latest.json` manifest, trying the preferred source first if it's trusted.</span> |
| <Link id="m-fetchmanifest" /><code><Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FetchManifest(string modId, string version, string preferRepo)"}</code> | <span className="api-desc">One version's manifest, trying the preferred source first. Throws if no source serves the right id and version.</span> |
| <Link id="m-incompatibilitiesfrom" /><code>{"static List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modincompatibility">{"ModIncompatibility"}</Link>{"> IncompatibilitiesFrom(JObject index, string baseUrl)"}</code> | <span className="api-desc">Reads a source index's `incompatible` list. An entry needs exactly two different mod ids and a string note; a `below` that isn't a version means every version clashes.</span> |
| <Link id="m-replacementsfrom" /><code>{"static List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modreplacement">{"ModReplacement"}</Link>{"> ReplacementsFrom(JObject index, string baseUrl)"}</code> | <span className="api-desc">Reads a source index's `replaced` section, skipping malformed entries and ones that replace a mod with itself.</span> |
| <Link id="m-validaterepoindex" /><code>{"static void ValidateRepoIndex(string url)"}</code> | <span className="api-desc">Throws `ModManagerException` unless the URL serves a version 2 `repository.json` with a `mods` object.</span> |
| <Link id="m-withdrawalsfrom" /><code>{"static List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modwithdrawal">{"ModWithdrawal"}</Link>{"> WithdrawalsFrom(JObject index, string baseUrl)"}</code> | <span className="api-desc">Reads a source index's `withdrawn` object (`{id: {version: reason}}`), keeping string reasons only.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fetchmanifestleaf" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" FetchManifestLeaf(string modId, string leaf, string preferRepo, string what, string expectedVersion)"}</code> | <span className="api-desc">Fetches one manifest file for a mod, trying each repo with the preferred one first, and checks it names the right mod and version.</span> |
| <Link id="m-fetchrepoindex" /><code>{"private ValueTuple<List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modsummary">{"ModSummary"}</Link>{">, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modreplacement">{"ModReplacement"}</Link>{">, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modincompatibility">{"ModIncompatibility"}</Link>{">, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modwithdrawal">{"ModWithdrawal"}</Link>{">> FetchRepoIndex(string baseUrl)"}</code> | <span className="api-desc">Fetches one source's index and returns its mods, replacements, incompatible pairs and withdrawn versions, or empty lists if it can't be read.</span> |
| <Link id="m-getjson" /><code>{"private JObject GetJson(string url)"}</code> | <span className="api-desc">Downloads and parses a JSON object from a URL; throws `ModManagerException` on any failure.</span> |
| <Link id="m-issupported" /><code>{"private static bool IsSupported(JObject index)"}</code> | <span className="api-desc">Returns whether an index has the integer `index_version` this build supports.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ModRepoClient`:

<div className="api-used-in">

[`ModReconciler.Pass._client`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-client).

</div>
