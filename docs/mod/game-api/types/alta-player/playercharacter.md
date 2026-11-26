---
title: "PlayerCharacter"
description: "The player's body in the world: the PlayerController used for normal play, with the character dummy, IK, belt and back docks, inventory and customization."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCharacter

A **class** in `Root.Township`, `Alta.Character`.

The player's body in the world: the `PlayerController` used for normal play, with the character dummy, IK, belt and back docks, inventory and customization. Both sides; get it from `player.PlayerCharacter`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`SmoothLocomotionPlayerController`](/mod/game-api/types/global-s/smoothlocomotionplayercontroller), [`IHasFingertips`](/mod/game-api/types/global-i-l/ihasfingertips)
- **Attributes** `SelectionBase`
- **Documented in** [PlayerController and the body](/mod/game-api/networking/player-controller#playercharacter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCharacter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backdocks" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" backDocks"}</code> | <span className="api-desc">Backing field for `BackDocks`.</span> |
| <Link id="m-beltdocks" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" beltDocks"}</code> | <span className="api-desc">Backing field for `BeltDocks`.</span> |
| <Link id="m-bodycollidergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" bodyColliderGroup"}</code> | <span className="api-desc">Backing field for `BodyColliderGroup`.</span> |
| <Link id="m-bodycontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" bodyController"}</code> | <span className="api-desc">Backing field for `BodyController`.</span> |
| <Link id="m-currentrotate" /><code>{"private Coroutine currentRotate"}</code> | <span className="api-desc">Coroutine field for a rotation. Not used in this class.</span> |
| <Link id="m-currentscaling" /><code>{"private Coroutine currentScaling"}</code> | <span className="api-desc">Coroutine field for scaling. Not used in this class.</span> |
| <Link id="m-currenttranslate" /><code>{"private Coroutine currentTranslate"}</code> | <span className="api-desc">Coroutine field for a move. Not used in this class.</span> |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> | <span className="api-desc">Backing field for `CustomizationHandler`. Destroyed when the character is unlinked or destroyed.</span> |
| <Link id="m-dockpositioncontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" dockPositionController"}</code> | <span className="api-desc">Backing field for `DockPositionController`.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Points to the `CharacterDummy` (rig, animator, cosmetics) behind `Dummy`.</span> |
| <Link id="m-headfollow" /><code>{"private Transform headFollow"}</code> | <span className="api-desc">Backing field for `HeadFollow`.</span> |
| <Link id="m-ikcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterikcontroller">{"CharacterIKController"}</Link>{" ikController"}</code> | <span className="api-desc">Backing field for `IKController`.</span> |
| <Link id="m-isfadingonmove" /><code>{"private bool isFadingOnMove"}</code> | <span className="api-desc">Serialized flag. Not read in this class.</span> |
| <Link id="m-localitycontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/characterlocalitycontroller">{"CharacterLocalityController"}</Link>{" localityController"}</code> | <span className="api-desc">Backing field for `LocalityController`, which also supplies `Head`.</span> |
| <Link id="m-minimumdistancefortrail" /><code>{"private float minimumDistanceForTrail"}</code> | <span className="api-desc">Serialized distance for the teleport trail (5 by default). Not read in this class.</span> |
| <Link id="m-moveduration" /><code>{"private float moveDuration"}</code> | <span className="api-desc">Backing field for `MoveDuration`.</span> |
| <Link id="m-nonbakedcharacterrenderer" /><code>{"private Renderer nonBakedCharacterRenderer"}</code> | <span className="api-desc">Editor-only renderer that `Bake` destroys at build time.</span> |
| <Link id="m-nonbakedcharacterrendererpivot" /><code>{"private Transform nonBakedCharacterRendererPivot"}</code> | <span className="api-desc">Pivot for the non-baked renderer. Not used in this class.</span> |
| <Link id="m-rigidbodies" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/rigidbodycollection">{"RigidbodyCollection"}</Link>{" rigidbodies"}</code> | <span className="api-desc">Backing field for `Rigidbodies`.</span> |
| <Link id="m-scalevelocity" /><code>{"private float scaleVelocity"}</code> | <span className="api-desc">Smoothing velocity for scaling. Not used in this class.</span> |
| <Link id="m-specialeffectscontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerspecialeffectscontroller">{"PlayerSpecialEffectsController"}</Link>{" specialEffectsController"}</code> | <span className="api-desc">Backing field for `SpecialEffectsController`.</span> |
| <Link id="m-teleportertrail" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleporterTrail"}</code> | <span className="api-desc">Pooled teleport trail effect. Not used in this class.</span> |
| <Link id="m-teleportstyle" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" teleportStyle"}</code> | <span className="api-desc">Backing field for `TeleportStyle`.</span> |
| <Link id="m-translatevelocity" /><code>{"private Vector3 translateVelocity"}</code> | <span className="api-desc">Smoothing velocity for moving. Not used in this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backdocks-2" /><code><Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" BackDocks { get; }"}</code> | <span className="api-desc">The dock group on the player's back.</span> |
| <Link id="m-beltdocks-2" /><code><Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" BeltDocks { get; }"}</code> | <span className="api-desc">The dock group on the player's belt.</span> |
| <Link id="m-bodyanimator" /><code>{"Animator BodyAnimator { get; private set; }"}</code> | <span className="api-desc">The character dummy's animator. Turned off during physics steps while IK runs.</span> |
| <Link id="m-bodycollidergroup-2" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" BodyColliderGroup { get; }"}</code> | <span className="api-desc">The body's colliders. Downed and dead states switch them off; arrows ignore the shooter's own.</span> |
| <Link id="m-bodycontroller-2" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" { get; }"}</code> | <span className="api-desc">The body controller that moves the body under the head and hands.</span> |
| <Link id="m-customizationhandler-2" /><code><Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" CustomizationHandler { get; }"}</code> | <span className="api-desc">Applies the player's cosmetics to this body. Attached when the body links to a player.</span> |
| <Link id="m-dockpositioncontroller-2" /><code><Link to="/mod/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" { get; }"}</code> | <span className="api-desc">Places belt docks to fit the body type.</span> |
| <Link id="m-dummy-2" /><code><Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" Dummy { get; }"}</code> | <span className="api-desc">The character dummy (model, animator, fingertips, cosmetics packer).</span> |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | <span className="api-desc">The head transform from the locality controller.</span> |
| <Link id="m-headfollow-2" /><code>{"override Transform HeadFollow { get; }"}</code> | <span className="api-desc">Transform that follows the head.</span> |
| <Link id="m-headheight" /><code>{"override float HeadHeight { get; }"}</code> | <span className="api-desc">Local height of the head, from the locality controller.</span> |
| <Link id="m-health" /><code><Link to="/mod/game-api/types/global-p/playerhealth">{"PlayerHealth"}</Link>{" Health { get; }"}</code> | <span className="api-desc">The body's `PlayerHealth`.</span> |
| <Link id="m-ikcontroller-2" /><code><Link to="/mod/game-api/types/global-c-d/characterikcontroller">{"CharacterIKController"}</Link>{" IKController { get; }"}</code> | <span className="api-desc">The IK controller, updated every frame and physics step.</span> |
| <Link id="m-inventory" /><code><Link to="/mod/game-api/types/alta-player/inventory">{"Inventory"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/inventory">{"Inventory"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The player's inventory helper, created in `Awake`.</span> |
| <Link id="m-localitycontroller-2" /><code><Link to="/mod/game-api/types/alta-player/characterlocalitycontroller">{"CharacterLocalityController"}</Link>{" LocalityController { get; }"}</code> | <span className="api-desc">Handles which parts show for the local player versus others (head and so on).</span> |
| <Link id="m-locomotioncontroller" /><code><Link to="/mod/game-api/types/global-p/playerlocomotioncontroller">{"PlayerLocomotionController"}</Link>{" LocomotionController { get; }"}</code> | <span className="api-desc">The `PlayerLocomotionController` moving this body.</span> |
| <Link id="m-moveduration-2" /><code>{"float MoveDuration { get; }"}</code> | <span className="api-desc">Serialized move duration (0.01 seconds by default); nothing else in this build reads it.</span> |
| <Link id="m-rigidbodies-2" /><code><Link to="/mod/game-api/types/global-q-r/rigidbodycollection">{"RigidbodyCollection"}</Link>{" Rigidbodies { get; }"}</code> | <span className="api-desc">The body's rigidbodies.</span> |
| <Link id="m-specialeffectscontroller-2" /><code><Link to="/mod/game-api/types/global-p/playerspecialeffectscontroller">{"PlayerSpecialEffectsController"}</Link>{" SpecialEffectsController { get; }"}</code> | <span className="api-desc">Plays special effects on the body.</span> |
| <Link id="m-teleportstyle-2" /><code><Link to="/mod/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" TeleportStyle { get; set; }"}</code> | <span className="api-desc">Locomotion style for teleports. Settable; nothing else in this build reads it.</span> |
| <Link id="m-savemode" /><code>{"protected override "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `SaveMode.Player`: saved with the player save, not with a chunk.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> | <span className="api-desc">Fingertip settings, taken from the character dummy.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-scalechanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-player/scalechangedhandler">{"ScaleChangedHandler"}</Link>{" ScaleChanged"}</code> | <span className="api-desc">Declared for scale changes and listened to by the dock dropper, but nothing in this build raises it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | <span className="api-desc">Build time: removes the non-baked character renderer.</span> |
| <Link id="m-loadfrom" /><code>{"override void LoadFrom("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Server: loads the body and hands from the player save. A player with no saved prefab data gets the default starting data.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">When the owning player connects, sends them their last safe position if one is saved.</span> |
| <Link id="m-saveto" /><code>{"override void SaveTo("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Writes the body's network prefab data (docks, held items and so on) into the player save.</span> |
| <Link id="m-unlinkfromplayer" /><code>{"override void UnlinkFromPlayer()"}</code> | <span className="api-desc">Destroys the customization handler and stops listening for armed changes before the base unlink.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Sets up health, creates the `Inventory`, grabs the body animator and hooks dock placement to the body type once cosmetics are packed.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Destroys the customization handler with the body.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onarmedchanged" /><code>{"private void OnArmedChanged(bool isArmed)"}</code> | <span className="api-desc">Server: sets the `Armed` sense on the player's AI target when the player arms or disarms, so creatures can react.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts the `UpdateIK` coroutine.</span> |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToPlayer()"}</code> | <span className="api-desc">Runs when linked to a player: marks it alive, sets up locality and first-person customization, and on the server watches the armed state.</span> |
| <Link id="m-setupdocksbasedonbodytype" /><code>{"private void SetupDocksBasedOnBodyType()"}</code> | <span className="api-desc">Places the tool belt and pouch belt docks for the dummy's body type once its cosmetics finish packing.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Re-enables the body animator and runs the IK update every frame, recovering the animator reference if it was destroyed.</span> |
| <Link id="m-updateik" /><code>{"private IEnumerator UpdateIK() (iterator)"}</code> | <span className="api-desc">Coroutine that runs the fixed-step IK each physics step with the body animator turned off.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerCharacter`:

<div className="api-used-in">

[`PlayerEffectController.player`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-player), [`PlayerEffectController.Player`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-player-2), [`Inventory.Inventory`](/mod/game-api/types/alta-player/inventory#m-ctor), [`PlayerText.player`](/mod/game-api/types/alta-player/playertext#m-player), [`Inventory.AddBackDocks`](/mod/game-api/types/alta-console/inventory#m-addbackdocks), [`Inventory.AddBeltDocks`](/mod/game-api/types/alta-console/inventory#m-addbeltdocks), [`EquipmentCustomizationRoom.linkedPlayerCharacter`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-linkedplayercharacter), [`Chest.currentPlayer`](/mod/game-api/types/alta-items/chest#m-currentplayer), [`IPlayer.PlayerCharacter`](/mod/game-api/types/alta-networking/iplayer#m-playercharacter), [`CombatShellAnimator.CombatShellAnimator`](/mod/game-api/types/alta-player/combatshellanimator#m-ctor), [`ShellAnimator.Character`](/mod/game-api/types/alta-player/shellanimator#m-character), [`ShellAnimator.ShellAnimator`](/mod/game-api/types/alta-player/shellanimator#m-ctor), [`StatEffectShellAnimator.StatEffectShellAnimator`](/mod/game-api/types/alta-player/stateffectshellanimator#m-ctor), [`PlayerStateBase.PlayerCharacter`](/mod/game-api/types/alta-player/playerstatebase#m-playercharacter), [`LocalPlayerHeadRenderer.character`](/mod/game-api/types/alta-customization/localplayerheadrenderer#m-character), [`LocalPlayerHeadRenderer.Register`](/mod/game-api/types/alta-customization/localplayerheadrenderer#m-register), [`PlayerSwapMaterialFilter.playerMap`](/mod/game-api/types/alta-customization/playerswapmaterialfilter#m-playermap), [`PlayerSwapMaterialFilter.toRemove`](/mod/game-api/types/alta-customization/playerswapmaterialfilter#m-toremove), [`PlayerSwapMaterialFilter.PlayerOriginalMaterials.PlayerOriginalMaterials`](/mod/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-ctor), [`EventOrb.playerCharacter`](/mod/game-api/types/game-other-namespaces/eventorb#m-playercharacter), [`DownedStateDebuffManager.ApplyDebuffToPlayer`](/mod/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-applydebufftoplayer), [`DownedStateDebuffManager.playerStatModifiers`](/mod/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-playerstatmodifiers), [`DownedStateDebuffManager.RemoveDebuffsForPlayer`](/mod/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-removedebuffsforplayer), [`PlayerControllerPrefabs.vrPlayer`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs#m-vrplayer), [`PlayerControllerPrefabs.VrPlayer`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs#m-vrplayer-2), [`BowString.IgnoreCollisionBetweenArrowAndBow`](/mod/game-api/types/global-a-b/bowstring#m-ignorecollisionbetweenarrowandbow), [`BowString.PlayerAndBowColliders`](/mod/game-api/types/global-a-b/bowstring#m-playerandbowcolliders), [`CharacterIKController.playerCharacter`](/mod/game-api/types/global-c-d/characterikcontroller#m-playercharacter), [`ClothManager.player`](/mod/game-api/types/global-c-d/clothmanager#m-player), [`ClothManager.Player`](/mod/game-api/types/global-c-d/clothmanager#m-player-2), [`Embeddable.IsRaycastedRigidbodyFromTheThrowingPlayer`](/mod/game-api/types/global-e-h/embeddable#m-israycastedrigidbodyfromthethrowingplayer), [`ExtraArrowUpdater.interactingPlayer`](/mod/game-api/types/global-e-h/extraarrowupdater#m-interactingplayer), [`GravityChanger.playerCharacter`](/mod/game-api/types/global-e-h/gravitychanger#m-playercharacter), [`GravityChanger.PlayerCharacter`](/mod/game-api/types/global-e-h/gravitychanger#m-playercharacter-2), [`Player.PlayerCharacter`](/mod/game-api/types/global-p/player#m-playercharacter), [`PlayerDockDropper.player`](/mod/game-api/types/global-p/playerdockdropper#m-player), [`PlayerEventsManager.character`](/mod/game-api/types/global-p/playereventsmanager#m-character), [`PlayerEventsManager.OnCharacterAdded`](/mod/game-api/types/global-p/playereventsmanager#m-oncharacteradded), [`PlayerLocomotionController.PlayerController`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-playercontroller), [`PlayerProgressionManager.RegisterStat`](/mod/game-api/types/global-p/playerprogressionmanager#m-registerstat), [`PlayerSpecialEffectsController.playerCharacter`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-playercharacter), [`ProgressionSettings.LevelUpEffect`](/mod/game-api/types/global-p/progressionsettings#m-levelupeffect-2), [`RigidbodyGroup.player`](/mod/game-api/types/global-q-r/rigidbodygroup#m-player), [`RigidbodyGroup.Player`](/mod/game-api/types/global-q-r/rigidbodygroup#m-player-2), [`SkillOrbInteractionSpline.character`](/mod/game-api/types/global-s/skillorbinteractionspline#m-character), [`SpiritModeShellAnimator.SpiritModeShellAnimator`](/mod/game-api/types/global-s/spiritmodeshellanimator#m-ctor), [`SplineParticlesPooled.character`](/mod/game-api/types/global-s/splineparticlespooled#m-character), [`TelescopicPickup.character`](/mod/game-api/types/global-t-x/telescopicpickup#m-character), [`ReviveCompletableActivity.playerCharacter`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity#m-playercharacter), [`ReviveCompletableActivity.ReviveCompletableActivity`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity#m-ctor).

</div>
