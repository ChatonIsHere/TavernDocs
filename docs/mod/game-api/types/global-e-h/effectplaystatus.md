---
title: "EffectPlayStatus"
description: "Flags for an effect that is playing with its visuals or its sound turned off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectPlayStatus

An **enum** in `Root.Township`, the global namespace.

Flags for an effect that is playing with its visuals or its sound turned off.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-sounddisabled" /><code>{"SoundDisabled = 4"}</code> |
| <Link id="m-visualdisabled" /><code>{"VisualDisabled = 2"}</code> |

## Used in

Members of other types that take, return or hold a `EffectPlayStatus`:

<div className="api-used-in">

[`PlayerSpecialEffectsController.streamingTrailPlayStatus`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-streamingtrailplaystatus), [`ScaledLerpFollow.PlayStatus`](/mod/game-api/types/global-s/scaledlerpfollow#m-playstatus), [`TeleporterTrailLerper.SetEffectPlayStatus`](/mod/game-api/types/global-t-x/teleportertraillerper#m-seteffectplaystatus).

</div>
