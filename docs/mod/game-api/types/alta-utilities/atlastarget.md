---
title: "AtlasTarget"
description: "Flags for which kind of objects an atlas definition targets: static, dynamic or both."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtlasTarget

An **enum** in `Root.Township`, `Alta.Utilities.Atlas`.

Flags for which kind of objects an atlas definition targets: static, dynamic or both. Checked with `AtlasDefinition.IsTargeting`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-dynamic" /><code>{"Dynamic = 2"}</code> |
| <Link id="m-static" /><code>{"Static = 1"}</code> |

## Used in

Members of other types that take, return or hold a `AtlasTarget`:

[`AtlasDefinition.IsTargeting`](/mod/game-api/types/alta-utilities/atlasdefinition#m-istargeting), [`AtlasDefinition.target`](/mod/game-api/types/alta-utilities/atlasdefinition#m-target).
