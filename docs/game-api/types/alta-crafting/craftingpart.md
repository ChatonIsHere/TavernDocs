---
title: "CraftingPart"
description: "Network behaviour on an item that can be joined to other parts (blade into guard, guard into handle)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingPart

A **class** in `Root.Township`, `Alta.Crafting`.

Network behaviour on an item that can be joined to other parts (blade into guard, guard into handle). Tracks the part tree, size, weight and impactors, and handles craft requests. A pickup reaches it through `Pickup.CraftingPart`; joining itself goes through `JointSlot`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler), [`IBlockGenericDecrafting`](/game-api/types/alta-crafting/iblockgenericdecrafting)
- **Derived types** [`AddonCraftingPart`](/game-api/types/global-a-b/addoncraftingpart), [`ConfirmationCraftingPart`](/game-api/types/alta-crafting/confirmationcraftingpart)
- **Documented in** [Crafting](/game-api/game-systems/crafting#craftingpart)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CraftingPart()"}</code> |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-adddurabilitytoslot" /><code>{"private bool addDurabilityToSlot"}</code> |
| <Link id="m-attemptcraft" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> attemptCraft"}</code> |
| <Link id="m-canblockdefault" /><code>{"private bool canBlockDefault"}</code> |
| <Link id="m-canstoreflipped" /><code>{"private bool canStoreFlipped"}</code> |
| <Link id="m-currentlength" /><code>{"private float currentLength"}</code> |
| <Link id="m-durabilitymodule" /><code>{"private "}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" durabilityModule"}</code> |
| <Link id="m-hitdependants" /><code>{"private Component[] hitDependants"}</code> |
| <Link id="m-impactormaps" /><code>{"private "}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"[] impactorMaps"}</code> |
| <Link id="m-impacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> |
| <Link id="m-insert" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointinsert">{"JointInsert"}</Link>{" insert"}</code> |
| <Link id="m-isbasedoninteraction" /><code>{"private bool isBasedOnInteraction"}</code> |
| <Link id="m-isstarted" /><code>{"private bool isStarted"}</code> |
| <Link id="m-length" /><code>{"private float length"}</code> |
| <Link id="m-lengthaxis" /><code>{"private Vector3 lengthAxis"}</code> |
| <Link id="m-mass" /><code>{"private float mass"}</code> |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"[] slots"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedto" /><code><Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" ConnectedTo { get; }"}</code> | The part this one is inserted into, or null if it is the top. |
| <Link id="m-impactormaps-2" /><code><Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"[] ImpactorMaps { get; }"}</code> | The impactor maps found in this part's children. |
| <Link id="m-impacttool-2" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" { get; }"}</code> | The `ImpactTool` on this part, if any. The top part's tool takes over child impactors. |
| <Link id="m-insert-2" /><code><Link to="/game-api/types/alta-crafting/jointinsert">{"JointInsert"}</Link>{" Insert { get; }"}</code> | The `JointInsert` that plugs this part into another part's slot. |
| <Link id="m-isstoredflipped" /><code>{"bool IsStoredFlipped { get; }"}</code> | Whether the crafted object should sit flipped in a dock, based on which side holds more size. |
| <Link id="m-lengthaxis-2" /><code>{"Vector3 LengthAxis { get; }"}</code> | The part's length direction in world space. |
| <Link id="m-partcount" /><code>{"int PartCount { get; private set; }"}</code> | How many parts are in this part's subtree, including itself. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup on the same object. |
| <Link id="m-potentialconnection" /><code><Link to="/game-api/types/alta-crafting/craftingoptions">{"CraftingOptions"}</Link>{" PotentialConnection { get; set; }"}</code> | The connection options currently being shown for this part, if any. |
| <Link id="m-size" /><code>{"int Size { get; private set; }"}</code> | Total size of this part and everything inserted into it. Starts at the item's size. |
| <Link id="m-slots-2" /><code><Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"[] Slots { get; }"}</code> | The joint slots other parts can go into. |
| <Link id="m-totalweight" /><code>{"float TotalWeight { get; }"}</code> | This part's weight plus the total weight of every part inserted into it. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-alta-crafting-iblockgenericdecrafting-candecraft" /><code>{"private bool Alta.Crafting.IBlockGenericDecrafting.CanDecraft { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-oncrafted" /><code>{"event "}<Link to="/game-api/types/alta-crafting/craftingchanged">{"CraftingChanged"}</Link>{" OnCrafted"}</code> | Raised when a connection involving this part is made, with whether it came from loading. |
| <Link id="m-ondecrafted" /><code>{"event "}<Link to="/game-api/types/alta-crafting/craftingchanged">{"CraftingChanged"}</Link>{" OnDecrafted"}</code> | Raised when a connection involving this part is removed, with whether it came from loading. |
| <Link id="m-rootchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> RootChanged"}</code> | Raised when the root of this part's crafted object changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsize" /><code>{"void AddSize("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insert, Quaternion rotation, out float dot)"}</code> | Adds an inserted part's size, part count, length and colliders to this part and every part above it. Called by `JointSlot` on connect. |
| <Link id="m-attachdurability" /><code>{"void AttachDurability("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" to)"}</code> | If set to pass durability on, links this part's durability to the nearest part above that keeps its own. |
| <Link id="m-attemptcraft-2" /><code>{"virtual void AttemptCraft("}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot)"}</code> | Asks to connect this part into a slot. The server does it at once; a client sends the request to the server. |
| <Link id="m-comparebuild" /><code>{"static bool CompareBuild("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" partA, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" partB)"}</code> | Static: true if two parts are built the same (material, durability stage and the same items in each slot, recursively). Docks use it for stacking. |
| <Link id="m-crafted" /><code>{"void Crafted(bool isLoad)"}</code> | Raises `OnCrafted`. On the server, also broadcasts an `ItemCraftedEvent` on the township event bus when a player did it. |
| <Link id="m-decrafted" /><code>{"void Decrafted(bool isLoad)"}</code> | Raises `OnDecrafted`. |
| <Link id="m-detachdurability" /><code>{"void DetachDurability("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" from)"}</code> | Unlinks this part's durability from the part it was joined to. |
| <Link id="m-disconnectfull" /><code>{"void DisconnectFull()"}</code> | Takes every part off this one, deepest first, then pulls this part out of its slot. The server calls it when the pickup breaks. |
| <Link id="m-gettoplevel" /><code><Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" GetTopLevel()"}</code> | The root part of the crafted object this part is in (itself if not inserted). |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced craft request message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks the pickup's break event so a breaking crafted item comes apart. |
| <Link id="m-listentoroot" /><code>{"void ListenToRoot(Action<"}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> listener)"}</code> | Subscribes to `RootChanged` and, if already started, calls the listener with the current root. |
| <Link id="m-lostchildastoplevel" /><code>{"void LostChildAsTopLevel("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot)"}</code> | Called on the root when a part comes off: updates crafted state, scale, impactors and re-grips held hands. |
| <Link id="m-onrootchanged" /><code>{"void OnRootChanged("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> | Raises `RootChanged` with the new root part. |
| <Link id="m-onweightchanged" /><code>{"void OnWeightChanged()"}</code> | Passes a weight change on to the pickup. |
| <Link id="m-prepareforinsert" /><code>{"void PrepareForInsert()"}</code> | Undocks the part, makes it non-interactable and crafted, and removes its rigidbody before it is joined. |
| <Link id="m-prepareforremoval" /><code>{"void PrepareForRemoval()"}</code> | Makes the part interactable again and gives it back a rigidbody before it is taken off. |
| <Link id="m-receivedchildastoplevel" /><code>{"void ReceivedChildAsTopLevel("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot, float craftingDot)"}</code> | Called on the root when a part is added: marks crafted, adjusts dock scale, registers impactors and re-grips the hand. |
| <Link id="m-removesize" /><code>{"void RemoveSize("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insert, "}<Link to="/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" bestValue)"}</code> | Removes a taken-off part's size, count, length and colliders here and above, and updates the loot value. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Reads the rigidbody mass, sets size from the item and, if crafting is based on interaction, watches grabs to offer connections. |
| <Link id="m-craftwithslot" /><code>{"protected void CraftWithSlot("}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot, bool isIgnoringPreConfirmation = false)"}</code> | Protected: connects into a slot if the slot is free and supports this part's insert type. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptcraft-3" /><code>{"private void AttemptCraft("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint slotIdentifier)"}</code> | Asks to connect this part into a slot. The server does it at once; a client sends the request to the server. |
| <Link id="m-break" /><code>{"private void Break("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-checkpossibleconnections" /><code>{"private void CheckPossibleConnections("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-drawlength" /><code>{"private void DrawLength(Transform insertPosition)"}</code> |  |
| <Link id="m-getmapsonpart" /><code>{"private static void GetMapsOnPart("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, HashSet<"}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps)"}</code> |  |
| <Link id="m-hasallcraftedeventprerequisites" /><code>{"private bool HasAllCraftedEventPrerequisites()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-ontoplevelchildrenchanged" /><code>{"private void OnTopLevelChildrenChanged()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-processcraftedevent" /><code>{"private static void ProcessCraftedEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, uint primaryPartHash, uint secondaryPartHash)"}</code> |  |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

</details>

## Used in

Members of other types that take, return or hold a `CraftingPart`:

[`ChiselingFilterSettings.GetBestChiselingTool`](/game-api/types/alta-crafting/chiselingfiltersettings#m-getbestchiselingtool), [`AdditionalOwnedDock.RootChanged`](/game-api/types/alta-crafting/additionalowneddock#m-rootchanged), [`AdditionalOwnedDock.tracking`](/game-api/types/alta-crafting/additionalowneddock#m-tracking), [`ConfirmationCraftingPart.CraftClear`](/game-api/types/alta-crafting/confirmationcraftingpart#m-craftclear), [`CraftingChanged.BeginInvoke`](/game-api/types/alta-crafting/craftingchanged#m-begininvoke), [`CraftingChanged.Invoke`](/game-api/types/alta-crafting/craftingchanged#m-invoke), [`CraftingOptions.CompilePossibilities`](/game-api/types/alta-crafting/craftingoptions#m-compilepossibilities), [`CraftingOptions.CraftingOptions`](/game-api/types/alta-crafting/craftingoptions#m-ctor), [`CraftingOptions.Create`](/game-api/types/alta-crafting/craftingoptions#m-create), [`CraftingOptions.insertPart`](/game-api/types/alta-crafting/craftingoptions#m-insertpart), [`CraftingOptions.Involves`](/game-api/types/alta-crafting/craftingoptions#m-involves), [`CraftingOptions.slotPart`](/game-api/types/alta-crafting/craftingoptions#m-slotpart), [`CraftingPartTracker.CraftingPartTracker`](/game-api/types/alta-crafting/craftingparttracker#m-ctor), [`CraftingPartTracker.Part`](/game-api/types/alta-crafting/craftingparttracker#m-part), [`CraftingTester.GetVariants`](/game-api/types/alta-crafting/craftingtester#m-getvariants), [`CraftingTester.insertMap`](/game-api/types/alta-crafting/craftingtester#m-insertmap), [`CraftingTester.RandomizeSlots`](/game-api/types/alta-crafting/craftingtester#m-randomizeslots), [`CraftingTester.roots`](/game-api/types/alta-crafting/craftingtester#m-roots), [`CraftingTester.workingRandomList`](/game-api/types/alta-crafting/craftingtester#m-workingrandomlist), [`DecraftingComponent.AddPartSlots`](/game-api/types/alta-crafting/decraftingcomponent#m-addpartslots), [`DecraftingComponent.currentPart`](/game-api/types/alta-crafting/decraftingcomponent#m-currentpart), [`DecraftingComponent.ReMapSlots`](/game-api/types/alta-crafting/decraftingcomponent#m-remapslots), [`DecraftingComponent.ValidateCraftingPart`](/game-api/types/alta-crafting/decraftingcomponent#m-validatecraftingpart), [`DisableLightOnDock.RootSet`](/game-api/types/alta-crafting/disablelightondock#m-rootset), [`GenericAssemblyPart.craftingPart`](/game-api/types/alta-crafting/genericassemblypart#m-craftingpart), [`GenericAssemblyPart.CraftingPart`](/game-api/types/alta-crafting/genericassemblypart#m-craftingpart-2), [`GenericAssemblyStation.FixPosition`](/game-api/types/alta-crafting/genericassemblystation#m-fixposition), [`GenericAssemblyStation.ValidateCraftingPart`](/game-api/types/alta-crafting/genericassemblystation#m-validatecraftingpart), [`JointPoint.craftingPart`](/game-api/types/alta-crafting/jointpoint#m-craftingpart), [`JointPoint.CraftingPart`](/game-api/types/alta-crafting/jointpoint#m-craftingpart-2), [`JointSlot.AlignAndChild`](/game-api/types/alta-crafting/jointslot#m-alignandchild), [`JointSlot.CalculateConnectedRotation`](/game-api/types/alta-crafting/jointslot#m-calculateconnectedrotation), [`JointSlot.ConnectedPart`](/game-api/types/alta-crafting/jointslot#m-connectedpart), [`JointSlot.TryConnect`](/game-api/types/alta-crafting/jointslot#m-tryconnect), [`Fire.craftingPart`](/game-api/types/alta-stats-effects/fire#m-craftingpart), [`Fire.RootSet`](/game-api/types/alta-stats-effects/fire#m-rootset), [`CraftableImpactDetectorBase.craftingPart`](/game-api/types/alta-items/craftableimpactdetectorbase#m-craftingpart), [`CraftableImpactDetectorBase.RootSet`](/game-api/types/alta-items/craftableimpactdetectorbase#m-rootset), [`EmbeddableManager.unEmbedAllOnCrafted`](/game-api/types/alta-items/embeddablemanager#m-unembedalloncrafted), [`EmbeddableManager.UnEmbedAllOnCrafted`](/game-api/types/alta-items/embeddablemanager#m-unembedalloncrafted-2), [`ImpactModifier.basePart`](/game-api/types/alta-items/impactmodifier#m-basepart), [`ImpactModifier.OnRootChanged`](/game-api/types/alta-items/impactmodifier#m-onrootchanged), [`ImpactTool.UpdateIndexedImpactorsOnCraftingPart`](/game-api/types/alta-items/impacttool#m-updateindexedimpactorsoncraftingpart), [`CraftedDocks.ChangedRoot`](/game-api/types/alta-items/crafteddocks#m-changedroot), [`CraftedDocks.craftingPart`](/game-api/types/alta-items/crafteddocks#m-craftingpart), [`DockedOffset.craftingPart`](/game-api/types/alta-items/dockedoffset#m-craftingpart), [`DockedOffset.RootChanged`](/game-api/types/alta-items/dockedoffset#m-rootchanged), [`DockedOffset.top`](/game-api/types/alta-items/dockedoffset#m-top), [`OnlyAllowDockingWhenEmpty.craftingPart`](/game-api/types/alta-items/onlyallowdockingwhenempty#m-craftingpart), [`OnlyAllowDockingWhenEmpty.RootChanged`](/game-api/types/alta-items/onlyallowdockingwhenempty#m-rootchanged), [`OnlyAllowDockingWhenEmpty.top`](/game-api/types/alta-items/onlyallowdockingwhenempty#m-top), [`ArrowFlightModifierComponent.craftingPart`](/game-api/types/global-a-b/arrowflightmodifiercomponent#m-craftingpart), [`ArrowFlightModifierComponent.OnCrafted`](/game-api/types/global-a-b/arrowflightmodifiercomponent#m-oncrafted), [`ArrowFlightModifierComponent.OnDecrafted`](/game-api/types/global-a-b/arrowflightmodifiercomponent#m-ondecrafted), [`ItemCraftedStep.craftingParts`](/game-api/types/game-other-namespaces/itemcraftedstep#m-craftingparts), [`DiggingImpactor.OnRootChanged`](/game-api/types/global-c-d/diggingimpactor#m-onrootchanged), [`Explosive.RootChanged`](/game-api/types/global-e-h/explosive#m-rootchanged), [`HierarchyInteractionFilter.UpdateParent`](/game-api/types/global-e-h/hierarchyinteractionfilter#m-updateparent), [`Pickup.craftingPart`](/game-api/types/global-p/pickup#m-craftingpart), [`Pickup.CraftingPart`](/game-api/types/global-p/pickup#m-craftingpart-2) and 4 more.
