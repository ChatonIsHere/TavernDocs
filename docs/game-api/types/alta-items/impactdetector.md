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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactDetector()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The `NetworkEntity` on the same object. |

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> | Impact channels this detector responds to. Particle hits on other channels are ignored. |
| <Link id="m-collidermodifiers" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{"> colliderModifiers"}</code> | Per-collider modifiers, filled from `mappedColliders` in `Awake`. |
| <Link id="m-currentsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" currentSettings"}</code> | Backing field for `Settings`. |
| <Link id="m-detectorcentral" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorcentral">{"ImpactDetectorCentral"}</Link>{" detectorCentral"}</code> | Optional `ImpactDetectorCentral` on the same object that syncs impacts for this detector. |
| <Link id="m-equipmentslot" /><code>{"private "}<Link to="/game-api/types/alta-items/equipmentreference">{"EquipmentReference"}</Link>{" equipmentSlot"}</code> | Equipment reference whose armour is returned by `CurrentArmor`. |
| <Link id="m-hardnesslevel" /><code>{"private uint hardnessLevel"}</code> | Backing field for `HardnessLevel`. Set from the physical material. |
| <Link id="m-healthtarget" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthTarget"}</code> | Backing field for `HealthTarget`. |
| <Link id="m-hitcooldowns" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{", float> hitCooldowns"}</code> | Per-tool time before which further hits from that tool are ignored (the global hit cooldown). |
| <Link id="m-immunitygroups" /><code>{"private List<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> immunityGroups"}</code> | Backing field for `ImmunityGroups`. |
| <Link id="m-islocalclient" /><code>{"private bool isLocalClient"}</code> | True when this detector is on the local player's own body. |
| <Link id="m-isoverridingimpactoreffects" /><code>{"private bool isOverridingImpactorEffects"}</code> | Backing field for `IsOverridingImpactorEffects`. |
| <Link id="m-ispartofplayercontroller" /><code>{"private bool isPartOfPlayerController"}</code> | True when this detector is on any player's body. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mappedcolliders" /><code>{"private "}<Link to="/game-api/types/alta-items/collidermap">{"ColliderMap"}</Link>{"[] mappedColliders"}</code> | Collider and modifier pairs, copied into `colliderModifiers` on `Awake`. |
| <Link id="m-particlecollisions" /><code>{"private static List<ParticleCollisionEvent> particleCollisions"}</code> | Shared reusable list for particle collision events. |
| <Link id="m-syncimpact" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/impactdetector-impactsyncarguments">{"ImpactDetector.ImpactSyncArguments"}</Link>{"> syncImpact"}</code> | Method sync that sends client-resolved hits (`SyncImpact`) to the server and other clients. |

</details>

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

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkentitybehaviour-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Networking.INetworkEntityBehaviour.Entity { get; }"}</code> | Explicit interface property returning the detector's `entity` field. |

