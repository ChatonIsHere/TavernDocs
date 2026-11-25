---
title: "PlayerController"
description: "The body a player controls: head, hands, camera, health and locomotion, as a networked prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerController

An **abstract class** in `Root.Township`, no namespace.

The body a player controls: head, hands, camera, health and locomotion, as a networked prefab. Exists on both sides for every player; `PlayerController.Current` is the local one and `Player.PlayerController` links each `Player` to its body. Subclasses include `PlayerCharacter` (the normal VR body) and the fly cam.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IHasHead`](/game-api/types/global-i-l/ihashead), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`AutoCamPlayer`](/game-api/types/global-a-b/autocamplayer), [`CharacterControllerEvent`](/game-api/types/global-c-d/charactercontrollerevent), [`CharacterControllerUnityEvent`](/game-api/types/global-c-d/charactercontrollerunityevent), [`CharacterDummyController`](/game-api/types/global-c-d/characterdummycontroller), [`DummyPlayerController`](/game-api/types/global-c-d/dummyplayercontroller), [`FlyCamPlayer`](/game-api/types/global-e-h/flycamplayer), [`MainMenuDesktopController`](/game-api/types/global-m-o/mainmenudesktopcontroller), [`ScaledLerpFollow`](/game-api/types/global-s/scaledlerpfollow), [`VRPlayerController`](/game-api/types/global-t-x/vrplayercontroller)
- **Attributes** `RequireComponent`
- **Documented in** [PlayerController and the body](/game-api/networking/player-controller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidculldistances" /><code>{"private float[] androidCullDistances"}</code> |  |
| <Link id="m-androidfarclipingplane" /><code>{"private float androidFarClipingPlane"}</code> |  |
| <Link id="m-cleargbuffer" /><code>{"private ClearGBuffer clearGBuffer"}</code> |  |
| <Link id="m-current" /><code>{"private static "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" current"}</code> |  |
| <Link id="m-healthtarget" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthTarget"}</code> |  |
| <Link id="m-leftcontroller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" leftController"}</code> |  |
| <Link id="m-localplayerbehaviours" /><code>{"private MonoBehaviour[] localPlayerBehaviours"}</code> |  |
| <Link id="m-locomotioncontroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" locomotionController"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger shared by player controller classes. |
| <Link id="m-messagedisplay" /><code>{"private "}<Link to="/game-api/types/global-p/playermessagedisplay">{"PlayerMessageDisplay"}</Link>{" messageDisplay"}</code> |  |
| <Link id="m-playercamera" /><code>{"private Camera playerCamera"}</code> |  |
| <Link id="m-playerlight" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/variableintensityplayerlight">{"VariableIntensityPlayerLight"}</Link>{" playerLight"}</code> |  |
| <Link id="m-playersettings" /><code>{"private "}<Link to="/game-api/types/alta-player/playercontrollersettings">{"PlayerControllerSettings"}</Link>{" playerSettings"}</code> |  |
| <Link id="m-postprocesscontroller" /><code>{"protected IPostProcessController postProcessController"}</code> | The injected post process controller (colour saturation, resets). |
| <Link id="m-remoteplayerbehaviours" /><code>{"private MonoBehaviour[] remotePlayerBehaviours"}</code> |  |
| <Link id="m-rightcontroller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" rightController"}</code> |  |
| <Link id="m-screenfader" /><code>{"private "}<Link to="/game-api/types/global-p/playerscreenfader">{"PlayerScreenFader"}</Link>{" screenFader"}</code> |  |
| <Link id="m-setentityownerhandler" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" setEntityOwnerHandler"}</code> |  |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/target">{"Target"}</Link>{" target"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodycenter" /><code>{"virtual Vector3 BodyCenter { get; }"}</code> | World position of the body target from the `BodyController`. |
| <Link id="m-bodycontroller" /><code>{"virtual "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" { get; }"}</code> | The body controller. Null in the base class; the character subclasses override it. |
| <Link id="m-camera" /><code>{"Camera Camera { get; }"}</code> | The player's camera. Exists on the server too but is only rendered for the local player. |
| <Link id="m-current-2" /><code>{"static "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Current { get; private set; }"}</code> | The local player's controller, or null. Changing it raises `CurrentPlayerChanged` and locks rendering while null. |
| <Link id="m-feetoffset" /><code>{"Vector3 FeetOffset { get; }"}</code> | Head offset from the root with the height removed, in world space. |
| <Link id="m-head" /><code>{"abstract Transform Head { get; }"}</code> | The head transform. Each subclass supplies it. |
| <Link id="m-headfollow" /><code>{"abstract Transform HeadFollow { get; }"}</code> | Transform that follows the head, supplied by the subclass. |
| <Link id="m-headheight" /><code>{"virtual float HeadHeight { get; }"}</code> | Head height. One in the base class. |
| <Link id="m-headoffset" /><code>{"Vector3 HeadOffset { get; }"}</code> | The head's local position turned into a world space vector from the root. |
| <Link id="m-health" /><code><Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" Health { get; }"}</code> | The `HealthObject` for this body. |
| <Link id="m-info" /><code><Link to="/game-api/types/global-c-d/characterinfo">{"CharacterInfo"}</Link>{" Info { get; private set; }"}</code> | `CharacterInfo` for this body, created in `Awake`. |
| <Link id="m-inputscale" /><code>{"virtual float InputScale { get; }"}</code> | Scale applied to input. One in the base class. |
| <Link id="m-isalive" /><code>{"bool IsAlive { get; set; }"}</code> | False while dead. Set by the dead state; health ignores damage when false. |
| <Link id="m-isdowned" /><code>{"bool IsDowned { get; set; }"}</code> | True while the player is in the downed state. |
| <Link id="m-isignoringdamage" /><code>{"bool IsIgnoringDamage { get; set; }"}</code> | When true, damage (not healing) to this player is ignored by `PlayerHealth`. |
| <Link id="m-islocalplayer" /><code>{"virtual bool IsLocalPlayer { get; private set; }"}</code> | True for the body this machine controls. Set when it becomes `Current`. |
| <Link id="m-isshowingname" /><code>{"virtual bool IsShowingName { get; }"}</code> | Whether other players see a name tag. True unless overridden (the fly cam uses it for invisibility). |
| <Link id="m-isspirit" /><code>{"bool IsSpirit { get; set; }"}</code> | True while the player is in spirit form after death. |
| <Link id="m-leftcontroller-2" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" LeftController { get; }"}</code> | The left hand `Controller`. |
| <Link id="m-locomotioncontroller-2" /><code><Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" { get; }"}</code> | The `LocomotionController` that moves this body. |
| <Link id="m-messagedisplay-2" /><code><Link to="/game-api/types/global-p/playermessagedisplay">{"PlayerMessageDisplay"}</Link>{" MessageDisplay { get; }"}</code> | The `PlayerMessageDisplay` that shows text messages in front of the player. |
| <Link id="m-networkplayer" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" NetworkPlayer { get; private set; }"}</code> | The `Player` this body belongs to. Null until linked. |
| <Link id="m-networkprefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" { get; }"}</code> | The body's `NetworkPrefab`. |
| <Link id="m-playerfeetposition" /><code>{"virtual Vector3 PlayerFeetPosition { get; }"}</code> | World position under the head at the root's height. |
| <Link id="m-playerlight-2" /><code><Link to="/game-api/types/game-other-namespaces/variableintensityplayerlight">{"VariableIntensityPlayerLight"}</Link>{" PlayerLight { get; }"}</code> | The light the player carries around in dark places. |
| <Link id="m-playersaveposition" /><code>{"virtual Vector3 PlayerSavePosition { get; }"}</code> | Position written to the player's save. The feet position unless overridden. |
| <Link id="m-realfeetoffset" /><code>{"Vector3 RealFeetOffset { get; }"}</code> | `RealFeetPosition` relative to the root. |
| <Link id="m-realfeetposition" /><code>{"virtual Vector3 RealFeetPosition { get; }"}</code> | Actual feet position. Same as `PlayerFeetPosition` unless a subclass overrides it. |
| <Link id="m-rightcontroller-2" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" RightController { get; }"}</code> | The right hand `Controller`. |
| <Link id="m-scale" /><code>{"virtual float Scale { get; }"}</code> | The body's uniform scale from its local scale. |
| <Link id="m-screenfader-2" /><code><Link to="/game-api/types/global-p/playerscreenfader">{"PlayerScreenFader"}</Link>{" ScreenFader { get; }"}</code> | The screen fader, used to hold a black screen while chunks load. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/playercontrollersettings">{"PlayerControllerSettings"}</Link>{" Settings { get; }"}</code> | The `PlayerControllerSettings` asset. |
| <Link id="m-target-2" /><code><Link to="/game-api/types/alta-intelligence/target">{"Target"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/target">{"Target"}</Link>{" { get; }"}</code> | The AI `Target` component creatures use to find this player. |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |
| <Link id="m-savemode" /><code>{"protected virtual "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" { get; }"}</code> | Save mode given to the prefab in `Awake`. `Ignore` in the base class, so the body is not saved into chunks. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-causedcombat" /><code>{"event "}<Link to="/game-api/types/global-c-d/combateventhandler">{"CombatEventHandler"}</Link>{" CausedCombat"}</code> | Raised when this player hurts something, with the target, squared distance and damage. |
| <Link id="m-currentplayerchanged" /><code>{"static event Action<"}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> CurrentPlayerChanged"}</code> | Static event raised whenever `Current` changes. |
| <Link id="m-hasbeenmoved" /><code>{"event Action hasBeenMoved"}</code> | Raised by `MarkMovedForViewComfort`. |
| <Link id="m-linkedtolocalplayer" /><code>{"event Action LinkedToLocalPlayer"}</code> | Raised when the body is linked to its player (local or remote, despite the name). |
| <Link id="m-linkedtoremoteplayer" /><code>{"static event Action<"}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> LinkedToRemotePlayer"}</code> | Static event raised with the controller each time any body is linked to a player. |
| <Link id="m-localplayerset" /><code>{"static event "}<Link to="/game-api/types/alta-player/playercontrollerhandler">{"PlayerControllerHandler"}</Link>{" LocalPlayerSet"}</code> | Static event raised when a body linked as the local player is set up. |
| <Link id="m-onabouttoleave" /><code>{"event "}<Link to="/game-api/types/alta-player/playercontrollerhandler">{"PlayerControllerHandler"}</Link>{" OnAboutToLeave"}</code> | Raised by `OnPrePlayerLeaving` before the player leaves the server. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"virtual void Bake(bool isSaving)"}</code> | Build step: clears the camera background colour. |
| <Link id="m-forceteleportto" /><code>{"void ForceTeleportTo(Vector3 target)"}</code> | Teleports the body to a position, using the effect controller's teleport if there is one, else a locomotion reposition. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Registers the sync that tells clients which `Player` this body belongs to. |
| <Link id="m-initializeplayerbehaviours" /><code>{"void InitializePlayerBehaviours()"}</code> | Runs `IInitializeAsLocalPlayer` or `IInitializeAsRemotePlayer` on every child component that has it, depending on whether this is the local player. |
| <Link id="m-injectpostprocess" /><code>{"void InjectPostProcess(IPostProcessController postProcessController)"}</code> | Dependency injection hook that hands in the post process controller. |
| <Link id="m-issavinginteractor" /><code>{"static bool IsSavingInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | True if the hand is holding something whose base save mode is `SaveMode.Base`, so it is saved with the player. |
| <Link id="m-linktoplayer" /><code>{"void LinkToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" networkPlayer, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" left, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" right)"}</code> | Ties this body to a `Player`, sets up both hands and player behaviours, and makes it `Current` if local. Server: grants spawn impact invincibility. |
| <Link id="m-loadfrom" /><code>{"virtual void LoadFrom("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Hook to load from a `PlayerSave`. Empty in the base class. |
| <Link id="m-markmovedforviewcomfort" /><code>{"void MarkMovedForViewComfort()"}</code> | Raises `hasBeenMoved`, used by the vision comfort effect after forced movement. |
| <Link id="m-oncausedcombat" /><code>{"void OnCausedCombat("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceBetweenCombatantsSquared, float damage)"}</code> | Raises `CausedCombat`. Called by health and combat code when this player deals damage. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the owning player's id to a client who just loaded the body, so it can link them. |
| <Link id="m-onplayerleaving" /><code>{"void OnPlayerLeaving()"}</code> | Server: for each hand, destroys a held item that saves with the player, otherwise drops it. |
| <Link id="m-onpreplayerleaving" /><code>{"void OnPrePlayerLeaving()"}</code> | Server: raises `OnAboutToLeave` before the hands are cleared. |
| <Link id="m-saveto" /><code>{"virtual void SaveTo("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Hook to write into a `PlayerSave`. The base sets the chunk versioning. |
| <Link id="m-unlinkfromplayer" /><code>{"virtual void UnlinkFromPlayer()"}</code> | Clears `NetworkPlayer` and, for the local player, `Current`. |
| <Link id="m-waitforchunkload" /><code>{"void WaitForChunkLoad("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" previousChunk = null)"}</code> | Client: if the chunk the player is in isn't fully loaded, fades to black and marks the player not loaded until it is. |
| <Link id="m-waitforchunkload-2" /><code>{"void WaitForChunkLoad("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" currentChunk, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" previousChunk)"}</code> | Client: if the chunk the player is in isn't fully loaded, fades to black and marks the player not loaded until it is. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Creates `Info`, applies the controller's save mode to its prefab and sets up the camera (culling only on non-headless builds). |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-delayreposition" /><code>{"protected virtual void DelayReposition()"}</code> | Called a frame after the local player links. Moves the body to its own position by feet to settle it. |
| <Link id="m-loadforchunk" /><code>{"protected virtual void LoadForChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" currentChunk)"}</code> | Hook run when the local player starts waiting on a chunk. Empty in the base class. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Clears `Current` if it was this, records the player as a recent player and unhooks settings. |
| <Link id="m-resetstandardvisuals" /><code>{"private void ResetStandardVisuals()"}</code> |  |
| <Link id="m-savenetworkprefabtoplayersave" /><code>{"protected void SaveNetworkPrefabToPlayerSave("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save, bool isBeingDestroyed = false)"}</code> | Writes the body's position, prefab data and held items into a `PlayerSave`. |
| <Link id="m-serializehands" /><code>{"protected void SerializeHands("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Saves or loads what each hand holds. On load it clears anything left on the hands, then spawns and grabs the saved items. |
| <Link id="m-serializeinteractor" /><code>{"private bool SerializeInteractor("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" otherInteractor)"}</code> |  |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-triggeredfadein" /><code>{"private void TriggeredFadeIn("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-updatecameraculling" /><code>{"private void UpdateCameraCulling("}<Link to="/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{" settings)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerController`:

