---
title: "LiquidContainer"
description: "class LiquidContainer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainer

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ILiquidContainer`](/game-api/types/alta-stats-effects/iliquidcontainer), [`ILiquidContainerInternal`](/game-api/types/alta-stats-effects/iliquidcontainerinternal), [`ISavable<LiquidContainerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LiquidContainerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler), [`IBlockGenericDecrafting`](/game-api/types/alta-crafting/iblockgenericdecrafting), [`IInterfereWithDocking`](/game-api/types/alta-items/iinterferewithdocking)
- **Derived types** [`StewContainer`](/game-api/types/alta-crafting/stewcontainer), [`GlobalLiquidContainer`](/game-api/types/alta-stats-effects/globalliquidcontainer), [`LiquidContainerSaveData`](/game-api/types/alta-stats-effects/liquidcontainersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContainer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canaddto" /><code>{"private bool canAddTo"}</code> |  |
| <Link id="m-canremovefrom" /><code>{"private bool canRemoveFrom"}</code> |  |
| <Link id="m-containerpriority" /><code>{"private int containerPriority"}</code> |  |
| <Link id="m-containersize" /><code>{"private int containerSize"}</code> |  |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" content"}</code> |  |
| <Link id="m-currentcontentlevel" /><code>{"private int currentContentLevel"}</code> |  |
| <Link id="m-intransitions" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> inTransitions"}</code> |  |
| <Link id="m-isallowinggradualconsumption" /><code>{"private bool isAllowingGradualConsumption"}</code> |  |
| <Link id="m-isinfinitesource" /><code>{"private bool isInfiniteSource"}</code> |  |
| <Link id="m-liquiddistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" liquidDistribution"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-oldlevel" /><code>{"private int oldLevel"}</code> |  |
| <Link id="m-oldtotalliquidamountshown" /><code>{"private float oldTotalLiquidAmountShown"}</code> |  |
| <Link id="m-outtransition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" outTransition"}</code> |  |
| <Link id="m-sortedintransitions" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> sortedInTransitions"}</code> |  |
| <Link id="m-surfacevisual" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" surfaceVisual"}</code> |  |
| <Link id="m-syncliquidamount" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLiquidAmount"}</code> |  |
| <Link id="m-syncliquidcontent" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLiquidContent"}</code> |  |
| <Link id="m-totaltransitionsamount" /><code>{"private float totalTransitionsAmount"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canremovefrom-2" /><code>{"bool CanRemoveFrom { get; set; }"}</code> |  |
| <Link id="m-containedliquid" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" ContainedLiquid { get; protected set; }"}</code> |  |
| <Link id="m-containerpriority-2" /><code>{"int ContainerPriority { get; }"}</code> |  |
| <Link id="m-containersize-2" /><code>{"int ContainerSize { get; }"}</code> |  |
| <Link id="m-currentcontentlevel-2" /><code>{"int CurrentContentLevel { get; }"}</code> |  |
| <Link id="m-isallowinggradualconsumption-2" /><code>{"bool IsAllowingGradualConsumption { get; }"}</code> |  |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> |  |
| <Link id="m-isfull" /><code>{"bool IsFull { get; }"}</code> |  |
| <Link id="m-receivetransitionmultiplier" /><code>{"virtual float ReceiveTransitionMultiplier { get; }"}</code> |  |
| <Link id="m-spaceleft" /><code>{"int SpaceLeft { get; }"}</code> |  |
| <Link id="m-surfacevisual-2" /><code><Link to="/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" SurfaceVisual { get; }"}</code> |  |
| <Link id="m-totalliquidamountshown" /><code>{"float TotalLiquidAmountShown { get; }"}</code> |  |
| <Link id="m-alta-crafting-iblockgenericdecrafting-candecraft" /><code>{"private bool Alta.Crafting.IBlockGenericDecrafting.CanDecraft { get; }"}</code> |  |
| <Link id="m-alta-liquid-iliquidcontainerinternal-outtransition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" Alta.Liquid.ILiquidContainerInternal.OutTransition { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidfillfilter">{"LiquidFillFilter"}</Link>{" AddFilter"}</code> |  |
| <Link id="m-containedliquidchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidtypechangedhandler">{"LiquidTypeChangedHandler"}</Link>{" ContainedLiquidChanged"}</code> |  |
| <Link id="m-contentlevelchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler">{"LiquidContainerAmountChangedHandler"}</Link>{" ContentLevelChanged"}</code> |  |
| <Link id="m-totalamountshownchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerhandler">{"LiquidContainerHandler"}</Link>{" TotalAmountShownChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canaddto-2" /><code>{"bool CanAddTo("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquid)"}</code> |  |
| <Link id="m-fillinto" /><code>{"static bool FillInto("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" from, "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" to, int amountToFill, bool isForced = false)"}</code> |  |
| <Link id="m-fillintocontainer" /><code>{"bool FillIntoContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer, int amountToFill, bool isForced = false)"}</code> |  |
| <Link id="m-forceempty" /><code>{"void ForceEmpty()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-iscompatiblewithothercontainer" /><code>{"virtual bool IsCompatibleWithOtherContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-addliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.AddLiquid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" containedLiquid, int amountToAdd, bool isForced)"}</code> |  |
| <Link id="m-addliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.AddLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> |  |
| <Link id="m-checktodisableupdateloop" /><code>{"private void CheckToDisableUpdateLoop()"}</code> |  |
| <Link id="m-clearcontainedliquidduetofailedtransition" /><code>{"private void ClearContainedLiquidDueToFailedTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" failedTransition)"}</code> |  |
| <Link id="m-enableupdateloop" /><code>{"private void EnableUpdateLoop()"}</code> |  |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-oncontainedliquidchanged" /><code>{"private void OnContainedLiquidChanged("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldContent, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newContent)"}</code> |  |
| <Link id="m-oncontentlevelchanged" /><code>{"private void OnContentLevelChanged()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-removeliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.RemoveLiquid(int amountToRemove, bool isForced)"}</code> |  |
| <Link id="m-removeliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.RemoveLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> |  |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> |  |
| <Link id="m-serializecontentlevel" /><code>{"private void SerializeContentLevel("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializelevelandsettingsintostream" /><code>{"private void SerializeLevelAndSettingsIntoStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializeliquidcontent" /><code>{"private void SerializeLiquidContent("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-setcontent" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.SetContent("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquidContent)"}</code> |  |
| <Link id="m-syncliquidamount-2" /><code>{"private void SyncLiquidAmount("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncliquidcontent-2" /><code>{"private void SyncLiquidContent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updatecontentrenderer" /><code>{"protected virtual void UpdateContentRenderer()"}</code> |  |
| <Link id="m-updatetotalliquidamountshown" /><code>{"private bool UpdateTotalLiquidAmountShown()"}</code> |  |
| <Link id="m-updatetotaltransitionamount" /><code>{"private bool UpdateTotalTransitionAmount()"}</code> |  |
| <Link id="m-updatetransitionamountandrenderers" /><code>{"private void UpdateTransitionAmountAndRenderers(bool isForced)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidContainer`:

[`CookingLiquidVisualTippingPointController.container`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-container), [`LiquidHeatAreaController.liquidContainer`](/game-api/types/alta-stats-effects/liquidheatareacontroller#m-liquidcontainer), [`PickupLiquidContainerEnabler.container`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-container), [`LiquidGradualDrinker.thisContainer`](/game-api/types/global-i-l/liquidgradualdrinker#m-thiscontainer).
