---
title: Player states
description: PlayerStateManager and the player states (first join, playing, combat, downed, dead, spirit), how they stack, sync and save.
sidebar_position: 11
---

# Player states

`Alta.PlayerStates` in `Root.Township`. The server decides; clients follow.

Every `Player` has a `PlayerStateManager` (`player.StateManager`) holding its current state: in the character room, playing, in combat, downed, dead. States can **decorate** a base state: combat, downed, spirit and equipment all sit on top of a `PlayingState`, which stays underneath while they're active.

## The states

| `PlayerStateType` | Class | Base | What it means |
| --- | --- | --- | --- |
| `None` (0) | | | No state yet. |
| `FirstJoin` (1) | `FirstJoinState` | | A player with no save. Moves straight on to `Customization` (if the server has it on and the player mode is saved) or `Playing`. |
| `Playing` (2) | `PlayingState` | | Normal play. Activating it on the server spawns the body for the player's mode. |
| `Combat` (3) | `CombatState` | `PlayingState` | Fighting. |
| `Customization` (4) | `CustomizationState` | | The character room. Players in it aren't saved. |
| `Equipment` (5) | `EquipmentState` | `PlayingState` | |
| `Dead` (6) | `DeadState` | | Dead, waiting to respawn. Loading a save in this state goes straight back to `Playing`. |
| `Spirit` (7) | `SpiritState` | `PlayingState` | Spirit form. Sets `PlayerController.IsSpirit`. |
| `Downed` (8) | `DownedState` | `PlayingState` | Downed, waiting for help. Lasts `ServerSettings.DownedStateDuration` seconds (60 by default); 0 means die straight away. Sets `IsDowned`. |

State changes go through transitions (`Alta.PlayerStates.Transitions`): `PlayingToCombatTransition`, `PlayingToDownedTransition`, `DownedToDeadTransition`, `DeadToPlayingTransition` and so on, listed in `AllTransitions`. Each state adds the transitions it allows when it activates.

## PlayerStateManager

`Alta.PlayerStates.PlayerStateManager`, a `MonoBehaviour` on the `Player`.

| Member | What it does | Notes |
| --- | --- | --- |
| `IPlayerState CurrentState { get; }` | The top state. | |
| `PlayerStateType CurrentStateType { get; }` | Its type, or `None`. | The cheap check. |
| `bool IsLeavingCurrentState { get; }` | True while a state is being deactivated. | |
| `event PlayerStateHandler StateActivated` | A state was activated. `PlayerStateHandler` is `void (IPlayerState)`. | Both sides. |
| `event PlayerStateHandler StateDeactivated` | A state was deactivated (including base states being left). | Both sides. |
| `event PlayerStateHandler StateMadeCurrent` | A state became the top one. | Both sides. |
| `void SetState(PlayerStateType type, PlayerStateHandler beforeStateLeaveCallback = null, PlayerStateHandler beforeStateEnterCallback = null)` | Change state. Reuses the current state or a base of it if it's that type, else makes a new one. | Server. A client only follows the server. |
| `void SetState(IPlayerState newState, ...)` | Change to a state object you made. | |
| `void StartWithDefaultState()` | Go to `FirstJoinState`. | |
| `void SyncStatesToRemotePlayer(Player remotePlayer)` | Send the whole state stack to one client. | Server. Done when a player joins. |
| `void SaveTo(PlayerSave save)`, `void LoadFrom(PlayerSave save)` | Save and load the state stack. | Server. |

```csharp
player.StateManager.StateActivated += state =>
{
    if (state.StateType == PlayerStateType.Downed)
        MelonLogger.Msg($"{player.UserInfo.Username} is down");
};
```

```csharp
if (player.StateManager.CurrentStateType != PlayerStateType.Customization)
    player.StateManager.SetState(PlayerStateType.Customization);
```

Setting a state of the type that's already current logs "State of type: ... already active" and does nothing.

## How it syncs

- On the server, `SetState` runs the new state's `ValidateStateActivation` first; a state can refuse, or forward to another state from there.
- The server sends the new state type to every client that has the player spawned (`PlayerStateChanged`, 5 bits). Each client then calls `SetState` itself.
- States activate with `OnActivate` on the server and `OnActivateRemote(bool isPlayerCharacterSpawned)` on clients. Same for deactivate and decorate. In local test, both run.
- A joining client gets each player's whole stack with `PlayerStateSyncToRemote`.
- A client asks the server for a transition with `PlayerStateTransitionRequest` on its `Player`. Each state swaps its own handlers for `PlayerStateSync` and `PlayerStateTransitionRequest` on the `Player` while it's active, and puts the old ones back after.
- Every activation and deactivation on the server raises `ConsoleEvents.PlayerStateChanged` for the remote console (`isEnter` tells them apart). See [Console events](../console-and-utilities/console-events.md).

## PlayerStateBase

`Alta.PlayerStates.PlayerStateBase` (and `PlayerStateBase<T>` for a decorating state with base `T`). What a state can override:

| Member | When |
| --- | --- |
| `abstract PlayerStateType StateType { get; }` | |
| `virtual bool ValidateStateActivation(bool isDuringLoading)` | Server, before activating. Return `false` to refuse. |
| `OnActivate()`, `OnDeactivate()` | Server. |
| `OnActivateRemote(bool isPlayerCharacterSpawned)`, `OnDeactivateRemote(...)` | Clients. |
| `OnDecorated`, `OnUndecorated` (and `...Remote`) | A state went on or came off this one. |
| `OnPlayerControllerFound(PlayerController, bool isFromOnActivate)`, `OnPlayerControllerLost(bool)` | The body appeared or went while this state is active. |
| `SyncStateEnter(Stream)`, `SyncStateLeave(Stream)`, `SerializeDisk(Stream)` | Extra data sent on change, and saved. |

Also `Player`, `StateManager`, `BaseState`, `Decorator`, `IsActive`, `Settings` (from `PlayerStateSettingsManager`), and protected `IsServer`, `IsRemote`, `IsLocalPlayer`, `PlayerCharacter`, `EndState()`. Up to 32 state types and 9 levels deep (`MaxPlayerStateTypes`, `MaxPlayerStateDepth`).

Clients build states from the `PlayerStateType` the server sends, through an `IPlayerStateFactory` injected with VContainer. So a state class of your own would have no type the clients understand. Patch the existing states' methods instead.

## Hooking it

- **`PlayerStateManager.SetState(IPlayerState, ...)`**: every change goes through it on both sides. A prefix sees the state about to be entered.
- **A state's `OnActivate` / `OnDeactivate`** (protected virtual, overridden): patch the concrete class, for example `DownedState.OnActivate`, not the base.
- **`ValidateStateActivation`**: a postfix returning `false` stops a state on the server. The game warns against setting another state from `OnActivate`; do it from validation instead.

## See also

- [Player](player.md)
- [PlayerController and the body](player-controller.md)
- [Saving](saving.md)
