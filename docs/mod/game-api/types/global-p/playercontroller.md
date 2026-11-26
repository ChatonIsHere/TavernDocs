---
title: "PlayerController"
description: "The body a player controls: head, hands, camera, health and locomotion, as a networked prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerController

An **abstract class** in `Root.Township`, the global namespace.

The body a player controls: head, hands, camera, health and locomotion, as a networked prefab. Exists on both sides for every player; `PlayerController.Current` is the local one and `Player.PlayerController` links each `Player` to its body. Subclasses include `PlayerCharacter` (the normal VR body) and the fly cam.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IHasHead`](/mod/game-api/types/global-i-l/ihashead), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`AutoCamPlayer`](/mod/game-api/types/global-a-b/autocamplayer), [`CharacterControllerEvent`](/mod/game-api/types/global-c-d/charactercontrollerevent), [`CharacterControllerUnityEvent`](/mod/game-api/types/global-c-d/charactercontrollerunityevent), [`CharacterDummyController`](/mod/game-api/types/global-c-d/characterdummycontroller), [`DummyPlayerController`](/mod/game-api/types/global-c-d/dummyplayercontroller), [`FlyCamPlayer`](/mod/game-api/types/global-e-h/flycamplayer), [`MainMenuDesktopController`](/mod/game-api/types/global-m-o/mainmenudesktopcontroller), [`ScaledLerpFollow`](/mod/game-api/types/global-s/scaledlerpfollow), [`VRPlayerController`](/mod/game-api/types/global-t-x/vrplayercontroller)
- **Attributes** `RequireComponent`
- **Documented in** [PlayerController and the body](/mod/game-api/networking/player-controller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger shared by player controller classes.</span> |
| <Link id="m-postprocesscontroller" /><code>{"protected IPostProcessController postProcessController"}</code> | <span className="api-desc">The injected post process controller (colour saturation, resets).</span> |

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidculldistances" /><code>{"private float[] androidCullDistances"}</code> | <span className="api-desc">Per-layer cull distances for Android. Not used in this class.</span> |
| <Link id="m-androidfarclipingplane" /><code>{"private float androidFarClipingPlane"}</code> | <span className="api-desc">Camera far clip distance for Android (800 by default). Not used in this class.</span> |
| <Link id="m-cleargbuffer" /><code>{"private ClearGBuffer clearGBuffer"}</code> | <span className="api-desc">Client: G-buffer clear helper made for the local player's camera when it links.</span> |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" current"}</code> | <span className="api-desc">Backing field for `Current`, the local player's controller.</span> |
| <Link id="m-healthtarget" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthTarget"}</code> | <span className="api-desc">Backing field for `Health`.</span> |
| <Link id="m-leftcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" leftController"}</code> | <span className="api-desc">Backing field for `LeftController`.</span> |
| <Link id="m-localplayerbehaviours" /><code>{"private MonoBehaviour[] localPlayerBehaviours"}</code> | <span className="api-desc">Child behaviours implementing `IInitializeAsLocalPlayer`, initialised when this becomes the local player's controller.</span> |
| <Link id="m-locomotioncontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" locomotionController"}</code> | <span className="api-desc">Backing field for `LocomotionController`.</span> |
| <Link id="m-messagedisplay" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playermessagedisplay">{"PlayerMessageDisplay"}</Link>{" messageDisplay"}</code> | <span className="api-desc">Backing field for `MessageDisplay`.</span> |
| <Link id="m-playercamera" /><code>{"private Camera playerCamera"}</code> | <span className="api-desc">Backing field for `Camera`.</span> |
| <Link id="m-playerlight" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/variableintensityplayerlight">{"VariableIntensityPlayerLight"}</Link>{" playerLight"}</code> | <span className="api-desc">Backing field for `PlayerLight`.</span> |
| <Link id="m-playersettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercontrollersettings">{"PlayerControllerSettings"}</Link>{" playerSettings"}</code> | <span className="api-desc">Backing field for `Settings`.</span> |
| <Link id="m-remoteplayerbehaviours" /><code>{"private MonoBehaviour[] remotePlayerBehaviours"}</code> | <span className="api-desc">Child behaviours implementing `IInitializeAsRemotePlayer`, initialised when this controller belongs to someone else (and on the server).</span> |
| <Link id="m-rightcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" rightController"}</code> | <span className="api-desc">Backing field for `RightController`.</span> |
| <Link id="m-screenfader" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerscreenfader">{"PlayerScreenFader"}</Link>{" screenFader"}</code> | <span className="api-desc">Backing field for `ScreenFader`.</span> |
| <Link id="m-setentityownerhandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" setEntityOwnerHandler"}</code> | <span className="api-desc">Entity handler field. Not used in this class.</span> |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | <span className="api-desc">Message sync for `SyncPlayer`, sent to each player that connects to the entity.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/target">{"Target"}</Link>{" target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodycenter" /><code>{"virtual Vector3 BodyCenter { get; }"}</code> | <span className="api-desc">World position of the body target from the `BodyController`.</span> |
| <Link id="m-bodycontroller" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" { get; }"}</code> | <span className="api-desc">The body controller. Null in the base class; the character subclasses override it.</span> |
| <Link id="m-camera" /><code>{"Camera Camera { get; }"}</code> | <span className="api-desc">The player's camera. Exists on the server too but is only rendered for the local player.</span> |
| <Link id="m-current-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Current { get; private set; }"}</code> | <span className="api-desc">The local player's controller, or null. Changing it raises `CurrentPlayerChanged` and locks rendering while null.</span> |
| <Link id="m-feetoffset" /><code>{"Vector3 FeetOffset { get; }"}</code> | <span className="api-desc">Head offset from the root with the height removed, in world space.</span> |
| <Link id="m-head" /><code>{"abstract Transform Head { get; }"}</code> | <span className="api-desc">The head transform. Each subclass supplies it.</span> |
| <Link id="m-headfollow" /><code>{"abstract Transform HeadFollow { get; }"}</code> | <span className="api-desc">Transform that follows the head, supplied by the subclass.</span> |
| <Link id="m-headheight" /><code>{"virtual float HeadHeight { get; }"}</code> | <span className="api-desc">Head height. One in the base class.</span> |
| <Link id="m-headoffset" /><code>{"Vector3 HeadOffset { get; }"}</code> | <span className="api-desc">The head's local position turned into a world space vector from the root.</span> |
| <Link id="m-health" /><code><Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" Health { get; }"}</code> | <span className="api-desc">The `HealthObject` for this body.</span> |
| <Link id="m-info" /><code><Link to="/mod/game-api/types/global-c-d/characterinfo">{"CharacterInfo"}</Link>{" Info { get; private set; }"}</code> | <span className="api-desc">`CharacterInfo` for this body, created in `Awake`.</span> |
| <Link id="m-inputscale" /><code>{"virtual float InputScale { get; }"}</code> | <span className="api-desc">Scale applied to input. One in the base class.</span> |
| <Link id="m-isalive" /><code>{"bool IsAlive { get; set; }"}</code> | <span className="api-desc">False while dead. Set by the dead state; health ignores damage when false.</span> |
| <Link id="m-isdowned" /><code>{"bool IsDowned { get; set; }"}</code> | <span className="api-desc">True while the player is in the downed state.</span> |
| <Link id="m-isignoringdamage" /><code>{"bool IsIgnoringDamage { get; set; }"}</code> | <span className="api-desc">When true, damage (not healing) to this player is ignored by `PlayerHealth`.</span> |
| <Link id="m-islocalplayer" /><code>{"virtual bool IsLocalPlayer { get; private set; }"}</code> | <span className="api-desc">True for the body this machine controls. Set when it becomes `Current`.</span> |
| <Link id="m-isshowingname" /><code>{"virtual bool IsShowingName { get; }"}</code> | <span className="api-desc">Whether other players see a name tag. True unless overridden (the fly cam uses it for invisibility).</span> |
| <Link id="m-isspirit" /><code>{"bool IsSpirit { get; set; }"}</code> | <span className="api-desc">True while the player is in spirit form after death.</span> |
| <Link id="m-leftcontroller-2" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" LeftController { get; }"}</code> | <span className="api-desc">The left hand `Controller`.</span> |
| <Link id="m-locomotioncontroller-2" /><code><Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" { get; }"}</code> | <span className="api-desc">The `LocomotionController` that moves this body.</span> |
| <Link id="m-messagedisplay-2" /><code><Link to="/mod/game-api/types/global-p/playermessagedisplay">{"PlayerMessageDisplay"}</Link>{" MessageDisplay { get; }"}</code> | <span className="api-desc">The `PlayerMessageDisplay` that shows text messages in front of the player.</span> |
| <Link id="m-networkplayer" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" NetworkPlayer { get; private set; }"}</code> | <span className="api-desc">The `Player` this body belongs to. Null until linked.</span> |
| <Link id="m-networkprefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" { get; }"}</code> | <span className="api-desc">The body's `NetworkPrefab`.</span> |
| <Link id="m-playerfeetposition" /><code>{"virtual Vector3 PlayerFeetPosition { get; }"}</code> | <span className="api-desc">World position under the head at the root's height.</span> |
| <Link id="m-playerlight-2" /><code><Link to="/mod/game-api/types/game-other-namespaces/variableintensityplayerlight">{"VariableIntensityPlayerLight"}</Link>{" PlayerLight { get; }"}</code> | <span className="api-desc">The light the player carries around in dark places.</span> |
| <Link id="m-playersaveposition" /><code>{"virtual Vector3 PlayerSavePosition { get; }"}</code> | <span className="api-desc">Position written to the player's save. The feet position unless overridden.</span> |
| <Link id="m-realfeetoffset" /><code>{"Vector3 RealFeetOffset { get; }"}</code> | <span className="api-desc">`RealFeetPosition` relative to the root.</span> |
| <Link id="m-realfeetposition" /><code>{"virtual Vector3 RealFeetPosition { get; }"}</code> | <span className="api-desc">Actual feet position. Same as `PlayerFeetPosition` unless a subclass overrides it.</span> |
| <Link id="m-rightcontroller-2" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" RightController { get; }"}</code> | <span className="api-desc">The right hand `Controller`.</span> |
| <Link id="m-scale" /><code>{"virtual float Scale { get; }"}</code> | <span className="api-desc">The body's uniform scale from its local scale.</span> |
| <Link id="m-screenfader-2" /><code><Link to="/mod/game-api/types/global-p/playerscreenfader">{"PlayerScreenFader"}</Link>{" ScreenFader { get; }"}</code> | <span className="api-desc">The screen fader, used to hold a black screen while chunks load.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-player/playercontrollersettings">{"PlayerControllerSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The `PlayerControllerSettings` asset.</span> |
| <Link id="m-target-2" /><code><Link to="/mod/game-api/types/alta-intelligence/target">{"Target"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/target">{"Target"}</Link>{" { get; }"}</code> | <span className="api-desc">The AI `Target` component creatures use to find this player.</span> |
| <Link id="m-savemode" /><code>{"protected virtual "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" { get; }"}</code> | <span className="api-desc">Save mode given to the prefab in `Awake`. `Ignore` in the base class, so the body is not saved into chunks.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Build bake order for this controller, always 0.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-causedcombat" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/combateventhandler">{"CombatEventHandler"}</Link>{" CausedCombat"}</code> | <span className="api-desc">Raised when this player hurts something, with the target, squared distance and damage.</span> |
| <Link id="m-currentplayerchanged" /><code>{"static event Action<"}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> CurrentPlayerChanged"}</code> | <span className="api-desc">Static event raised whenever `Current` changes.</span> |
| <Link id="m-hasbeenmoved" /><code>{"event Action hasBeenMoved"}</code> | <span className="api-desc">Raised by `MarkMovedForViewComfort`.</span> |
| <Link id="m-linkedtolocalplayer" /><code>{"event Action LinkedToLocalPlayer"}</code> | <span className="api-desc">Raised when the body is linked to its player (local or remote, despite the name).</span> |
| <Link id="m-linkedtoremoteplayer" /><code>{"static event Action<"}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> LinkedToRemotePlayer"}</code> | <span className="api-desc">Static event raised with the controller each time any body is linked to a player.</span> |
| <Link id="m-localplayerset" /><code>{"static event "}<Link to="/mod/game-api/types/alta-player/playercontrollerhandler">{"PlayerControllerHandler"}</Link>{" LocalPlayerSet"}</code> | <span className="api-desc">Static event raised when a body linked as the local player is set up.</span> |
| <Link id="m-onabouttoleave" /><code>{"event "}<Link to="/mod/game-api/types/alta-player/playercontrollerhandler">{"PlayerControllerHandler"}</Link>{" OnAboutToLeave"}</code> | <span className="api-desc">Raised by `OnPrePlayerLeaving` before the player leaves the server.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"virtual void Bake(bool isSaving)"}</code> | <span className="api-desc">Build step: clears the camera background colour.</span> |
| <Link id="m-forceteleportto" /><code>{"void ForceTeleportTo(Vector3 target)"}</code> | <span className="api-desc">Teleports the body to a position, using the effect controller's teleport if there is one, else a locomotion reposition.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Registers the sync that tells clients which `Player` this body belongs to.</span> |
| <Link id="m-initializeplayerbehaviours" /><code>{"void InitializePlayerBehaviours()"}</code> | <span className="api-desc">Runs `IInitializeAsLocalPlayer` or `IInitializeAsRemotePlayer` on every child component that has it, depending on whether this is the local player.</span> |
| <Link id="m-injectpostprocess" /><code>{"void InjectPostProcess(IPostProcessController postProcessController)"}</code> | <span className="api-desc">Dependency injection hook that hands in the post process controller.</span> |
| <Link id="m-issavinginteractor" /><code>{"static bool IsSavingInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">True if the hand is holding something whose base save mode is `SaveMode.Base`, so it is saved with the player.</span> |
| <Link id="m-linktoplayer" /><code>{"void LinkToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" networkPlayer, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" left, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" right)"}</code> | <span className="api-desc">Ties this body to a `Player`, sets up both hands and player behaviours, and makes it `Current` if local. Server: grants spawn impact invincibility.</span> |
| <Link id="m-loadfrom" /><code>{"virtual void LoadFrom("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Hook to load from a `PlayerSave`. Empty in the base class.</span> |
| <Link id="m-markmovedforviewcomfort" /><code>{"void MarkMovedForViewComfort()"}</code> | <span className="api-desc">Raises `hasBeenMoved`, used by the vision comfort effect after forced movement.</span> |
| <Link id="m-oncausedcombat" /><code>{"void OnCausedCombat("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceBetweenCombatantsSquared, float damage)"}</code> | <span className="api-desc">Raises `CausedCombat`. Called by health and combat code when this player deals damage.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the owning player's id to a client who just loaded the body, so it can link them.</span> |
| <Link id="m-onplayerleaving" /><code>{"void OnPlayerLeaving()"}</code> | <span className="api-desc">Server: for each hand, destroys a held item that saves with the player, otherwise drops it.</span> |
| <Link id="m-onpreplayerleaving" /><code>{"void OnPrePlayerLeaving()"}</code> | <span className="api-desc">Server: raises `OnAboutToLeave` before the hands are cleared.</span> |
| <Link id="m-saveto" /><code>{"virtual void SaveTo("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Hook to write into a `PlayerSave`. The base sets the chunk versioning.</span> |
| <Link id="m-unlinkfromplayer" /><code>{"virtual void UnlinkFromPlayer()"}</code> | <span className="api-desc">Clears `NetworkPlayer` and, for the local player, `Current`.</span> |
| <Link id="m-waitforchunkload" /><code>{"void WaitForChunkLoad("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" previousChunk = null)"}</code> | <span className="api-desc">Client: if the chunk the player is in isn't fully loaded, fades to black and marks the player not loaded until it is.</span> |
| <Link id="m-waitforchunkload-2" /><code>{"void WaitForChunkLoad("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" currentChunk, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" previousChunk)"}</code> | <span className="api-desc">Client: if the chunk the player is in isn't fully loaded, fades to black and marks the player not loaded until it is.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Creates `Info`, applies the controller's save mode to its prefab and sets up the camera (culling only on non-headless builds).</span> |
| <Link id="m-delayreposition" /><code>{"protected virtual void DelayReposition()"}</code> | <span className="api-desc">Called a frame after the local player links. Moves the body to its own position by feet to settle it.</span> |
| <Link id="m-loadforchunk" /><code>{"protected virtual void LoadForChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" currentChunk)"}</code> | <span className="api-desc">Hook run when the local player starts waiting on a chunk. Empty in the base class.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Clears `Current` if it was this, records the player as a recent player and unhooks settings.</span> |
| <Link id="m-savenetworkprefabtoplayersave" /><code>{"protected void SaveNetworkPrefabToPlayerSave("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save, bool isBeingDestroyed = false)"}</code> | <span className="api-desc">Writes the body's position, prefab data and held items into a `PlayerSave`.</span> |
| <Link id="m-serializehands" /><code>{"protected void SerializeHands("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | <span className="api-desc">Saves or loads what each hand holds. On load it clears anything left on the hands, then spawns and grabs the saved items.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Explicit `IBuildRendererBakeable` build step. Does nothing.</span> |
| <Link id="m-resetstandardvisuals" /><code>{"private void ResetStandardVisuals()"}</code> | <span className="api-desc">Client: resets post processing and returns the atmosphere to its base before waiting on a chunk load.</span> |
| <Link id="m-serializeinteractor" /><code>{"private bool SerializeInteractor("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" otherInteractor)"}</code> | <span className="api-desc">Saves or loads the item held in one hand. On load it spawns the item and makes the hand grab it, destroying it if that fails.</span> |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Synced message with the owning `Player` entity ID. Remote clients use it to link this controller to that player.</span> |
| <Link id="m-triggeredfadein" /><code>{"private void TriggeredFadeIn("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Client: when the awaited chunk finishes loading, marks the player loaded and lifts the screen fade.</span> |
| <Link id="m-updatecameraculling" /><code>{"private void UpdateCameraCulling("}<Link to="/mod/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Client: sets the camera's layer cull distance from the game settings' default culling distance. Rerun when settings change.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerController`:

