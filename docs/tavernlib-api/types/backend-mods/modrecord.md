---
title: "ModRecord"
description: "A class in TavernLib, TavernLib.Backend.Mods."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModRecord

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModRecord](/tavernlib-api/types/backend-mods/modrecord), [Installed mods](/tavernlib-api/mod-manager/installed-mods#modrecord)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModRecord()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lenient" /><code>{"private static readonly JsonSerializerSettings Lenient"}</code> |  |
| <Link id="m-warnedunowned" /><code>{"private static readonly HashSet<string> WarnedUnowned"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-artifacts" /><code>{"JArray Artifacts { get; set; }"}</code> |  |
| <Link id="m-dependencies" /><code>{"Dictionary<string, string> Dependencies { get; set; }"}</code> |  |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> |  |
| <Link id="m-installed" /><code>{"Dictionary<string, "}<Link to="/tavernlib-api/types/backend-mods/installedtarget">{"InstalledTarget"}</Link>{"> Installed { get; set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |  |
| <Link id="m-parityrequired" /><code>{"bool ParityRequired { get; set; }"}</code> |  |
| <Link id="m-scenes" /><code>{"List<string> Scenes { get; set; }"}</code> |  |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; set; }"}</code> |  |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-artifacttargets" /><code>{"SortedDictionary<string, string> ArtifactTargets()"}</code> |  |
| <Link id="m-build" /><code>{"static JObject Build("}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" mod, IDictionary<string, JToken> installed)"}</code> |  |
| <Link id="m-installedentry" /><code>{"static JObject InstalledEntry("}<Link to="/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{" artifact, Dictionary<string, string> files)"}</code> |  |
| <Link id="m-installedfor" /><code><Link to="/tavernlib-api/types/backend-mods/installedtarget">{"InstalledTarget"}</Link>{" InstalledFor(string target)"}</code> |  |
| <Link id="m-installedlibraries" /><code>{"IEnumerable<"}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> InstalledLibraries(string target) (iterator)"}</code> |  |
| <Link id="m-lists" /><code>{"bool Lists(string target)"}</code> |  |
| <Link id="m-read" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modrecord">{"ModRecord"}</Link>{" Read(string gameDir, string modId, out bool enabled)"}</code> |  |
| <Link id="m-format" /><code>{"internal static string Format(JToken token)"}</code> |  |
| <Link id="m-parsedartifacts" /><code>{"private IEnumerable<"}<Link to="/tavernlib-api/types/backend-mods/modartifact">{"ModArtifact"}</Link>{"> ParsedArtifacts() (iterator)"}</code> |  |
| <Link id="m-parseobject" /><code>{"internal static JObject ParseObject(string path)"}</code> |  |
| <Link id="m-readowned" /><code>{"internal static JObject ReadOwned(string gameDir, string modId, out string path)"}</code> |  |
| <Link id="m-sortedobject" /><code>{"private static JObject SortedObject<T>(IEnumerable<KeyValuePair<string, T>> pairs)"}</code> |  |
| <Link id="m-writefile" /><code>{"internal static void WriteFile(string path, JToken token)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ModRecord`:

[`InstalledModInfo.Record`](/tavernlib-api/types/backend-mods/installedmodinfo#m-record), [`ModInstaller.VerifyTarget`](/tavernlib-api/types/backend-mods/modinstaller#m-verifytarget), [`ModsCommandModule.Targets`](/tavernlib-api/types/moduleports/modscommandmodule#m-targets).
