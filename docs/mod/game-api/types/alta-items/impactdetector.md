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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IListenToPhysicalMaterial`](/mod/game-api/types/global-i-l/ilistentophysicalmaterial), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour), [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer), [`IInitializeAsRemotePlayer`](/mod/game-api/types/global-i-l/iinitializeasremoteplayer)
- **Derived types** [`CraftableImpactDetectorBase`](/mod/game-api/types/alta-items/craftableimpactdetectorbase)
- **Nested types** [`ImpactSyncArguments`](/mod/game-api/types/alta-items/impactdetector-impactsyncarguments)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts#impactdetector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The `NetworkEntity` on the same object.</span> |

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> | <span className="api-desc">Impact channels this detector responds to. Particle hits on other channels are ignored.</span> |
| <Link id="m-collidermodifiers" /><code>{"private Dictionary<Collider, "}<Link to="/mod/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{"> colliderModifiers"}</code> | <span className="api-desc">Per-collider modifiers, filled from `mappedColliders` in `Awake`.</span> |
| <Link id="m-currentsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" currentSettings"}</code> | <span className="api-desc">Backing field for `Settings`.</span> |
| <Link id="m-detectorcentral" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorcentral">{"ImpactDetectorCentral"}</Link>{" detectorCentral"}</code> | <span className="api-desc">Optional `ImpactDetectorCentral` on the same object that syncs impacts for this detector.</span> |
| <Link id="m-equipmentslot" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/equipmentreference">{"EquipmentReference"}</Link>{" equipmentSlot"}</code> | <span className="api-desc">Equipment reference whose armour is returned by `CurrentArmor`.</span> |
| <Link id="m-hardnesslevel" /><code>{"private uint hardnessLevel"}</code> | <span className="api-desc">Backing field for `HardnessLevel`. Set from the physical material.</span> |
| <Link id="m-healthtarget" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthTarget"}</code> | <span className="api-desc">Backing field for `HealthTarget`.</span> |
| <Link id="m-hitcooldowns" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{", float> hitCooldowns"}</code> | <span className="api-desc">Per-tool time before which further hits from that tool are ignored (the global hit cooldown).</span> |
| <Link id="m-immunitygroups" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> immunityGroups"}</code> | <span className="api-desc">Backing field for `ImmunityGroups`.</span> |
| <Link id="m-islocalclient" /><code>{"private bool isLocalClient"}</code> | <span className="api-desc">True when this detector is on the local player's own body.</span> |
| <Link id="m-isoverridingimpactoreffects" /><code>{"private bool isOverridingImpactorEffects"}</code> | <span className="api-desc">Backing field for `IsOverridingImpactorEffects`.</span> |
| <Link id="m-ispartofplayercontroller" /><code>{"private bool isPartOfPlayerController"}</code> | <span className="api-desc">True when this detector is on any player's body.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mappedcolliders" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/collidermap">{"ColliderMap"}</Link>{"[] mappedColliders"}</code> | <span className="api-desc">Collider and modifier pairs, copied into `colliderModifiers` on `Awake`.</span> |
| <Link id="m-particlecollisions" /><code>{"private static List<ParticleCollisionEvent> particleCollisions"}</code> | <span className="api-desc">Shared reusable list for particle collision events.</span> |
| <Link id="m-syncimpact" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/impactdetector-impactsyncarguments">{"ImpactDetector.ImpactSyncArguments"}</Link>{"> syncImpact"}</code> | <span className="api-desc">Method sync that sends client-resolved hits (`SyncImpact`) to the server and other clients.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels-2" /><code><Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] Channels { get; }"}</code> | <span className="api-desc">The impact channels this detector responds to.</span> |
| <Link id="m-collidermodifiers-2" /><code>{"Dictionary<Collider, "}<Link to="/mod/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{"> ColliderModifiers { get; }"}</code> | <span className="api-desc">Per-collider modifiers (for example weak spots) set up in the editor.</span> |
| <Link id="m-currentarmor" /><code><Link to="/mod/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" CurrentArmor { get; }"}</code> | <span className="api-desc">The armour in the linked equipment slot, if any.</span> |
| <Link id="m-hardnesslevel-2" /><code>{"uint HardnessLevel { get; set; }"}</code> | <span className="api-desc">How hard the surface is. Updated from the physical material when it changes.</span> |
| <Link id="m-hashealth" /><code>{"bool HasHealth { get; private set; }"}</code> | <span className="api-desc">True when `HealthTarget` is set.</span> |
| <Link id="m-healthtarget-2" /><code><Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" HealthTarget { get; set; }"}</code> | <span className="api-desc">The `HealthObject` that takes damage from hits on this detector.</span> |
| <Link id="m-immunitygroups-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> ImmunityGroups { get; }"}</code> | <span className="api-desc">Groups of tools this detector ignores.</span> |
| <Link id="m-isoverridingimpactoreffects-2" /><code>{"bool IsOverridingImpactorEffects { get; }"}</code> | <span className="api-desc">When true, the detector's own effects are used instead of the impactor's.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" Settings { get; set; }"}</code> | <span className="api-desc">The detector settings. Swapping them moves the effects listener to the new settings.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkentitybehaviour-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Networking.INetworkEntityBehaviour.Entity { get; }"}</code> | <span className="api-desc">Explicit interface property returning the detector's `entity` field.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/impacthandler">{"ImpactHandler"}</Link>{" Hit"}</code> | <span className="api-desc">Raised for every accepted hit, both tool hits and direct `OnImpactHit` calls.</span> |
| <Link id="m-particlehit" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/impacthandler">{"ImpactHandler"}</Link>{" ParticleHit"}</code> | <span className="api-desc">Raised when a matching `ParticleImpactor` particle hits.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Unity callback. Sends a collision with a wielded, moving tool to the delayed impact resolver; skips it on the server when a client should decide it.</span> |
| <Link id="m-onimpacthit" /><code>{"void OnImpactHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Raises `Hit` for a hit that did not come from a tool collision.</span> |
| <Link id="m-onparticlecollision" /><code>{"void OnParticleCollision(GameObject other)"}</code> | <span className="api-desc">Unity callback. Turns `ParticleImpactor` particles into `ParticleHit` events and, on the server, applies skin-consumable liquid splashes.</span> |
| <Link id="m-ontoolhit" /><code>{"void OnToolHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | <span className="api-desc">Handles a tool hit: per-tool cooldown, path experience on the server, damage popups, syncs the hit if a local player caused it, then raises `Hit`.</span> |
| <Link id="m-syncimpact-2" /><code>{"void SyncImpact("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/impactdetector-impactsyncarguments">{"ImpactDetector.ImpactSyncArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Network handler for a synced hit. Rebuilds the hit from the tool entity and applies it; the server refuses hits from anyone but the tool's last holder.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Hooks the settings' hit effects (not on headless servers) and builds the collider modifier map.</span> |
| <Link id="m-prereceivesyncedhit" /><code>{"protected virtual void PreReceiveSyncedHit()"}</code> | <span className="api-desc">Hook for subclasses, called just before a hit received from the network is applied.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleparticleasliquidcollision" /><code>{"private void HandleParticleAsLiquidCollision(GameObject other)"}</code> | <span className="api-desc">Server: when a liquid particle hits a detector with health, applies the liquid's effects if it can be absorbed through skin.</span> |
| <Link id="m-handleparticlehit" /><code>{"private void HandleParticleHit(GameObject other)"}</code> | <span className="api-desc">Builds an `ImpactHit` from a `ParticleImpactor` on a matching channel and raises `ParticleHit`. Called from `OnParticleCollision`.</span> |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | <span className="api-desc">Creates the `syncImpact` method sync, unless an `ImpactDetectorCentral` sends impacts for this detector instead.</span> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Marks the detector as part of the local player's body (`isPartOfPlayerController` and `isLocalClient`).</span> |
| <Link id="m-initializeasremoteplayer" /><code>{"private void IInitializeAsRemotePlayer.InitializeAsRemotePlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Marks the detector as part of a remote player's body.</span> |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-isforcedclientsideimpact" /><code>{"private bool IsForcedClientSideImpact("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">True for a player-body detector unless the tool is held by a real player, so the hit player's client resolves it.</span> |
| <Link id="m-isimpactclientsideonly" /><code>{"private bool IsImpactClientSideOnly("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, out "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" wielder)"}</code> | <span className="api-desc">True when a player wields the tool and the target is not a player, so the wielder's client resolves the hit.</span> |
| <Link id="m-islocalplayerbeinghit" /><code>{"private bool IsLocalPlayerBeingHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | <span className="api-desc">True on the local player's own body detectors when the hit is a forced client-side impact.</span> |
| <Link id="m-islocalplayerhittingnonplayer" /><code>{"private bool IsLocalPlayerHittingNonPlayer("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | <span className="api-desc">True when the local player wields the tool and the target is not a player.</span> |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-renderdamagepopup" /><code>{"private void RenderDamagePopup("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | <span className="api-desc">Shows a damage popup at the hit point, split into base and bonus damage, and optionally a damage message.</span> |
| <Link id="m-runplayerevents" /><code>{"private void RunPlayerEvents("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | <span className="api-desc">Server: if the hit counts for a progression path, reports it to the hitting player's events manager for experience.</span> |
| <Link id="m-setphysicalmaterial" /><code>{"private void IListenToPhysicalMaterial.SetPhysicalMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" newMaterial)"}</code> | <span className="api-desc">Copies the new physical material's hardness level into `hardnessLevel`.</span> |
| <Link id="m-shouldrefusesyncedhit" /><code>{"private static bool ShouldRefuseSyncedHit("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" fromPlayer)"}</code> | <span className="api-desc">Server: refuses a synced hit when the tool's last interactor is not the sending player. Off in local tests.</span> |
| <Link id="m-updatedebugdamagedisplayer" /><code>{"private void UpdateDebugDamageDisplayer("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | <span className="api-desc">Reports dealt damage to the hitting player's damage displayer, when that player is local.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ImpactDetector`:

