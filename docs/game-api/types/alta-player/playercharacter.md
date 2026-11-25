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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`SmoothLocomotionPlayerController`](/game-api/types/global-s/smoothlocomotionplayercontroller), [`IHasFingertips`](/game-api/types/global-i-l/ihasfingertips)
- **Attributes** `SelectionBase`
- **Documented in** [PlayerController and the body](/game-api/networking/player-controller#playercharacter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCharacter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-backdocks" /><code>{"private "}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" backDocks"}</code> |  |
| <Link id="m-beltdocks" /><code>{"private "}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" beltDocks"}</code> |  |
| <Link id="m-bodycollidergroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" bodyColliderGroup"}</code> |  |
| <Link id="m-bodycontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" bodyController"}</code> |  |
| <Link id="m-currentrotate" /><code>{"private Coroutine currentRotate"}</code> |  |
| <Link id="m-currentscaling" /><code>{"private Coroutine currentScaling"}</code> |  |
| <Link id="m-currenttranslate" /><code>{"private Coroutine currentTranslate"}</code> |  |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> |  |
| <Link id="m-dockpositioncontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" dockPositionController"}</code> |  |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> |  |
| <Link id="m-headfollow" /><code>{"private Transform headFollow"}</code> |  |
| <Link id="m-ikcontroller" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterikcontroller">{"CharacterIKController"}</Link>{" ikController"}</code> |  |
| <Link id="m-isfadingonmove" /><code>{"private bool isFadingOnMove"}</code> |  |
| <Link id="m-localitycontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/characterlocalitycontroller">{"CharacterLocalityController"}</Link>{" localityController"}</code> |  |
| <Link id="m-minimumdistancefortrail" /><code>{"private float minimumDistanceForTrail"}</code> |  |
| <Link id="m-moveduration" /><code>{"private float moveDuration"}</code> |  |
| <Link id="m-nonbakedcharacterrenderer" /><code>{"private Renderer nonBakedCharacterRenderer"}</code> |  |
| <Link id="m-nonbakedcharacterrendererpivot" /><code>{"private Transform nonBakedCharacterRendererPivot"}</code> |  |
| <Link id="m-rigidbodies" /><code>{"private "}<Link to="/game-api/types/global-q-r/rigidbodycollection">{"RigidbodyCollection"}</Link>{" rigidbodies"}</code> |  |
| <Link id="m-scalevelocity" /><code>{"private float scaleVelocity"}</code> |  |
| <Link id="m-specialeffectscontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playerspecialeffectscontroller">{"PlayerSpecialEffectsController"}</Link>{" specialEffectsController"}</code> |  |
| <Link id="m-teleportertrail" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleporterTrail"}</code> |  |
| <Link id="m-teleportstyle" /><code>{"private "}<Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" teleportStyle"}</code> |  |
| <Link id="m-translatevelocity" /><code>{"private Vector3 translateVelocity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backdocks-2" /><code><Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" BackDocks { get; }"}</code> | The dock group on the player's back. |
| <Link id="m-beltdocks-2" /><code><Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" BeltDocks { get; }"}</code> | The dock group on the player's belt. |
| <Link id="m-bodyanimator" /><code>{"Animator BodyAnimator { get; private set; }"}</code> | The character dummy's animator. Turned off during physics steps while IK runs. |
| <Link id="m-bodycollidergroup-2" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" BodyColliderGroup { get; }"}</code> | The body's colliders. Downed and dead states switch them off; arrows ignore the shooter's own. |
| <Link id="m-bodycontroller-2" /><code>{"override "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" { get; }"}</code> | The body controller that moves the body under the head and hands. |
| <Link id="m-customizationhandler-2" /><code><Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" CustomizationHandler { get; }"}</code> | Applies the player's cosmetics to this body. Attached when the body links to a player. |
| <Link id="m-dockpositioncontroller-2" /><code><Link to="/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" "}<Link to="/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" { get; }"}</code> | Places belt docks to fit the body type. |
| <Link id="m-dummy-2" /><code><Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" Dummy { get; }"}</code> | The character dummy (model, animator, fingertips, cosmetics packer). |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | The head transform from the locality controller. |
| <Link id="m-headfollow-2" /><code>{"override Transform HeadFollow { get; }"}</code> | Transform that follows the head. |
| <Link id="m-headheight" /><code>{"override float HeadHeight { get; }"}</code> | Local height of the head, from the locality controller. |
| <Link id="m-health" /><code><Link to="/game-api/types/global-p/playerhealth">{"PlayerHealth"}</Link>{" Health { get; }"}</code> | The body's `PlayerHealth`. |
| <Link id="m-ikcontroller-2" /><code><Link to="/game-api/types/global-c-d/characterikcontroller">{"CharacterIKController"}</Link>{" IKController { get; }"}</code> | The IK controller, updated every frame and physics step. |
| <Link id="m-inventory" /><code><Link to="/game-api/types/alta-player/inventory">{"Inventory"}</Link>{" "}<Link to="/game-api/types/alta-player/inventory">{"Inventory"}</Link>{" { get; private set; }"}</code> | The player's inventory helper, created in `Awake`. |
| <Link id="m-localitycontroller-2" /><code><Link to="/game-api/types/alta-player/characterlocalitycontroller">{"CharacterLocalityController"}</Link>{" LocalityController { get; }"}</code> | Handles which parts show for the local player versus others (head and so on). |
| <Link id="m-locomotioncontroller" /><code><Link to="/game-api/types/global-p/playerlocomotioncontroller">{"PlayerLocomotionController"}</Link>{" LocomotionController { get; }"}</code> | The `PlayerLocomotionController` moving this body. |
| <Link id="m-moveduration-2" /><code>{"float MoveDuration { get; }"}</code> | Serialized move duration (0.01 seconds by default); nothing else in this build reads it. |
| <Link id="m-rigidbodies-2" /><code><Link to="/game-api/types/global-q-r/rigidbodycollection">{"RigidbodyCollection"}</Link>{" Rigidbodies { get; }"}</code> | The body's rigidbodies. |
| <Link id="m-specialeffectscontroller-2" /><code><Link to="/game-api/types/global-p/playerspecialeffectscontroller">{"PlayerSpecialEffectsController"}</Link>{" SpecialEffectsController { get; }"}</code> | Plays special effects on the body. |
| <Link id="m-teleportstyle-2" /><code><Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" TeleportStyle { get; set; }"}</code> | Locomotion style for teleports. Settable; nothing else in this build reads it. |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> |  |
| <Link id="m-savemode" /><code>{"protected override "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" { get; }"}</code> | Always `SaveMode.Player`: saved with the player save, not with a chunk. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-scalechanged" /><code>{"event "}<Link to="/game-api/types/alta-player/scalechangedhandler">{"ScaleChangedHandler"}</Link>{" ScaleChanged"}</code> | Declared for scale changes and listened to by the dock dropper, but nothing in this build raises it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | Build time: removes the non-baked character renderer. |
| <Link id="m-loadfrom" /><code>{"override void LoadFrom("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Server: loads the body and hands from the player save. A player with no saved prefab data gets the default starting data. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | When the owning player connects, sends them their last safe position if one is saved. |
| <Link id="m-saveto" /><code>{"override void SaveTo("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Writes the body's network prefab data (docks, held items and so on) into the player save. |
| <Link id="m-unlinkfromplayer" /><code>{"override void UnlinkFromPlayer()"}</code> | Destroys the customization handler and stops listening for armed changes before the base unlink. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Sets up health, creates the `Inventory`, grabs the body animator and hooks dock placement to the body type once cosmetics are packed. |
| <Link id="m-onarmedchanged" /><code>{"private void OnArmedChanged(bool isArmed)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Destroys the customization handler with the body. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToPlayer()"}</code> |  |
| <Link id="m-setupdocksbasedonbodytype" /><code>{"private void SetupDocksBasedOnBodyType()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updateik" /><code>{"private IEnumerator UpdateIK() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerCharacter`:

[`PlayerEffectController.player`](/game-api/types/alta-stats-effects/playereffectcontroller#m-player), [`PlayerEffectController.Player`](/game-api/types/alta-stats-effects/playereffectcontroller#m-player-2), [`Inventory.Inventory`](/game-api/types/alta-player/inventory#m-ctor), [`PlayerText.player`](/game-api/types/alta-player/playertext#m-player), [`Inventory.AddBackDocks`](/game-api/types/alta-console/inventory#m-addbackdocks), [`Inventory.AddBeltDocks`](/game-api/types/alta-console/inventory#m-addbeltdocks), [`EquipmentCustomizationRoom.linkedPlayerCharacter`](/game-api/types/alta-customization/equipmentcustomizationroom#m-linkedplayercharacter), [`Chest.currentPlayer`](/game-api/types/alta-items/chest#m-currentplayer), [`IPlayer.PlayerCharacter`](/game-api/types/alta-networking/iplayer#m-playercharacter), [`CombatShellAnimator.CombatShellAnimator`](/game-api/types/alta-player/combatshellanimator#m-ctor), [`ShellAnimator.Character`](/game-api/types/alta-player/shellanimator#m-character), [`ShellAnimator.ShellAnimator`](/game-api/types/alta-player/shellanimator#m-ctor), [`StatEffectShellAnimator.StatEffectShellAnimator`](/game-api/types/alta-player/stateffectshellanimator#m-ctor), [`PlayerStateBase.PlayerCharacter`](/game-api/types/alta-player/playerstatebase#m-playercharacter), [`LocalPlayerHeadRenderer.character`](/game-api/types/alta-customization/localplayerheadrenderer#m-character), [`LocalPlayerHeadRenderer.Register`](/game-api/types/alta-customization/localplayerheadrenderer#m-register), [`PlayerSwapMaterialFilter.playerMap`](/game-api/types/alta-customization/playerswapmaterialfilter#m-playermap), [`PlayerSwapMaterialFilter.toRemove`](/game-api/types/alta-customization/playerswapmaterialfilter#m-toremove), [`PlayerSwapMaterialFilter.PlayerOriginalMaterials.PlayerOriginalMaterials`](/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-ctor), [`EventOrb.playerCharacter`](/game-api/types/game-other-namespaces/eventorb#m-playercharacter), [`DownedStateDebuffManager.ApplyDebuffToPlayer`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-applydebufftoplayer), [`DownedStateDebuffManager.playerStatModifiers`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-playerstatmodifiers), [`DownedStateDebuffManager.RemoveDebuffsForPlayer`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-removedebuffsforplayer), [`PlayerControllerPrefabs.vrPlayer`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-vrplayer), [`PlayerControllerPrefabs.VrPlayer`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-vrplayer-2), [`BowString.IgnoreCollisionBetweenArrowAndBow`](/game-api/types/global-a-b/bowstring#m-ignorecollisionbetweenarrowandbow), [`BowString.PlayerAndBowColliders`](/game-api/types/global-a-b/bowstring#m-playerandbowcolliders), [`CharacterIKController.playerCharacter`](/game-api/types/global-c-d/characterikcontroller#m-playercharacter), [`ClothManager.player`](/game-api/types/global-c-d/clothmanager#m-player), [`ClothManager.Player`](/game-api/types/global-c-d/clothmanager#m-player-2), [`Embeddable.IsRaycastedRigidbodyFromTheThrowingPlayer`](/game-api/types/global-e-h/embeddable#m-israycastedrigidbodyfromthethrowingplayer), [`ExtraArrowUpdater.interactingPlayer`](/game-api/types/global-e-h/extraarrowupdater#m-interactingplayer), [`GravityChanger.playerCharacter`](/game-api/types/global-e-h/gravitychanger#m-playercharacter), [`GravityChanger.PlayerCharacter`](/game-api/types/global-e-h/gravitychanger#m-playercharacter-2), [`Player.PlayerCharacter`](/game-api/types/global-p/player#m-playercharacter), [`PlayerDockDropper.player`](/game-api/types/global-p/playerdockdropper#m-player), [`PlayerEventsManager.character`](/game-api/types/global-p/playereventsmanager#m-character), [`PlayerEventsManager.OnCharacterAdded`](/game-api/types/global-p/playereventsmanager#m-oncharacteradded), [`PlayerLocomotionController.PlayerController`](/game-api/types/global-p/playerlocomotioncontroller#m-playercontroller), [`PlayerProgressionManager.RegisterStat`](/game-api/types/global-p/playerprogressionmanager#m-registerstat), [`PlayerSpecialEffectsController.playerCharacter`](/game-api/types/global-p/playerspecialeffectscontroller#m-playercharacter), [`ProgressionSettings.LevelUpEffect`](/game-api/types/global-p/progressionsettings#m-levelupeffect-2), [`RigidbodyGroup.player`](/game-api/types/global-q-r/rigidbodygroup#m-player), [`RigidbodyGroup.Player`](/game-api/types/global-q-r/rigidbodygroup#m-player-2), [`SkillOrbInteractionSpline.character`](/game-api/types/global-s/skillorbinteractionspline#m-character), [`SpiritModeShellAnimator.SpiritModeShellAnimator`](/game-api/types/global-s/spiritmodeshellanimator#m-ctor), [`SplineParticlesPooled.character`](/game-api/types/global-s/splineparticlespooled#m-character), [`TelescopicPickup.character`](/game-api/types/global-t-x/telescopicpickup#m-character), [`ReviveCompletableActivity.playerCharacter`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-playercharacter), [`ReviveCompletableActivity.ReviveCompletableActivity`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-ctor).
