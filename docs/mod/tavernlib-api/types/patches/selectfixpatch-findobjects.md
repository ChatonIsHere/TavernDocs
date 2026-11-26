---
title: "SelectFixPatch.FindObjects"
description: "The delegate for the original SelectionCommandModule.FindObjects, handed to SelectionFix by the hook."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectFixPatch.FindObjects

A **delegate** in `TavernLib`, `TavernLib.Patches`.

The delegate for the original `SelectionCommandModule.FindObjects`, handed to `SelectionFix` by the hook.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Nested in** [`SelectFixPatch`](/mod/tavernlib-api/types/patches/selectfixpatch)
- **Inherits or implements** `MulticastDelegate`
- **Documented in** [SelectFixPatch.FindObjects](/mod/tavernlib-api/types/patches/selectfixpatch-findobjects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FindObjects(object object, IntPtr method)"}</code> | <span className="api-desc">Compiler-generated delegate constructor.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, float distance, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Standard delegate method that starts an asynchronous call.</span> |
| <Link id="m-endinvoke" /><code>{"virtual IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Standard delegate method that finishes an asynchronous call.</span> |
| <Link id="m-invoke" /><code>{"virtual IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> Invoke("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, float distance = 10)"}</code> | <span className="api-desc">Calls the original `FindObjects`.</span> |

## Used in

Members of other types that take, return or hold a `FindObjects`:

<div className="api-used-in">

[`SelectFixPatch.SelectionFix`](/mod/tavernlib-api/types/patches/selectfixpatch#m-selectionfix).

</div>