<div className="api-used-in">

[`ForgedModel<TB, TA>.impactDetector`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-impactdetector), [`ForgedModel<TB, TA>.ImpactDetector`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-impactdetector-2), [`ConfirmationCraftingPart.ClientSideNailHitSync.GetImpactDamage`](/mod/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync#m-getimpactdamage), [`GenericCraftingNail.impactDetector`](/mod/game-api/types/alta-crafting/genericcraftingnail#m-impactdetector), [`GenericCraftingNail.ImpactDetector`](/mod/game-api/types/alta-crafting/genericcraftingnail#m-impactdetector-2), [`GenericCraftingStation.ClientSideNailHitSync.GetImpactDamage`](/mod/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync#m-getimpactdamage), [`ContactPointStructure.ContactPointStructure`](/mod/game-api/types/alta-items/contactpointstructure#m-ctor), [`ContactPointStructure.Detector`](/mod/game-api/types/alta-items/contactpointstructure#m-detector), [`DelayedImpactResolver.Hit`](/mod/game-api/types/alta-items/delayedimpactresolver#m-hit), [`DelayedImpactResolver.ProcessImmediate`](/mod/game-api/types/alta-items/delayedimpactresolver#m-processimmediate), [`DelayedImpactResolver.ImpactDetectorHit.impactDetector`](/mod/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-impactdetector), [`DelayedImpactResolver.ImpactDetectorHit.ImpactDetectorHit`](/mod/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-ctor), [`EmbeddableSurface.detector`](/mod/game-api/types/alta-items/embeddablesurface#m-detector), [`ImpactDetectorCentral.availableDetectors`](/mod/game-api/types/alta-items/impactdetectorcentral#m-availabledetectors), [`ImpactDetectorCentral.SendArguments`](/mod/game-api/types/alta-items/impactdetectorcentral#m-sendarguments), [`ImpactDetectorCentral.CentralizedArguments.detector`](/mod/game-api/types/alta-items/impactdetectorcentral-centralizedarguments#m-detector), [`ImpactDetectorCentral.CentralizedArguments.Serialize`](/mod/game-api/types/alta-items/impactdetectorcentral-centralizedarguments#m-serialize), [`ImpactHit.ImpactDetector`](/mod/game-api/types/alta-items/impacthit#m-impactdetector), [`ImpactHit.ImpactHit`](/mod/game-api/types/alta-items/impacthit#m-ctor-2), [`ImpactHitThresholdTrigger.detector`](/mod/game-api/types/alta-items/impacthitthresholdtrigger#m-detector), [`ImpactHitTrigger.detector`](/mod/game-api/types/alta-items/impacthittrigger#m-detector), [`ImpactHitWithTool.ImpactHitWithTool`](/mod/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactTool.GenerateHit`](/mod/game-api/types/alta-items/impacttool#m-generatehit), [`ImpactTool.GenerateImpactOnDetector`](/mod/game-api/types/alta-items/impacttool#m-generateimpactondetector), [`ImpactTool.GetImpactDamageOn`](/mod/game-api/types/alta-items/impacttool#m-getimpactdamageon), [`SparkSecondaryDetector.baseDetector`](/mod/game-api/types/alta-items/sparksecondarydetector#m-basedetector), [`TriggerImpactTool.ignore`](/mod/game-api/types/alta-items/triggerimpacttool#m-ignore), [`TriggerImpactTool.DelayedHit.DelayedHit`](/mod/game-api/types/alta-items/triggerimpacttool-delayedhit#m-ctor), [`TriggerImpactTool.DelayedHit.detector`](/mod/game-api/types/alta-items/triggerimpacttool-delayedhit#m-detector), [`DestroyableStaticObject.detectors`](/mod/game-api/types/alta-networking/destroyablestaticobject#m-detectors), [`WoodcutTree.impactDetector`](/mod/game-api/types/alta-crafting/woodcuttree#m-impactdetector), [`WoodcutTreeModel.impactDetector`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-impactdetector), [`WoodcutTreeModel.SetImpactDetector`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-setimpactdetector), [`BuildupPickup.impactDetector`](/mod/game-api/types/global-a-b/builduppickup#m-impactdetector), [`Explosive.detectors`](/mod/game-api/types/global-e-h/explosive#m-detectors), [`Fuse.impactDetector`](/mod/game-api/types/global-e-h/fuse#m-impactdetector), [`HealthObject.impactDetectors`](/mod/game-api/types/global-e-h/healthobject#m-impactdetectors), [`ImpactDetectionLogic.impactDetector`](/mod/game-api/types/global-i-l/impactdetectionlogic#m-impactdetector), [`Rock.impactDetector`](/mod/game-api/types/global-q-r/rock#m-impactdetector), [`SteelSong.activeDetectors`](/mod/game-api/types/global-s/steelsong#m-activedetectors), [`SteelSong.activeEffects`](/mod/game-api/types/global-s/steelsong#m-activeeffects), [`SteelSong.detectorHitCount`](/mod/game-api/types/global-s/steelsong#m-detectorhitcount), [`SteelSong.detectorMap`](/mod/game-api/types/global-s/steelsong#m-detectormap), [`SteelSong.ReleaseImpactorEffect`](/mod/game-api/types/global-s/steelsong#m-releaseimpactoreffect-2).

</div>
