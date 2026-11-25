---
title: "AltaEvent"
description: "A serializable event with no arguments that fires both an inspector UnityEvent and a C# event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEvent

A **class** in `Root.Township`, no namespace.

A serializable event with no arguments that fires both an inspector UnityEvent and a C# event. Exceptions in either are caught and logged.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`IAltaEventValidation`](/game-api/types/global-i-l/ialtaeventvalidation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaEvent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-triggered" /><code>{"private UnityEvent triggered"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logger-2" /><code>{"static Logger Logger { get; }"}</code> | Shared logger, also used by the generic `AltaEvent` types. |
| <Link id="m-ialtaeventvalidation-eventbase" /><code>{"private UnityEventBase IAltaEventValidation.EventBase { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action Invoked"}</code> | The C# side of the event. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> | Fires the inspector event, then the C# `Invoked` event, logging any exception from each. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" op_Addition("}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" altaEvent, Action eventHandler)"}</code> | `+` adds a C# handler to `Invoked`. |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" op_Subtraction("}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" altaEvent, Action eventHandler)"}</code> | `-` removes a C# handler from `Invoked`. |

## Used in

Members of other types that take, return or hold a `AltaEvent`:

[`ForgedModel<TB, TA>.onCompleted`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-oncompleted), [`Smelter.mouldBreak`](/game-api/types/alta-crafting/smelter#m-mouldbreak), [`StewManager.garnishRejected`](/game-api/types/alta-crafting/stewmanager#m-garnishrejected), [`CosmeticPresetSlot.gotTrophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-gottrophy), [`CosmeticPresetsManager.beganUsingFromStore`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-beganusingfromstore), [`CosmeticPresetsManager.requestPresetFromStore`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-requestpresetfromstore), [`CosmeticPresetsManager.stopedUsingFromStore`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-stopedusingfromstore), [`CosmeticRotatingSlot.gotTrophy`](/game-api/types/alta-customization/cosmeticrotatingslot#m-gottrophy), [`MainMenuShopItem.successfullPurchase`](/game-api/types/alta-customization/mainmenushopitem#m-successfullpurchase), [`ShopInterface.successfullPurchase`](/game-api/types/alta-customization/shopinterface#m-successfullpurchase), [`ImpactHitTrigger.trigger`](/game-api/types/alta-items/impacthittrigger#m-trigger), [`Phantom.fadeOnDayServer`](/game-api/types/alta-intelligence/phantom#m-fadeondayserver), [`RepeatIfHasTarget.ticked`](/game-api/types/alta-intelligence/repeatifhastarget#m-ticked), [`DockedOffset.docked`](/game-api/types/alta-items/dockedoffset#m-docked), [`DockedOffset.undocked`](/game-api/types/alta-items/dockedoffset#m-undocked), [`NonPhysicalLever.activated`](/game-api/types/alta-items/nonphysicallever#m-activated), [`NonPhysicalLever.deactivated`](/game-api/types/alta-items/nonphysicallever#m-deactivated), [`MenuToggleSetting.onDeselected`](/game-api/types/alta-menus/menutogglesetting#m-ondeselected), [`MenuToggleSetting.onSelected`](/game-api/types/alta-menus/menutogglesetting#m-onselected), [`Book.pageLocationChanged`](/game-api/types/alta-items/book#m-pagelocationchanged), [`CameraEventsListener.onPostRender`](/game-api/types/alta-customization/cameraeventslistener#m-onpostrender), [`CameraEventsListener.onPreRender`](/game-api/types/alta-customization/cameraeventslistener#m-onprerender), [`TaxManager.noCoinsLeft`](/game-api/types/alta-crafting/taxmanager#m-nocoinsleft), [`SimpleInteractPoint.interacted`](/game-api/types/alta-menus/simpleinteractpoint#m-interacted), [`SimpleInteractPoint.released`](/game-api/types/alta-menus/simpleinteractpoint#m-released), [`TreeSpawner.treeAdded`](/game-api/types/alta-crafting/treespawner#m-treeadded), [`TreeSpawner.treeRemoved`](/game-api/types/alta-crafting/treespawner#m-treeremoved), [`AnalyticalButton.onBecameActive`](/game-api/types/global-a-b/analyticalbutton#m-onbecameactive), [`AnalyticalButton.pressed`](/game-api/types/global-a-b/analyticalbutton#m-pressed), [`AnalyticalButton.released`](/game-api/types/global-a-b/analyticalbutton#m-released), [`AnimationTrigger.Disabled`](/game-api/types/global-a-b/animationtrigger#m-disabled), [`AnimationTrigger.Enabled`](/game-api/types/global-a-b/animationtrigger#m-enabled), [`AnimationTrigger.onDisable`](/game-api/types/global-a-b/animationtrigger#m-ondisable), [`AnimationTrigger.onEnable`](/game-api/types/global-a-b/animationtrigger#m-onenable), [`BasicTouchScreenButton.onPressed`](/game-api/types/global-a-b/basictouchscreenbutton#m-onpressed), [`BasicTouchScreenButton.onReleased`](/game-api/types/global-a-b/basictouchscreenbutton#m-onreleased), [`ChildCheckOnOwned.hasChild`](/game-api/types/global-c-d/childcheckonowned#m-haschild), [`ChildCheckOnOwned.hasNoChild`](/game-api/types/global-c-d/childcheckonowned#m-hasnochild), [`CoinPress.pressed`](/game-api/types/global-c-d/coinpress#m-pressed), [`ColorBoardItem.dipped`](/game-api/types/global-c-d/colorboarditem#m-dipped), [`ConsumptionManager.rejectEdibleConsumption`](/game-api/types/global-c-d/consumptionmanager#m-rejectedibleconsumption), [`ConsumptionManager.rejectLiquidConsumption`](/game-api/types/global-c-d/consumptionmanager#m-rejectliquidconsumption), [`DockCounter.thresholdDropped`](/game-api/types/global-c-d/dockcounter#m-thresholddropped), [`DockCounter.thresholdReached`](/game-api/types/global-c-d/dockcounter#m-thresholdreached), [`DockEvents.firstDocked`](/game-api/types/global-c-d/dockevents#m-firstdocked), [`DockEvents.itemDocked`](/game-api/types/global-c-d/dockevents#m-itemdocked), [`DockEvents.itemUndocked`](/game-api/types/global-c-d/dockevents#m-itemundocked), [`DockEvents.lastUndocked`](/game-api/types/global-c-d/dockevents#m-lastundocked), [`DurabilityModule.brokeOnServer`](/game-api/types/global-c-d/durabilitymodule#m-brokeonserver), [`BasicChiselable.brokenClient`](/game-api/types/game-other-namespaces/basicchiselable#m-brokenclient), [`BasicChiselable.brokenServer`](/game-api/types/game-other-namespaces/basicchiselable#m-brokenserver), [`FestiveFeature.activated`](/game-api/types/global-e-h/festivefeature#m-activated), [`FestiveFeature.changedWhileSpawned`](/game-api/types/global-e-h/festivefeature#m-changedwhilespawned), [`FestiveFeature.deactivated`](/game-api/types/global-e-h/festivefeature#m-deactivated), [`FrequencyLimiter.invoked`](/game-api/types/global-e-h/frequencylimiter#m-invoked), [`Fuse.finishedOnServer`](/game-api/types/global-e-h/fuse#m-finishedonserver), [`Fuse.started`](/game-api/types/global-e-h/fuse#m-started), [`Fuse.stopped`](/game-api/types/global-e-h/fuse#m-stopped), [`GachaHandle.onActivated`](/game-api/types/global-e-h/gachahandle#m-onactivated), [`GachaHandle.onReset`](/game-api/types/global-e-h/gachahandle#m-onreset) and 46 more.
