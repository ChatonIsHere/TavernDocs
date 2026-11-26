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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ILiquidContainer`](/mod/game-api/types/alta-stats-effects/iliquidcontainer), [`ILiquidContainerInternal`](/mod/game-api/types/alta-stats-effects/iliquidcontainerinternal), [`ISavable<LiquidContainerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LiquidContainerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler), [`IBlockGenericDecrafting`](/mod/game-api/types/alta-crafting/iblockgenericdecrafting), [`IInterfereWithDocking`](/mod/game-api/types/alta-items/iinterferewithdocking)
- **Derived types** [`StewContainer`](/mod/game-api/types/alta-crafting/stewcontainer), [`GlobalLiquidContainer`](/mod/game-api/types/alta-stats-effects/globalliquidcontainer), [`LiquidContainerSaveData`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContainer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canaddto" /><code>{"private bool canAddTo"}</code> | <span className="api-desc">Whether liquid may be poured in. Checked by `CanAddTo` before `AddFilter`.</span> |
| <Link id="m-canremovefrom" /><code>{"private bool canRemoveFrom"}</code> | <span className="api-desc">Backing field for `CanRemoveFrom`; saved with the container.</span> |
| <Link id="m-containerpriority" /><code>{"private int containerPriority"}</code> | <span className="api-desc">Containers with a lower priority can't fill into ones with the same or higher priority.</span> |
| <Link id="m-containersize" /><code>{"private int containerSize"}</code> | <span className="api-desc">How many units the container holds.</span> |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" content"}</code> | <span className="api-desc">Backing field for `ContainedLiquid`.</span> |
| <Link id="m-currentcontentlevel" /><code>{"private int currentContentLevel"}</code> | <span className="api-desc">Units of liquid in the container; saved and synced.</span> |
| <Link id="m-intransitions" /><code>{"private readonly HashSet<"}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> inTransitions"}</code> | <span className="api-desc">Pours currently coming into this container.</span> |
| <Link id="m-isallowinggradualconsumption" /><code>{"private bool isAllowingGradualConsumption"}</code> | <span className="api-desc">Backing field for `IsAllowingGradualConsumption`, which `LiquidGradualDrinker` checks before drinking from it bit by bit.</span> |
| <Link id="m-isinfinitesource" /><code>{"private bool isInfiniteSource"}</code> | <span className="api-desc">When true the container never empties or fills: level reads as `int.MaxValue` and adds and removes always succeed.</span> |
| <Link id="m-liquiddistribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" liquidDistribution"}</code> | <span className="api-desc">Liquids the container may spawn filled with, picked at random on generation with a random amount.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-oldlevel" /><code>{"private int oldLevel"}</code> | <span className="api-desc">The level when `ContentLevelChanged` last fired.</span> |
| <Link id="m-oldtotalliquidamountshown" /><code>{"private float oldTotalLiquidAmountShown"}</code> | <span className="api-desc">The shown amount last reported, to detect changes.</span> |
| <Link id="m-outtransition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" outTransition"}</code> | <span className="api-desc">The transition for liquid leaving this container, made in `Awake`.</span> |
| <Link id="m-sortedintransitions" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{"> sortedInTransitions"}</code> | <span className="api-desc">Reused list for sorting incoming pours by progress.</span> |
| <Link id="m-surfacevisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" surfaceVisual"}</code> | <span className="api-desc">The liquid surface renderer. Without one the update loop is never turned on.</span> |
| <Link id="m-syncliquidamount" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLiquidAmount"}</code> | <span className="api-desc">Sync message for the level and in-flight amount.</span> |
| <Link id="m-syncliquidcontent" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLiquidContent"}</code> | <span className="api-desc">Sync message for the liquid type.</span> |
| <Link id="m-totaltransitionsamount" /><code>{"private float totalTransitionsAmount"}</code> | <span className="api-desc">Liquid currently in flight: incoming pour progress minus the outgoing pour.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canremovefrom-2" /><code>{"bool CanRemoveFrom { get; set; }"}</code> | <span className="api-desc">Whether liquid can be taken out. Saved.</span> |
| <Link id="m-containedliquid" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" ContainedLiquid { get; protected set; }"}</code> | <span className="api-desc">The liquid inside, or null when empty.</span> |
| <Link id="m-containerpriority-2" /><code>{"int ContainerPriority { get; }"}</code> | <span className="api-desc">A container only pours into containers of lower priority (checked by `LiquidContainerTrigger`). Default 1.</span> |
| <Link id="m-containersize-2" /><code>{"int ContainerSize { get; }"}</code> | <span className="api-desc">Number of units it holds.</span> |
| <Link id="m-currentcontentlevel-2" /><code>{"int CurrentContentLevel { get; }"}</code> | <span className="api-desc">Units of liquid inside. `int.MaxValue` for an infinite source.</span> |
| <Link id="m-isallowinggradualconsumption-2" /><code>{"bool IsAllowingGradualConsumption { get; }"}</code> | <span className="api-desc">Whether drinking can take the liquid out bit by bit.</span> |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> | <span className="api-desc">True with no liquid. Never true for an infinite source.</span> |
| <Link id="m-isfull" /><code>{"bool IsFull { get; }"}</code> | <span className="api-desc">True at full capacity. Never true for an infinite source.</span> |
| <Link id="m-receivetransitionmultiplier" /><code>{"virtual float ReceiveTransitionMultiplier { get; }"}</code> | <span className="api-desc">Speed factor for pours into this container. 1 by default.</span> |
| <Link id="m-spaceleft" /><code>{"int SpaceLeft { get; }"}</code> | <span className="api-desc">Units of free space. `int.MaxValue` for an infinite source.</span> |
| <Link id="m-surfacevisual-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" SurfaceVisual { get; }"}</code> | <span className="api-desc">The visual that shows the liquid's surface, or null.</span> |
| <Link id="m-totalliquidamountshown" /><code>{"float TotalLiquidAmountShown { get; }"}</code> | <span className="api-desc">Level plus the progress of pours in and out, for display.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-iblockgenericdecrafting-candecraft" /><code>{"private bool Alta.Crafting.IBlockGenericDecrafting.CanDecraft { get; }"}</code> | <span className="api-desc">Only empty containers can be decrafted.</span> |
| <Link id="m-alta-liquid-iliquidcontainerinternal-outtransition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" Alta.Liquid.ILiquidContainerInternal.OutTransition { get; }"}</code> | <span className="api-desc">The transition for liquid leaving this container.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/liquidfillfilter">{"LiquidFillFilter"}</Link>{" AddFilter"}</code> | <span className="api-desc">Lets other components refuse a liquid before it is added.</span> |
| <Link id="m-containedliquidchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/liquidtypechangedhandler">{"LiquidTypeChangedHandler"}</Link>{" ContainedLiquidChanged"}</code> | <span className="api-desc">Raised with the old and new liquid when it changes.</span> |
| <Link id="m-contentlevelchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontaineramountchangedhandler">{"LiquidContainerAmountChangedHandler"}</Link>{" ContentLevelChanged"}</code> | <span className="api-desc">Raised with the old and new level when the level changes.</span> |
| <Link id="m-totalamountshownchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainerhandler">{"LiquidContainerHandler"}</Link>{" TotalAmountShownChanged"}</code> | <span className="api-desc">Raised when the shown amount changes, including during pours.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canaddto-2" /><code>{"bool CanAddTo("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquid)"}</code> | <span className="api-desc">True if adding is allowed and no `AddFilter` handler refuses this liquid.</span> |
| <Link id="m-fillinto" /><code>{"static bool FillInto("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" from, "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" to, int amountToFill, bool isForced = false)"}</code> | <span className="api-desc">Server: moves units from one container to another if they are compatible and there is room. Static.</span> |
| <Link id="m-fillintocontainer" /><code>{"bool FillIntoContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer, int amountToFill, bool isForced = false)"}</code> | <span className="api-desc">Server: pours units from this container into another.</span> |
| <Link id="m-forceempty" /><code>{"void ForceEmpty()"}</code> | <span className="api-desc">Removes all liquid, ignoring `CanRemoveFrom`.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the level and content sync messages.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: syncs the starting level.</span> |
| <Link id="m-iscompatiblewithothercontainer" /><code>{"virtual bool IsCompatibleWithOtherContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> | <span className="api-desc">True unless both containers hold different liquids. The global container always matches.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the level and liquid to a joining player.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Sets up the pour-out transition. Disables updates if there is no surface visual.</span> |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">On first spawn, fills a random amount of a liquid picked from the distribution, if one is set.</span> |
| <Link id="m-updatecontentrenderer" /><code>{"protected virtual void UpdateContentRenderer()"}</code> | <span className="api-desc">Sets the surface visual's fullness from the shown amount.</span> |

<details className="api-private">
<summary>22 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.AddLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" containedLiquid, int amountToAdd, bool isForced)"}</code> | <span className="api-desc">Server: adds an amount of a liquid, capped at the container size. Takes the liquid's type if empty. Infinite sources accept anything.</span> |
| <Link id="m-addliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.AddLiquidInTransition("}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | <span className="api-desc">Starts tracking a pour coming in; if empty, takes the source's liquid type so the visual shows it, and enables the update loop.</span> |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/mod/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | <span className="api-desc">Docking check: two containers may stack only if both are empty, or have the same level and the same liquid.</span> |
| <Link id="m-checktodisableupdateloop" /><code>{"private void CheckToDisableUpdateLoop()"}</code> | <span className="api-desc">Turns the update loop off and refreshes the visual once no pours are coming in.</span> |
| <Link id="m-clearcontainedliquidduetofailedtransition" /><code>{"private void ClearContainedLiquidDueToFailedTransition("}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" failedTransition)"}</code> | <span className="api-desc">If an incoming pour is cancelled and nothing is shown, clears the liquid type taken from it.</span> |
| <Link id="m-enableupdateloop" /><code>{"private void EnableUpdateLoop()"}</code> | <span className="api-desc">Server: turns the update loop on when liquid starts pouring out, if there is a surface visual.</span> |
| <Link id="m-oncontainedliquidchanged" /><code>{"private void OnContainedLiquidChanged("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldContent, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newContent)"}</code> | <span className="api-desc">Server sends the new liquid type to the chunk; raises `ContainedLiquidChanged` and updates the surface colour.</span> |
| <Link id="m-oncontentlevelchanged" /><code>{"private void OnContentLevelChanged()"}</code> | <span className="api-desc">Server sends the level to the chunk; refreshes the visual and raises `ContentLevelChanged` if the level changed.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">In the editor, refreshes the visual and clears the liquid type if the level is 0.</span> |
| <Link id="m-removeliquid" /><code>{"private bool Alta.Liquid.ILiquidContainerInternal.RemoveLiquid(int amountToRemove, bool isForced)"}</code> | <span className="api-desc">Server: removes an amount; clears the liquid type when it reaches 0. Infinite sources never run out.</span> |
| <Link id="m-removeliquidintransition" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.RemoveLiquidInTransition("}<Link to="/mod/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | <span className="api-desc">Stops tracking an incoming pour and refreshes or disables the update loop.</span> |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> | <span className="api-desc">When the entity is replaced, moves the liquid (or emptiness) into the replacement's container.</span> |
| <Link id="m-serializecontentlevel" /><code>{"private void SerializeContentLevel("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the level as an int from 0 to `containerSize`.</span> |
| <Link id="m-serializelevelandsettingsintostream" /><code>{"private void SerializeLevelAndSettingsIntoStream("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads `canAddTo`, `canRemoveFrom` and the level. Not called in this build.</span> |
| <Link id="m-serializeliquidcontent" /><code>{"private void SerializeLiquidContent("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the liquid: none, a custom mix as data, or a preset by hash. Infinite sources with none are given water.</span> |
| <Link id="m-setcontent" /><code>{"private void Alta.Liquid.ILiquidContainerInternal.SetContent("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquidContent)"}</code> | <span className="api-desc">Sets the liquid type directly without changing the level.</span> |
| <Link id="m-syncliquidamount-2" /><code>{"private void SyncLiquidAmount("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sync handler for the level and in-flight pour amount; clients update their visual and raise events. Rejected from clients.</span> |
| <Link id="m-syncliquidcontent-2" /><code>{"private void SyncLiquidContent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sync handler for the liquid type. Rejected from clients.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Server: recomputes the in-flight pour amount and the visual each frame while pours are active.</span> |
| <Link id="m-updatetotalliquidamountshown" /><code>{"private bool UpdateTotalLiquidAmountShown()"}</code> | <span className="api-desc">If the shown amount changed, raises `TotalAmountShownChanged` and (server) sends the amount to the chunk.</span> |
| <Link id="m-updatetotaltransitionamount" /><code>{"private bool UpdateTotalTransitionAmount()"}</code> | <span className="api-desc">Adds up incoming pour progress (largest first, as many as there is room for) minus the outgoing pour.</span> |
| <Link id="m-updatetransitionamountandrenderers" /><code>{"private void UpdateTransitionAmountAndRenderers(bool isForced)"}</code> | <span className="api-desc">Recomputes the in-flight amount on the server and refreshes the visual if it changed or when forced.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LiquidContainer`:

<div className="api-used-in">

[`CookingLiquidVisualTippingPointController.container`](/mod/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-container), [`LiquidHeatAreaController.liquidContainer`](/mod/game-api/types/alta-stats-effects/liquidheatareacontroller#m-liquidcontainer), [`PickupLiquidContainerEnabler.container`](/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-container), [`LiquidGradualDrinker.thisContainer`](/mod/game-api/types/global-i-l/liquidgradualdrinker#m-thiscontainer).

</div>
