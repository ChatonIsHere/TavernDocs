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
| <Link id="m-ctor" /><code>{"FindObjects(object object, IntPtr method)"}</code> | Compiler-generated delegate constructor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, float distance, AsyncCallback callback, object object)"}</code> | Standard delegate method that starts an asynchronous call. |
| <Link id="m-endinvoke" /><code>{"virtual IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> EndInvoke(IAsyncResult result)"}</code> | Standard delegate method that finishes an asynchronous call. |
| <Link id="m-invoke" /><code>{"virtual IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> Invoke("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, float distance = 10)"}</code> | Calls the original `FindObjects`. |

## Used in

Members of other types that take, return or hold a `FindObjects`:

[`SelectFixPatch.SelectionFix`](/mod/tavernlib-api/types/patches/selectfixpatch#m-selectionfix).
