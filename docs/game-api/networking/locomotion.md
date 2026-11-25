---
title: Locomotion
description: LocomotionController, PlayerLocomotionController, SmoothLocomotion and the fly cam, who moves a body, and how to move a player from the server.
sidebar_position: 12
---

# Locomotion

`Root.Township`, no namespace. Both sides, but **the owning client moves its own body**. The server takes the position it's sent: Rover found no speed, ground or teleport checks on the server. So a mod that wants to move a player has to ask that player's game to do it.

| Type | What it is |
| --- | --- |
| `LocomotionController` | Base class on every body. Moves the body's root, sends moves to the server, serializes the body's position every frame. |
| `PlayerLocomotionController : LocomotionController` | The VR body's version. Adds teleport styles, steps and dashes. |
| `SmoothLocomotion` | Stick walking and running, gravity, falling, the `CharacterController`. Local player only. |
| `FlyCamLocomotionController : LocomotionController` | The fly cam's. |
| `AutoCamLocomotionController : LocomotionController` | The auto cam's. |

Get them from the body: `PlayerController.LocomotionController`, `PlayerCharacter.LocomotionController` (typed as `PlayerLocomotionController`), `PlayerCharacter.SmoothLocomotion`.

## LocomotionController

A `NetworkEntityBehaviour` and `INetworkSerialized`. Its serialized state is the body's position: chunk index (13 bits), the position packed into that chunk's bounds to 1 mm (or three floats in the global chunk), a compressed rotation and flags. Rover Lite writes this record itself.

| Member | What it does | Notes |
| --- | --- | --- |
| `PlayerController PlayerController { get; }` | Its body. | |
| `void MoveTo(Vector3 position, LocomotionFunction function)` | Move the body's feet to `position`. | See below for what it does on each side. |
| `void MoveTo(Vector3 position, TeleportMode mode, LocomotionFunction function)` | Same, placing `position` at the room centre, feet or head. | Moves the transform on any side; only the owner sends it. |
| `void ServerForcePosition(Vector3 position)` | Set the position on the server and mark it changed. | Server. Used when a body is spawned, before its client takes over. |
| `void FaceTowardsXZ(Vector3 forward)` | Turn to face a direction. From the server, asks the owner. | |
| `void MoveToAndFace(Vector3 position, Vector3 forward)` | Both. From the server, asks the owner. | |
| `void RotateTo(Quaternion rotation, ...)`, `void RotateAroundPlayer(Quaternion rotation, ...)` | Turn. | |
| `void Translate(Vector3 translation)` | Nudge the remote position. | |
| `bool IsGrounded { get; set; }` | | |
| `bool IsStreaming { get; set; }` | Whether this body streams chunks in around it. | Fly cams always do. |
| `float TeleportSpeedMultiplier { get; }` | Environment, speed stat, cripple stat and carried weight multiplied. Scales the teleport arc. | Local player. |
| `float SpeedStatModifier`, `CrippledStatSpeedModifier`, `WeightSpeedModifier`, `EnvironmentSpeedModifier` | The parts of it. | |
| `IMovementContext MovementContext { get; }` | | |
| `event PositionChangedHandler PositionAboutToChange`, `PositionChanged` | Before and after a move. `void (PlayerController player, Vector3 oldPosition, Vector3 newPosition, LocomotionFunction function)`. | Both sides, whenever `MoveTo` runs there. |
| `event RotationChangedHandler RotationChanged`, `event Action<Vector3> DistanceTravelled`, `event Action<bool> StreamingSet` | | |

`LocomotionFunction` says why it moved: `TeleportLocomotion`, `SmoothLocomotion`, `Reposition`, `Rotation`, `AnchorDistance`, `Recovery`, `ForcedLocomotion`. `TeleportMode` (`Alta.Character`) is `RoomCenter`, `Feet` or `Head`.

### MoveTo on each side

- **Owner's client**: moves the body and sends `PlayerMovementMessage` to the server. The server checks it came from the body's own player, moves its copy, counts distance for the achievement stat, and passes it on to everyone else.
- **Server, someone else's body**: `MoveTo(position, function)` only does anything when `function` is `Reposition`: then it sends the move to the owner, who moves. Anything else is ignored. The three-argument `MoveTo` moves the server's copy only, and the owner's next update puts it back.

## Moving a player from the server

Use `PlayerController.ForceTeleportTo(Vector3 target)`. On a VR body it goes through the body's `PlayerEffectController` (`Alta.Alchemy`): the server sends a `TeleportRequest` to the owner, whose game does a potion-style teleport to that spot (feet), shows the effect to others, and waits for the chunk to load. Without a `PlayerEffectController` it falls back to `MoveTo(target, Reposition)`. TavernLib's `player teleport` command does the same.

