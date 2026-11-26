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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disabledrecordpath" /><code>{"static string DisabledRecordPath(string gameDir, string modId)"}</code> | <span className="api-desc">`Mods/<id>/manifest.disabled.json`.</span> |
| <Link id="m-librarysidecarpath" /><code>{"static string LibrarySidecarPath(string gameDir, string filename)"}</code> | <span className="api-desc">`UserLibs/<file>.meta.json`, the hash record for a library. Creates `UserLibs`.</span> |
| <Link id="m-moddirpath" /><code>{"static string ModDirPath(string gameDir, string modId)"}</code> | <span className="api-desc">`Mods/<id>`. Throws if the id isn't a safe file name.</span> |
| <Link id="m-modrecordpath" /><code>{"static string ModRecordPath(string gameDir, string modId)"}</code> | <span className="api-desc">`Mods/<id>/manifest.json`.</span> |
| <Link id="m-modsbase" /><code>{"static string ModsBase(string gameDir)"}</code> | <span className="api-desc">The game's `Mods` folder.</span> |
| <Link id="m-safebasename" /><code>{"static string SafeBasename(string name)"}</code> | <span className="api-desc">Returns the name if it's a plain file name. Throws `ModManagerException` for separators, colons, a trailing dot or space, or `..`.</span> |
| <Link id="m-targetdirpath" /><code>{"static string TargetDirPath(string gameDir, string modId, string target)"}</code> | <span className="api-desc">`Mods/<id>/.<target>`, where a build is installed. Dot-prefixed, so MelonLoader skips it until `MelonModFolders` adds it.</span> |
| <Link id="m-userlibsdir" /><code>{"static string UserLibsDir(string gameDir)"}</code> | <span className="api-desc">The game's `UserLibs` folder. Creates it if missing.</span> |
