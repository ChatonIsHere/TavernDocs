---
title: "IntelligenceExtensionMethods"
description: "Helpers for the unused logic engine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IntelligenceExtensionMethods

A **static class** in `Root.Township`, `Alta.Intelligence`.

Helpers for the unused logic engine.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-constantinitialize" /><code>{"static void ConstantInitialize("}<Link to="/game-api/types/alta-intelligence/iterm">{"ITerm"}</Link>{"[] terms, "}<Link to="/game-api/types/alta-intelligence/iatomdefinition">{"IAtomDefinition"}</Link>{" definition)"}</code> | Calls `ConstantInitialize` on every term in the array, tying its variables to the definition. |
| <Link id="m-print" /><code>{"static void Print(IEnumerable<"}<Link to="/game-api/types/alta-intelligence/result">{"Result"}</Link>{"> results)"}</code> | Logs each result to the Unity console, or "False" if there are none. |
