---
title: "BaseReplacer"
description: "Base class for a replacer that is tied to a target string given in the constructor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseReplacer

An **abstract class** in `Root.Township`, the global namespace.

Base class for a replacer that is tied to a target string given in the constructor.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Derived types** [`DirectReplacer`](/mod/game-api/types/global-c-d/directreplacer), [`StringBuilderReplacer`](/mod/game-api/types/global-s/stringbuilderreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BaseReplacer(string target)"}</code> | <span className="api-desc">Creates a `BaseReplacer` from `target`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"string Target { get; private set; }"}</code> | <span className="api-desc">The string this replacer targets, set once in the constructor.</span> |

## Used in

Members of other types that take, return or hold a `BaseReplacer`:

<div className="api-used-in">

[`ScrapperExtension.Replace`](/mod/game-api/types/global-s/scrapperextension#m-replace).

</div>
