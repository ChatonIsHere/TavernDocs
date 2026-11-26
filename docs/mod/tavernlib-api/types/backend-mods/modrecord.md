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
- **Documented in** [ModRecord](/mod/tavernlib-api/types/backend-mods/modrecord), [Installed mods](/mod/tavernlib-api/mod-manager/installed-mods#modrecord)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModRecord()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lenient" /><code>{"private static readonly JsonSerializerSettings Lenient"}</code> | JSON settings that skip a malformed field instead of failing the whole record. |
| <Link id="m-warnedunowned" /><code>{"private static readonly HashSet<string> WarnedUnowned"}</code> | Record paths already warned about for lacking a usable `parity_required`, so each warns once. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-artifacts" /><code>{"JArray Artifacts { get; set; }"}</code> | The builds as raw manifest JSON. |
| <Link id="m-dependencies" /><code>{"Dictionary<string, string> Dependencies { get; set; }"}</code> | Mod id to minimum version. |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> | The mod id. Must match the folder name for the record to count as ours. |
| <Link id="m-installed" /><code>{"Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-mods/installedtarget">{"InstalledTarget"}</Link>{"> Installed { get; set; }"}</code> | What's installed, by target. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The display name. |
| <Link id="m-parityrequired" /><code>{"bool ParityRequired { get; set; }"}</code> | True if joining players need this exact version. |
| <Link id="m-scenes" /><code>{"List<string> Scenes { get; set; }"}</code> | Scenes it works in, or `null` for every scene. |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; set; }"}</code> | The source it was installed from. |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | The installed version. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-artifacttargets" /><code>{"SortedDictionary<string, string> ArtifactTargets()"}</code> | Each known target with a usable build, to its SHA-256. |
| <Link id="m-build" /><code>{"static JObject Build("}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" mod, IDictionary<string, JToken> installed)"}</code> | Makes a record's JSON from a manifest and the installed entries by target. |
| <Link id="m-installedentry" /><code>{"static JObject InstalledEntry("}<Link to="/mod/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" artifact, Dictionary<string, string> files)"}</code> | Makes one target's installed entry from a build and its file hashes. |
| <Link id="m-installedfor" /><code><Link to="/mod/tavernlib-api/types/backend-mods/installedtarget">{"InstalledTarget"}</Link>{" InstalledFor(string target)"}</code> | The installed entry for a target, or `null`. |
| <Link id="m-installedlibraries" /><code>{"IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> InstalledLibraries(string target) (iterator)"}</code> | The library dependencies installed for a target, as the build describes them. |
| <Link id="m-lists" /><code>{"bool Lists(string target)"}</code> | True if anything is installed for the target. |
| <Link id="m-read" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-mods/modrecord">{"ModRecord"}</Link>{" Read(string gameDir, string modId, out bool enabled)"}</code> | One mod's record and whether it's enabled, or `null` if the folder isn't ours or can't be read. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-format" /><code>{"internal static string Format(JToken token)"}</code> | Internal: the JSON text as Python's `json.dumps(indent=2)` writes it, with CRLF and non-ASCII escaped. |
| <Link id="m-parsedartifacts" /><code>{"private IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{"> ParsedArtifacts() (iterator)"}</code> | Yields the record's artifacts that parse, skipping the ones that don't. |
| <Link id="m-parseobject" /><code>{"internal static JObject ParseObject(string path)"}</code> | Internal: reads a JSON object file as strict UTF-8 with no BOM. `null` if missing or unparseable; throws on a read error. |
| <Link id="m-readowned" /><code>{"internal static JObject ReadOwned(string gameDir, string modId, out string path)"}</code> | Internal: the record's raw JSON and path, if the folder is ours: the id matches and `parity_required` is a boolean. |
| <Link id="m-sortedobject" /><code>{"private static JObject SortedObject<T>(IEnumerable<KeyValuePair<string, T>> pairs)"}</code> | Builds a JSON object from key and value pairs ordered by key. |
| <Link id="m-writefile" /><code>{"internal static void WriteFile(string path, JToken token)"}</code> | Internal: writes the JSON through a temp file and swaps it in. |

</details>

## Used in

Members of other types that take, return or hold a `ModRecord`:

[`InstalledModInfo.Record`](/mod/tavernlib-api/types/backend-mods/installedmodinfo#m-record), [`ModInstaller.VerifyTarget`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-verifytarget), [`ModsCommandModule.Targets`](/mod/tavernlib-api/types/moduleports/modscommandmodule#m-targets).
