---
title: "PlayerStateManager"
description: "Component on each player that holds its current state (first join, alive, dead and so on) as a stack of nested states, switches between them, syncs changes..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateManager

A **class** in `Root.Township`, `Alta.PlayerStates`.

Component on each player that holds its current state (first join, alive, dead and so on) as a stack of nested states, switches between them, syncs changes to clients and saves them. Get it with `Player.StateManager`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Player states](/game-api/networking/player-states#playerstatemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentstate" /><code>{"private "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" currentState"}</code> | Backing field for `CurrentState`. |
| <Link id="m-isduringstatesaveloading" /><code>{"private bool isDuringStateSaveLoading"}</code> | True while states load from a stream; passed to `ValidateStateActivation`. |
| <Link id="m-isduringstatesaving" /><code>{"private bool isDuringStateSaving"}</code> | True while a state saves to disk. `SetState` refuses to run then. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The player these states belong to, set by `SetPlayer`. |
| <Link id="m-playersavingdata" /><code>{"private uint[] playerSavingData"}</code> | Pooled buffer the save stream writes into, then handed to the player save. |
| <Link id="m-playerstatefactory" /><code>{"private "}<Link to="/game-api/types/alta-player/iplayerstatefactory">{"IPlayerStateFactory"}</Link>{" playerStateFactory"}</code> | Injected factory that creates states by type. |
| <Link id="m-syncstatechange" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{"> syncStateChange"}</code> | Method sync for `SyncStateChange`. |
| <Link id="m-syncstates" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStates"}</code> | Method sync for `SyncStates`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstate-2" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" CurrentState { get; private set; }"}</code> | The innermost active state. Its base states are reached through `BaseState`. |
| <Link id="m-currentstatetype" /><code><Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" CurrentStateType { get; private set; }"}</code> | Type of the current state, or `None` if there is none. |
| <Link id="m-isleavingcurrentstate" /><code>{"bool IsLeavingCurrentState { get; private set; }"}</code> | True while a state is being deactivated during a switch. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playername" /><code>{"private string PlayerName { get; }"}</code> | The player's username for log messages, or the object name if there's no user info. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stateactivated" /><code>{"event "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" StateActivated"}</code> | Raised after a state's `Activate` runs. |
| <Link id="m-statedeactivated" /><code>{"event "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" StateDeactivated"}</code> | Raised after a state's `Deactivate` runs while leaving it. |
| <Link id="m-statemadecurrent" /><code>{"event "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" StateMadeCurrent"}</code> | Raised after a new state becomes current, whether or not it was freshly activated. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Rebuilds the state stack from the player save, or starts the default state if none was saved. |
| <Link id="m-saveto" /><code>{"void SaveTo("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Writes the whole state stack to the player save. |
| <Link id="m-setplayer" /><code>{"void SetPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Binds the manager to its player and creates the network method syncs. Call before loading. |
| <Link id="m-setstate" /><code>{"void SetState("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateLeaveCallback = null, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateEnterCallback = null)"}</code> | Switches to a state by type or instance. Shared base states are kept, others deactivated. Server validates the new state and sends the change to chunks. |
| <Link id="m-setstate-2" /><code>{"void SetState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" newState, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateLeaveCallback = null, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateEnterCallback = null)"}</code> | Switches to a state by type or instance. Shared base states are kept, others deactivated. Server validates the new state and sends the change to chunks. |
| <Link id="m-startwithdefaultstate" /><code>{"void StartWithDefaultState()"}</code> | Sets the player into `FirstJoinState`. Used when there's no saved state. |
| <Link id="m-syncstatestoremoteplayer" /><code>{"void SyncStatesToRemotePlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" remotePlayer)"}</code> | Sends the full state stack to one remote player, if there is a current state. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/alta-player/iplayerstatefactory">{"IPlayerStateFactory"}</Link>{" playerStateFactory)"}</code> | VContainer injection of the factory that creates states by type. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deactivatecurrentstateandfindcommonbase" /><code>{"private void DeactivateCurrentStateAndFindCommonBase<T>("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" leavingState, T newState)"}</code> | Walks up from the leaving state, deactivating each state until it reaches one the new state is built on, which it decorates instead. |
| <Link id="m-doubledatasize" /><code>{"private uint[] DoubleDataSize(uint[] oldData, ref uint wordIndex)"}</code> | Grows `playerSavingData` to twice its size from the array pool while the save stream writes. |
| <Link id="m-enternewstate" /><code>{"private void EnterNewState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" newState, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stateSyncingStream, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateEnterCallback)"}</code> | Makes the state current, server syncs the change to chunks, activates it if needed and fires the events. |
| <Link id="m-getcurrentstateorbase" /><code>{"private "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" GetCurrentStateOrBase("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType)"}</code> | Finds the current state or one of its base states with the given type, or null. |
| <Link id="m-getsyncstreamforleavingstate" /><code>{"private "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" GetSyncStreamForLeavingState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" leavingState)"}</code> | Server: writes a leaving state's leave data for a remote player. Nothing calls it. |
| <Link id="m-loadfromstream" /><code>{"private void LoadFromStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Action<"}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{", "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{"> serializationMethod)"}</code> | Reads a stack of state types, creates and loads each, then sets them in order; stops if one forwards elsewhere. |
| <Link id="m-serializedisk" /><code>{"private void SerializeDisk("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the whole state stack in the disk save format. |
| <Link id="m-serializestatetodisk" /><code>{"private void SerializeStateToDisk("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" state, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Saves or loads one state for disk, blocking `SetState` while it runs. |
| <Link id="m-serializestatetoremote" /><code>{"private void SerializeStateToRemote("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" state, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads one state in the format sent to other players. |
| <Link id="m-syncstatechange-2" /><code>{"private void SyncStateChange("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType)"}</code> | Syncs a new state type; remote clients call `SetState` with it. |
| <Link id="m-syncstates-2" /><code>{"private void SyncStates("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the full state stack to a remote player, who loads it on their client. |
| <Link id="m-writetostream" /><code>{"private void WriteToStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Action<"}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{", "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{"> serializationMethod)"}</code> | Writes the state stack from the bottom up: count, each type, then each state's data. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerStateManager`:

[`IPlayer.StateManager`](/game-api/types/alta-networking/iplayer#m-statemanager), [`IPlayerState.StateManager`](/game-api/types/alta-player/iplayerstate#m-statemanager), [`PlayerStateBase.stateManager`](/game-api/types/alta-player/playerstatebase#m-statemanager), [`PlayerStateBase.StateManager`](/game-api/types/alta-player/playerstatebase#m-statemanager-2), [`TestingPlayerStates.stateManager`](/game-api/types/alta-player/testingplayerstates#m-statemanager), [`StateTransition<TFrom, TTo>.StateManager`](/game-api/types/alta-player/statetransition-tfrom-tto#m-statemanager), [`DiscordController.stateManager`](/game-api/types/global-c-d/discordcontroller#m-statemanager), [`Player.stateManager`](/game-api/types/global-p/player#m-statemanager), [`Player.StateManager`](/game-api/types/global-p/player#m-statemanager-2).
