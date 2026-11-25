---
title: PlayerController and the body
description: PlayerController and PlayerCharacter, local and remote bodies, which body each player mode gets, and how a body is linked to its player.
sidebar_position: 10
---

# PlayerController and the body

`PlayerController` in `Root.Township` (no namespace), an abstract `NetworkEntityBehaviour`. Both sides.

A player's body is its own networked entity, spawned by the server after the `Player` and destroyed and respawned around death. `PlayerController` is the component on it that the rest of the game talks to: head, hands, health, locomotion. The VR body is `Alta.Character.PlayerCharacter`.

## Getting one

| From | Use | Notes |
| --- | --- | --- |
| Anywhere, on a client | `PlayerController.Current` | Your own body. `null` on a server and while you have no body. |
| A player | `player.PlayerController` | `null` until the body is spawned, and between death and respawn. |
| A body | `body.NetworkPlayer` | Its `Player`. |
| Every body as it's linked | `PlayerController.LinkedToRemotePlayer` | Static. Despite the name, raised for local bodies too. |

```csharp
PlayerController me = PlayerController.Current;
if (me == null) return;
MelonLogger.Msg($"Head at {me.Head.position}, alive: {me.IsAlive}");
if (me is PlayerCharacter character)
    MelonLogger.Msg($"Speed multiplier: {character.LocomotionController.TeleportSpeedMultiplier}");
```

## Which body

`ATT.PlayerStates.PlayerControllerPrefabs` (a `GlobalSettings` asset) picks the prefab from the player's mode, in `GetController(PlayerMode)`:

| Mode | Body | Class chain |
| --- | --- | --- |
| `Fly` | fly cam | `FlyCamPlayer : PlayerController` |
| `AutoCam` | auto cam | `AutoCamPlayer : PlayerController` |
| anything else | VR body | `PlayerCharacter : SmoothLocomotionPlayerController : VRPlayerController : PlayerController` |

The character room uses `CustomizationPlayerController` (also a `SmoothLocomotionPlayerController`). The main menu has its own controllers (`MainMenuPlayerController`, and `LocomotionLessController` for flat screens).

## PlayerController members

