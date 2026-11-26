---
title: "NailHitquality"
description: "How well a hammer hit landed on a generic-crafting nail: Base, Bad, Good or Done."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NailHitquality

An **enum** in `Root.Township`, `Alta.Crafting`.

How well a hammer hit landed on a generic-crafting nail: `Base`, `Bad`, `Good` or `Done`. Picks the nail effect and is sent in `NailIdentifier`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Values

| Member |
| --- |
| <Link id="m-bad" /><code>{"Bad = 1"}</code> |
| <Link id="m-base" /><code>{"Base = 0"}</code> |
| <Link id="m-done" /><code>{"Done = 3"}</code> |
| <Link id="m-good" /><code>{"Good = 2"}</code> |

## Used in

Members of other types that take, return or hold a `NailHitquality`:

[`GenericCraftingSettings.GetNailEffect`](/game-api/types/alta-crafting/genericcraftingsettings#m-getnaileffect), [`NailIdentifier.hitQuality`](/game-api/types/alta-crafting/nailidentifier#m-hitquality), [`NailIdentifier.Setup`](/game-api/types/alta-crafting/nailidentifier#m-setup).
