---
title: "DirectReplacer"
description: "A BaseReplacer that swaps its target text for a fixed string, used with the string Replace(BaseReplacer) extension."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DirectReplacer

A **class** in `Root.Township`, the global namespace.

A `BaseReplacer` that swaps its target text for a fixed string, used with the string `Replace(BaseReplacer)` extension.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`BaseReplacer`](/mod/game-api/types/global-a-b/basereplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DirectReplacer(string target, string replacer)"}</code> | <span className="api-desc">Creates a `DirectReplacer` from `target` and `replacer`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-replacer" /><code>{"private string replacer"}</code> | <span className="api-desc">The replacement text.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the replacement text.</span> |
