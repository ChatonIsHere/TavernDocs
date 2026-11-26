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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Nested types** [`Entry`](/mod/tavernlib-api/types/backend-mods/modhandshake-entry)
- **Documented in** [ModHandshake](/mod/tavernlib-api/types/backend-mods/modhandshake), [Versions and parity](/mod/tavernlib-api/mod-manager/versions-and-parity#modhandshake)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"private static ValueTuple<string, DateTime, ValueTuple<string, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{">, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{">>> _cache"}</code> | <span className="api-desc">The last snapshot with its game folder and the time it was built.</span> |
| <Link id="m-cachelock" /><code>{"private static readonly object CacheLock"}</code> | <span className="api-desc">Lock around the snapshot cache.</span> |
| <Link id="m-cachettlseconds" /><code>{"private const int CacheTtlSeconds"}</code> | <span className="api-desc">How long a mod snapshot is reused before `Mods/` is read again (5 seconds).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-snapshot" /><code>{"static ValueTuple<string, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{">, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{">> Snapshot(string gameDir)"}</code> | <span className="api-desc">The enabled mods installed for `server`, sorted by id, the enabled untracked mods, and a hash of both.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buildsnapshot" /><code>{"private static ValueTuple<string, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{">, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{">> BuildSnapshot(string gameDir)"}</code> | <span className="api-desc">Scans `Mods/` and builds the mod hash, the list of enabled server mods, and the untracked mods.</span> |
| <Link id="m-untrackedstamp" /><code>{"private static string UntrackedStamp(string gameDir, "}<Link to="/mod/tavernlib-api/types/backend-mods/untrackedmod">{"UntrackedMod"}</Link>{" mod)"}</code> | <span className="api-desc">Returns the last write time, in Unix seconds, of an untracked mod, or `?` if it can't be read.</span> |

</details>
