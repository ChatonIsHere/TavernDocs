---
title: "ImpactDetector"
description: "Component that receives hits from ImpactTools, particles and liquids on an object such as a creature, player or breakable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactDetector

A **class** in `Root.Township`, `Alta.Impact`.

Component that receives hits from `ImpactTool`s, particles and liquids on an object such as a creature, player or breakable. It filters by impact channel and passes hits on through `Hit`; tool hits are mostly worked out on the swinging player's client and synced.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IListenToPhysicalMaterial`](/game-api/types/global-i-l/ilistentophysicalmaterial), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer), [`IInitializeAsRemotePlayer`](/game-api/types/global-i-l/iinitializeasremoteplayer)
- **Derived types** [`CraftableImpactDetectorBase`](/game-api/types/alta-items/craftableimpactdetectorbase)
- **Nested types** [`ImpactSyncArguments`](/game-api/types/alta-items/impactdetector-impactsyncarguments)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts#impactdetector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactDetector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> |  |
| <Link id="m-collidermodifiers" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{"> colliderModifiers"}</code> |  |
| <Link id="m-currentsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" currentSettings"}</code> |  |
| <Link id="m-detectorcentral" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorcentral">{"ImpactDetectorCentral"}</Link>{" detectorCentral"}</code> |  |
| <Link id="m-entity" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The `NetworkEntity` on the same object. |
| <Link id="m-equipmentslot" /><code>{"private "}<Link to="/game-api/types/alta-items/equipmentreference">{"EquipmentReference"}</Link>{" equipmentSlot"}</code> |  |
| <Link id="m-hardnesslevel" /><code>{"private uint hardnessLevel"}</code> |  |
| <Link id="m-healthtarget" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthTarget"}</code> |  |
| <Link id="m-hitcooldowns" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{", float> hitCooldowns"}</code> |  |
| <Link id="m-immunitygroups" /><code>{"private List<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> immunityGroups"}</code> |  |
| <Link id="m-islocalclient" /><code>{"private bool isLocalClient"}</code> |  |
| <Link id="m-isoverridingimpactoreffects" /><code>{"private bool isOverridingImpactorEffects"}</code> |  |
| <Link id="m-ispartofplayercontroller" /><code>{"private bool isPartOfPlayerController"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-mappedcolliders" /><code>{"private "}<Link to="/game-api/types/alta-items/collidermap">{"ColliderMap"}</Link>{"[] mappedColliders"}</code> |  |
| <Link id="m-particlecollisions" /><code>{"private static List<ParticleCollisionEvent> particleCollisions"}</code> |  |
| <Link id="m-syncimpact" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/impactdetector-impactsyncarguments">{"ImpactDetector.ImpactSyncArguments"}</Link>{"> syncImpact"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] Channels { get; }"}</code> | The impact channels this detector responds to. |
| <Link id="m-collidermodifiers-2" /><code>{"Dictionary<Collider, "}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{"> ColliderModifiers { get; }"}</code> | Per-collider modifiers (for example weak spots) set up in the editor. |
| <Link id="m-currentarmor" /><code><Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" CurrentArmor { get; }"}</code> | The armour in the linked equipment slot, if any. |
| <Link id="m-hardnesslevel-2" /><code>{"uint HardnessLevel { get; set; }"}</code> | How hard the surface is. Updated from the physical material when it changes. |
| <Link id="m-hashealth" /><code>{"bool HasHealth { get; private set; }"}</code> | True when `HealthTarget` is set. |
| <Link id="m-healthtarget-2" /><code><Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" HealthTarget { get; set; }"}</code> | The `HealthObject` that takes damage from hits on this detector. |
| <Link id="m-immunitygroups-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> ImmunityGroups { get; }"}</code> | Groups of tools this detector ignores. |
| <Link id="m-isoverridingimpactoreffects-2" /><code>{"bool IsOverridingImpactorEffects { get; }"}</code> | When true, the detector's own effects are used instead of the impactor's. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" Settings { get; set; }"}</code> | The detector settings. Swapping them moves the effects listener to the new settings. |
| <Link id="m-alta-networking-inetworkentitybehaviour-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Networking.INetworkEntityBehaviour.Entity { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"event "}<Link to="/game-api/types/global-i-l/impacthandler">{"ImpactHandler"}</Link>{" Hit"}</code> | Raised for every accepted hit, both tool hits and direct `OnImpactHit` calls. |
| <Link id="m-particlehit" /><code>{"event "}<Link to="/game-api/types/global-i-l/impacthandler">{"ImpactHandler"}</Link>{" ParticleHit"}</code> | Raised when a matching `ParticleImpactor` particle hits. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"void OnCollisionEnter(Collision collision)"}</code> | Unity callback. Sends a collision with a wielded, moving tool to the delayed impact resolver; skips it on the server when a client should decide it. |
| <Link id="m-onimpacthit" /><code>{"void OnImpactHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Raises `Hit` for a hit that did not come from a tool collision. |
| <Link id="m-onparticlecollision" /><code>{"void OnParticleCollision(GameObject other)"}</code> | Unity callback. Turns `ParticleImpactor` particles into `ParticleHit` events and, on the server, applies skin-consumable liquid splashes. |
| <Link id="m-ontoolhit" /><code>{"void OnToolHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | Handles a tool hit: per-tool cooldown, path experience on the server, damage popups, syncs the hit if a local player caused it, then raises `Hit`. |
| <Link id="m-syncimpact-2" /><code>{"void SyncImpact("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/impactdetector-impactsyncarguments">{"ImpactDetector.ImpactSyncArguments"}</Link>{" arguments)"}</code> | Network handler for a synced hit. Rebuilds the hit from the tool entity and applies it; the server refuses hits from anyone but the tool's last holder. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Hooks the settings' hit effects (not on headless servers) and builds the collider modifier map. |
| <Link id="m-handleparticleasliquidcollision" /><code>{"private void HandleParticleAsLiquidCollision(GameObject other)"}</code> |  |
| <Link id="m-handleparticlehit" /><code>{"private void HandleParticleHit(GameObject other)"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> |  |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-initializeasremoteplayer" /><code>{"private void IInitializeAsRemotePlayer.InitializeAsRemotePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-isforcedclientsideimpact" /><code>{"private bool IsForcedClientSideImpact("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-isimpactclientsideonly" /><code>{"private bool IsImpactClientSideOnly("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, out "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" wielder)"}</code> |  |
| <Link id="m-islocalplayerbeinghit" /><code>{"private bool IsLocalPlayerBeingHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> |  |
| <Link id="m-islocalplayerhittingnonplayer" /><code>{"private bool IsLocalPlayerHittingNonPlayer("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> |  |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-prereceivesyncedhit" /><code>{"protected virtual void PreReceiveSyncedHit()"}</code> | Hook for subclasses, called just before a hit received from the network is applied. |
| <Link id="m-renderdamagepopup" /><code>{"private void RenderDamagePopup("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> |  |
| <Link id="m-runplayerevents" /><code>{"private void RunPlayerEvents("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> |  |
| <Link id="m-setphysicalmaterial" /><code>{"private void IListenToPhysicalMaterial.SetPhysicalMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" newMaterial)"}</code> |  |
| <Link id="m-shouldrefusesyncedhit" /><code>{"private static bool ShouldRefuseSyncedHit("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" fromPlayer)"}</code> |  |
| <Link id="m-updatedebugdamagedisplayer" /><code>{"private void UpdateDebugDamageDisplayer("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ImpactDetector`:

[`ForgedModel<TB, TA>.impactDetector`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-impactdetector), [`ForgedModel<TB, TA>.ImpactDetector`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-impactdetector-2), [`ConfirmationCraftingPart.ClientSideNailHitSync.GetImpactDamage`](/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync#m-getimpactdamage), [`GenericCraftingNail.impactDetector`](/game-api/types/alta-crafting/genericcraftingnail#m-impactdetector), [`GenericCraftingNail.ImpactDetector`](/game-api/types/alta-crafting/genericcraftingnail#m-impactdetector-2), [`GenericCraftingStation.ClientSideNailHitSync.GetImpactDamage`](/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync#m-getimpactdamage), [`ContactPointStructure.ContactPointStructure`](/game-api/types/alta-items/contactpointstructure#m-ctor), [`ContactPointStructure.Detector`](/game-api/types/alta-items/contactpointstructure#m-detector), [`DelayedImpactResolver.Hit`](/game-api/types/alta-items/delayedimpactresolver#m-hit), [`DelayedImpactResolver.ProcessImmediate`](/game-api/types/alta-items/delayedimpactresolver#m-processimmediate), [`DelayedImpactResolver.ImpactDetectorHit.impactDetector`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-impactdetector), [`DelayedImpactResolver.ImpactDetectorHit.ImpactDetectorHit`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-ctor), [`EmbeddableSurface.detector`](/game-api/types/alta-items/embeddablesurface#m-detector), [`ImpactDetectorCentral.availableDetectors`](/game-api/types/alta-items/impactdetectorcentral#m-availabledetectors), [`ImpactDetectorCentral.SendArguments`](/game-api/types/alta-items/impactdetectorcentral#m-sendarguments), [`ImpactDetectorCentral.CentralizedArguments.detector`](/game-api/types/alta-items/impactdetectorcentral-centralizedarguments#m-detector), [`ImpactDetectorCentral.CentralizedArguments.Serialize`](/game-api/types/alta-items/impactdetectorcentral-centralizedarguments#m-serialize), [`ImpactHit.ImpactDetector`](/game-api/types/alta-items/impacthit#m-impactdetector), [`ImpactHit.ImpactHit`](/game-api/types/alta-items/impacthit#m-ctor-2), [`ImpactHitThresholdTrigger.detector`](/game-api/types/alta-items/impacthitthresholdtrigger#m-detector), [`ImpactHitTrigger.detector`](/game-api/types/alta-items/impacthittrigger#m-detector), [`ImpactHitWithTool.ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactTool.GenerateHit`](/game-api/types/alta-items/impacttool#m-generatehit), [`ImpactTool.GenerateImpactOnDetector`](/game-api/types/alta-items/impacttool#m-generateimpactondetector), [`ImpactTool.GetImpactDamageOn`](/game-api/types/alta-items/impacttool#m-getimpactdamageon), [`SparkSecondaryDetector.baseDetector`](/game-api/types/alta-items/sparksecondarydetector#m-basedetector), [`TriggerImpactTool.ignore`](/game-api/types/alta-items/triggerimpacttool#m-ignore), [`TriggerImpactTool.DelayedHit.DelayedHit`](/game-api/types/alta-items/triggerimpacttool-delayedhit#m-ctor), [`TriggerImpactTool.DelayedHit.detector`](/game-api/types/alta-items/triggerimpacttool-delayedhit#m-detector), [`DestroyableStaticObject.detectors`](/game-api/types/alta-networking/destroyablestaticobject#m-detectors), [`WoodcutTree.impactDetector`](/game-api/types/alta-crafting/woodcuttree#m-impactdetector), [`WoodcutTreeModel.impactDetector`](/game-api/types/alta-crafting/woodcuttreemodel#m-impactdetector), [`WoodcutTreeModel.SetImpactDetector`](/game-api/types/alta-crafting/woodcuttreemodel#m-setimpactdetector), [`BuildupPickup.impactDetector`](/game-api/types/global-a-b/builduppickup#m-impactdetector), [`Explosive.detectors`](/game-api/types/global-e-h/explosive#m-detectors), [`Fuse.impactDetector`](/game-api/types/global-e-h/fuse#m-impactdetector), [`HealthObject.impactDetectors`](/game-api/types/global-e-h/healthobject#m-impactdetectors), [`ImpactDetectionLogic.impactDetector`](/game-api/types/global-i-l/impactdetectionlogic#m-impactdetector), [`Rock.impactDetector`](/game-api/types/global-q-r/rock#m-impactdetector), [`SteelSong.activeDetectors`](/game-api/types/global-s/steelsong#m-activedetectors), [`SteelSong.activeEffects`](/game-api/types/global-s/steelsong#m-activeeffects), [`SteelSong.detectorHitCount`](/game-api/types/global-s/steelsong#m-detectorhitcount), [`SteelSong.detectorMap`](/game-api/types/global-s/steelsong#m-detectormap), [`SteelSong.ReleaseImpactorEffect`](/game-api/types/global-s/steelsong#m-releaseimpactoreffect-2).
