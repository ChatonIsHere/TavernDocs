---
title: "ToolBasedSkillStatus"
description: "Stage of a tool-based skill use: cancelled, charging started, charged or consumed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToolBasedSkillStatus

An **enum** in `Root.Township`, the global namespace.

Stage of a tool-based skill use: cancelled, charging started, charged or consumed. `SkillInputStructure.PlaySoundAt` picks its default effect from it.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Values

| Member |
| --- |
| <Link id="m-cancelled" /><code>{"Cancelled = 0"}</code> |
| <Link id="m-charged" /><code>{"Charged = 2"}</code> |
| <Link id="m-chargingstarted" /><code>{"ChargingStarted = 1"}</code> |
| <Link id="m-consumed" /><code>{"Consumed = 3"}</code> |

## Used in

Members of other types that take, return or hold a `ToolBasedSkillStatus`:

<div className="api-used-in">

[`BowDrawSkill.GetTransformToCallAt`](/mod/game-api/types/alta-player/bowdrawskill#m-gettransformtocallat), [`BowMultiArrowShot.HandleSkillStatus`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-handleskillstatus), [`ForgingHeartCall.EffectsRequested`](/mod/game-api/types/global-e-h/forgingheartcall#m-effectsrequested), [`Gatherer.EffectsRequested`](/mod/game-api/types/global-e-h/gatherer#m-effectsrequested), [`MiningEcho.EffectsRequested`](/mod/game-api/types/global-m-o/miningecho#m-effectsrequested), [`PickupBasedSkill.EffectsRequested`](/mod/game-api/types/global-p/pickupbasedskill#m-effectsrequested), [`PickupBasedSkill.GetTransformToCallAt`](/mod/game-api/types/global-p/pickupbasedskill#m-gettransformtocallat), [`PickupBasedSkill.status`](/mod/game-api/types/global-p/pickupbasedskill#m-status), [`PickupBasedSkillModifier.HandleSkillStatus`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-handleskillstatus), [`PickupBasedSkillModifier.status`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-status), [`SkillInputStructure.PlaySoundAt`](/mod/game-api/types/global-s/skillinputstructure#m-playsoundat), [`TargetBasedSkill.EffectsRequested`](/mod/game-api/types/global-t-x/targetbasedskill#m-effectsrequested).

</div>
