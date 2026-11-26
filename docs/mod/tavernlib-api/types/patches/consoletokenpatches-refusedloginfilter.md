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

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Nested in** [`ConsoleTokenPatches`](/mod/tavernlib-api/types/patches/consoletokenpatches)
- **Inherits or implements** `Filter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RefusedLoginFilter()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addto" /><code>{"static void AddTo(LoggingConfiguration config)"}</code> | <span className="api-desc">Adds the filter first on every rule and child rule of an NLog config, keeping rules that had no filters writing as before.</span> |
| <Link id="m-check" /><code>{"protected override FilterResult Check(LogEventInfo logEvent)"}</code> | <span className="api-desc">Ignores the game's refused-authorization lines from the websocket console, the 1758 "Received token" line and the REST console's refusal.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private static void Add(LoggingRule rule)"}</code> | <span className="api-desc">Adds the filter to a logging rule, and to its child rules, if it isn't there yet.</span> |

</details>
