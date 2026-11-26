---
title: "DataAtom<T>"
description: "An atom carrying a value (for example a position) in the unused Prolog-like logic engine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DataAtom&lt;T&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

An atom carrying a value (for example a position) in the unused Prolog-like logic engine.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Atom`](/mod/game-api/types/alta-intelligence/atom), [`IData<T>`](/mod/game-api/types/alta-intelligence/idata-t), [`ITerm`](/mod/game-api/types/alta-intelligence/iterm)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DataAtom(string name, T data)"}</code> | Creates a `DataAtom` from `name` and `data`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"T Data { get; set; }"}</code> | The value this atom carries. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/dataatom-t">{"DataAtom"}</Link>{"<T> op_Implicit(string name)"}</code> | Lets a string become a `DataAtom` of that name with a default value, or a value become one named "Data". |
| <Link id="m-op-implicit-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/dataatom-t">{"DataAtom"}</Link>{"<T> op_Implicit(T value)"}</code> | Lets a string become a `DataAtom` of that name with a default value, or a value become one named "Data". |