<div className="api-used-in">

[`ActionOrb.controller`](/mod/game-api/types/global-a-b/actionorb#m-controller), [`AfkTimer.PlayerControllerSet`](/mod/game-api/types/global-a-b/afktimer#m-playercontrollerset), [`AfkTimer.PositionChanged`](/mod/game-api/types/global-a-b/afktimer#m-positionchanged), [`TimberBlockSpawner.CheckRelease`](/mod/game-api/types/alta-crafting/timberblockspawner#m-checkrelease), [`AccessibleDocks.InitializeAsLocalPlayer`](/mod/game-api/types/alta-player/accessibledocks#m-initializeaslocalplayer), [`AccessibleDocks.playerController`](/mod/game-api/types/alta-player/accessibledocks#m-playercontroller), [`CharacterComponentController.playerController`](/mod/game-api/types/alta-player/charactercomponentcontroller#m-playercontroller), [`CharacterComponentController.PlayerController`](/mod/game-api/types/alta-player/charactercomponentcontroller#m-playercontroller-2), [`CustomControllerOffsetReader.OnLocalPlayerSet`](/mod/game-api/types/alta-player/customcontrolleroffsetreader#m-onlocalplayerset), [`PersonalSpace.character`](/mod/game-api/types/alta-player/personalspace#m-character), [`PersonalSpace.Character`](/mod/game-api/types/alta-player/personalspace#m-character-2), [`PlayerControllerHandler.BeginInvoke`](/mod/game-api/types/alta-player/playercontrollerhandler#m-begininvoke), [`PlayerControllerHandler.Invoke`](/mod/game-api/types/alta-player/playercontrollerhandler#m-invoke), [`PlayerText.DeleteIfLocalPlayer`](/mod/game-api/types/alta-player/playertext#m-deleteiflocalplayer), [`PositionChangedHandler.BeginInvoke`](/mod/game-api/types/alta-player/positionchangedhandler#m-begininvoke), [`PositionChangedHandler.Invoke`](/mod/game-api/types/alta-player/positionchangedhandler#m-invoke), [`RotationChangedHandler.BeginInvoke`](/mod/game-api/types/alta-player/rotationchangedhandler#m-begininvoke), [`RotationChangedHandler.Invoke`](/mod/game-api/types/alta-player/rotationchangedhandler#m-invoke), [`ScaleChangedHandler.BeginInvoke`](/mod/game-api/types/alta-player/scalechangedhandler#m-begininvoke), [`ScaleChangedHandler.Invoke`](/mod/game-api/types/alta-player/scalechangedhandler#m-invoke), [`OcclusionChunkEffectData.DisableForPlayer`](/mod/game-api/types/alta-world/occlusionchunkeffectdata#m-disableforplayer), [`CraftingOptions.CraftingOptions`](/mod/game-api/types/alta-crafting/craftingoptions#m-ctor), [`CraftingOptions.Create`](/mod/game-api/types/alta-crafting/craftingoptions#m-create), [`CraftingOptions.player`](/mod/game-api/types/alta-crafting/craftingoptions#m-player), [`JointInsert.linesPlayer`](/mod/game-api/types/alta-crafting/jointinsert#m-linesplayer), [`JointInsert.ShowLines`](/mod/game-api/types/alta-crafting/jointinsert#m-showlines), [`AtmosphereManager.OverrideAtmosphere`](/mod/game-api/types/alta-world/atmospheremanager#m-overrideatmosphere), [`BorderDefinedAtmosphere.OnLocalPlayerSet`](/mod/game-api/types/alta-world/borderdefinedatmosphere#m-onlocalplayerset), [`RiverAudio.LocalPlayerSet`](/mod/game-api/types/alta-world-generation/riveraudio#m-localplayerset), [`RiverAudio.player`](/mod/game-api/types/alta-world-generation/riveraudio#m-player), [`HandShakeOffDetector.UpdatePosition`](/mod/game-api/types/alta-stats-effects/handshakeoffdetector#m-updateposition), [`ImpactDetector.InitializeAsLocalPlayer`](/mod/game-api/types/alta-items/impactdetector#m-initializeaslocalplayer), [`ImpactDetector.InitializeAsRemotePlayer`](/mod/game-api/types/alta-items/impactdetector#m-initializeasremoteplayer), [`ImpactDetector.IsImpactClientSideOnly`](/mod/game-api/types/alta-items/impactdetector#m-isimpactclientsideonly), [`ImpactHit.ImpactHit`](/mod/game-api/types/alta-items/impacthit#m-ctor-2), [`ImpactHit.PlayerWielder`](/mod/game-api/types/alta-items/impacthit#m-playerwielder), [`ImpactTool.GetCurrentPlayerWielder`](/mod/game-api/types/alta-items/impacttool#m-getcurrentplayerwielder), [`ImpactTool.PlayerWielder`](/mod/game-api/types/alta-items/impacttool#m-playerwielder), [`PlayerCharacterTarget.character`](/mod/game-api/types/alta-intelligence/playercharactertarget#m-character), [`PlayerCharacterTarget.Character`](/mod/game-api/types/alta-intelligence/playercharactertarget#m-character-2), [`Chest.SetLocalPlayer`](/mod/game-api/types/alta-items/chest#m-setlocalplayer), [`Chest.UpdateDistance`](/mod/game-api/types/alta-items/chest#m-updatedistance), [`PickupDock.InitializeAsLocalPlayer`](/mod/game-api/types/alta-items/pickupdock#m-initializeaslocalplayer), [`PickupDock.InitializeAsRemotePlayer`](/mod/game-api/types/alta-items/pickupdock#m-initializeasremoteplayer), [`PickupDock.PlayerController`](/mod/game-api/types/alta-items/pickupdock#m-playercontroller), [`PickupDock.UpdatePlayerOwnership`](/mod/game-api/types/alta-items/pickupdock#m-updateplayerownership), [`PlayerDocks.owner`](/mod/game-api/types/alta-items/playerdocks#m-owner), [`StabilizePickupJoint.MoveWithPlayer`](/mod/game-api/types/alta-items/stabilizepickupjoint#m-movewithplayer), [`StabilizePickupJoint.RecordLocalPositionBeforeMoving`](/mod/game-api/types/alta-items/stabilizepickupjoint#m-recordlocalpositionbeforemoving), [`PlayerLandmark.playerController`](/mod/game-api/types/alta-world/playerlandmark#m-playercontroller), [`NetworkEntity.InitializeAsPlayer`](/mod/game-api/types/alta-networking/networkentity#m-initializeasplayer), [`NetworkEntityComponentController.InitializeAsLocalPlayer`](/mod/game-api/types/alta-networking/networkentitycomponentcontroller#m-initializeaslocalplayer), [`NetworkEntityComponentController.InitializeAsRemotePlayer`](/mod/game-api/types/alta-networking/networkentitycomponentcontroller#m-initializeasremoteplayer), [`NetworkTransform.InitializeAsLocalPlayer`](/mod/game-api/types/alta-networking/networktransform#m-initializeaslocalplayer), [`PlayerComponentController.InitializeAsLocalPlayer`](/mod/game-api/types/alta-networking/playercomponentcontroller#m-initializeaslocalplayer), [`IPlayer.PlayerController`](/mod/game-api/types/alta-networking/iplayer#m-playercontroller), [`VoiceChatMouthController.controller`](/mod/game-api/types/alta-networking/voicechatmouthcontroller#m-controller), [`GlobalPagesManager.DissolvePage`](/mod/game-api/types/alta-items/globalpagesmanager#m-dissolvepage-2), [`PaperPageInstance.AutoAdd`](/mod/game-api/types/alta-items/paperpageinstance#m-autoadd-2), [`DownedState.OnPlayerControllerSetRemote`](/mod/game-api/types/alta-player/downedstate#m-onplayercontrollersetremote) and 173 more.

</div>