[`ActionOrb.controller`](/game-api/types/global-a-b/actionorb#m-controller), [`AfkTimer.PlayerControllerSet`](/game-api/types/global-a-b/afktimer#m-playercontrollerset), [`AfkTimer.PositionChanged`](/game-api/types/global-a-b/afktimer#m-positionchanged), [`TimberBlockSpawner.CheckRelease`](/game-api/types/alta-crafting/timberblockspawner#m-checkrelease), [`AccessibleDocks.InitializeAsLocalPlayer`](/game-api/types/alta-player/accessibledocks#m-initializeaslocalplayer), [`AccessibleDocks.playerController`](/game-api/types/alta-player/accessibledocks#m-playercontroller), [`CharacterComponentController.playerController`](/game-api/types/alta-player/charactercomponentcontroller#m-playercontroller), [`CharacterComponentController.PlayerController`](/game-api/types/alta-player/charactercomponentcontroller#m-playercontroller-2), [`CustomControllerOffsetReader.OnLocalPlayerSet`](/game-api/types/alta-player/customcontrolleroffsetreader#m-onlocalplayerset), [`PersonalSpace.character`](/game-api/types/alta-player/personalspace#m-character), [`PersonalSpace.Character`](/game-api/types/alta-player/personalspace#m-character-2), [`PlayerControllerHandler.BeginInvoke`](/game-api/types/alta-player/playercontrollerhandler#m-begininvoke), [`PlayerControllerHandler.Invoke`](/game-api/types/alta-player/playercontrollerhandler#m-invoke), [`PlayerText.DeleteIfLocalPlayer`](/game-api/types/alta-player/playertext#m-deleteiflocalplayer), [`PositionChangedHandler.BeginInvoke`](/game-api/types/alta-player/positionchangedhandler#m-begininvoke), [`PositionChangedHandler.Invoke`](/game-api/types/alta-player/positionchangedhandler#m-invoke), [`RotationChangedHandler.BeginInvoke`](/game-api/types/alta-player/rotationchangedhandler#m-begininvoke), [`RotationChangedHandler.Invoke`](/game-api/types/alta-player/rotationchangedhandler#m-invoke), [`ScaleChangedHandler.BeginInvoke`](/game-api/types/alta-player/scalechangedhandler#m-begininvoke), [`ScaleChangedHandler.Invoke`](/game-api/types/alta-player/scalechangedhandler#m-invoke), [`OcclusionChunkEffectData.DisableForPlayer`](/game-api/types/alta-world/occlusionchunkeffectdata#m-disableforplayer), [`CraftingOptions.CraftingOptions`](/game-api/types/alta-crafting/craftingoptions#m-ctor), [`CraftingOptions.Create`](/game-api/types/alta-crafting/craftingoptions#m-create), [`CraftingOptions.player`](/game-api/types/alta-crafting/craftingoptions#m-player), [`JointInsert.linesPlayer`](/game-api/types/alta-crafting/jointinsert#m-linesplayer), [`JointInsert.ShowLines`](/game-api/types/alta-crafting/jointinsert#m-showlines), [`AtmosphereManager.OverrideAtmosphere`](/game-api/types/alta-world/atmospheremanager#m-overrideatmosphere), [`BorderDefinedAtmosphere.OnLocalPlayerSet`](/game-api/types/alta-world/borderdefinedatmosphere#m-onlocalplayerset), [`RiverAudio.LocalPlayerSet`](/game-api/types/alta-world-generation/riveraudio#m-localplayerset), [`RiverAudio.player`](/game-api/types/alta-world-generation/riveraudio#m-player), [`HandShakeOffDetector.UpdatePosition`](/game-api/types/alta-stats-effects/handshakeoffdetector#m-updateposition), [`ImpactDetector.InitializeAsLocalPlayer`](/game-api/types/alta-items/impactdetector#m-initializeaslocalplayer), [`ImpactDetector.InitializeAsRemotePlayer`](/game-api/types/alta-items/impactdetector#m-initializeasremoteplayer), [`ImpactDetector.IsImpactClientSideOnly`](/game-api/types/alta-items/impactdetector#m-isimpactclientsideonly), [`ImpactHit.ImpactHit`](/game-api/types/alta-items/impacthit#m-ctor-2), [`ImpactHit.PlayerWielder`](/game-api/types/alta-items/impacthit#m-playerwielder), [`ImpactTool.GetCurrentPlayerWielder`](/game-api/types/alta-items/impacttool#m-getcurrentplayerwielder), [`ImpactTool.PlayerWielder`](/game-api/types/alta-items/impacttool#m-playerwielder), [`PlayerCharacterTarget.character`](/game-api/types/alta-intelligence/playercharactertarget#m-character), [`PlayerCharacterTarget.Character`](/game-api/types/alta-intelligence/playercharactertarget#m-character-2), [`Chest.SetLocalPlayer`](/game-api/types/alta-items/chest#m-setlocalplayer), [`Chest.UpdateDistance`](/game-api/types/alta-items/chest#m-updatedistance), [`PickupDock.InitializeAsLocalPlayer`](/game-api/types/alta-items/pickupdock#m-initializeaslocalplayer), [`PickupDock.InitializeAsRemotePlayer`](/game-api/types/alta-items/pickupdock#m-initializeasremoteplayer), [`PickupDock.PlayerController`](/game-api/types/alta-items/pickupdock#m-playercontroller), [`PickupDock.UpdatePlayerOwnership`](/game-api/types/alta-items/pickupdock#m-updateplayerownership), [`PlayerDocks.owner`](/game-api/types/alta-items/playerdocks#m-owner), [`StabilizePickupJoint.MoveWithPlayer`](/game-api/types/alta-items/stabilizepickupjoint#m-movewithplayer), [`StabilizePickupJoint.RecordLocalPositionBeforeMoving`](/game-api/types/alta-items/stabilizepickupjoint#m-recordlocalpositionbeforemoving), [`PlayerLandmark.playerController`](/game-api/types/alta-world/playerlandmark#m-playercontroller), [`NetworkEntity.InitializeAsPlayer`](/game-api/types/alta-networking/networkentity#m-initializeasplayer), [`NetworkEntityComponentController.InitializeAsLocalPlayer`](/game-api/types/alta-networking/networkentitycomponentcontroller#m-initializeaslocalplayer), [`NetworkEntityComponentController.InitializeAsRemotePlayer`](/game-api/types/alta-networking/networkentitycomponentcontroller#m-initializeasremoteplayer), [`NetworkTransform.InitializeAsLocalPlayer`](/game-api/types/alta-networking/networktransform#m-initializeaslocalplayer), [`PlayerComponentController.InitializeAsLocalPlayer`](/game-api/types/alta-networking/playercomponentcontroller#m-initializeaslocalplayer), [`IPlayer.PlayerController`](/game-api/types/alta-networking/iplayer#m-playercontroller), [`VoiceChatMouthController.controller`](/game-api/types/alta-networking/voicechatmouthcontroller#m-controller), [`GlobalPagesManager.DissolvePage`](/game-api/types/alta-items/globalpagesmanager#m-dissolvepage-2), [`PaperPageInstance.AutoAdd`](/game-api/types/alta-items/paperpageinstance#m-autoadd-2), [`DownedState.OnPlayerControllerSetRemote`](/game-api/types/alta-player/downedstate#m-onplayercontrollersetremote) and 173 more.
