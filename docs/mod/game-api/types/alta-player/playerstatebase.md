---
title: "PlayerStateBase"
description: "Base for a player state (alive, downed, dead, customising and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateBase

An **abstract class** in `Root.Township`, `Alta.PlayerStates`.

Base for a player state (alive, downed, dead, customising and so on). The player's `PlayerStateManager` switches between them; a state can sit on top of a base state as a decorator. The server runs `OnActivate`, clients run `OnActivateRemote`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`IPlayerState`](/mod/game-api/types/alta-player/iplayerstate)
- **Derived types** [`CustomizationState`](/mod/game-api/types/alta-player/customizationstate), [`DeadState`](/mod/game-api/types/alta-player/deadstate), [`FirstJoinState`](/mod/game-api/types/alta-player/firstjoinstate), [`PlayerStateBase<T>`](/mod/game-api/types/alta-player/playerstatebase-t), [`PlayingState`](/mod/game-api/types/alta-player/playingstate)
- **Documented in** [Player states](/mod/game-api/networking/player-states#playerstatebase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateBase()"}</code> | <span className="api-desc">Creates a `PlayerStateBase` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxplayerstatedepth" /><code>{"const int MaxPlayerStateDepth"}</code> | <span className="api-desc">Most states that can be stacked: 9.</span> |
| <Link id="m-maxplayerstatetypes" /><code>{"const int MaxPlayerStateTypes"}</code> | <span className="api-desc">Most state types: 32.</span> |
| <Link id="m-sync" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Network message for the state's own sync, set up when it activates.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basesynchandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" baseSyncHandler"}</code> | <span className="api-desc">The state sync handler that was set before this state took over.</span> |
| <Link id="m-basetransitionrequesthandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" baseTransitionRequestHandler"}</code> | <span className="api-desc">The transition request handler that was set before this state took over.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">Backing field for `Player`.</span> |
| <Link id="m-requeststatechange" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{"> requestStateChange"}</code> | <span className="api-desc">Network sync for transition requests sent to the server.</span> |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> | <span className="api-desc">Backing field for `StateManager`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alltransitions" /><code><Link to="/mod/game-api/types/alta-player/alltransitions">{"AllTransitions"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/alltransitions">{"AllTransitions"}</Link>{" { get; }"}</code> | <span className="api-desc">The transitions that can leave this state.</span> |
| <Link id="m-basestate" /><code><Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" BaseState { get; set; }"}</code> | <span className="api-desc">The state underneath this one, which `EndState` returns to. Null for a root state.</span> |
| <Link id="m-decorator" /><code><Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" Decorator { get; set; }"}</code> | <span className="api-desc">The state currently decorating this one, or null.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">True between activation and deactivation.</span> |
| <Link id="m-isdecorated" /><code>{"bool IsDecorated { get; }"}</code> | <span className="api-desc">Returns true when `Decorator` is null, which is the opposite of what the name says.</span> |
| <Link id="m-name" /><code>{"virtual string Name { get; set; }"}</code> | <span className="api-desc">Display name for logs.</span> |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The player this state belongs to. Setting it creates the right transitions manager for the side.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-player/iplayerstatesettings">{"IPlayerStateSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">Settings for this state type from `PlayerStateSettingsManager`.</span> |
| <Link id="m-statemanager-2" /><code><Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" StateManager { get; set; }"}</code> | <span className="api-desc">The player's state manager.</span> |
| <Link id="m-statetype" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">Which `PlayerStateType` this is.</span> |
| <Link id="m-isclearingalltransitionsondeactivation" /><code>{"protected virtual bool IsClearingAllTransitionsOnDeactivation { get; }"}</code> | <span className="api-desc">If true (default), the transitions manager clears this state's transitions when it deactivates.</span> |
| <Link id="m-islocalplayer" /><code>{"protected bool IsLocalPlayer { get; }"}</code> | <span className="api-desc">True if the state belongs to the local player.</span> |
| <Link id="m-isremote" /><code>{"protected bool IsRemote { get; }"}</code> | <span className="api-desc">True on a client (anything that is not the server).</span> |
| <Link id="m-isserver" /><code>{"protected bool IsServer { get; }"}</code> | <span className="api-desc">True on the server.</span> |
| <Link id="m-playercharacter" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" { get; }"}</code> | <span className="api-desc">The player's controller as a `PlayerCharacter`, or null.</span> |
| <Link id="m-transitionsmanager" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/istatetransitionsmanager">{"IStateTransitionsManager"}</Link>{" TransitionsManager { get; private set; }"}</code> | <span className="api-desc">Manages this state's transitions: a local one on the server, a remote one on clients.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isplayercharacterspawned" /><code>{"private bool IsPlayerCharacterSpawned { get; }"}</code> | <span className="api-desc">Whether the player currently has a `PlayerCharacter`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editordrawinspectorgui" /><code>{"virtual void EditorDrawInspectorGUI()"}</code> | <span className="api-desc">Editor hook for drawing debug UI. Empty by default.</span> |
| <Link id="m-serializedisk" /><code>{"virtual void SerializeDisk("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Hook for saving and loading state data. Only logs by default.</span> |
| <Link id="m-serializetoremote" /><code>{"void SerializeToRemote("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Only logs; it does not call anything else.</span> |
| <Link id="m-syncstateenter" /><code>{"virtual void SyncStateEnter("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Hook to read or write extra data when the state is entered over the network.</span> |
| <Link id="m-syncstateleave" /><code>{"virtual void SyncStateLeave("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Hook to read or write extra data when the state is left over the network.</span> |
| <Link id="m-validatestateactivation" /><code>{"virtual bool ValidateStateActivation(bool isDuringLoading)"}</code> | <span className="api-desc">Whether the state may activate now. True by default.</span> |
| <Link id="m-endstate" /><code>{"protected void EndState()"}</code> | <span className="api-desc">Returns the player to the base state. Logs an error if there is none.</span> |
| <Link id="m-onactivate" /><code>{"protected virtual void OnActivate()"}</code> | <span className="api-desc">Server: called when the state becomes active.</span> |
| <Link id="m-onactivateremote" /><code>{"protected virtual void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client: called when the state becomes active, with whether the player's character is spawned.</span> |
| <Link id="m-ondeactivate" /><code>{"protected virtual void OnDeactivate()"}</code> | <span className="api-desc">Server: called when the state ends.</span> |
| <Link id="m-ondeactivateremote" /><code>{"protected virtual void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client: called when the state ends.</span> |
| <Link id="m-ondecorated" /><code>{"protected virtual void OnDecorated("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Server: called when a state is put on top of this one or one below it.</span> |
| <Link id="m-ondecoratedremote" /><code>{"protected virtual void OnDecoratedRemote("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Client (and the local player): called when a state is put on top.</span> |
| <Link id="m-onplayercontrollerfound" /><code>{"protected virtual void OnPlayerControllerFound("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isFromOnActivate)"}</code> | <span className="api-desc">Called when the player has a controller, at activation or when one spawns later.</span> |
| <Link id="m-onplayercontrollerlost" /><code>{"protected virtual void OnPlayerControllerLost(bool isFromOnDeactivate)"}</code> | <span className="api-desc">Called when the controller is destroyed or the state deactivates.</span> |
| <Link id="m-onundecorated" /><code>{"protected virtual void OnUndecorated("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Server: called when a decorating state comes off.</span> |
| <Link id="m-onundecoratedremote" /><code>{"protected virtual void OnUndecoratedRemote("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Client (and the local player): called when a decorating state comes off.</span> |
| <Link id="m-sync-2" /><code>{"protected virtual void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Handler for this state's sync message while it is active. Empty by default.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Alta.PlayerStates.IPlayerState.Activate()"}</code> | <span className="api-desc">Sets up the state's message handlers, marks it active, runs `OnActivate` (server) or `OnActivateRemote` (client), and waits for the player controller.</span> |
| <Link id="m-clearnetworking" /><code>{"private void ClearNetworking()"}</code> | <span className="api-desc">Removes this state's message handlers and puts back the ones that were there before.</span> |
| <Link id="m-deactivate" /><code>{"private void Alta.PlayerStates.IPlayerState.Deactivate()"}</code> | <span className="api-desc">Marks inactive, undecorates the base state, runs the deactivate hooks, restores message handlers and calls `OnPlayerControllerLost`.</span> |
| <Link id="m-decorate" /><code>{"private void Alta.PlayerStates.IPlayerState.Decorate("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Sets `Decorator` when this is the base, runs the decorated hooks, and passes the call down the base state chain.</span> |
| <Link id="m-initializenetworking" /><code>{"private void InitializeNetworking()"}</code> | <span className="api-desc">Swaps in this state's handlers for the player's state sync and transition request messages.</span> |
| <Link id="m-playercontrolleralreadyexists" /><code>{"private void PlayerControllerAlreadyExists()"}</code> | <span className="api-desc">Calls `OnPlayerControllerFound` at activation and watches the controller for destruction.</span> |
| <Link id="m-playercontrollerdestroyed" /><code>{"private void PlayerControllerDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Calls `OnPlayerControllerLost` and waits for the next controller.</span> |
| <Link id="m-playercontrolleronplayerset" /><code>{"private void PlayerControllerOnPlayerSet("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">When the player gets a controller, calls `OnPlayerControllerFound` and watches it for destruction.</span> |
| <Link id="m-requeststatechange-2" /><code>{"private void Alta.PlayerStates.IPlayerState.RequestStateChange("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationStateType)"}</code> | <span className="api-desc">Sends a request to move to a state type. The server handler calls `SetState` on the state manager with it.</span> |
| <Link id="m-requeststatechange-3" /><code>{"private void RequestStateChange("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType)"}</code> | <span className="api-desc">Sends a request to move to a state type. The server handler calls `SetState` on the state manager with it.</span> |
| <Link id="m-undecorate" /><code>{"private void Alta.PlayerStates.IPlayerState.Undecorate("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Clears `Decorator` when this is the base, runs the undecorated hooks, and passes the call down the base state chain.</span> |

</details>
