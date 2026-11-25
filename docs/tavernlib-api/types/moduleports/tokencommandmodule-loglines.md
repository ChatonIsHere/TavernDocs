---
title: "TokenCommandModule.LogLines"
description: "The answer to token log: the newest lines of console_token_log.jsonl."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TokenCommandModule.LogLines

A **class** in `TavernLib`, `TavernLib.ModulePorts`.

The answer to `token log`: the newest lines of `console_token_log.jsonl`.

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested in** [`TokenCommandModule`](/tavernlib-api/types/moduleports/tokencommandmodule)
- **Documented in** [TokenCommandModule.LogLines](/tavernlib-api/types/moduleports/tokencommandmodule-loglines)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogLines()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"List<JObject> Entries { get; set; }"}</code> | The log entries as JSON objects, oldest first. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Each entry's non-empty fields on one line, or `Nothing logged`. |
