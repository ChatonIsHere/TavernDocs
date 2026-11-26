---
title: "PositionRotationEvent"
description: "Serializable AltaEvent with a position and a rotation argument."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRotationEvent

A **class** in `Root.Township`, the global namespace.

Serializable `AltaEvent` with a position and a rotation argument. Runs inspector-wired listeners and C# handlers.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`AltaEvent<Vector3, Quaternion, PositionRotationHandler>`](/mod/game-api/types/global-a-b/altaevent-t1-t2-unityeventt1t2)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRotationEvent()"}</code> | Creates a `PositionRotationEvent` with default values. |

## Used in

Members of other types that take, return or hold a `PositionRotationEvent`:

[`EnchantmentEffect.onAlignedHitEffect`](/mod/game-api/types/alta-crafting/enchantmenteffect#m-onalignedhiteffect), [`ForgedHitEffectOverride.coldHit`](/mod/game-api/types/global-e-h/forgedhiteffectoverride#m-coldhit), [`ForgedHitEffectOverride.hotHit`](/mod/game-api/types/global-e-h/forgedhiteffectoverride#m-hothit), [`PickupBasedSkill.hitPositionAndBladeAlignedEffect`](/mod/game-api/types/global-p/pickupbasedskill#m-hitpositionandbladealignedeffect), [`PickupBasedSkill.localPlayerHitPositionAndBladeAlignedEffect`](/mod/game-api/types/global-p/pickupbasedskill#m-localplayerhitpositionandbladealignedeffect), [`PowerStinger.executeEffect`](/mod/game-api/types/global-p/powerstinger#m-executeeffect), [`SteelSong.badHitEffect`](/mod/game-api/types/global-s/steelsong#m-badhiteffect), [`SteelSong.goodHitEffect`](/mod/game-api/types/global-s/steelsong#m-goodhiteffect).
