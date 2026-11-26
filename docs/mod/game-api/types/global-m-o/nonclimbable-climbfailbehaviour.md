---
title: "NonClimbable.ClimbFailBehaviour"
description: "What a NonClimbable surface does when grabbed: Ignored can't be climbed at all, ReleaseAfterHold lets the grab start then releases it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonClimbable.ClimbFailBehaviour

An **private enum** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

What a `NonClimbable` surface does when grabbed: `Ignored` can't be climbed at all, `ReleaseAfterHold` lets the grab start then releases it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`NonClimbable`](/mod/game-api/types/global-m-o/nonclimbable)

## Values

| Member |
| --- |
| <Link id="m-ignored" /><code>{"Ignored = 0"}</code> |
| <Link id="m-releaseafterhold" /><code>{"ReleaseAfterHold = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ClimbFailBehaviour`:

[`NonClimbable.climbFailBehaviour`](/mod/game-api/types/global-m-o/nonclimbable#m-climbfailbehaviour).
