---
title: "ModInstaller"
description: "A static class in TavernLib, TavernLib.Backend.Mods."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModInstaller

A **static class** in `TavernLib`, `TavernLib.Backend.Mods`.

A **static class** in `TavernLib`, `TavernLib.Backend.Mods`.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModInstaller](/tavernlib-api/types/backend-mods/modinstaller)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-downloadstallseconds" /><code>{"private const int DownloadStallSeconds"}</code> |  |
| <Link id="m-zipmaxentries" /><code>{"private const int ZipMaxEntries"}</code> |  |
| <Link id="m-zipmaxtotaluncompressed" /><code>{"private const long ZipMaxTotalUncompressed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-collectlibrarydependencies" /><code>{"static List<"}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> CollectLibraryDependencies(string gameDir, IReadOnlyList<"}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> mods, string target)"}</code> |  |
| <Link id="m-installlibrarydependency" /><code>{"static void InstallLibraryDependency(string gameDir, "}<Link to="/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, "}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{" lib, DateTime deadlineUtc)"}</code> |  |
| <Link id="m-installmod" /><code>{"static void InstallMod(string gameDir, "}<Link to="/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, "}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" mod, string target, DateTime deadlineUtc)"}</code> |  |
| <Link id="m-refreshrecordmetadata" /><code>{"static bool RefreshRecordMetadata(string gameDir, "}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" manifest)"}</code> |  |
| <Link id="m-scanmods" /><code>{"static ValueTuple<List<"}<Link to="/tavernlib-api/types/backend-mods/installedmodinfo">{"InstalledModInfo"}</Link>{">, List<"}<Link to="/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{">> ScanMods(string gameDir)"}</code> |  |
| <Link id="m-setenabled" /><code>{"static bool SetEnabled(string gameDir, string modId, bool enabled)"}</code> |  |
| <Link id="m-verifylibrary" /><code>{"static bool? VerifyLibrary(string gameDir, string filename, string wantSha256 = null)"}</code> |  |
| <Link id="m-verifytarget" /><code>{"static bool? VerifyTarget(string gameDir, "}<Link to="/tavernlib-api/types/backend-mods/modrecord">{"ModRecord"}</Link>{" record, string target)"}</code> |  |
| <Link id="m-checksamelibrary" /><code>{"private static void CheckSameLibrary("}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{" a, string aOwner, "}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{" b, string bOwner)"}</code> |  |
| <Link id="m-disableshadowedloosedlls" /><code>{"private static void DisableShadowedLooseDlls(string gameDir, string modId, string targetDir)"}</code> |  |
| <Link id="m-displaceforeign" /><code>{"private static void DisplaceForeign(string gameDir, string modId)"}</code> |  |
| <Link id="m-downloadverifymove" /><code>{"private static void DownloadVerifyMove("}<Link to="/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, string url, string sha256, string destPath, DateTime deadlineUtc)"}</code> |  |
| <Link id="m-hashtree" /><code>{"private static Dictionary<string, string> HashTree(string baseDir)"}</code> |  |
| <Link id="m-moveaside" /><code>{"private static void MoveAside(string modDir, string aside, ICollection<string> keep, bool legacy, string modId)"}</code> |  |
| <Link id="m-safeextractzip" /><code>{"private static void SafeExtractZip(string zipPath, string destDir)"}</code> |  |
| <Link id="m-sha256file" /><code>{"private static string Sha256File(string path)"}</code> |  |
| <Link id="m-verifieddownload" /><code>{"private static void VerifiedDownload("}<Link to="/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, string url, string sha256, string workDir, DateTime deadlineUtc, Action<string> use)"}</code> |  |
