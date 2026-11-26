---
title: "LiquidContainer"
description: "Holds a whole number of units of one liquid (a bucket, a flask, a pond)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainer

A **class** in `Root.Township`, `Alta.Liquid`.

Holds a whole number of units of one liquid (a bucket, a flask, a pond). Only the server changes the contents; the level and liquid are synced, saved, and shown through an optional surface visual. Pours in progress show as fractional amounts.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ILiquidContainer`](/game-api/types/alta-stats-effects/iliquidcontainer), [`ILiquidContainerInternal`](/game-api/types/alta-stats-effects/iliquidcontainerinternal), [`ISavable<LiquidContainerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LiquidContainerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler), [`IBlockGenericDecrafting`](/game-api/types/alta-crafting/iblockgenericdecrafting), [`IInterfereWithDocking`](/game-api/types/alta-items/iinterferewithdocking)
- **Derived types** [`StewContainer`](/game-api/types/alta-crafting/stewcontainer), [`GlobalLiquidContainer`](/game-api/types/alta-stats-effects/globalliquidcontainer), [`LiquidContainerSaveData`](/game-api/types/alta-stats-effects/liquidcontainersavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidContainer()"}</code> |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canaddto" /><code>{"private bool canAddTo"}</code> | Whether liquid may be poured in. Checked by `CanAddTo` before `AddFilter`. |
| <Link id="m-canremovefrom" /><code>{"private bool canRemoveFrom"}</code> | Backing field for `CanRemoveFrom`; saved with the container. |
| <Link id="m-containerpriority" /><code>{"private int containerPriority"}</code> | Containers with a lower priority can't fill into ones with the same or higher priority. |
| <Link id="m-containersize" /><code>{"private int containerSize"}</code> | How many units the container holds. |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" content"}</code> | Backing field for `ContainedLiquid`. |
| <Link id="m-currentcontentlevel" /><code>{"private int currentContentLevel"}</code> | Units of liquid in the container; saved and synced. |
| <Link id="m-intransitions" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> inTransitions"}</code> | Pours currently coming into this container. |
| <Link id="m-isallowinggradualconsumption" /><code>{"private bool isAllowingGradualConsumption"}</code> | Backing field for `IsAllowingGradualConsumption`, which `LiquidGradualDrinker` checks before drinking from it bit by bit. |
| <Link id="m-isinfinitesource" /><code>{"private bool isInfiniteSource"}</code> | When true the container never empties or fills: level reads as `int.MaxValue` and adds and removes always succeed. |
| <Link id="m-liquiddistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" liquidDistribution"}</code> | Liquids the container may spawn filled with, picked at random on generation with a random amount. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-oldlevel" /><code>{"private int oldLevel"}</code> | The level when `ContentLevelChanged` last fired. |
| <Link id="m-oldtotalliquidamountshown" /><code>{"private float oldTotalLiquidAmountShown"}</code> | The shown amount last reported, to detect changes. |
| <Link id="m-outtransition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" outTransition"}</code> | The transition for liquid leaving this container, made in `Awake`. |
| <Link id="m-sortedintransitions" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> sortedInTransitions"}</code> | Reused list for sorting incoming pours by progress. |
| <Link id="m-surfacevisual" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" surfaceVisual"}</code> | The liquid surface renderer. Without one the update loop is never turned on. |
| <Link id="m-syncliquidamount" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLiquidAmount"}</code> | Sync message for the level and in-flight amount. |
| <Link id="m-syncliquidcontent" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLiquidContent"}</code> | Sync message for the liquid type. |
| <Link id="m-totaltransitionsamount" /><code>{"private float totalTransitionsAmount"}</code> | Liquid currently in flight: incoming pour progress minus the outgoing pour. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canremovefrom-2" /><code>{"bool CanRemoveFrom { get; set; }"}</code> | Whether liquid can be taken out. Saved. |
| <Link id="m-containedliquid" /><code><Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" ContainedLiquid { get; protected set; }"}</code> | The liquid inside, or null when empty. |
| <Link id="m-containerpriority-2" /><code>{"int ContainerPriority { get; }"}</code> | A container only pours into containers of lower priority (checked by `LiquidContainerTrigger`). Default 1. |
| <Link id="m-containersize-2" /><code>{"int ContainerSize { get; }"}</code> | Number of units it holds. |
| <Link id="m-currentcontentlevel-2" /><code>{"int CurrentContentLevel { get; }"}</code> | Units of liquid inside. `int.MaxValue` for an infinite source. |
| <Link id="m-isallowinggradualconsumption-2" /><code>{"bool IsAllowingGradualConsumption { get; }"}</code> | Whether drinking can take the liquid out bit by bit. |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> | True with no liquid. Never true for an infinite source. |
| <Link id="m-isfull" /><code>{"bool IsFull { get; }"}</code> | True at full capacity. Never true for an infinite source. |
| <Link id="m-receivetransitionmultiplier" /><code>{"virtual float ReceiveTransitionMultiplier { get; }"}</code> | Speed factor for pours into this container. 1 by default. |
| <Link id="m-spaceleft" /><code>{"int SpaceLeft { get; }"}</code> | Units of free space. `int.MaxValue` for an infinite source. |
| <Link id="m-surfacevisual-2" /><code><Link to="/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" SurfaceVisual { get; }"}</code> | The visual that shows the liquid's surface, or null. |
| <Link id="m-totalliquidamountshown" /><code>{"float TotalLiquidAmountShown { get; }"}</code> | Level plus the progress of pours in and out, for display. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-iblockgenericdecrafting-candecraft" /><code>{"private bool Alta.Crafting.IBlockGenericDecrafting.CanDecraft { get; }"}</code> | Only empty containers can be decrafted. |
| <Link id="m-alta-liquid-iliquidcontainerinternal-outtransition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" Alta.Liquid.ILiquidContainerInternal.OutTransition { get; }"}</code> | The transition for liquid leaving this container. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidfillfilter">{"LiquidFillFilter"}</Link>{" AddFilter"}</code> | Lets other components refuse a liquid before it is added. |
| <Link id="m-containedliquidchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidtypechangedhandler">{"LiquidTypeChangedHandler"}</Link>{" ContainedLiquidChanged"}</code> | Raised with the old and new liquid when it changes. |
| <Link id="m-contentlevelchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler">{"LiquidContainerAmountChangedHandler"}</Link>{" ContentLevelChanged"}</code> | Raised with the old and new level when the level changes. |
| <Link id="m-totalamountshownchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerhandler">{"LiquidContainerHandler"}</Link>{" TotalAmountShownChanged"}</code> | Raised when the shown amount changes, including during pours. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canaddto-2" /><code>{"bool CanAddTo("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquid)"}</code> | True if adding is allowed and no `AddFilter` handler refuses this liquid. |
| <Link id="m-fillinto" /><code>{"static bool FillInto("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" from, "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" to, int amountToFill, bool isForced = false)"}</code> | Server: moves units from one container to another if they are compatible and there is room. Static. |
| <Link id="m-fillintocontainer" /><code>{"bool FillIntoContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer, int amountToFill, bool isForced = false)"}</code> | Server: pours units from this container into another. |
| <Link id="m-forceempty" /><code>{"void ForceEmpty()"}</code> | Removes all liquid, ignoring `CanRemoveFrom`. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the level and content sync messages. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: syncs the starting level. |
| <Link id="m-iscompatiblewithothercontainer" /><code>{"virtual bool IsCompatibleWithOtherContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> | True unless both containers hold different liquids. The global container always matches. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the level and liquid to a joining player. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Sets up the pour-out transition. Disables updates if there is no surface visual. |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | On first spawn, fills a random amount of a liquid picked from the distribution, if one is set. |
| <Link id="m-updatecontentrenderer" /><code>{"protected virtual void UpdateContentRenderer()"}</code> | Sets the surface visual's fullness from the shown amount. |

<details>
<summary>22 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.AddLiquid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" containedLiquid, int amountToAdd, bool isForced)"}</code> | Server: adds an amount of a liquid, capped at the container size. Takes the liquid's type if empty. Infinite sources accept anything. |
| <Link id="m-addliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.AddLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | Starts tracking a pour coming in; if empty, takes the source's liquid type so the visual shows it, and enables the update loop. |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | Docking check: two containers may stack only if both are empty, or have the same level and the same liquid. |
| <Link id="m-checktodisableupdateloop" /><code>{"private void CheckToDisableUpdateLoop()"}</code> | Turns the update loop off and refreshes the visual once no pours are coming in. |
| <Link id="m-clearcontainedliquidduetofailedtransition" /><code>{"private void ClearContainedLiquidDueToFailedTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" failedTransition)"}</code> | If an incoming pour is cancelled and nothing is shown, clears the liquid type taken from it. |
| <Link id="m-enableupdateloop" /><code>{"private void EnableUpdateLoop()"}</code> | Server: turns the update loop on when liquid starts pouring out, if there is a surface visual. |
| <Link id="m-oncontainedliquidchanged" /><code>{"private void OnContainedLiquidChanged("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldContent, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newContent)"}</code> | Server sends the new liquid type to the chunk; raises `ContainedLiquidChanged` and updates the surface colour. |
| <Link id="m-oncontentlevelchanged" /><code>{"private void OnContentLevelChanged()"}</code> | Server sends the level to the chunk; refreshes the visual and raises `ContentLevelChanged` if the level changed. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | In the editor, refreshes the visual and clears the liquid type if the level is 0. |
| <Link id="m-removeliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.RemoveLiquid(int amountToRemove, bool isForced)"}</code> | Server: removes an amount; clears the liquid type when it reaches 0. Infinite sources never run out. |
| <Link id="m-removeliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.RemoveLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | Stops tracking an incoming pour and refreshes or disables the update loop. |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> | When the entity is replaced, moves the liquid (or emptiness) into the replacement's container. |
| <Link id="m-serializecontentlevel" /><code>{"private void SerializeContentLevel("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the level as an int from 0 to `containerSize`. |
| <Link id="m-serializelevelandsettingsintostream" /><code>{"private void SerializeLevelAndSettingsIntoStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads `canAddTo`, `canRemoveFrom` and the level. Not called in this build. |
| <Link id="m-serializeliquidcontent" /><code>{"private void SerializeLiquidContent("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the liquid: none, a custom mix as data, or a preset by hash. Infinite sources with none are given water. |
| <Link id="m-setcontent" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.SetContent("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquidContent)"}</code> | Sets the liquid type directly without changing the level. |
| <Link id="m-syncliquidamount-2" /><code>{"private void SyncLiquidAmount("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sync handler for the level and in-flight pour amount; clients update their visual and raise events. Rejected from clients. |
| <Link id="m-syncliquidcontent-2" /><code>{"private void SyncLiquidContent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sync handler for the liquid type. Rejected from clients. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Server: recomputes the in-flight pour amount and the visual each frame while pours are active. |
| <Link id="m-updatetotalliquidamountshown" /><code>{"private bool UpdateTotalLiquidAmountShown()"}</code> | If the shown amount changed, raises `TotalAmountShownChanged` and (server) sends the amount to the chunk. |
| <Link id="m-updatetotaltransitionamount" /><code>{"private bool UpdateTotalTransitionAmount()"}</code> | Adds up incoming pour progress (largest first, as many as there is room for) minus the outgoing pour. |
| <Link id="m-updatetransitionamountandrenderers" /><code>{"private void UpdateTransitionAmountAndRenderers(bool isForced)"}</code> | Recomputes the in-flight amount on the server and refreshes the visual if it changed or when forced. |

</details>

## Used in

Members of other types that take, return or hold a `LiquidContainer`:

[`CookingLiquidVisualTippingPointController.container`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-container), [`LiquidHeatAreaController.liquidContainer`](/game-api/types/alta-stats-effects/liquidheatareacontroller#m-liquidcontainer), [`PickupLiquidContainerEnabler.container`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-container), [`LiquidGradualDrinker.thisContainer`](/game-api/types/global-i-l/liquidgradualdrinker#m-thiscontainer).
