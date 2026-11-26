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

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Nested types** [`Strikes`](/tavernlib-api/types/backend-auth/authlimits-strikes)
- **Documented in** [AuthLimits](/tavernlib-api/types/backend-auth/authlimits)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthLimits()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-faillimit" /><code>{"const int FailLimit"}</code> | 8 failures. |
| <Link id="m-maxopen" /><code>{"const int MaxOpen"}</code> | 64 open connections in all. |
| <Link id="m-maxopenperaddress" /><code>{"const int MaxOpenPerAddress"}</code> | 8 open connections from one address. |
| <Link id="m-passwordfaillimit" /><code>{"const int PasswordFailLimit"}</code> | 5 wrong passwords. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caplogged" /><code>{"private readonly HashSet<string> _capLogged"}</code> | Addresses whose connection cap has been logged. |
| <Link id="m-fails" /><code>{"private readonly Dictionary<string, "}<Link to="/tavernlib-api/types/backend-auth/authlimits-strikes">{"AuthLimits.Strikes"}</Link>{"> _fails"}</code> | Failure counts by address. |
| <Link id="m-open" /><code>{"private readonly Dictionary<string, int> _open"}</code> | Open connection count by address. |
| <Link id="m-opentotal" /><code>{"private int _openTotal"}</code> | Open connections across all addresses. |
| <Link id="m-passwordfails" /><code>{"private readonly Dictionary<string, "}<Link to="/tavernlib-api/types/backend-auth/authlimits-strikes">{"AuthLimits.Strikes"}</Link>{"> _passwordFails"}</code> | Wrong password counts by address. |
| <Link id="m-sync" /><code>{"private readonly object _sync"}</code> | Lock around the counters. |
| <Link id="m-totalcaplogged" /><code>{"private bool _totalCapLogged"}</code> | Whether the total connection cap has been logged. |
| <Link id="m-pruneabove" /><code>{"private const int PruneAbove"}</code> | Number of tracked addresses above which stale entries are dropped. |
| <Link id="m-window" /><code>{"private static readonly TimeSpan Window"}</code> | The 60 second window failures are counted in. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close(string address)"}</code> | Records that one of the address's connections closed. |
| <Link id="m-fail" /><code>{"void Fail(string address)"}</code> | Counts a failure against the address, logging when it reaches the limit. |
| <Link id="m-heldoff" /><code>{"bool HeldOff(string address)"}</code> | True while the address has 8 recent failures. |
| <Link id="m-passwordfail" /><code>{"void PasswordFail(string address)"}</code> | Counts a wrong password, which is also a failure. |
| <Link id="m-passwordheldoff" /><code>{"bool PasswordHeldOff(string address)"}</code> | True while the address has 5 recent wrong passwords. |
| <Link id="m-tryopen" /><code>{"bool TryOpen(string address)"}</code> | Takes a connection slot for the address. False when it or the server is at its cap. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private int Add(Dictionary<string, "}<Link to="/tavernlib-api/types/backend-auth/authlimits-strikes">{"AuthLimits.Strikes"}</Link>{"> strikes, string address)"}</code> | Adds a strike for an address, pruning stale entries first, and returns the new count. |
| <Link id="m-count" /><code>{"private int Count(Dictionary<string, "}<Link to="/tavernlib-api/types/backend-auth/authlimits-strikes">{"AuthLimits.Strikes"}</Link>{"> strikes, string address)"}</code> | Returns an address's recent strike count, or 0 if its last strike is outside the window. |

</details>

## Used in

Members of other types that take, return or hold a `AuthLimits`:

[`AuthManager._limits`](/tavernlib-api/types/backend-auth/authmanager#m-limits), [`ConsoleAuth.LoginLimits`](/tavernlib-api/types/backend-remoteconsole/consoleauth#m-loginlimits).
