---
title: "ModManagerConstants"
description: "Fixed names for the mod manager: the default source, target names and record file names."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModManagerConstants

A **static class** in `TavernLib`, `TavernLib.Backend.Mods`.

Fixed names for the mod manager: the default source, target names and record file names.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [ModManagerConstants](/mod/tavernlib-api/types/backend-mods/modmanagerconstants)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultrepo" /><code>{"const string DefaultRepo"}</code> | The raw-content URL of ModdingTavern's TavernMods source, always trusted and tried first. |
| <Link id="m-disableddllsuffix" /><code>{"const string DisabledDllSuffix"}</code> | `.disabled`, added to a loose DLL's name to stop MelonLoader loading it. |
| <Link id="m-disabledrecordname" /><code>{"const string DisabledRecordName"}</code> | `manifest.disabled.json`, a disabled mod's record. |
| <Link id="m-knowntargets" /><code>{"static readonly string[] KnownTargets"}</code> | The three targets this build knows. Other target names in a manifest are ignored. |
| <Link id="m-recordname" /><code>{"const string RecordName"}</code> | `manifest.json`, an enabled mod's record. Also what makes MelonLoader load the folder. |
| <Link id="m-targetclientandroid" /><code>{"const string TargetClientAndroid"}</code> | `client_android`, the Quest app. |
| <Link id="m-targetclientwindows" /><code>{"const string TargetClientWindows"}</code> | `client_windows`, the PC game. |
| <Link id="m-targetserver" /><code>{"const string TargetServer"}</code> | `server`, a dedicated server. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdefaultrepo" /><code>{"static bool IsDefaultRepo(string url)"}</code> | True if a URL is the default source, ignoring a trailing slash. |
| <Link id="m-normalizeurl" /><code>{"static string NormalizeUrl(string url)"}</code> | The URL without a trailing slash. `null` becomes empty. |
