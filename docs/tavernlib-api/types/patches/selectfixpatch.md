---
title: "SelectFixPatch"
description: "A MonoMod hook (applied in Tavern.OnLateInitializeMelon) that replaces SelectionCommandModule.FindObjects, the object search behind select find."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectFixPatch

A **static class** in `TavernLib`, `TavernLib.Patches`.

A MonoMod hook (applied in `Tavern.OnLateInitializeMelon`) that replaces `SelectionCommandModule.FindObjects`, the object search behind `select find`. Server.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Nested types** [`FindObjects`](/tavernlib-api/types/patches/selectfixpatch-findobjects)
- **Documented in** [SelectFixPatch](/tavernlib-api/types/patches/selectfixpatch)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-selectionfix" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> SelectionFix("}<Link to="/tavernlib-api/types/patches/selectfixpatch-findobjects">{"SelectFixPatch.FindObjects"}</Link>{" orig, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, float distance = 10)"}</code> | Returns the prefab roots of every entity in every loaded chunk within `distance` of the player, or none with no player body. |
