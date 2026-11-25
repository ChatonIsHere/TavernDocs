---
title: "ConsoleTokenPatches.RefusedLoginFilter"
description: "A private NLog filter that drops the game's log lines that print the whole text of a refused console token."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleTokenPatches.RefusedLoginFilter

A **private class** in `TavernLib`, `TavernLib.Patches`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A private NLog filter that drops the game's log lines that print the whole text of a refused console token. Added to every logging rule by `ConsoleTokenPatches.Start`.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Nested in** [`ConsoleTokenPatches`](/tavernlib-api/types/patches/consoletokenpatches)
- **Inherits or implements** `Filter`
- **Documented in** [ConsoleTokenPatches.RefusedLoginFilter](/tavernlib-api/types/patches/consoletokenpatches-refusedloginfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RefusedLoginFilter()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addto" /><code>{"static void AddTo(LoggingConfiguration config)"}</code> | Adds the filter first on every rule and child rule of an NLog config, keeping rules that had no filters writing as before. |
| <Link id="m-add" /><code>{"private static void Add(LoggingRule rule)"}</code> |  |
| <Link id="m-check" /><code>{"protected override FilterResult Check(LogEventInfo logEvent)"}</code> | Ignores the game's refused-authorization lines from the websocket console, the 1758 "Received token" line and the REST console's refusal. |
