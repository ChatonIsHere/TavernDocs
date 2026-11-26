---
title: "BaseReplacer"
description: "Base class for a replacer that is tied to a target string given in the constructor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseReplacer

An **abstract class** in `Root.Township`, no namespace.

Base class for a replacer that is tied to a target string given in the constructor.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Derived types** [`DirectReplacer`](/game-api/types/global-c-d/directreplacer), [`StringBuilderReplacer`](/game-api/types/global-s/stringbuilderreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BaseReplacer(string target)"}</code> | Creates a `BaseReplacer` from `target`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"string Target { get; private set; }"}</code> | The string this replacer targets, set once in the constructor. |

## Used in

Members of other types that take, return or hold a `BaseReplacer`:

[`ScrapperExtension.Replace`](/game-api/types/global-s/scrapperextension#m-replace).
