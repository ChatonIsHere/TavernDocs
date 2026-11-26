---
title: "SpaceType"
description: "Flags for the kind of space a forest node is in: normal, dense or open."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceType

An **enum** in `Root.Township`, `Alta.Forests`.

Flags for the kind of space a forest node is in: normal, dense or open. Forest fill only places objects at open nodes or at points outside every node's radius.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Values

| Member |
| --- |
| <Link id="m-dense" /><code>{"Dense = 2"}</code> |
| <Link id="m-normal" /><code>{"Normal = 1"}</code> |
| <Link id="m-open" /><code>{"Open = 4"}</code> |

## Used in

Members of other types that take, return or hold a `SpaceType`:

[`Edge.IsOn`](/mod/game-api/types/alta-world-generation/edge#m-ison), [`Node.IsOn`](/mod/game-api/types/alta-world-generation/node#m-ison), [`Space.Type`](/mod/game-api/types/alta-world-generation/space#m-type), [`SpaceFilter.allowedTypes`](/mod/game-api/types/global-s/spacefilter#m-allowedtypes), [`SpaceFilter.Redirect.types`](/mod/game-api/types/global-s/spacefilter-redirect#m-types), [`SpaceFilter.Redirect.Types`](/mod/game-api/types/global-s/spacefilter-redirect#m-types-2).