</details>

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
| <Link id="m-prereceivesyncedhit" /><code>{"protected virtual void PreReceiveSyncedHit()"}</code> | Hook for subclasses, called just before a hit received from the network is applied. |

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleparticleasliquidcollision" /><code>{"private void HandleParticleAsLiquidCollision(GameObject other)"}</code> | Server: when a liquid particle hits a detector with health, applies the liquid's effects if it can be absorbed through skin. |
| <Link id="m-handleparticlehit" /><code>{"private void HandleParticleHit(GameObject other)"}</code> | Builds an `ImpactHit` from a `ParticleImpactor` on a matching channel and raises `ParticleHit`. Called from `OnParticleCollision`. |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | Creates the `syncImpact` method sync, unless an `ImpactDetectorCentral` sends impacts for this detector instead. |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Marks the detector as part of the local player's body (`isPartOfPlayerController` and `isLocalClient`). |
| <Link id="m-initializeasremoteplayer" /><code>{"private void IInitializeAsRemotePlayer.InitializeAsRemotePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Marks the detector as part of a remote player's body. |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Does nothing. |
| <Link id="m-isforcedclientsideimpact" /><code>{"private bool IsForcedClientSideImpact("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | True for a player-body detector unless the tool is held by a real player, so the hit player's client resolves it. |
| <Link id="m-isimpactclientsideonly" /><code>{"private bool IsImpactClientSideOnly("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, out "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" wielder)"}</code> | True when a player wields the tool and the target is not a player, so the wielder's client resolves the hit. |
| <Link id="m-islocalplayerbeinghit" /><code>{"private bool IsLocalPlayerBeingHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | True on the local player's own body detectors when the hit is a forced client-side impact. |
| <Link id="m-islocalplayerhittingnonplayer" /><code>{"private bool IsLocalPlayerHittingNonPlayer("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | True when the local player wields the tool and the target is not a player. |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Does nothing. |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Does nothing. |
| <Link id="m-renderdamagepopup" /><code>{"private void RenderDamagePopup("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | Shows a damage popup at the hit point, split into base and bonus damage, and optionally a damage message. |
| <Link id="m-runplayerevents" /><code>{"private void RunPlayerEvents("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | Server: if the hit counts for a progression path, reports it to the hitting player's events manager for experience. |
| <Link id="m-setphysicalmaterial" /><code>{"private void IListenToPhysicalMaterial.SetPhysicalMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" newMaterial)"}</code> | Copies the new physical material's hardness level into `hardnessLevel`. |
| <Link id="m-shouldrefusesyncedhit" /><code>{"private static bool ShouldRefuseSyncedHit("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" fromPlayer)"}</code> | Server: refuses a synced hit when the tool's last interactor is not the sending player. Off in local tests. |
| <Link id="m-updatedebugdamagedisplayer" /><code>{"private void UpdateDebugDamageDisplayer("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | Reports dealt damage to the hitting player's damage displayer, when that player is local. |

</details>

## Used in

Members of other types that take, return or hold a `ImpactDetector`:

[`ForgedModel<TB, TA>.impactDetector`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-impactdetector), [`ForgedModel<TB, TA>.ImpactDetector`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-impactdetector-2), [`ConfirmationCraftingPart.ClientSideNailHitSync.GetImpactDamage`](/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync#m-getimpactdamage), [`GenericCraftingNail.impactDetector`](/game-api/types/alta-crafting/genericcraftingnail#m-impactdetector), [`GenericCraftingNail.ImpactDetector`](/game-api/types/alta-crafting/genericcraftingnail#m-impactdetector-2), [`GenericCraftingStation.ClientSideNailHitSync.GetImpactDamage`](/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync#m-getimpactdamage), [`ContactPointStructure.ContactPointStructure`](/game-api/types/alta-items/contactpointstructure#m-ctor), [`ContactPointStructure.Detector`](/game-api/types/alta-items/contactpointstructure#m-detector), [`DelayedImpactResolver.Hit`](/game-api/types/alta-items/delayedimpactresolver#m-hit), [`DelayedImpactResolver.ProcessImmediate`](/game-api/types/alta-items/delayedimpactresolver#m-processimmediate), [`DelayedImpactResolver.ImpactDetectorHit.impactDetector`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-impactdetector), [`DelayedImpactResolver.ImpactDetectorHit.ImpactDetectorHit`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-ctor), [`EmbeddableSurface.detector`](/game-api/types/alta-items/embeddablesurface#m-detector), [`ImpactDetectorCentral.availableDetectors`](/game-api/types/alta-items/impactdetectorcentral#m-availabledetectors), [`ImpactDetectorCentral.SendArguments`](/game-api/types/alta-items/impactdetectorcentral#m-sendarguments), [`ImpactDetectorCentral.CentralizedArguments.detector`](/game-api/types/alta-items/impactdetectorcentral-centralizedarguments#m-detector), [`ImpactDetectorCentral.CentralizedArguments.Serialize`](/game-api/types/alta-items/impactdetectorcentral-centralizedarguments#m-serialize), [`ImpactHit.ImpactDetector`](/game-api/types/alta-items/impacthit#m-impactdetector), [`ImpactHit.ImpactHit`](/game-api/types/alta-items/impacthit#m-ctor-2), [`ImpactHitThresholdTrigger.detector`](/game-api/types/alta-items/impacthitthresholdtrigger#m-detector), [`ImpactHitTrigger.detector`](/game-api/types/alta-items/impacthittrigger#m-detector), [`ImpactHitWithTool.ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactTool.GenerateHit`](/game-api/types/alta-items/impacttool#m-generatehit), [`ImpactTool.GenerateImpactOnDetector`](/game-api/types/alta-items/impacttool#m-generateimpactondetector), [`ImpactTool.GetImpactDamageOn`](/game-api/types/alta-items/impacttool#m-getimpactdamageon), [`SparkSecondaryDetector.baseDetector`](/game-api/types/alta-items/sparksecondarydetector#m-basedetector), [`TriggerImpactTool.ignore`](/game-api/types/alta-items/triggerimpacttool#m-ignore), [`TriggerImpactTool.DelayedHit.DelayedHit`](/game-api/types/alta-items/triggerimpacttool-delayedhit#m-ctor), [`TriggerImpactTool.DelayedHit.detector`](/game-api/types/alta-items/triggerimpacttool-delayedhit#m-detector), [`DestroyableStaticObject.detectors`](/game-api/types/alta-networking/destroyablestaticobject#m-detectors), [`WoodcutTree.impactDetector`](/game-api/types/alta-crafting/woodcuttree#m-impactdetector), [`WoodcutTreeModel.impactDetector`](/game-api/types/alta-crafting/woodcuttreemodel#m-impactdetector), [`WoodcutTreeModel.SetImpactDetector`](/game-api/types/alta-crafting/woodcuttreemodel#m-setimpactdetector), [`BuildupPickup.impactDetector`](/game-api/types/global-a-b/builduppickup#m-impactdetector), [`Explosive.detectors`](/game-api/types/global-e-h/explosive#m-detectors), [`Fuse.impactDetector`](/game-api/types/global-e-h/fuse#m-impactdetector), [`HealthObject.impactDetectors`](/game-api/types/global-e-h/healthobject#m-impactdetectors), [`ImpactDetectionLogic.impactDetector`](/game-api/types/global-i-l/impactdetectionlogic#m-impactdetector), [`Rock.impactDetector`](/game-api/types/global-q-r/rock#m-impactdetector), [`SteelSong.activeDetectors`](/game-api/types/global-s/steelsong#m-activedetectors), [`SteelSong.activeEffects`](/game-api/types/global-s/steelsong#m-activeeffects), [`SteelSong.detectorHitCount`](/game-api/types/global-s/steelsong#m-detectorhitcount), [`SteelSong.detectorMap`](/game-api/types/global-s/steelsong#m-detectormap), [`SteelSong.ReleaseImpactorEffect`](/game-api/types/global-s/steelsong#m-releaseimpactoreffect-2).
