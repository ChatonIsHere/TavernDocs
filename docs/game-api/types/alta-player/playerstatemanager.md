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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerStateManager()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentstate" /><code>{"private "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" currentState"}</code> |
| <Link id="m-isduringstatesaveloading" /><code>{"private bool isDuringStateSaveLoading"}</code> |
| <Link id="m-isduringstatesaving" /><code>{"private bool isDuringStateSaving"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |
| <Link id="m-playersavingdata" /><code>{"private uint[] playerSavingData"}</code> |
| <Link id="m-playerstatefactory" /><code>{"private "}<Link to="/game-api/types/alta-player/iplayerstatefactory">{"IPlayerStateFactory"}</Link>{" playerStateFactory"}</code> |
| <Link id="m-syncstatechange" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{"> syncStateChange"}</code> |
| <Link id="m-syncstates" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStates"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstate-2" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" CurrentState { get; private set; }"}</code> | The innermost active state. Its base states are reached through `BaseState`. |
| <Link id="m-currentstatetype" /><code><Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" CurrentStateType { get; private set; }"}</code> | Type of the current state, or `None` if there is none. |
| <Link id="m-isleavingcurrentstate" /><code>{"bool IsLeavingCurrentState { get; private set; }"}</code> | True while a state is being deactivated during a switch. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-playername" /><code>{"private string PlayerName { get; }"}</code> |

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

| Member |
| --- |
| <Link id="m-deactivatecurrentstateandfindcommonbase" /><code>{"private void DeactivateCurrentStateAndFindCommonBase<T>("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" leavingState, T newState)"}</code> |
| <Link id="m-doubledatasize" /><code>{"private uint[] DoubleDataSize(uint[] oldData, ref uint wordIndex)"}</code> |
| <Link id="m-enternewstate" /><code>{"private void EnterNewState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" newState, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stateSyncingStream, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" beforeStateEnterCallback)"}</code> |
| <Link id="m-getcurrentstateorbase" /><code>{"private "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" GetCurrentStateOrBase("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType)"}</code> |
| <Link id="m-getsyncstreamforleavingstate" /><code>{"private "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" GetSyncStreamForLeavingState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" leavingState)"}</code> |
| <Link id="m-loadfromstream" /><code>{"private void LoadFromStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Action<"}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{", "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{"> serializationMethod)"}</code> |
| <Link id="m-serializedisk" /><code>{"private void SerializeDisk("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-serializestatetodisk" /><code>{"private void SerializeStateToDisk("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" state, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-serializestatetoremote" /><code>{"private void SerializeStateToRemote("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" state, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncstatechange-2" /><code>{"private void SyncStateChange("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType)"}</code> |
| <Link id="m-syncstates-2" /><code>{"private void SyncStates("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-writetostream" /><code>{"private void WriteToStream("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Action<"}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{", "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{"> serializationMethod)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerStateManager`:

[`IPlayer.StateManager`](/game-api/types/alta-networking/iplayer#m-statemanager), [`IPlayerState.StateManager`](/game-api/types/alta-player/iplayerstate#m-statemanager), [`PlayerStateBase.stateManager`](/game-api/types/alta-player/playerstatebase#m-statemanager), [`PlayerStateBase.StateManager`](/game-api/types/alta-player/playerstatebase#m-statemanager-2), [`TestingPlayerStates.stateManager`](/game-api/types/alta-player/testingplayerstates#m-statemanager), [`StateTransition<TFrom, TTo>.StateManager`](/game-api/types/alta-player/statetransition-tfrom-tto#m-statemanager), [`DiscordController.stateManager`](/game-api/types/global-c-d/discordcontroller#m-statemanager), [`Player.stateManager`](/game-api/types/global-p/player#m-statemanager), [`Player.StateManager`](/game-api/types/global-p/player#m-statemanager-2).
