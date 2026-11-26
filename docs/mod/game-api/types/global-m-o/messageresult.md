---
title: "MessageResult"
description: "Simple success flag plus error text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MessageResult

A **class** in `Root.Township`, the global namespace.

Simple success flag plus error text. Nothing else in the server build uses it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Derived types** [`MessageResult<T>`](/mod/game-api/types/global-m-o/messageresult-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MessageResult()"}</code> | Creates a `MessageResult` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error"}</code> | Error message when it failed. |
| <Link id="m-issuccess" /><code>{"bool IsSuccess"}</code> | Whether it succeeded. |
