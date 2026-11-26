---
title: "ModRecord"
description: "A mod folder's record (manifest.json or manifest.disabled.json): the manifest it was installed from plus what's installed per target."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModRecord

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

A mod folder's record (`manifest.json` or `manifest.disabled.json`): the manifest it was installed from plus what's installed per target. Written in the same bytes as the launcher's Python installer writes it.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [Installed mods](/mod/tavernlib-api/mod-manager/installed-mods#modrecord)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModRecord()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lenient" /><code>{"private static readonly JsonSerializerSettings Lenient"}</code> | <span className="api-desc">JSON settings that skip a malformed field instead of failing the whole record.</span> |
| <Link id="m-warnedunowned" /><code>{"private static readonly HashSet<string> WarnedUnowned"}</code> | <span className="api-desc">Record paths already warned about for lacking a usable `parity_required`, so each warns once.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-artifacts" /><code>{"JArray Artifacts { get; set; }"}</code> | <span className="api-desc">The builds as raw manifest JSON.</span> |
| <Link id="m-dependencies" /><code>{"Dictionary<string, string> Dependencies { get; set; }"}</code> | <span className="api-desc">Mod id to minimum version.</span> |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> | <span className="api-desc">The mod id. Must match the folder name for the record to count as ours.</span> |
| <Link id="m-installed" /><code>{"Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-mods/installedtarget">{"InstalledTarget"}</Link>{"> Installed { get; set; }"}</code> | <span className="api-desc">What's installed, by target.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The display name.</span> |
| <Link id="m-parityrequired" /><code>{"bool ParityRequired { get; set; }"}</code> | <span className="api-desc">True if joining players need this exact version.</span> |
| <Link id="m-scenes" /><code>{"List<string> Scenes { get; set; }"}</code> | <span className="api-desc">Scenes it works in, or `null` for every scene.</span> |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; set; }"}</code> | <span className="api-desc">The source it was installed from.</span> |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | <span className="api-desc">The installed version.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-artifacttargets" /><code>{"SortedDictionary<string, string> ArtifactTargets()"}</code> | <span className="api-desc">Each known target with a usable build, to its SHA-256.</span> |
| <Link id="m-build" /><code>{"static JObject Build("}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" mod, IDictionary<string, JToken> installed)"}</code> | <span className="api-desc">Makes a record's JSON from a manifest and the installed entries by target.</span> |
| <Link id="m-installedentry" /><code>{"static JObject InstalledEntry("}<Link to="/mod/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" artifact, Dictionary<string, string> files)"}</code> | <span className="api-desc">Makes one target's installed entry from a build and its file hashes.</span> |
| <Link id="m-installedfor" /><code><Link to="/mod/tavernlib-api/types/backend-mods/installedtarget">{"InstalledTarget"}</Link>{" InstalledFor(string target)"}</code> | <span className="api-desc">The installed entry for a target, or `null`.</span> |
| <Link id="m-installedlibraries" /><code>{"IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> InstalledLibraries(string target) (iterator)"}</code> | <span className="api-desc">The library dependencies installed for a target, as the build describes them.</span> |
| <Link id="m-lists" /><code>{"bool Lists(string target)"}</code> | <span className="api-desc">True if anything is installed for the target.</span> |
| <Link id="m-read" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-mods/modrecord">{"ModRecord"}</Link>{" Read(string gameDir, string modId, out bool enabled)"}</code> | <span className="api-desc">One mod's record and whether it's enabled, or `null` if the folder isn't ours or can't be read.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-format" /><code>{"internal static string Format(JToken token)"}</code> | <span className="api-desc">Internal: the JSON text as Python's `json.dumps(indent=2)` writes it, with CRLF and non-ASCII escaped.</span> |
| <Link id="m-parsedartifacts" /><code>{"private IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{"> ParsedArtifacts() (iterator)"}</code> | <span className="api-desc">Yields the record's artifacts that parse, skipping the ones that don't.</span> |
| <Link id="m-parseobject" /><code>{"internal static JObject ParseObject(string path)"}</code> | <span className="api-desc">Internal: reads a JSON object file as strict UTF-8 with no BOM. `null` if missing or unparseable; throws on a read error.</span> |
| <Link id="m-readowned" /><code>{"internal static JObject ReadOwned(string gameDir, string modId, out string path)"}</code> | <span className="api-desc">Internal: the record's raw JSON and path, if the folder is ours: the id matches and `parity_required` is a boolean.</span> |
| <Link id="m-sortedobject" /><code>{"private static JObject SortedObject<T>(IEnumerable<KeyValuePair<string, T>> pairs)"}</code> | <span className="api-desc">Builds a JSON object from key and value pairs ordered by key.</span> |
| <Link id="m-writefile" /><code>{"internal static void WriteFile(string path, JToken token)"}</code> | <span className="api-desc">Internal: writes the JSON through a temp file and swaps it in.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ModRecord`:

<div className="api-used-in">

[`InstalledModInfo.Record`](/mod/tavernlib-api/types/backend-mods/installedmodinfo#m-record), [`ModInstaller.VerifyTarget`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-verifytarget), [`ModsCommandModule.Targets`](/mod/tavernlib-api/types/moduleports/modscommandmodule#m-targets).

</div>
