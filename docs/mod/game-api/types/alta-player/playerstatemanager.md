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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Player states](/mod/game-api/networking/player-states#playerstatemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" currentState"}</code> | <span className="api-desc">Backing field for `CurrentState`.</span> |
| <Link id="m-isduringstatesaveloading" /><code>{"private bool isDuringStateSaveLoading"}</code> | <span className="api-desc">True while states load from a stream; passed to `ValidateStateActivation`.</span> |
| <Link id="m-isduringstatesaving" /><code>{"private bool isDuringStateSaving"}</code> | <span className="api-desc">True while a state saves to disk. `SetState` refuses to run then.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The player these states belong to, set by `SetPlayer`.</span> |
| <Link id="m-playersavingdata" /><code>{"private uint[] playerSavingData"}</code> | <span className="api-desc">Pooled buffer the save stream writes into, then handed to the player save.</span> |
| <Link id="m-playerstatefactory" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iplayerstatefactory">{"IPlayerStateFactory"}</Link>{" playerStateFactory"}</code> | <span className="api-desc">Injected factory that creates states by type.</span> |
| <Link id="m-syncstatechange" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{"> syncStateChange"}</code> | <span className="api-desc">Method sync for `SyncStateChange`.</span> |
| <Link id="m-syncstates" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStates"}</code> | <span className="api-desc">Method sync for `SyncStates`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstate-2" /><code><Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" CurrentState { get; private set; }"}</code> | <span className="api-desc">The innermost active state. Its base states are reached through `BaseState`.</span> |
| <Link id="m-currentstatetype" /><code><Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" CurrentStateType { get; private set; }"}</code> | <span className="api-desc">Type of the current state, or `None` if there is none.</span> |
| <Link id="m-isleavingcurrentstate" /><code>{"bool IsLeavingCurrentState { get; private set; }"}</code> | <span className="api-desc">True while a state is being deactivated during a switch.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playername" /><code>{"private string PlayerName { get; }"}</code> | <span className="api-desc">The player's username for log messages, or the object name if there's no user info.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stateactivated" /><code>{"event "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" StateActivated"}</code> | <span className="api-desc">Raised after a state's `Activate` runs.</span> |
| <Link id="m-statedeactivated" /><code>{"event "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" StateDeactivated"}</code> | <span className="api-desc">Raised after a state's `Deactivate` runs while leaving it.</span> |
| <Link id="m-statemadecurrent" /><code>{"event "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" StateMadeCurrent"}</code> | <span className="api-desc">Raised after a new state becomes current, whether or not it was freshly activated.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Rebuilds the state stack from the player save, or starts the default state if none was saved.</span> |
| <Link id="m-saveto" /><code>{"void SaveTo("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Writes the whole state stack to the player save.</span> |
| <Link id="m-setplayer" /><code>{"void SetPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Binds the manager to its player and creates the network method syncs. Call before loading.</span> |
| <Link id="m-setstate" /><code>{"void SetState("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateLeaveCallback = null, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateEnterCallback = null)"}</code> | <span className="api-desc">Switches to a state by type or instance. Shared base states are kept, others deactivated. Server validates the new state and sends the change to chunks.</span> |
| <Link id="m-setstate-2" /><code>{"void SetState("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" newState, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateLeaveCallback = null, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateEnterCallback = null)"}</code> | <span className="api-desc">Switches to a state by type or instance. Shared base states are kept, others deactivated. Server validates the new state and sends the change to chunks.</span> |
| <Link id="m-startwithdefaultstate" /><code>{"void StartWithDefaultState()"}</code> | <span className="api-desc">Sets the player into `FirstJoinState`. Used when there's no saved state.</span> |
| <Link id="m-syncstatestoremoteplayer" /><code>{"void SyncStatesToRemotePlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" remotePlayer)"}</code> | <span className="api-desc">Sends the full state stack to one remote player, if there is a current state.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/alta-player/iplayerstatefactory">{"IPlayerStateFactory"}</Link>{" playerStateFactory)"}</code> | <span className="api-desc">VContainer injection of the factory that creates states by type.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deactivatecurrentstateandfindcommonbase" /><code>{"private void DeactivateCurrentStateAndFindCommonBase<T>("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" leavingState, T newState)"}</code> | <span className="api-desc">Walks up from the leaving state, deactivating each state until it reaches one the new state is built on, which it decorates instead.</span> |
| <Link id="m-doubledatasize" /><code>{"private uint[] DoubleDataSize(uint[] oldData, ref uint wordIndex)"}</code> | <span className="api-desc">Grows `playerSavingData` to twice its size from the array pool while the save stream writes.</span> |
| <Link id="m-enternewstate" /><code>{"private void EnterNewState("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" newState, "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stateSyncingStream, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateEnterCallback)"}</code> | <span className="api-desc">Makes the state current, server syncs the change to chunks, activates it if needed and fires the events.</span> |
| <Link id="m-getcurrentstateorbase" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" GetCurrentStateOrBase("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType)"}</code> | <span className="api-desc">Finds the current state or one of its base states with the given type, or null.</span> |
| <Link id="m-getsyncstreamforleavingstate" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" GetSyncStreamForLeavingState("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" leavingState)"}</code> | <span className="api-desc">Server: writes a leaving state's leave data for a remote player. Nothing calls it.</span> |
| <Link id="m-loadfromstream" /><code>{"private void LoadFromStream("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Action<"}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{"> serializationMethod)"}</code> | <span className="api-desc">Reads a stack of state types, creates and loads each, then sets them in order; stops if one forwards elsewhere.</span> |
| <Link id="m-serializedisk" /><code>{"private void SerializeDisk("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the whole state stack in the disk save format.</span> |
| <Link id="m-serializestatetodisk" /><code>{"private void SerializeStateToDisk("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" state, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Saves or loads one state for disk, blocking `SetState` while it runs.</span> |
| <Link id="m-serializestatetoremote" /><code>{"private void SerializeStateToRemote("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" state, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads one state in the format sent to other players.</span> |
| <Link id="m-syncstatechange-2" /><code>{"private void SyncStateChange("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType)"}</code> | <span className="api-desc">Syncs a new state type; remote clients call `SetState` with it.</span> |
| <Link id="m-syncstates-2" /><code>{"private void SyncStates("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the full state stack to a remote player, who loads it on their client.</span> |
| <Link id="m-writetostream" /><code>{"private void WriteToStream("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Action<"}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{"> serializationMethod)"}</code> | <span className="api-desc">Writes the state stack from the bottom up: count, each type, then each state's data.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerStateManager`:

<div className="api-used-in">

[`IPlayer.StateManager`](/mod/game-api/types/alta-networking/iplayer#m-statemanager), [`IPlayerState.StateManager`](/mod/game-api/types/alta-player/iplayerstate#m-statemanager), [`PlayerStateBase.stateManager`](/mod/game-api/types/alta-player/playerstatebase#m-statemanager), [`PlayerStateBase.StateManager`](/mod/game-api/types/alta-player/playerstatebase#m-statemanager-2), [`TestingPlayerStates.stateManager`](/mod/game-api/types/alta-player/testingplayerstates#m-statemanager), [`StateTransition<TFrom, TTo>.StateManager`](/mod/game-api/types/alta-player/statetransition-tfrom-tto#m-statemanager), [`DiscordController.stateManager`](/mod/game-api/types/global-c-d/discordcontroller#m-statemanager), [`Player.stateManager`](/mod/game-api/types/global-p/player#m-statemanager), [`Player.StateManager`](/mod/game-api/types/global-p/player#m-statemanager-2).

</div>