| Member | What it is | Notes |
| --- | --- | --- |
| `static PlayerController Current { get; }` | The local body. | Client. |
| `static event Action<PlayerController> CurrentPlayerChanged` | `Current` changed (to a body or `null`). | Client. |
| `static event Alta.Character.PlayerControllerHandler LocalPlayerSet` | The local body was linked. Handler is `void (PlayerController)`. | Client. |
| `static event Action<PlayerController> LinkedToRemotePlayer` | Any body was linked to its player. | Both. |
| `event Action LinkedToLocalPlayer` | This body was linked to its player. | Raised for every body, local or not. |
| `event Alta.Character.PlayerControllerHandler OnAboutToLeave` | Its player is leaving the server. | Server. |
| `event CombatEventHandler CausedCombat` | This player hit something. | |
| `virtual bool IsLocalPlayer { get; }` | This is `Current`. | |
| `Player NetworkPlayer { get; }` | Its player. | `null` once unlinked. |
| `abstract Transform Head { get; }`, `abstract Transform HeadFollow { get; }` | The head. | On a VR body, the networked head. |
| `virtual Vector3 PlayerFeetPosition { get; }` | Where its feet are. | |
| `virtual Vector3 RealFeetPosition`, `PlayerSavePosition`, `BodyCenter` | | |
| `Vector3 HeadOffset`, `FeetOffset`, `RealFeetOffset` | Offsets from the root. | |
| `virtual float HeadHeight { get; }` | | `1` on the base class; the head's local height on `PlayerCharacter`. |
| `Controller LeftController`, `RightController` | The hands. Each has an `Interactor` (what it holds). | Items area. |
| `LocomotionController LocomotionController { get; }` | Moving it. See [Locomotion](locomotion.md). | |
| `HealthObject Health { get; }` | Its health and stats. | Game systems area. |
| `Target Target { get; }` | What creatures see (senses). | Creatures area. |
| `bool IsAlive`, `IsDowned`, `IsSpirit`, `IsIgnoringDamage` | Set by the player states. | Read them; let the states set them. |
| `NetworkPrefab NetworkPrefab { get; }` | The body's prefab. | |
| `Camera Camera { get; }`, `PlayerScreenFader ScreenFader`, `PlayerMessageDisplay MessageDisplay`, `VariableIntensityPlayerLight PlayerLight` | Local view, fader, the message in front of your face, the player's light. | Client. `MessageDisplay.Display(text, seconds)` shows a message. |
| `CharacterInfo Info { get; }`, `PlayerControllerSettings Settings { get; }` | | |
| `void ForceTeleportTo(Vector3 target)` | Teleport it. Works from the server. | See [Locomotion](locomotion.md#moving-a-player-from-the-server). |
| `void WaitForChunkLoad(Chunk previousChunk = null)` | Fade out until the chunk it's in has loaded. | Client. |
| `void LinkToPlayer(Player networkPlayer, PlayerInput left, PlayerInput right)` | Link the body to its player. | Called by `Player.LinkPlayerControllerToPlayer`. |
| `virtual void SaveTo(PlayerSave save)`, `virtual void LoadFrom(PlayerSave save)` | Save and load the body (items in hands, belt, back). | Server. |
| `void OnPrePlayerLeaving()`, `void OnPlayerLeaving()` | When its player leaves: raises `OnAboutToLeave`, then lets go of or unloads what's in its hands. | Server. |

## PlayerCharacter

`Alta.Character.PlayerCharacter`, the VR body. Extra members:

| Member | What it is |
| --- | --- |
| `new PlayerLocomotionController LocomotionController` | The VR locomotion controller. |
| `SmoothLocomotion SmoothLocomotion` | From `SmoothLocomotionPlayerController`. Stick movement, local player only. |
| `new PlayerHealth Health` | |
| `Inventory Inventory` | An `Alta.Character.Inventory` over the docks below. |
| `PickupDockGroup BackDocks`, `BeltDocks` | The back slot and the belt slots. Items area. |
| `BodyController BodyController`, `CharacterIKController IKController`, `CharacterLocalityController LocalityController` | Body, IK, and the locality controller, which holds the head transform and switches parts between local and remote. |
| `CharacterDummy Dummy`, `Animator BodyAnimator` | The visible body and its animator. |
| `PlayerCustomizationHandler CustomizationHandler` | Its cosmetics on the body. |
| `RigidbodyCollection Rigidbodies`, `ColliderGroup BodyColliderGroup` | |
| `PlayerSpecialEffectsController SpecialEffectsController` | |
| `DockPositionController DockPositionController` | Where the belt docks sit for the body type. |
| `event ScaleChangedHandler ScaleChanged` | |

Its `Update` and a `FixedUpdate` coroutine run the body's IK, with no side check in the code, so as far as we can tell the server runs IK for every body too.

## How a body is linked

1. On the server, a player state (normally `PlayingState`) calls `Player.SpawnNewController`, which waits for the client to say the spawn chunk is loaded, spawns the prefab with `SpawnInternal`, puts it in position and links it (`LinkPlayerControllerToPlayer`).
2. The server sends each client a `PlayerStateSync` message on the body, carrying the `Player`'s entity id. On receiving it, a client links the body to that `Player`.
3. `LinkToPlayer` sets `NetworkPlayer`, and on the owner's client sets `Current`. It raises `LinkedToLocalPlayer` and `LinkedToRemotePlayer`, gives the body's entities their authority (see [Entity sync](entity-sync.md#who-owns-what)), and runs the body's local-player behaviours (`IInitializeAsLocalPlayer`) or remote-player ones (`IInitializeAsRemotePlayer`). The server runs the remote ones. Then `LocalPlayerSet`, `WaitForChunkLoad` and a reposition, on the owner's client only.
4. `Player.PlayerControllerSet` is raised.

:::note[Headless clients]

On a client with no GPU, a compute shader in `DarknessReader` throws inside `LinkToPlayer`, and everything after it (the local-player behaviours, `LocalPlayerSet`, the chunk wait) is skipped. Rover swallows that exception to make headless bots work.

:::

## Hooking it

- **Every body, both sides**: subscribe to `PlayerController.LinkedToRemotePlayer` once at load.

```csharp
PlayerController.LinkedToRemotePlayer += body =>
    MelonLogger.Msg($"{body.NetworkPlayer?.UserInfo.Username} has a body ({body.GetType().Name}), local: {body.IsLocalPlayer}");
```

- **The local body is ready**: `PlayerController.LocalPlayerSet`, or a postfix on `LinkToPlayer` checking `__instance.IsLocalPlayer`.
- **`LinkToPlayer`** is the busiest point: everything about a body being set up happens there. A prefix that throws stops the body working.
- `PlayerCharacter.Update` runs every frame for every body. Don't patch it unless you must.

## See also

- [Player](player.md)
- [Locomotion](locomotion.md)
- [Player states](player-states.md)
