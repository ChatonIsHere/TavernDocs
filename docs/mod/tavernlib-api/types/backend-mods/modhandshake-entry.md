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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Nested in** [`ModHandshake`](/mod/tavernlib-api/types/backend-mods/modhandshake)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Entry()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"string Id { get; set; }"}</code> | <span className="api-desc">The mod id.</span> |
| <Link id="m-parityrequired" /><code>{"bool ParityRequired { get; set; }"}</code> | <span className="api-desc">True if joining players need this exact version.</span> |
| <Link id="m-scenes" /><code>{"List<string> Scenes { get; set; }"}</code> | <span className="api-desc">Scenes the mod works in, or `null` (left out of the JSON) for every scene.</span> |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; set; }"}</code> | <span className="api-desc">The source it was installed from.</span> |
| <Link id="m-targets" /><code>{"List<string> Targets { get; set; }"}</code> | <span className="api-desc">The known targets the mod has a usable build for.</span> |
| <Link id="m-targetsha256" /><code>{"SortedDictionary<string, string> TargetSha256 { get; set; }"}</code> | <span className="api-desc">Each known target with a usable build, to that build's SHA-256.</span> |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | <span className="api-desc">The installed version.</span> |

## Used in

Members of other types that take, return or hold a `Entry`:

<div className="api-used-in">

[`AuthPayloads.ModsListResponse.Mods`](/mod/tavernlib-api/types/backend-auth/authpayloads-modslistresponse#m-mods), [`AuthPayloads.ModsListResponse.ModsListResponse`](/mod/tavernlib-api/types/backend-auth/authpayloads-modslistresponse#m-ctor), [`ModParity.BlocksClaimless`](/mod/tavernlib-api/types/backend-auth/modparity#m-blocksclaimless), [`ModParity.CheckJoin`](/mod/tavernlib-api/types/backend-auth/modparity#m-checkjoin), [`ModHandshake._cache`](/mod/tavernlib-api/types/backend-mods/modhandshake#m-cache), [`ModHandshake.BuildSnapshot`](/mod/tavernlib-api/types/backend-mods/modhandshake#m-buildsnapshot), [`ModHandshake.Snapshot`](/mod/tavernlib-api/types/backend-mods/modhandshake#m-snapshot).

</div>
