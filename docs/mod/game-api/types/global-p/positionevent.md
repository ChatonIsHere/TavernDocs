---
title: "PositionEvent"
description: "A serializable AltaEvent that carries a Vector3 position, for wiring in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionEvent

A **class** in `Root.Township`, the global namespace.

A serializable `AltaEvent` that carries a `Vector3` position, for wiring in the inspector.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`AltaEvent<Vector3, PositionHandler>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionEvent()"}</code> | <span className="api-desc">Creates a `PositionEvent` with default values.</span> |

## Used in

Members of other types that take, return or hold a `PositionEvent`:

<div className="api-used-in">

[`DecraftingComponent.decraftingHitEffect`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-decraftinghiteffect), [`DecraftingComponent.innefectiveHitEffect`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-innefectivehiteffect), [`GenericCraftingSettings.onPieceCompletedEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-onpiececompletedeffect), [`GenericCraftingSettings.OnPieceCompletedEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-onpiececompletedeffect-2), [`GenericCraftingSettings.onPieceDestroyEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-onpiecedestroyeffect), [`GenericCraftingSettings.OnPieceDestroyEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-onpiecedestroyeffect-2), [`GenericCraftingSettings.onPiecePopEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-onpiecepopeffect), [`GenericCraftingSettings.OnPiecePopEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-onpiecepopeffect-2), [`GenericCraftingSettings.timeEndingSound`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-timeendingsound), [`EnchantmentEffect.onHitEffect`](/mod/game-api/types/alta-crafting/enchantmenteffect#m-onhiteffect), [`ImpactHitThresholdTrigger.OnEffectivelyHit`](/mod/game-api/types/alta-items/impacthitthresholdtrigger#m-oneffectivelyhit), [`ActionItemData.onActionItemDisappearEffects`](/mod/game-api/types/alta-player/actionitemdata#m-onactionitemdisappeareffects), [`ActionItemData.OnActionItemDisappearEffects`](/mod/game-api/types/alta-player/actionitemdata#m-onactionitemdisappeareffects-2), [`ActionItemData.onActionItemSpawnEffects`](/mod/game-api/types/alta-player/actionitemdata#m-onactionitemspawneffects), [`ActionItemData.OnActionItemSpawnEffects`](/mod/game-api/types/alta-player/actionitemdata#m-onactionitemspawneffects-2), [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit.soundEffect`](/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit#m-soundeffect), [`HandyCameraManager.onCameraDisappearEffects`](/mod/game-api/types/alta-customization/handycameramanager#m-oncameradisappeareffects), [`HandyCameraManager.onCameraSpawnEffects`](/mod/game-api/types/alta-customization/handycameramanager#m-oncameraspawneffects), [`AreaAttackSkill.hitObjectEffect`](/mod/game-api/types/global-a-b/areaattackskill#m-hitobjecteffect), [`BasicDigable.onDigHitEffects`](/mod/game-api/types/global-a-b/basicdigable#m-ondighiteffects), [`BasicDigable.onDugEffects`](/mod/game-api/types/global-a-b/basicdigable#m-ondugeffects), [`BasicDigable.onDugServer`](/mod/game-api/types/global-a-b/basicdigable#m-ondugserver), [`DiggingImpactorSettings.onDigEffect`](/mod/game-api/types/global-c-d/diggingimpactorsettings#m-ondigeffect), [`DiggingImpactorSettings.onEmbbedEffect`](/mod/game-api/types/global-c-d/diggingimpactorsettings#m-onembbedeffect), [`FriendRequestToken.alreadyFriendsEffect`](/mod/game-api/types/global-e-h/friendrequesttoken#m-alreadyfriendseffect), [`FriendRequestToken.deniedFriendshipEffect`](/mod/game-api/types/global-e-h/friendrequesttoken#m-deniedfriendshipeffect), [`FriendRequestToken.newFriendshipEffect`](/mod/game-api/types/global-e-h/friendrequesttoken#m-newfriendshipeffect), [`HealthBasedDigable.onHealthChangedEffects`](/mod/game-api/types/global-e-h/healthbaseddigable#m-onhealthchangedeffects), [`OnCollidedEventTrigger.OnCollided`](/mod/game-api/types/global-m-o/oncollidedeventtrigger#m-oncollided), [`PickupBasedSkill.hitPositionEffect`](/mod/game-api/types/global-p/pickupbasedskill#m-hitpositioneffect), [`PickupBasedSkill.localPlayerHitPositionEffect`](/mod/game-api/types/global-p/pickupbasedskill#m-localplayerhitpositioneffect), [`StatUpgradeEffect.onOrbFinished`](/mod/game-api/types/global-s/statupgradeeffect#m-onorbfinished), [`TouchScreenMenuBase.onScreenReleasedEffects`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-onscreenreleasedeffects), [`TouchScreenMenuBase.onScreenTouchEffects`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-onscreentoucheffects).

</div>
