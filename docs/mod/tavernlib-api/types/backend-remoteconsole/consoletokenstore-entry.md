---
title: "ConsoleTokenStore.Entry"
description: "Private: one named token in the in-memory copy, with its granted paths worked out ahead for the per-command check."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenStore.Entry

A **private class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: one named token in the in-memory copy, with its granted paths worked out ahead for the per-command check.

- **Listed in** [TavernLib.Backend.RemoteConsole](/mod/tavernlib-api/types/backend-remoteconsole)
- **Nested in** [`ConsoleTokenStore`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore)
- **Documented in** [ConsoleTokenStore.Entry](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Entry("}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" token)"}</code> | <span className="api-desc">Builds the entry for a token, with its granted command paths and their parent paths.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-above" /><code>{"readonly HashSet<string> Above"}</code> | <span className="api-desc">Every module path above a granted path, so a token can see the modules that lead to its commands.</span> |
| <Link id="m-granted" /><code>{"readonly HashSet<string> Granted"}</code> | <span className="api-desc">The token's access paths, normalized.</span> |
| <Link id="m-token" /><code>{"readonly "}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" Token"}</code> | <span className="api-desc">The token's row.</span> |

## Used in

Members of other types that take, return or hold a `Entry`:

<div className="api-used-in">

[`ConsoleTokenStore._byId`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore#m-byid).

</div>
