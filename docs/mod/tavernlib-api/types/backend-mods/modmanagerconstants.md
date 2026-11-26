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

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultrepo" /><code>{"const string DefaultRepo"}</code> | <span className="api-desc">The raw-content URL of ModdingTavern's TavernMods source, always trusted and tried first.</span> |
| <Link id="m-disableddllsuffix" /><code>{"const string DisabledDllSuffix"}</code> | <span className="api-desc">`.disabled`, added to a loose DLL's name to stop MelonLoader loading it.</span> |
| <Link id="m-disabledrecordname" /><code>{"const string DisabledRecordName"}</code> | <span className="api-desc">`manifest.disabled.json`, a disabled mod's record.</span> |
| <Link id="m-knowntargets" /><code>{"static readonly string[] KnownTargets"}</code> | <span className="api-desc">The three targets this build knows. Other target names in a manifest are ignored.</span> |
| <Link id="m-recordname" /><code>{"const string RecordName"}</code> | <span className="api-desc">`manifest.json`, an enabled mod's record. Also what makes MelonLoader load the folder.</span> |
| <Link id="m-targetclientandroid" /><code>{"const string TargetClientAndroid"}</code> | <span className="api-desc">`client_android`, the Quest app.</span> |
| <Link id="m-targetclientwindows" /><code>{"const string TargetClientWindows"}</code> | <span className="api-desc">`client_windows`, the PC game.</span> |
| <Link id="m-targetserver" /><code>{"const string TargetServer"}</code> | <span className="api-desc">`server`, a dedicated server.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdefaultrepo" /><code>{"static bool IsDefaultRepo(string url)"}</code> | <span className="api-desc">True if a URL is the default source, ignoring a trailing slash.</span> |
| <Link id="m-normalizeurl" /><code>{"static string NormalizeUrl(string url)"}</code> | <span className="api-desc">The URL without a trailing slash. `null` becomes empty.</span> |
