---
title: "ConsoleTokenStore"
description: "A internal static class in TavernLib, TavernLib.Backend.RemoteConsole. Reach it through att-stubs' publicized assemblies or Harmony's AccessTools."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenStore

A **internal static class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A **internal static class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [TavernLib.Backend.RemoteConsole](/tavernlib-api/types/backend-remoteconsole)
- **Nested types** [`Entry`](/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry)
- **Documented in** [ConsoleTokenStore](/tavernlib-api/types/backend-remoteconsole/consoletokenstore)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-byid" /><code>{"private static Dictionary<string, "}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletokenstore-entry">{"ConsoleTokenStore.Entry"}</Link>{"> _byId"}</code> |  |
| <Link id="m-lastload" /><code>{"private static DateTime _lastLoad"}</code> |  |
| <Link id="m-loaderrorlogged" /><code>{"private static bool _loadErrorLogged"}</code> |  |
| <Link id="m-ownergeneration" /><code>{"private static int _ownerGeneration"}</code> |  |
| <Link id="m-filepath" /><code>{"private static readonly string FilePath"}</code> |  |
| <Link id="m-paths" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{", string> Paths"}</code> |  |
| <Link id="m-retryevery" /><code>{"private static readonly TimeSpan RetryEvery"}</code> |  |
| <Link id="m-tokenfile" /><code>{"private static readonly "}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletokenfile">{"ConsoleTokenFile"}</Link>{" TokenFile"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"static IEnumerable<"}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{"> All { get; }"}</code> |  |
| <Link id="m-loaded" /><code>{"static bool Loaded { get; private set; }"}</code> |  |
| <Link id="m-ownergeneration-2" /><code>{"static int OwnerGeneration { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-allows" /><code>{"static bool Allows(string id, "}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" part)"}</code> |  |
| <Link id="m-ensureloaded" /><code>{"static bool EnsureLoaded()"}</code> |  |
| <Link id="m-find" /><code>{"static "}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" Find(string id)"}</code> |  |
| <Link id="m-load" /><code>{"static void Load()"}</code> |  |
| <Link id="m-nevergranted" /><code>{"static bool NeverGranted(string path)"}</code> |  |
| <Link id="m-normalizepath" /><code>{"static string NormalizePath(string path)"}</code> |  |
| <Link id="m-pathof" /><code>{"static string PathOf("}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" part)"}</code> |  |
| <Link id="m-touch" /><code>{"static void Touch(string id)"}</code> |  |
| <Link id="m-update" /><code>{"static void Update(Func<"}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletokenlist">{"ConsoleTokenList"}</Link>{", bool> change)"}</code> |  |
| <Link id="m-ancestors" /><code>{"private static IEnumerable<string> Ancestors(string path) (iterator)"}</code> |  |
| <Link id="m-granted" /><code>{"private static bool Granted(HashSet<string> granted, string path)"}</code> |  |
| <Link id="m-rebuild" /><code>{"private static void Rebuild("}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletokenlist">{"ConsoleTokenList"}</Link>{" list)"}</code> |  |
