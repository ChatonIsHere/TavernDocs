---
title: "AuthLimits"
description: "Internal: per-address limits on the auth port and console logins."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthLimits

A **internal class** in `TavernLib`, `TavernLib.Backend.Auth`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: per-address limits on the auth port and console logins. 8 failures, or 5 wrong passwords, each within 60 seconds of the last, hold an address off until 60 quiet seconds pass.

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested types** [`Strikes`](/mod/tavernlib-api/types/backend-auth/authlimits-strikes)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthLimits()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-faillimit" /><code>{"const int FailLimit"}</code> | <span className="api-desc">8 failures.</span> |
| <Link id="m-maxopen" /><code>{"const int MaxOpen"}</code> | <span className="api-desc">64 open connections in all.</span> |
| <Link id="m-maxopenperaddress" /><code>{"const int MaxOpenPerAddress"}</code> | <span className="api-desc">8 open connections from one address.</span> |
| <Link id="m-passwordfaillimit" /><code>{"const int PasswordFailLimit"}</code> | <span className="api-desc">5 wrong passwords.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caplogged" /><code>{"private readonly HashSet<string> _capLogged"}</code> | <span className="api-desc">Addresses whose connection cap has been logged.</span> |
| <Link id="m-fails" /><code>{"private readonly Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-auth/authlimits-strikes">{"AuthLimits.Strikes"}</Link>{"> _fails"}</code> | <span className="api-desc">Failure counts by address.</span> |
| <Link id="m-open" /><code>{"private readonly Dictionary<string, int> _open"}</code> | <span className="api-desc">Open connection count by address.</span> |
| <Link id="m-opentotal" /><code>{"private int _openTotal"}</code> | <span className="api-desc">Open connections across all addresses.</span> |
| <Link id="m-passwordfails" /><code>{"private readonly Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-auth/authlimits-strikes">{"AuthLimits.Strikes"}</Link>{"> _passwordFails"}</code> | <span className="api-desc">Wrong password counts by address.</span> |
| <Link id="m-sync" /><code>{"private readonly object _sync"}</code> | <span className="api-desc">Lock around the counters.</span> |
| <Link id="m-totalcaplogged" /><code>{"private bool _totalCapLogged"}</code> | <span className="api-desc">Whether the total connection cap has been logged.</span> |
| <Link id="m-pruneabove" /><code>{"private const int PruneAbove"}</code> | <span className="api-desc">Number of tracked addresses above which stale entries are dropped.</span> |
| <Link id="m-window" /><code>{"private static readonly TimeSpan Window"}</code> | <span className="api-desc">The 60 second window failures are counted in.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close(string address)"}</code> | <span className="api-desc">Records that one of the address's connections closed.</span> |
| <Link id="m-fail" /><code>{"void Fail(string address)"}</code> | <span className="api-desc">Counts a failure against the address, logging when it reaches the limit.</span> |
| <Link id="m-heldoff" /><code>{"bool HeldOff(string address)"}</code> | <span className="api-desc">True while the address has 8 recent failures.</span> |
| <Link id="m-passwordfail" /><code>{"void PasswordFail(string address)"}</code> | <span className="api-desc">Counts a wrong password, which is also a failure.</span> |
| <Link id="m-passwordheldoff" /><code>{"bool PasswordHeldOff(string address)"}</code> | <span className="api-desc">True while the address has 5 recent wrong passwords.</span> |
| <Link id="m-tryopen" /><code>{"bool TryOpen(string address)"}</code> | <span className="api-desc">Takes a connection slot for the address. False when it or the server is at its cap.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private int Add(Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-auth/authlimits-strikes">{"AuthLimits.Strikes"}</Link>{"> strikes, string address)"}</code> | <span className="api-desc">Adds a strike for an address, pruning stale entries first, and returns the new count.</span> |
| <Link id="m-count" /><code>{"private int Count(Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-auth/authlimits-strikes">{"AuthLimits.Strikes"}</Link>{"> strikes, string address)"}</code> | <span className="api-desc">Returns an address's recent strike count, or 0 if its last strike is outside the window.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AuthLimits`:

<div className="api-used-in">

[`AuthManager._limits`](/mod/tavernlib-api/types/backend-auth/authmanager#m-limits), [`ConsoleAuth.LoginLimits`](/mod/tavernlib-api/types/backend-remoteconsole/consoleauth#m-loginlimits).

</div>
