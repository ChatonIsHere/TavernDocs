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

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`TokenCommandModule`](/mod/tavernlib-api/types/moduleports/tokencommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogLines()"}</code> | <span className="api-desc">Makes an empty log answer.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"List<JObject> Entries { get; set; }"}</code> | <span className="api-desc">The log entries as JSON objects, oldest first.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Each entry's non-empty fields on one line, or `Nothing logged`.</span> |
