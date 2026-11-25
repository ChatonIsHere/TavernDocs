---
title: TavernLib.Backend.Mods
description: Every type in the TavernLib.Backend.Mods namespace.
sidebar_position: 6
---

# TavernLib.Backend.Mods

Every type in `TavernLib.Backend.Mods`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`InstalledModInfo`](/tavernlib-api/types/backend-mods/installedmodinfo) | class | 3 | A tracked mod from `ModInstaller.ScanMods`: its record and whether it's enabled. |
| [`InstalledTarget`](/tavernlib-api/types/backend-mods/installedtarget) | class | 3 | What a mod record says is installed for one target. |
| [`LibraryDependency`](/tavernlib-api/types/backend-mods/librarydependency) | class | 6 | A library a mod build needs in `UserLibs`, from the build's `library_dependencies` in its manifest. |
| [`MelonModFolders`](/tavernlib-api/types/backend-mods/melonmodfolders) | internal static class | 1 | Internal: edits MelonLoader's private list of mod folders at start to match the disk: disabled mods are dropped, and each enabled mod of ours gets this side's build folder (`.server` or `.client_windows`). |
| [`ModArtifact`](/tavernlib-api/types/backend-mods/modartifact) | class | 10 | One build of a mod from its manifest: which targets it's for, where to download it and how it's packaged. |
| [`ModDependencyResolver`](/tavernlib-api/types/backend-mods/moddependencyresolver) | static class | 1 | Works out every mod a mod needs, from the merged index and fetched manifests, for one target. |
| [`ModHandshake`](/tavernlib-api/types/backend-mods/modhandshake) | static class | 1 | The server's mod snapshot for the auth port's ping, `mods_list` and the join's parity check, cached for 5 seconds. |
| [`ModHandshake.Entry`](/tavernlib-api/types/backend-mods/modhandshake-entry) | class | 8 | One server mod in the handshake: what a client needs to match it. |
| [`ModIndex`](/tavernlib-api/types/backend-mods/modindex) | class | 4 | Every trusted source's `repository.json` merged: a list of `ModSummary` plus the replacements they list. |
| [`ModInstaller`](/tavernlib-api/types/backend-mods/modinstaller) | static class | 8 | Installs, verifies, enables and scans the mods in `Mods`, keeping a record (`manifest.json`) in each mod folder. Downloads are checked against their SHA-256 and built in a staging folder. |
| [`ModManagerConstants`](/tavernlib-api/types/backend-mods/modmanagerconstants) | static class | 10 | Fixed names for the mod manager: the default source, target names and record file names. |
| [`ModManagerException`](/tavernlib-api/types/backend-mods/modmanagerexception) | class | 2 | The exception the mod manager throws for a problem it can describe, such as a bad manifest, a failed download or an unsafe file name. |
| [`ModManifest`](/tavernlib-api/types/backend-mods/modmanifest) | class | 14 | One version of one mod, from a source's `manifests` folder (schema version 2 only). |
| [`ModPaths`](/tavernlib-api/types/backend-mods/modpaths) | static class | 8 | Where the mod manager keeps things under the game folder, with a check that ids and file names can't escape their folder. |
| [`ModReconciler`](/tavernlib-api/types/backend-mods/modreconciler) | static class | 2 | Brings `Mods` in line with a modlist before mods load on a headless server: installs or updates listed mods and their dependencies, and disables unlisted server mods (never deletes). Server. |
| [`ModReconciler.Pass`](/tavernlib-api/types/backend-mods/modreconciler-pass) | private class | 2 | Private: one reconcile pass, with its deadline, the fetched index and per-pass verify results. |
| [`ModRecord`](/tavernlib-api/types/backend-mods/modrecord) | class | 17 | A mod folder's record (`manifest.json` or `manifest.disabled.json`): the manifest it was installed from plus what's installed per target. Written in the same bytes as the launcher's Python installer writes it. |
| [`ModReplacement`](/tavernlib-api/types/backend-mods/modreplacement) | class | 5 | One entry of a source's `replaced` list: a retired mod id and the mod that takes its place. |
| [`ModRepoClient`](/tavernlib-api/types/backend-mods/modrepoclient) | class | 6 | Fetches indexes and manifests from the trusted mod sources over `NativeHttp`. Runs off the main thread. |
| [`ModSummary`](/tavernlib-api/types/backend-mods/modsummary) | class | 7 | One mod's entry in a source's `repository.json` for one major version: the versions it lists. |
| [`ModVersion`](/tavernlib-api/types/backend-mods/modversion) | struct | 12 | A mod version, exactly `MAJOR.MINOR.PATCH` in ASCII digits with no pre-release or build parts, compared by major, minor, then patch. |
| [`UntrackedMod`](/tavernlib-api/types/backend-mods/untrackedmod) | class | 6 | A DLL or folder in `Mods` that TavernLib's mod manager didn't install. Never resolved, updated or checked against a player. |
