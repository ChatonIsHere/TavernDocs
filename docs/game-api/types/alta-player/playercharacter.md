---
title: "PlayerCharacter"
description: "Alta.Character.PlayerCharacter, the VR body. Extra members:"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCharacter

A **class** in `Root.Township`, `Alta.Character`.

`Alta.Character.PlayerCharacter`, the VR body. Extra members:

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
| <Link id="m-backdocks-2" /><code><Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" BackDocks { get; }"}</code> |  |
| <Link id="m-beltdocks-2" /><code><Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" BeltDocks { get; }"}</code> |  |
| <Link id="m-bodyanimator" /><code>{"Animator BodyAnimator { get; private set; }"}</code> |  |
| <Link id="m-bodycollidergroup-2" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" BodyColliderGroup { get; }"}</code> |  |
| <Link id="m-bodycontroller-2" /><code>{"override "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" { get; }"}</code> |  |
| <Link id="m-customizationhandler-2" /><code><Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" CustomizationHandler { get; }"}</code> |  |
| <Link id="m-dockpositioncontroller-2" /><code><Link to="/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" "}<Link to="/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" { get; }"}</code> |  |
| <Link id="m-dummy-2" /><code><Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" Dummy { get; }"}</code> |  |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> |  |
| <Link id="m-headfollow-2" /><code>{"override Transform HeadFollow { get; }"}</code> |  |
| <Link id="m-headheight" /><code>{"override float HeadHeight { get; }"}</code> |  |
| <Link id="m-health" /><code><Link to="/game-api/types/global-p/playerhealth">{"PlayerHealth"}</Link>{" Health { get; }"}</code> |  |
| <Link id="m-ikcontroller-2" /><code><Link to="/game-api/types/global-c-d/characterikcontroller">{"CharacterIKController"}</Link>{" IKController { get; }"}</code> |  |
| <Link id="m-inventory" /><code><Link to="/game-api/types/alta-player/inventory">{"Inventory"}</Link>{" "}<Link to="/game-api/types/alta-player/inventory">{"Inventory"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-localitycontroller-2" /><code><Link to="/game-api/types/alta-player/characterlocalitycontroller">{"CharacterLocalityController"}</Link>{" LocalityController { get; }"}</code> |  |
| <Link id="m-locomotioncontroller" /><code><Link to="/game-api/types/global-p/playerlocomotioncontroller">{"PlayerLocomotionController"}</Link>{" LocomotionController { get; }"}</code> |  |
| <Link id="m-moveduration-2" /><code>{"float MoveDuration { get; }"}</code> |  |
| <Link id="m-rigidbodies-2" /><code><Link to="/game-api/types/global-q-r/rigidbodycollection">{"RigidbodyCollection"}</Link>{" Rigidbodies { get; }"}</code> |  |
| <Link id="m-specialeffectscontroller-2" /><code><Link to="/game-api/types/global-p/playerspecialeffectscontroller">{"PlayerSpecialEffectsController"}</Link>{" SpecialEffectsController { get; }"}</code> |  |
| <Link id="m-teleportstyle-2" /><code><Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" TeleportStyle { get; set; }"}</code> |  |
| <Link id="m-ihasfingertips-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" IHasFingertips.FingerTips { get; }"}</code> |  |
| <Link id="m-savemode" /><code>{"protected override "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-scalechanged" /><code>{"event "}<Link to="/game-api/types/alta-player/scalechangedhandler">{"ScaleChangedHandler"}</Link>{" ScaleChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> |  |
| <Link id="m-loadfrom" /><code>{"override void LoadFrom("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-saveto" /><code>{"override void SaveTo("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> |  |
| <Link id="m-unlinkfromplayer" /><code>{"override void UnlinkFromPlayer()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-onarmedchanged" /><code>{"private void OnArmedChanged(bool isArmed)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToPlayer()"}</code> |  |
| <Link id="m-setupdocksbasedonbodytype" /><code>{"private void SetupDocksBasedOnBodyType()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updateik" /><code>{"private IEnumerator UpdateIK() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerCharacter`:

[`PlayerEffectController.player`](/game-api/types/alta-stats-effects/playereffectcontroller#m-player), [`PlayerEffectController.Player`](/game-api/types/alta-stats-effects/playereffectcontroller#m-player-2), [`Inventory.Inventory`](/game-api/types/alta-player/inventory#m-ctor), [`PlayerText.player`](/game-api/types/alta-player/playertext#m-player), [`Inventory.AddBackDocks`](/game-api/types/alta-console/inventory#m-addbackdocks), [`Inventory.AddBeltDocks`](/game-api/types/alta-console/inventory#m-addbeltdocks), [`EquipmentCustomizationRoom.linkedPlayerCharacter`](/game-api/types/alta-customization/equipmentcustomizationroom#m-linkedplayercharacter), [`Chest.currentPlayer`](/game-api/types/alta-items/chest#m-currentplayer), [`IPlayer.PlayerCharacter`](/game-api/types/alta-networking/iplayer#m-playercharacter), [`CombatShellAnimator.CombatShellAnimator`](/game-api/types/alta-player/combatshellanimator#m-ctor), [`ShellAnimator.Character`](/game-api/types/alta-player/shellanimator#m-character), [`ShellAnimator.ShellAnimator`](/game-api/types/alta-player/shellanimator#m-ctor), [`StatEffectShellAnimator.StatEffectShellAnimator`](/game-api/types/alta-player/stateffectshellanimator#m-ctor), [`PlayerStateBase.PlayerCharacter`](/game-api/types/alta-player/playerstatebase#m-playercharacter), [`LocalPlayerHeadRenderer.character`](/game-api/types/alta-customization/localplayerheadrenderer#m-character), [`LocalPlayerHeadRenderer.Register`](/game-api/types/alta-customization/localplayerheadrenderer#m-register), [`PlayerSwapMaterialFilter.playerMap`](/game-api/types/alta-customization/playerswapmaterialfilter#m-playermap), [`PlayerSwapMaterialFilter.toRemove`](/game-api/types/alta-customization/playerswapmaterialfilter#m-toremove), [`PlayerSwapMaterialFilter.PlayerOriginalMaterials.PlayerOriginalMaterials`](/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-ctor), [`EventOrb.playerCharacter`](/game-api/types/game-other-namespaces/eventorb#m-playercharacter), [`DownedStateDebuffManager.ApplyDebuffToPlayer`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-applydebufftoplayer), [`DownedStateDebuffManager.playerStatModifiers`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-playerstatmodifiers), [`DownedStateDebuffManager.RemoveDebuffsForPlayer`](/game-api/types/game-other-namespaces/downedstatedebuffmanager#m-removedebuffsforplayer), [`PlayerControllerPrefabs.vrPlayer`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-vrplayer), [`PlayerControllerPrefabs.VrPlayer`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-vrplayer-2), [`BowString.IgnoreCollisionBetweenArrowAndBow`](/game-api/types/global-a-b/bowstring#m-ignorecollisionbetweenarrowandbow), [`BowString.PlayerAndBowColliders`](/game-api/types/global-a-b/bowstring#m-playerandbowcolliders), [`CharacterIKController.playerCharacter`](/game-api/types/global-c-d/characterikcontroller#m-playercharacter), [`ClothManager.player`](/game-api/types/global-c-d/clothmanager#m-player), [`ClothManager.Player`](/game-api/types/global-c-d/clothmanager#m-player-2), [`Embeddable.IsRaycastedRigidbodyFromTheThrowingPlayer`](/game-api/types/global-e-h/embeddable#m-israycastedrigidbodyfromthethrowingplayer), [`ExtraArrowUpdater.interactingPlayer`](/game-api/types/global-e-h/extraarrowupdater#m-interactingplayer), [`GravityChanger.playerCharacter`](/game-api/types/global-e-h/gravitychanger#m-playercharacter), [`GravityChanger.PlayerCharacter`](/game-api/types/global-e-h/gravitychanger#m-playercharacter-2), [`Player.PlayerCharacter`](/game-api/types/global-p/player#m-playercharacter), [`PlayerDockDropper.player`](/game-api/types/global-p/playerdockdropper#m-player), [`PlayerEventsManager.character`](/game-api/types/global-p/playereventsmanager#m-character), [`PlayerEventsManager.OnCharacterAdded`](/game-api/types/global-p/playereventsmanager#m-oncharacteradded), [`PlayerLocomotionController.PlayerController`](/game-api/types/global-p/playerlocomotioncontroller#m-playercontroller), [`PlayerProgressionManager.RegisterStat`](/game-api/types/global-p/playerprogressionmanager#m-registerstat), [`PlayerSpecialEffectsController.playerCharacter`](/game-api/types/global-p/playerspecialeffectscontroller#m-playercharacter), [`ProgressionSettings.LevelUpEffect`](/game-api/types/global-p/progressionsettings#m-levelupeffect-2), [`RigidbodyGroup.player`](/game-api/types/global-q-r/rigidbodygroup#m-player), [`RigidbodyGroup.Player`](/game-api/types/global-q-r/rigidbodygroup#m-player-2), [`SkillOrbInteractionSpline.character`](/game-api/types/global-s/skillorbinteractionspline#m-character), [`SpiritModeShellAnimator.SpiritModeShellAnimator`](/game-api/types/global-s/spiritmodeshellanimator#m-ctor), [`SplineParticlesPooled.character`](/game-api/types/global-s/splineparticlespooled#m-character), [`TelescopicPickup.character`](/game-api/types/global-t-x/telescopicpickup#m-character), [`ReviveCompletableActivity.playerCharacter`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-playercharacter), [`ReviveCompletableActivity.ReviveCompletableActivity`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-ctor).
