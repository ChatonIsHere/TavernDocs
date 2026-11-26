---
title: "ConsoleTokenLog"
description: "Internal: writes console_token_log.jsonl, one JSON line per console connect, disconnect, command and refused login."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenLog

A **internal static class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: writes `console_token_log.jsonl`, one JSON line per console connect, disconnect, command and refused login. Never a token's text; rolls to `.1` past 5 MB.

- **Listed in** [TavernLib.Backend.RemoteConsole](/mod/tavernlib-api/types/backend-remoteconsole)
- **Documented in** [ConsoleTokenLog](/mod/tavernlib-api/types/backend-remoteconsole/consoletokenlog)

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filepath" /><code>{"private static readonly string FilePath"}</code> | <span className="api-desc">Path of `console_token_log.jsonl` in the ModdingTavern folder.</span> |
| <Link id="m-maxcommandlength" /><code>{"private const int MaxCommandLength"}</code> | <span className="api-desc">Longest command text, in characters, that is kept in a log line.</span> |
| <Link id="m-rollat" /><code>{"private const long RollAt"}</code> | <span className="api-desc">Size in bytes (5 MB) past which `console_token_log.jsonl` is moved to `.1` and a new file started.</span> |
| <Link id="m-sync" /><code>{"private static readonly object Sync"}</code> | <span className="api-desc">Lock held while the log is written or read.</span> |
| <Link id="m-tokentext" /><code>{"private static readonly Regex TokenText"}</code> | <span className="api-desc">Regex that matches anything shaped like a token, so `Redact` can replace it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-redact" /><code>{"static string Redact(string text)"}</code> | <span className="api-desc">Replaces anything shaped like a token in the text with `[token]`.</span> |
| <Link id="m-tail" /><code>{"static List<JObject> Tail(string tokenId, int count)"}</code> | <span className="api-desc">The newest entries, oldest first, for one token id (`owner` for the owner token) or all of them.</span> |
| <Link id="m-write" /><code>{"static void Write(string type, string tokenId, string address, string command = null, string result = null, string reason = null)"}</code> | <span className="api-desc">Appends one entry with the time, event, token id and name, address, and the redacted command, result or reason.</span> |
