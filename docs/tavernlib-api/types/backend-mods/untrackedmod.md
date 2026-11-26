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

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [UntrackedMod](/tavernlib-api/types/backend-mods/untrackedmod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UntrackedMod()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-kindfile" /><code>{"const string KindFile"}</code> | `file`: a loose DLL in `Mods`. |
| <Link id="m-kindfolder" /><code>{"const string KindFolder"}</code> | `folder`: a folder with a record that isn't ours. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"bool Enabled { get; set; }"}</code> | False for a DLL ending in `.disabled`, or a folder with only `manifest.disabled.json`. |
| <Link id="m-kind" /><code>{"string Kind { get; set; }"}</code> | `file` or `folder`. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The file or folder name. For a disabled DLL, the name without `.disabled`. |

## Used in

Members of other types that take, return or hold a `UntrackedMod`:

[`AuthPayloads.ModsListResponse.ModsListResponse`](/tavernlib-api/types/backend-auth/authpayloads-modslistresponse#m-ctor), [`AuthPayloads.ModsListResponse.Untracked`](/tavernlib-api/types/backend-auth/authpayloads-modslistresponse#m-untracked), [`ModHandshake._cache`](/tavernlib-api/types/backend-mods/modhandshake#m-cache), [`ModHandshake.BuildSnapshot`](/tavernlib-api/types/backend-mods/modhandshake#m-buildsnapshot), [`ModHandshake.Snapshot`](/tavernlib-api/types/backend-mods/modhandshake#m-snapshot), [`ModHandshake.UntrackedStamp`](/tavernlib-api/types/backend-mods/modhandshake#m-untrackedstamp), [`ModInstaller.ScanMods`](/tavernlib-api/types/backend-mods/modinstaller#m-scanmods).
