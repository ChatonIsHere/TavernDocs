---
title: "AltaEvent"
description: "A serializable event with no arguments that fires both an inspector UnityEvent and a C# event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEvent

A **class** in `Root.Township`, the global namespace.

A serializable event with no arguments that fires both an inspector UnityEvent and a C# event. Exceptions in either are caught and logged.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`IAltaEventValidation`](/mod/game-api/types/global-i-l/ialtaeventvalidation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaEvent()"}</code> | Creates an `AltaEvent` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger shared by all `AltaEvent` types. |
| <Link id="m-triggered" /><code>{"private UnityEvent triggered"}</code> | The inspector `UnityEvent` run first on `Invoke`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logger-2" /><code>{"static Logger Logger { get; }"}</code> | Shared logger, also used by the generic `AltaEvent` types. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ialtaeventvalidation-eventbase" /><code>{"private UnityEventBase IAltaEventValidation.EventBase { get; }"}</code> | The inspector `UnityEvent`, for validation tools. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action Invoked"}</code> | The C# side of the event. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> | Fires the inspector event, then the C# `Invoked` event, logging any exception from each. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" op_Addition("}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" altaEvent, Action eventHandler)"}</code> | `+` adds a C# handler to `Invoked`. |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" op_Subtraction("}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" altaEvent, Action eventHandler)"}</code> | `-` removes a C# handler from `Invoked`. |

## Used in

Members of other types that take, return or hold a `AltaEvent`:

