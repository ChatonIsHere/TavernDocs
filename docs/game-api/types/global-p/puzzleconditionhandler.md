---
title: "PuzzleConditionHandler"
description: "delegate PuzzleConditionHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleConditionHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PuzzleConditionHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{" condition, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/puzzlecondition">{"PuzzleCondition"}</Link>{" condition)"}</code> |

## Used in

Members of other types that take, return or hold a `PuzzleConditionHandler`:

[`PuzzleCondition.StateChanged`](/game-api/types/global-p/puzzlecondition#m-statechanged).
