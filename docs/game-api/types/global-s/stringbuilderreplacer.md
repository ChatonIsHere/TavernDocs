---
title: "StringBuilderReplacer"
description: "BaseReplacer that holds a StringBuilder for building replacement text for its target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StringBuilderReplacer

A **class** in `Root.Township`, no namespace.

`BaseReplacer` that holds a `StringBuilder` for building replacement text for its target.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`BaseReplacer`](/game-api/types/global-a-b/basereplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StringBuilderReplacer(string target)"}</code> | Creates a `StringBuilderReplacer` from `target`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-builder" /><code>{"private StringBuilder builder"}</code> | The string builder. |
| <Link id="m-identation" /><code>{"private string identation"}</code> | Indentation string; set to empty and never used here. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-append" /><code>{"void Append(string text)"}</code> | Adds text to the builder. |
| <Link id="m-appendline" /><code>{"void AppendLine(string line)"}</code> | Adds a line to the builder. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the built text. |
