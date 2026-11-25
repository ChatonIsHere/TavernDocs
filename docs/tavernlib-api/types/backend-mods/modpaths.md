---
title: "ModPaths"
description: "Where the mod manager keeps things under the game folder, with a check that ids and file names can't escape their folder."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModPaths

A **static class** in `TavernLib`, `TavernLib.Backend.Mods`.

Where the mod manager keeps things under the game folder, with a check that ids and file names can't escape their folder.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [ModPaths](/tavernlib-api/types/backend-mods/modpaths)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disabledrecordpath" /><code>{"static string DisabledRecordPath(string gameDir, string modId)"}</code> | `Mods/<id>/manifest.disabled.json`. |
| <Link id="m-librarysidecarpath" /><code>{"static string LibrarySidecarPath(string gameDir, string filename)"}</code> | `UserLibs/<file>.meta.json`, the hash record for a library. Creates `UserLibs`. |
| <Link id="m-moddirpath" /><code>{"static string ModDirPath(string gameDir, string modId)"}</code> | `Mods/<id>`. Throws if the id isn't a safe file name. |
| <Link id="m-modrecordpath" /><code>{"static string ModRecordPath(string gameDir, string modId)"}</code> | `Mods/<id>/manifest.json`. |
| <Link id="m-modsbase" /><code>{"static string ModsBase(string gameDir)"}</code> | The game's `Mods` folder. |
| <Link id="m-safebasename" /><code>{"static string SafeBasename(string name)"}</code> | Returns the name if it's a plain file name. Throws `ModManagerException` for separators, colons, a trailing dot or space, or `..`. |
| <Link id="m-targetdirpath" /><code>{"static string TargetDirPath(string gameDir, string modId, string target)"}</code> | `Mods/<id>/.<target>`, where a build is installed. Dot-prefixed, so MelonLoader skips it until `MelonModFolders` adds it. |
| <Link id="m-userlibsdir" /><code>{"static string UserLibsDir(string gameDir)"}</code> | The game's `UserLibs` folder. Creates it if missing. |
