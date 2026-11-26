---
title: "StringBuilderReplacer"
description: "BaseReplacer that holds a StringBuilder for building replacement text for its target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StringBuilderReplacer

A **class** in `Root.Township`, the global namespace.

`BaseReplacer` that holds a `StringBuilder` for building replacement text for its target.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`BaseReplacer`](/mod/game-api/types/global-a-b/basereplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StringBuilderReplacer(string target)"}</code> | <span className="api-desc">Creates a `StringBuilderReplacer` from `target`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-builder" /><code>{"private StringBuilder builder"}</code> | <span className="api-desc">The string builder.</span> |
| <Link id="m-identation" /><code>{"private string identation"}</code> | <span className="api-desc">Indentation string; set to empty and never used here.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-append" /><code>{"void Append(string text)"}</code> | <span className="api-desc">Adds text to the builder.</span> |
| <Link id="m-appendline" /><code>{"void AppendLine(string line)"}</code> | <span className="api-desc">Adds a line to the builder.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the built text.</span> |
