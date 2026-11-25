---
title: "ModHandshake"
description: "The server's mod snapshot for the auth port's ping, mods_list and the join's parity check, cached for 5 seconds."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModHandshake

A **static class** in `TavernLib`, `TavernLib.Backend.Mods`.

The server's mod snapshot for the auth port's ping, `mods_list` and the join's parity check, cached for 5 seconds.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Nested types** [`Entry`](/tavernlib-api/types/backend-mods/modhandshake-entry)
- **Documented in** [ModHandshake](/tavernlib-api/types/backend-mods/modhandshake), [Versions and parity](/tavernlib-api/mod-manager/versions-and-parity#modhandshake)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"private static ValueTuple<string, DateTime, ValueTuple<string, List<"}<Link to="/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{">, List<"}<Link to="/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{">>> _cache"}</code> |  |
| <Link id="m-cachelock" /><code>{"private static readonly object CacheLock"}</code> |  |
| <Link id="m-cachettlseconds" /><code>{"private const int CacheTtlSeconds"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-snapshot" /><code>{"static ValueTuple<string, List<"}<Link to="/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{">, List<"}<Link to="/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{">> Snapshot(string gameDir)"}</code> | The enabled mods installed for `server`, sorted by id, the enabled untracked mods, and a hash of both. |
| <Link id="m-buildsnapshot" /><code>{"private static ValueTuple<string, List<"}<Link to="/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{">, List<"}<Link to="/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{">> BuildSnapshot(string gameDir)"}</code> |  |
| <Link id="m-untrackedstamp" /><code>{"private static string UntrackedStamp(string gameDir, "}<Link to="/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{" mod)"}</code> |  |
