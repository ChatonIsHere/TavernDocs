---
title: "ConsoleTokenStore"
description: "Internal: console_tokens.json with an in-memory copy rebuilt after each write, so the check on every command never reads the disk."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenStore

A **internal static class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: `console_tokens.json` with an in-memory copy rebuilt after each write, so the check on every command never reads the disk. Server; only the server writes the file.

- **Listed in** [TavernLib.Backend.RemoteConsole](/mod/tavernlib-api/types/backend-remoteconsole)
- **Nested types** [`Entry`](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry)
- **Documented in** [ConsoleTokenStore](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore)

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-byid" /><code>{"private static Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry">{"ConsoleTokenStore.Entry"}</Link>{"> _byId"}</code> | In-memory copy of the named tokens by id, rebuilt after every load or write. |
| <Link id="m-lastload" /><code>{"private static DateTime _lastLoad"}</code> | When the file was last tried, used to space out retries. |
| <Link id="m-loaderrorlogged" /><code>{"private static bool _loadErrorLogged"}</code> | Whether the unreadable-file error has been logged, so it is logged once. |
| <Link id="m-ownergeneration" /><code>{"private static int _ownerGeneration"}</code> | In-memory copy of the owner token's generation from the file. |
| <Link id="m-filepath" /><code>{"private static readonly string FilePath"}</code> | Path of `console_tokens.json` in the ModdingTavern folder. |
| <Link id="m-paths" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{", string> Paths"}</code> | Cache of the typed path (for example `player progression list`) for each command or module. |
| <Link id="m-retryevery" /><code>{"private static readonly TimeSpan RetryEvery"}</code> | How long to wait before trying again to read a token file that failed to load (5 seconds). |
| <Link id="m-tokenfile" /><code>{"private static readonly "}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletokenfile">{"ConsoleTokenFile"}</Link>{" TokenFile"}</code> | The config file object used to read and write `console_tokens.json`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"static IEnumerable<"}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{"> All { get; }"}</code> | Every named token, oldest first. |
| <Link id="m-loaded" /><code>{"static bool Loaded { get; private set; }"}</code> | True once the file has been read, or found missing. |
| <Link id="m-ownergeneration-2" /><code>{"static int OwnerGeneration { get; }"}</code> | The owner token's generation from the file: 0 until it is first rotated. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-allows" /><code>{"static bool Allows(string id, "}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" part)"}</code> | The gate: may this named token see and run this command or module? A module passes when a granted command is inside it. |
| <Link id="m-ensureloaded" /><code>{"static bool EnsureLoaded()"}</code> | True once the file has been read. Retries a failed read at most every 5 seconds. |
| <Link id="m-find" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" Find(string id)"}</code> | The named token with this id, or `null`. |
| <Link id="m-load" /><code>{"static void Load()"}</code> | Reads the file. A missing one means no tokens yet; an unreadable one leaves every console token refused, the owner's too. |
| <Link id="m-nevergranted" /><code>{"static bool NeverGranted(string path)"}</code> | True for `repeat`, `token` and anything under them, which can't be given to a named token. |
| <Link id="m-normalizepath" /><code>{"static string NormalizePath(string path)"}</code> | A path in lower case with single spaces and no outer spaces. |
| <Link id="m-pathof" /><code>{"static string PathOf("}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" part)"}</code> | The typed path of a command or module, such as `player progression list`, without parameters. |
| <Link id="m-touch" /><code>{"static void Touch(string id)"}</code> | Records now as the token's last use. Logs a warning if the file can't be written. |
| <Link id="m-update" /><code>{"static void Update(Func<"}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletokenlist">{"ConsoleTokenList"}</Link>{", bool> change)"}</code> | Reads the file, applies a change and writes it back under its lock. The copy is rebuilt when the change returns true. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ancestors" /><code>{"private static IEnumerable<string> Ancestors(string path) (iterator)"}</code> | Yields each shorter parent path of a command path, longest first. |
| <Link id="m-granted" /><code>{"private static bool Granted(HashSet<string> granted, string path)"}</code> | Returns whether a path, or any parent path of it, is in the granted set. |
| <Link id="m-rebuild" /><code>{"private static void Rebuild("}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletokenlist">{"ConsoleTokenList"}</Link>{" list)"}</code> | Replaces the in-memory token copy and owner generation from a token list and marks the store loaded. |

</details>
