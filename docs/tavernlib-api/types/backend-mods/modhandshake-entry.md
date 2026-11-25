---
title: "ModHandshake.Entry"
description: "One server mod in the handshake: what a client needs to match it."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModHandshake.Entry

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

One server mod in the handshake: what a client needs to match it.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Nested in** [`ModHandshake`](/tavernlib-api/types/backend-mods/modhandshake)
- **Documented in** [ModHandshake.Entry](/tavernlib-api/types/backend-mods/modhandshake-entry)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Entry()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> | The mod id. |
| <Link id="m-parityrequired" /><code>{"bool ParityRequired { get; set; }"}</code> | True if joining players need this exact version. |
| <Link id="m-scenes" /><code>{"List<string> Scenes { get; set; }"}</code> | Scenes the mod works in, or `null` (left out of the JSON) for every scene. |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; set; }"}</code> | The source it was installed from. |
| <Link id="m-targets" /><code>{"List<string> Targets { get; set; }"}</code> | The known targets the mod has a usable build for. |
| <Link id="m-targetsha256" /><code>{"SortedDictionary<string, string> TargetSha256 { get; set; }"}</code> | Each known target with a usable build, to that build's SHA-256. |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | The installed version. |

## Used in

Members of other types that take, return or hold a `Entry`:

[`AuthPayloads.ModsListResponse.Mods`](/tavernlib-api/types/backend-auth/authpayloads-modslistresponse#m-mods), [`AuthPayloads.ModsListResponse.ModsListResponse`](/tavernlib-api/types/backend-auth/authpayloads-modslistresponse#m-ctor), [`ModParity.BlocksClaimless`](/tavernlib-api/types/backend-auth/modparity#m-blocksclaimless), [`ModParity.CheckJoin`](/tavernlib-api/types/backend-auth/modparity#m-checkjoin), [`ModHandshake._cache`](/tavernlib-api/types/backend-mods/modhandshake#m-cache), [`ModHandshake.BuildSnapshot`](/tavernlib-api/types/backend-mods/modhandshake#m-buildsnapshot), [`ModHandshake.Snapshot`](/tavernlib-api/types/backend-mods/modhandshake#m-snapshot).