```csharp
public static void Teleport(Player player, Vector3 feet)
{
    if (player.PlayerController != null) player.PlayerController.ForceTeleportTo(feet);
}
```

- The client ignores a second potion-style teleport within **2 seconds** of the last (`EffectHandler.TeleportCooldown`). Space them out.
- The position is the feet. Pick a spot with ground under it, or they fall.
- Far moves into unloaded chunks: the client loads them as it arrives. `Player.SafeMoveToChunk` waits for that first, and is what the game uses for its own long moves.

## PlayerLocomotionController

The VR body's. Extra members: `TeleportTo(Vector3 position, TeleportMode mode, LocomotionFunction function, bool isUsingTrail = false)` and an overload with `LocomotionStyle style` (`Instant`, `Lerp`, `Fade`) and `duration`; `TryStep(PlayerInput controller)`; `bool IsOnCooldown`; `Vector3 BodyPosition`. The shipped prefab has a dash cooldown of 0.5 s and steps up to 60 degrees. Remote bodies are smoothed by the server setting `PlayerSmoothingLevel`, which picks one of the prefab's smoothing settings.

## SmoothLocomotion

On the VR body (and the character room's). It only runs for the local player: in `LinkedToLocalPlayer` it makes the hand handlers, turns on the `CharacterController` and registers its per-frame update. On remote bodies and on the server it does nothing.

| Member | What it is |
| --- | --- |
| `Vector3 Position { get; }`, `Vector3 BodyCenter { get; }` | |
| `bool IsGrounded { get; }` | From the `CharacterController`'s last move. |
| `bool IsEnabled { get; set; }` | |
| `Vector3 LastSafePosition { get; set; }`, `bool IsSafe { get; set; }` | Where it puts you back if you fall somewhere bad. The client sends it to the server (`Player.SendLastSafePositionToServer`; Rover's capture saw it every 5 seconds), which saves it. |
| `Vector3 CurrentMovingVelocity { get; }`, `Vector3 velocity` | |
| `CharacterController CharacterController { get; }` | |
| `HandHandler RightHand`, `LeftHand`, `ActiveHand`, `OtherHand` | The hand doing the moving. |
| `void ForceSetIsLoaded()` | Stop waiting for the chunk. Until the spawn chunk reports loaded, all input is ignored. Rover calls this when that never happens. |
| `void WaitForChunkFinishLoad(Chunk chunk)` | |
| `void MoveToSafety()`, `void RepositionCharacter(...)`, `void TreatAsGrounded()`, `void ApplyMovement(Vector3 velocityXYZ, bool isApplyingGravity)` | |
| `void InitializeModifier(ISmoothLocomotionModifier)`, `void RemoveModifier(...)` | Things that change movement. |

Values in the shipped `SmoothLocomotionSettings` asset (the code's defaults differ, so trust these): walking 3 m/s with the stick touched, running 6 m/s with it pressed (times the speed stat), capped at 10 m/s; steps up 0.25 m. You can't run once the hunger stat is at level 2 or below and fullness is empty. Fall damage starts at 3 m and reaches 5 at 20 m; the fall distance is sent as 0 to 20 m.

:::warning[Fall damage is the client's word]

The client works out how far it fell and sends that to the server (`SyncE` on the body); the server deals the damage. A client that doesn't send it takes none.

:::

## Fly cam

`FlyCamPlayer` (a `PlayerController`) with `FlyCamLocomotionController`. Keyboard and mouse. Shipped values: move 10 m/s, climb 4 m/s, slow ×0.25, fast ×3, five mouse sensitivities. It always streams chunks. Its `SyncE` message steps through sense setups on the server (how visible it is to creatures) and toggles `IsAlive`. Fly cam players spawn at the scene's spawn point plus 1.5 m, and aren't saved.

Joining in fly mode needs member status Developer or above in the game's own check, and on TavernLib servers a role that allows it (see [Joining a server](joining.md#what-tavernlib-changes)).

## Hooking it

- **`LocomotionController.SyncMovement`** (private): the server reading a client's move. A prefix here is where you'd check moves (speed, places they shouldn't go). It's called often, so keep it cheap. Remember the body's per-frame position comes through serialization too, not just this message.
- **`PositionChanged`**: subscribe on a body to follow its moves on either side.
- **`SmoothLocomotion.UpdateInput`** (private) runs every frame on the local player. Prefer `InitializeModifier`, or patching `SmoothLocomotionSettings.CanRun`.

## See also

- [PlayerController and the body](player-controller.md)
- [Entity sync](entity-sync.md)
- [Player](player.md)
