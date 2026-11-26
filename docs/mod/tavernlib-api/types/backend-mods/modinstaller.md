---
title: "ModInstaller"
description: "Installs, verifies, enables and scans the mods in Mods, keeping a record (manifest.json) in each mod folder."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModInstaller

A **static class** in `TavernLib`, `TavernLib.Backend.Mods`.

Installs, verifies, enables and scans the mods in `Mods`, keeping a record (`manifest.json`) in each mod folder. Downloads are checked against their SHA-256 and built in a staging folder.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [ModInstaller](/mod/tavernlib-api/types/backend-mods/modinstaller)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-downloadstallseconds" /><code>{"private const int DownloadStallSeconds"}</code> | <span className="api-desc">How long a download may go without data before it is given up on.</span> |
| <Link id="m-zipmaxentries" /><code>{"private const int ZipMaxEntries"}</code> | <span className="api-desc">Most entries a mod zip may hold before extraction is refused.</span> |
| <Link id="m-zipmaxtotaluncompressed" /><code>{"private const long ZipMaxTotalUncompressed"}</code> | <span className="api-desc">Most bytes a zip may extract to, and the cap on any one download.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-collectlibrarydependencies" /><code>{"static List<"}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> CollectLibraryDependencies(string gameDir, IReadOnlyList<"}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> mods, string target)"}</code> | <span className="api-desc">Every library a set of mods needs for a target. Throws when two mods, or an installed one, pin different builds of one file.</span> |
| <Link id="m-installlibrarydependency" /><code>{"static void InstallLibraryDependency(string gameDir, "}<Link to="/mod/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, "}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{" lib, DateTime deadlineUtc)"}</code> | <span className="api-desc">Downloads a library into `UserLibs`, checks its hash, and writes a `.meta.json` beside it.</span> |
| <Link id="m-installmod" /><code>{"static void InstallMod(string gameDir, "}<Link to="/mod/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, "}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" mod, string target, DateTime deadlineUtc)"}</code> | <span className="api-desc">Downloads, checks and installs one mod's build for a target into `Mods/<id>/.<target>`, then writes its record.</span> |
| <Link id="m-refreshrecordmetadata" /><code>{"static bool RefreshRecordMetadata(string gameDir, "}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" manifest)"}</code> | <span className="api-desc">Updates an installed record's `parity_required` and `scenes` from a manifest of the same version. True if it changed.</span> |
| <Link id="m-scanmods" /><code>{"static ValueTuple<List<"}<Link to="/mod/tavernlib-api/types/backend-mods/installedmodinfo">{"InstalledModInfo"}</Link>{">, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{">> ScanMods(string gameDir)"}</code> | <span className="api-desc">Lists the mods in `Mods`: ones with a record of ours, and untracked DLLs and folders, with their enabled state.</span> |
| <Link id="m-setenabled" /><code>{"static bool SetEnabled(string gameDir, string modId, bool enabled)"}</code> | <span className="api-desc">Enables or disables a tracked mod by renaming its record. False if it's already that way or has no record.</span> |
| <Link id="m-verifylibrary" /><code>{"static bool? VerifyLibrary(string gameDir, string filename, string wantSha256 = null)"}</code> | <span className="api-desc">Hashes a `UserLibs` file against its sidecar. `null` with nothing to check; false if the sidecar pins another build.</span> |
| <Link id="m-verifytarget" /><code>{"static bool? VerifyTarget(string gameDir, "}<Link to="/mod/tavernlib-api/types/backend-mods/modrecord">{"ModRecord"}</Link>{" record, string target)"}</code> | <span className="api-desc">Hashes a mod's installed files for a target against its record. `null` with nothing to check. Slow: reads every file.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksamelibrary" /><code>{"private static void CheckSameLibrary("}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{" a, string aOwner, "}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{" b, string bOwner)"}</code> | <span className="api-desc">Throws if two mods pin the same library file with different SHA-256 values.</span> |
| <Link id="m-disableshadowedloosedlls" /><code>{"private static void DisableShadowedLooseDlls(string gameDir, string modId, string targetDir)"}</code> | <span className="api-desc">Renames a loose `Mods` DLL with the same name as one just installed, so MelonLoader doesn't load it twice.</span> |
| <Link id="m-displaceforeign" /><code>{"private static void DisplaceForeign(string gameDir, string modId)"}</code> | <span className="api-desc">Moves a mod folder this manager didn't install into `Mods/.displaced` instead of deleting it.</span> |
| <Link id="m-downloadverifymove" /><code>{"private static void DownloadVerifyMove("}<Link to="/mod/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, string url, string sha256, string destPath, DateTime deadlineUtc)"}</code> | <span className="api-desc">Downloads and verifies a file, then moves it to its destination path.</span> |
| <Link id="m-hashtree" /><code>{"private static Dictionary<string, string> HashTree(string baseDir)"}</code> | <span className="api-desc">Returns the SHA-256 of every file under a folder, keyed by relative path.</span> |
| <Link id="m-moveaside" /><code>{"private static void MoveAside(string modDir, string aside, ICollection<string> keep, bool legacy, string modId)"}</code> | <span className="api-desc">Moves what an install replaces into an aside folder, and puts it back if a file is in use.</span> |
| <Link id="m-safeextractzip" /><code>{"private static void SafeExtractZip(string zipPath, string destDir)"}</code> | <span className="api-desc">Extracts a zip, refusing absolute paths, colons, symlinks, escaping paths and oversized archives.</span> |
| <Link id="m-sha256file" /><code>{"private static string Sha256File(string path)"}</code> | <span className="api-desc">Returns the lowercase hex SHA-256 of a file.</span> |
| <Link id="m-verifieddownload" /><code>{"private static void VerifiedDownload("}<Link to="/mod/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, string url, string sha256, string workDir, DateTime deadlineUtc, Action<string> use)"}</code> | <span className="api-desc">Downloads a URL to a temp file, checks its SHA-256, hands the file to a callback, then deletes the temp.</span> |

</details>