[`ForgedModel<TB, TA>.onCompleted`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-oncompleted), [`Smelter.mouldBreak`](/mod/game-api/types/alta-crafting/smelter#m-mouldbreak), [`StewManager.garnishRejected`](/mod/game-api/types/alta-crafting/stewmanager#m-garnishrejected), [`CosmeticPresetSlot.gotTrophy`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-gottrophy), [`CosmeticPresetsManager.beganUsingFromStore`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-beganusingfromstore), [`CosmeticPresetsManager.requestPresetFromStore`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-requestpresetfromstore), [`CosmeticPresetsManager.stopedUsingFromStore`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-stopedusingfromstore), [`CosmeticRotatingSlot.gotTrophy`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-gottrophy), [`MainMenuShopItem.successfullPurchase`](/mod/game-api/types/alta-customization/mainmenushopitem#m-successfullpurchase), [`ShopInterface.successfullPurchase`](/mod/game-api/types/alta-customization/shopinterface#m-successfullpurchase), [`ImpactHitTrigger.trigger`](/mod/game-api/types/alta-items/impacthittrigger#m-trigger), [`Phantom.fadeOnDayServer`](/mod/game-api/types/alta-intelligence/phantom#m-fadeondayserver), [`RepeatIfHasTarget.ticked`](/mod/game-api/types/alta-intelligence/repeatifhastarget#m-ticked), [`DockedOffset.docked`](/mod/game-api/types/alta-items/dockedoffset#m-docked), [`DockedOffset.undocked`](/mod/game-api/types/alta-items/dockedoffset#m-undocked), [`NonPhysicalLever.activated`](/mod/game-api/types/alta-items/nonphysicallever#m-activated), [`NonPhysicalLever.deactivated`](/mod/game-api/types/alta-items/nonphysicallever#m-deactivated), [`MenuToggleSetting.onDeselected`](/mod/game-api/types/alta-menus/menutogglesetting#m-ondeselected), [`MenuToggleSetting.onSelected`](/mod/game-api/types/alta-menus/menutogglesetting#m-onselected), [`Book.pageLocationChanged`](/mod/game-api/types/alta-items/book#m-pagelocationchanged), [`CameraEventsListener.onPostRender`](/mod/game-api/types/alta-customization/cameraeventslistener#m-onpostrender), [`CameraEventsListener.onPreRender`](/mod/game-api/types/alta-customization/cameraeventslistener#m-onprerender), [`TaxManager.noCoinsLeft`](/mod/game-api/types/alta-crafting/taxmanager#m-nocoinsleft), [`SimpleInteractPoint.interacted`](/mod/game-api/types/alta-menus/simpleinteractpoint#m-interacted), [`SimpleInteractPoint.released`](/mod/game-api/types/alta-menus/simpleinteractpoint#m-released), [`TreeSpawner.treeAdded`](/mod/game-api/types/alta-crafting/treespawner#m-treeadded), [`TreeSpawner.treeRemoved`](/mod/game-api/types/alta-crafting/treespawner#m-treeremoved), [`AnalyticalButton.onBecameActive`](/mod/game-api/types/global-a-b/analyticalbutton#m-onbecameactive), [`AnalyticalButton.pressed`](/mod/game-api/types/global-a-b/analyticalbutton#m-pressed), [`AnalyticalButton.released`](/mod/game-api/types/global-a-b/analyticalbutton#m-released), [`AnimationTrigger.Disabled`](/mod/game-api/types/global-a-b/animationtrigger#m-disabled), [`AnimationTrigger.Enabled`](/mod/game-api/types/global-a-b/animationtrigger#m-enabled), [`AnimationTrigger.onDisable`](/mod/game-api/types/global-a-b/animationtrigger#m-ondisable), [`AnimationTrigger.onEnable`](/mod/game-api/types/global-a-b/animationtrigger#m-onenable), [`BasicTouchScreenButton.onPressed`](/mod/game-api/types/global-a-b/basictouchscreenbutton#m-onpressed), [`BasicTouchScreenButton.onReleased`](/mod/game-api/types/global-a-b/basictouchscreenbutton#m-onreleased), [`ChildCheckOnOwned.hasChild`](/mod/game-api/types/global-c-d/childcheckonowned#m-haschild), [`ChildCheckOnOwned.hasNoChild`](/mod/game-api/types/global-c-d/childcheckonowned#m-hasnochild), [`CoinPress.pressed`](/mod/game-api/types/global-c-d/coinpress#m-pressed), [`ColorBoardItem.dipped`](/mod/game-api/types/global-c-d/colorboarditem#m-dipped), [`ConsumptionManager.rejectEdibleConsumption`](/mod/game-api/types/global-c-d/consumptionmanager#m-rejectedibleconsumption), [`ConsumptionManager.rejectLiquidConsumption`](/mod/game-api/types/global-c-d/consumptionmanager#m-rejectliquidconsumption), [`DockCounter.thresholdDropped`](/mod/game-api/types/global-c-d/dockcounter#m-thresholddropped), [`DockCounter.thresholdReached`](/mod/game-api/types/global-c-d/dockcounter#m-thresholdreached), [`DockEvents.firstDocked`](/mod/game-api/types/global-c-d/dockevents#m-firstdocked), [`DockEvents.itemDocked`](/mod/game-api/types/global-c-d/dockevents#m-itemdocked), [`DockEvents.itemUndocked`](/mod/game-api/types/global-c-d/dockevents#m-itemundocked), [`DockEvents.lastUndocked`](/mod/game-api/types/global-c-d/dockevents#m-lastundocked), [`DurabilityModule.brokeOnServer`](/mod/game-api/types/global-c-d/durabilitymodule#m-brokeonserver), [`BasicChiselable.brokenClient`](/mod/game-api/types/game-other-namespaces/basicchiselable#m-brokenclient), [`BasicChiselable.brokenServer`](/mod/game-api/types/game-other-namespaces/basicchiselable#m-brokenserver), [`FestiveFeature.activated`](/mod/game-api/types/global-e-h/festivefeature#m-activated), [`FestiveFeature.changedWhileSpawned`](/mod/game-api/types/global-e-h/festivefeature#m-changedwhilespawned), [`FestiveFeature.deactivated`](/mod/game-api/types/global-e-h/festivefeature#m-deactivated), [`FrequencyLimiter.invoked`](/mod/game-api/types/global-e-h/frequencylimiter#m-invoked), [`Fuse.finishedOnServer`](/mod/game-api/types/global-e-h/fuse#m-finishedonserver), [`Fuse.started`](/mod/game-api/types/global-e-h/fuse#m-started), [`Fuse.stopped`](/mod/game-api/types/global-e-h/fuse#m-stopped), [`GachaHandle.onActivated`](/mod/game-api/types/global-e-h/gachahandle#m-onactivated), [`GachaHandle.onReset`](/mod/game-api/types/global-e-h/gachahandle#m-onreset) and 46 more.
