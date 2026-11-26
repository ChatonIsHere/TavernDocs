---
title: "UntrackedMod"
description: "A DLL or folder in Mods that TavernLib's mod manager didn't install."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UntrackedMod

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

A DLL or folder in `Mods` that TavernLib's mod manager didn't install. Never resolved, updated or checked against a player.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UntrackedMod()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-kindfile" /><code>{"const string KindFile"}</code> | <span className="api-desc">`file`: a loose DLL in `Mods`.</span> |
| <Link id="m-kindfolder" /><code>{"const string KindFolder"}</code> | <span className="api-desc">`folder`: a folder with a record that isn't ours.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"bool Enabled { get; set; }"}</code> | <span className="api-desc">False for a DLL ending in `.disabled`, or a folder with only `manifest.disabled.json`.</span> |
| <Link id="m-kind" /><code>{"string Kind { get; set; }"}</code> | <span className="api-desc">`file` or `folder`.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The file or folder name. For a disabled DLL, the name without `.disabled`.</span> |

## Used in

Members of other types that take, return or hold a `UntrackedMod`:

<div className="api-used-in">

[`AuthPayloads.ModsListResponse.ModsListResponse`](/mod/tavernlib-api/types/backend-auth/authpayloads-modslistresponse#m-ctor), [`AuthPayloads.ModsListResponse.Untracked`](/mod/tavernlib-api/types/backend-auth/authpayloads-modslistresponse#m-untracked), [`ModHandshake._cache`](/mod/tavernlib-api/types/backend-mods/modhandshake#m-cache), [`ModHandshake.BuildSnapshot`](/mod/tavernlib-api/types/backend-mods/modhandshake#m-buildsnapshot), [`ModHandshake.Snapshot`](/mod/tavernlib-api/types/backend-mods/modhandshake#m-snapshot), [`ModHandshake.UntrackedStamp`](/mod/tavernlib-api/types/backend-mods/modhandshake#m-untrackedstamp), [`ModInstaller.ScanMods`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-scanmods).

</div>
