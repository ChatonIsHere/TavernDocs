---
title: "Timeline.IEntry"
description: "Handle to a callback scheduled on the game Timeline (from CallAfterDuration, CallRepeatableAfterDuration and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timeline.IEntry

An **interface** in `Alta.Timing.Runtime`, `Alta.Timing`.

Handle to a callback scheduled on the game `Timeline` (from `CallAfterDuration`, `CallRepeatableAfterDuration` and so on). Pass it to `Timeline.Cancel` to stop it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`Timeline`](/game-api/types/assembly-other/timeline)
- **Derived types** [`Timeline.Entry`](/game-api/types/assembly-other/timeline-entry)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | False once the entry has been cancelled or released. |
| <Link id="m-time" /><code>{"TimeSpan Time { get; }"}</code> | Timeline time the callback is due. For a repeating entry, the next due time. |

## Used in

Members of other types that take, return or hold a `IEntry`:

[`ConfirmationCraftingPart.playTimeEndingSound`](/game-api/types/alta-crafting/confirmationcraftingpart#m-playtimeendingsound), [`ConfirmationCraftingPart.popoutEntry`](/game-api/types/alta-crafting/confirmationcraftingpart#m-popoutentry), [`GenericCraftingNail.disableCollider`](/game-api/types/alta-crafting/genericcraftingnail#m-disablecollider), [`GenericCraftingPiece.playTimeEndingSound`](/game-api/types/alta-crafting/genericcraftingpiece#m-playtimeendingsound), [`GenericCraftingPiece.popoutEntry`](/game-api/types/alta-crafting/genericcraftingpiece#m-popoutentry), [`QuickDrawApplication.entry`](/game-api/types/alta-crafting/quickdrawapplication#m-entry), [`ActiveEat.entry`](/game-api/types/alta-intelligence/activeeat#m-entry), [`BasicActiveAction<TAgent>.finishEntry`](/game-api/types/alta-intelligence/basicactiveaction-tagent#m-finishentry), [`EventChannelTimedAiHook.Delay.entries`](/game-api/types/alta-intelligence/eventchanneltimedaihook-delay#m-entries), [`Phantom.crackedEntry`](/game-api/types/alta-intelligence/phantom#m-crackedentry), [`RepeatIfHasTarget.entry`](/game-api/types/alta-intelligence/repeatifhastarget#m-entry), [`GeneratedLoot.waitToRefill`](/game-api/types/alta-world-generation/generatedloot#m-waittorefill), [`LootModule.waitToRefill`](/game-api/types/alta-world-generation/lootmodule#m-waittorefill), [`MovingLandmark.entry`](/game-api/types/alta-world/movinglandmark#m-entry), [`PanelComponent.entry`](/game-api/types/alta-menus/panelcomponent#m-entry), [`FrequencyTimerDefinition.entries`](/game-api/types/alta-world-generation/frequencytimerdefinition#m-entries), [`PopulationSample.entry`](/game-api/types/alta-world-generation/populationsample#m-entry), [`SpawnedElement.decay`](/game-api/types/alta-world-generation/spawnedelement#m-decay), [`MODSMicMuteQuickAccessAction.entry`](/game-api/types/alta-player/modsmicmutequickaccessaction#m-entry), [`ShowNames.entry`](/game-api/types/alta-player/shownames#m-entry), [`StatManager.entry`](/game-api/types/alta-stats-effects/statmanager#m-entry), [`StatManager.incrementalUpdateEntry`](/game-api/types/alta-stats-effects/statmanager#m-incrementalupdateentry), [`TimedStatModifier.entry`](/game-api/types/alta-stats-effects/timedstatmodifier#m-entry), [`Timeline.CallAfterDuration`](/game-api/types/assembly-other/timeline#m-callafterduration), [`Timeline.CallRepeatableAfterDuration`](/game-api/types/assembly-other/timeline#m-callrepeatableafterduration), [`Timeline.Cancel`](/game-api/types/assembly-other/timeline#m-cancel), [`Timeline.InsertCallbackAtTime`](/game-api/types/assembly-other/timeline#m-insertcallbackattime), [`Timeline.InsertRepeatableCallbackAtTime`](/game-api/types/assembly-other/timeline#m-insertrepeatablecallbackattime), [`Timeline.LoadEntry`](/game-api/types/assembly-other/timeline#m-loadentry), [`Timeline.LoadRepeatableEntry`](/game-api/types/assembly-other/timeline#m-loadrepeatableentry), [`Timeline.SaveEntry`](/game-api/types/assembly-other/timeline#m-saveentry), [`Timeline.SerializeEntry`](/game-api/types/assembly-other/timeline#m-serializeentry), [`Timeline.SerializeRepeatableEntry`](/game-api/types/assembly-other/timeline#m-serializerepeatableentry), [`TaxManager.taxEntry`](/game-api/types/alta-crafting/taxmanager#m-taxentry), [`TreeSpawner.waitToRespawn`](/game-api/types/alta-crafting/treespawner#m-waittorespawn), [`AnalyticalButton.delay`](/game-api/types/global-a-b/analyticalbutton#m-delay), [`RespawnSystem.decrementFuelEntry`](/game-api/types/game-other-namespaces/respawnsystem#m-decrementfuelentry), [`RespawnSystem.updateModelEntry`](/game-api/types/game-other-namespaces/respawnsystem#m-updatemodelentry), [`BasicDecay.decayTimer`](/game-api/types/global-a-b/basicdecay#m-decaytimer), [`DelayedHoverPickup.hoverStart`](/game-api/types/global-c-d/delayedhoverpickup#m-hoverstart), [`EmptyDockAfterTimePeriod.destroyDockedTimer`](/game-api/types/global-e-h/emptydockaftertimeperiod#m-destroydockedtimer), [`FriendRequestToken.timelineEntry`](/game-api/types/global-e-h/friendrequesttoken#m-timelineentry), [`GrowerComponent.nextStageTimer`](/game-api/types/global-e-h/growercomponent#m-nextstagetimer), [`GrowthItem.nextStageTimer`](/game-api/types/global-e-h/growthitem#m-nextstagetimer), [`ItemScroller.reshow`](/game-api/types/global-i-l/itemscroller#m-reshow), [`MovingPlatform.delays`](/game-api/types/global-m-o/movingplatform#m-delays), [`NetworkDestroyTimed.entry`](/game-api/types/global-m-o/networkdestroytimed#m-entry), [`PlaceItemNoDockPuzzleLogic.replaceTimeline`](/game-api/types/global-p/placeitemnodockpuzzlelogic#m-replacetimeline), [`RespawnOnDestroy.respawnEntry`](/game-api/types/global-q-r/respawnondestroy#m-respawnentry), [`SerializedTimedEvent.TimerData.Timer`](/game-api/types/global-s/serializedtimedevent-timerdata#m-timer), [`TickTimer.entry`](/game-api/types/global-t-x/ticktimer#m-entry), [`TimeBasedStagedPrefab.timers`](/game-api/types/global-t-x/timebasedstagedprefab#m-timers), [`TrialLogic.reset`](/game-api/types/global-t-x/triallogic#m-reset), [`WalkerStepping.forceUnpause`](/game-api/types/global-t-x/walkerstepping#m-forceunpause), [`WallCollisionHelper.entries`](/game-api/types/global-t-x/wallcollisionhelper#m-entries).
