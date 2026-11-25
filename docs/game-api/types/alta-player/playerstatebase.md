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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`IPlayerState`](/game-api/types/alta-player/iplayerstate)
- **Derived types** [`CustomizationState`](/game-api/types/alta-player/customizationstate), [`DeadState`](/game-api/types/alta-player/deadstate), [`FirstJoinState`](/game-api/types/alta-player/firstjoinstate), [`PlayerStateBase<T>`](/game-api/types/alta-player/playerstatebase-t), [`PlayingState`](/game-api/types/alta-player/playingstate)
- **Documented in** [Player states](/game-api/networking/player-states#playerstatebase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxplayerstatedepth" /><code>{"const int MaxPlayerStateDepth"}</code> | Most states that can be stacked: 9. |
| <Link id="m-maxplayerstatetypes" /><code>{"const int MaxPlayerStateTypes"}</code> | Most state types: 32. |
| <Link id="m-basesynchandler" /><code>{"private "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" baseSyncHandler"}</code> |  |
| <Link id="m-basetransitionrequesthandler" /><code>{"private "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" baseTransitionRequestHandler"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |  |
| <Link id="m-requeststatechange" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{"> requestStateChange"}</code> |  |
| <Link id="m-statemanager" /><code>{"private "}<Link to="/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" stateManager"}</code> |  |
| <Link id="m-sync" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Network message for the state's own sync, set up when it activates. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alltransitions" /><code><Link to="/game-api/types/alta-player/alltransitions">{"AllTransitions"}</Link>{" "}<Link to="/game-api/types/alta-player/alltransitions">{"AllTransitions"}</Link>{" { get; }"}</code> | The transitions that can leave this state. |
| <Link id="m-basestate" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" BaseState { get; set; }"}</code> | The state underneath this one, which `EndState` returns to. Null for a root state. |
| <Link id="m-decorator" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" Decorator { get; set; }"}</code> | The state currently decorating this one, or null. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | True between activation and deactivation. |
| <Link id="m-isdecorated" /><code>{"bool IsDecorated { get; }"}</code> | Returns true when `Decorator` is null, which is the opposite of what the name says. |
| <Link id="m-name" /><code>{"virtual string Name { get; set; }"}</code> | Display name for logs. |
| <Link id="m-player-2" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" { get; set; }"}</code> | The player this state belongs to. Setting it creates the right transitions manager for the side. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/iplayerstatesettings">{"IPlayerStateSettings"}</Link>{" Settings { get; }"}</code> | Settings for this state type from `PlayerStateSettingsManager`. |
| <Link id="m-statemanager-2" /><code><Link to="/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" StateManager { get; set; }"}</code> | The player's state manager. |
| <Link id="m-statetype" /><code>{"abstract "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | Which `PlayerStateType` this is. |
| <Link id="m-isclearingalltransitionsondeactivation" /><code>{"protected virtual bool IsClearingAllTransitionsOnDeactivation { get; }"}</code> | If true (default), the transitions manager clears this state's transitions when it deactivates. |
| <Link id="m-islocalplayer" /><code>{"protected bool IsLocalPlayer { get; }"}</code> | True if the state belongs to the local player. |
| <Link id="m-isplayercharacterspawned" /><code>{"private bool IsPlayerCharacterSpawned { get; }"}</code> |  |
| <Link id="m-isremote" /><code>{"protected bool IsRemote { get; }"}</code> | True on a client (anything that is not the server). |
| <Link id="m-isserver" /><code>{"protected bool IsServer { get; }"}</code> | True on the server. |
| <Link id="m-playercharacter" /><code>{"protected "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" { get; }"}</code> | The player's controller as a `PlayerCharacter`, or null. |
| <Link id="m-transitionsmanager" /><code>{"protected "}<Link to="/game-api/types/alta-player/istatetransitionsmanager">{"IStateTransitionsManager"}</Link>{" TransitionsManager { get; private set; }"}</code> | Manages this state's transitions: a local one on the server, a remote one on clients. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editordrawinspectorgui" /><code>{"virtual void EditorDrawInspectorGUI()"}</code> | Editor hook for drawing debug UI. Empty by default. |
| <Link id="m-serializedisk" /><code>{"virtual void SerializeDisk("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Hook for saving and loading state data. Only logs by default. |
| <Link id="m-serializetoremote" /><code>{"void SerializeToRemote("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Only logs; it does not call anything else. |
| <Link id="m-syncstateenter" /><code>{"virtual void SyncStateEnter("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Hook to read or write extra data when the state is entered over the network. |
| <Link id="m-syncstateleave" /><code>{"virtual void SyncStateLeave("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Hook to read or write extra data when the state is left over the network. |
| <Link id="m-validatestateactivation" /><code>{"virtual bool ValidateStateActivation(bool isDuringLoading)"}</code> | Whether the state may activate now. True by default. |
| <Link id="m-activate" /><code>{"private void Alta.PlayerStates.IPlayerState.Activate()"}</code> |  |
| <Link id="m-clearnetworking" /><code>{"private void ClearNetworking()"}</code> |  |
| <Link id="m-deactivate" /><code>{"private void Alta.PlayerStates.IPlayerState.Deactivate()"}</code> |  |
| <Link id="m-decorate" /><code>{"private void Alta.PlayerStates.IPlayerState.Decorate("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> |  |
| <Link id="m-endstate" /><code>{"protected void EndState()"}</code> | Returns the player to the base state. Logs an error if there is none. |
| <Link id="m-initializenetworking" /><code>{"private void InitializeNetworking()"}</code> |  |
| <Link id="m-onactivate" /><code>{"protected virtual void OnActivate()"}</code> | Server: called when the state becomes active. |
| <Link id="m-onactivateremote" /><code>{"protected virtual void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | Client: called when the state becomes active, with whether the player's character is spawned. |
| <Link id="m-ondeactivate" /><code>{"protected virtual void OnDeactivate()"}</code> | Server: called when the state ends. |
| <Link id="m-ondeactivateremote" /><code>{"protected virtual void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | Client: called when the state ends. |
| <Link id="m-ondecorated" /><code>{"protected virtual void OnDecorated("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | Server: called when a state is put on top of this one or one below it. |
| <Link id="m-ondecoratedremote" /><code>{"protected virtual void OnDecoratedRemote("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | Client (and the local player): called when a state is put on top. |
| <Link id="m-onplayercontrollerfound" /><code>{"protected virtual void OnPlayerControllerFound("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isFromOnActivate)"}</code> | Called when the player has a controller, at activation or when one spawns later. |
| <Link id="m-onplayercontrollerlost" /><code>{"protected virtual void OnPlayerControllerLost(bool isFromOnDeactivate)"}</code> | Called when the controller is destroyed or the state deactivates. |
| <Link id="m-onundecorated" /><code>{"protected virtual void OnUndecorated("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | Server: called when a decorating state comes off. |
| <Link id="m-onundecoratedremote" /><code>{"protected virtual void OnUndecoratedRemote("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | Client (and the local player): called when a decorating state comes off. |
| <Link id="m-playercontrolleralreadyexists" /><code>{"private void PlayerControllerAlreadyExists()"}</code> |  |
| <Link id="m-playercontrollerdestroyed" /><code>{"private void PlayerControllerDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-playercontrolleronplayerset" /><code>{"private void PlayerControllerOnPlayerSet("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-requeststatechange-2" /><code>{"private void Alta.PlayerStates.IPlayerState.RequestStateChange("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationStateType)"}</code> |  |
| <Link id="m-requeststatechange-3" /><code>{"private void RequestStateChange("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType)"}</code> |  |
| <Link id="m-sync-2" /><code>{"protected virtual void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Handler for this state's sync message while it is active. Empty by default. |
| <Link id="m-undecorate" /><code>{"private void Alta.PlayerStates.IPlayerState.Undecorate("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> |  |
