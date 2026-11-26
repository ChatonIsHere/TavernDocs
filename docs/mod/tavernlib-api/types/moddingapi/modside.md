---
title: "ModSide"
description: "Which side a mod says it's for, given to TavernModAttribute."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModSide

An **enum** in `TavernLib`, `TavernLib.ModdingApi`.

Which side a mod says it's for, given to `TavernModAttribute`. `None` means not set. TavernLib itself never reads it.

- **Listed in** [TavernLib.ModdingApi](/mod/tavernlib-api/types/moddingapi)
- **Documented in** [ModSide](/mod/tavernlib-api/types/moddingapi/modside), [TavernLib API](/mod/tavernlib-api/overview)

## Values

| Member |
| --- |
| <Link id="m-both" /><code>{"Both = 3"}</code> |
| <Link id="m-client" /><code>{"Client = 2"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-server" /><code>{"Server = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ModSide`:

<div className="api-used-in">

[`TavernMelonBaseExtension.GetModSide`](/mod/tavernlib-api/types/moddingapi/tavernmelonbaseextension#m-getmodside), [`TavernModAttribute.Side`](/mod/tavernlib-api/types/moddingapi/tavernmodattribute#m-side), [`TavernModAttribute.TavernModAttribute`](/mod/tavernlib-api/types/moddingapi/tavernmodattribute#m-ctor).

</div>
