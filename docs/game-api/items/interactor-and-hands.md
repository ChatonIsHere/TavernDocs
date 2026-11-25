---
title: Interactor and hands
description: The hand component that grabs things, how it picks a target, how grabs are sent to the server, and how a server mod puts items in a hand.
sidebar_position: 3
---

# Interactor and hands

`Interactor` in `Root.Township` (no namespace). Runs on both sides: the grab is decided on the player's own client, then replayed on the server and on other clients.

Every hand of every player has one `Interactor`. It's a `ControllerExtension` on the hand's `Controller`. The server has the same objects for each connected player, so a server mod can read and drive them too.

## Getting one

```csharp
public static Pickup Held(PlayerController player, bool left)
{
    Controller controller = left ? player.LeftController : player.RightController;
    return controller != null && controller.TryGetHeldPickup(out var pickup) ? pickup : null;
}
```

- `PlayerController.Current` is the local player (null on a server).
- `player.LeftController` / `player.RightController` are the hands' `Controller`s, and `controller.Interactor` is the hand's interactor.
- `IPlayer.PlayerController` gets you from a networked player to their body. A `PlayerCharacter` (`Alta.Character`) is the normal player body; it adds the belt and back docks.
- `interactor.Controller.PlayerController` goes the other way. It can be null for interactors that aren't on a player.

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `Transform InteractionPoint { get; }` | Where the hand grabs from: the controller's `GripPoint`. | |
| `bool IsInteracting { get; }` | Whether the hand holds anything. | |
| `Interactable InteractingWith { get; }` | What it holds. Cast to `Pickup` for items. | |
| `Interactable ForwardSource { get; }` | What the hand first reached for, before forwarding. For a docked item, the dock. | |
| `bool IsToggleHolding { get; }` | Held by the toggle grab setting, or forced by the server. | |
| `List<Interactable> OverlapInteractables { get; }` | What the hand overlapped on its last search. | |
| `InteractionChannel Channels { get; }` | Channels this hand can use, with any override. | |
| `event InteractionHandler PreInteractionStarted` | Just before `Interactable.Interact`. | `delegate void InteractionHandler(Interactor, Interactable)` |
| `event InteractionHandler InteractionStarted` | After the grab worked. | |
| `event InteractionHandler InteractionEnded` | After letting go. | |
| `Interactable StartInteract(Interactable, bool isFromNetwork = false, bool isForced = false, bool isForcingHold = false)` | Grabs it now. Returns what it really grabbed, or null. | Follows `CheckForward` unless `isFromNetwork`. |
| `void StopInteract(bool isFromServer = false, bool isForced = false)` | Lets go. | |
| `Interactable SwapInteract(Interactable, bool isForced = false)` | Lets go of the current thing and grabs another. | |
| `bool SelectBestFromCurrent(out Interactable)` | Runs the overlap search now and returns the best target. | |
| `void SetOverrideInteractionChannels(InteractionChannel)` / `ResetOverrideInteractionChannels()` | Changes what this hand can touch. | Used for downed players. |
| `void ResetTimeout()` | Restarts the grab attempt timer. | Player hands have the timeout on (0.25 s, see [Hand values](#hand-values)). Call this before `StartInteract` from a client mod, or the grab may be refused. |
| `static int IsDuringPhysicsOverlap { get; set; }` | A counter the game raises around physics-driven grab code. | |

`Controller` (no namespace) is the hand's root:

| Member | What it does |
| --- | --- |
| `Interactor Interactor { get; }` | This hand's interactor. |
| `Hand Hand { get; }` | The hand's body part (`Alta.Character.Hand`). |
| `PlayerController PlayerController { get; }` | Whose hand it is. |
| `PlayerInput PlayerInput { get; }` | This hand's input. |
| `Transform GripPoint { get; }` | The point the interactor grabs from. |
| `bool TryGetHeldPickup(out Pickup)` | The held pickup, if any. |
| `bool IsLocomotingBlocked { get; set; }` | Stops the stick on this hand moving the player. Picking up a book sets it (probably so the stick can turn pages). |

`Alta.Character.Hand` has `HandIndex` (`Left`, `Right`), `OtherHand`, `MasterHand` (the physical hand the item is jointed to), `IKWrist`, `GripAnimator` (`HandGrip`, the finger curl) and `Detach()`.

## How a grab happens

1. Squeezing grip starts the `Interact` action, and a hard squeeze also starts `HardInteract`. Both run `CheckHold`, which sweeps a capsule from where the grab point was at the last physics step to where it is now and picks the best target (see [Interactable](interactable.md#how-a-grab-picks-its-target)). For a short while after you squeeze, anything new that enters the hand's trigger is tried as well, so you can close your hand just before you reach something.
2. Releasing grip ends `Interact` and `CheckRelease` lets go, unless toggle grab is holding it.
3. Docks only answer a hard grab. `PickupDock.AssessScore` refuses a local hand unless `PlayerInput.RawInput.HardGrab` is set. The VR drivers set it for a full squeeze, so a light squeeze on a bag slot does nothing.

### Hand values

Asset values from the `Controller Extensions` prefab (build main-1.7.2.1.42203), used by both player hands:

| Field | Value | What it means |
| --- | --- | --- |
| `radius` | 0.08 | Radius of the grab sweep, in metres. |
| `length` | 0.4 | The hand's trigger is a capsule this long (`TriggerCapsule`). |
| `isTimingOutInteractionAttempt` | on | A squeeze only grabs for a limited time. |
| `interactTimeout` | 0.25 | That time, in seconds. After it, new overlaps are ignored and `StartInteract` from the hand returns null until you squeeze again. |
| `channels` | `Normal` | |

From the global `PickupTypeSettings` asset:

| Field | Value | What it means |
| --- | --- | --- |
| `minimumDistanceToTeleportSquared` | 0.25 | An item more than 0.5 m from the hand jumps to it when grabbed. |
| `maxDistanceToWaitInteractConfirmation` | 0.03 | Compared with a squared distance: a hand waiting for another player to let go gives up once it drifts about 0.17 m. |

## Who checks a grab

The client that owns the hand grabs straight away and then tells everyone. For a `Pickup` it sends the grab point it used (`GrabPositionSync`); for anything else, the `Interact` message. Letting go sends `InteractEnd` with the item's position and velocity.

When the server gets a grab, it:

- drops it if the player is dead,
- drops it and logs an unauthorised message if the sender isn't the owner of that hand,
- forwards it to everyone else nearby,
- applies it on its own copy.

It does **not** check distance, line of sight or whether the score was valid. A failed score only writes an error to the log. Anti-cheat has to add its own checks, for example in a postfix on `Pickup.Interact` on the server.

When a new player connects, each `Controller` replays its hand's current grab to them (`OnConnectedToPlayer`, a frame later), so they see what everyone holds.

## Driving hands from the server

A server mod can put an item in a player's hand. This is how the game hands items back after a revive:

```csharp
public static bool Give(PlayerCharacter character, Pickup pickup, bool left)
{
    if (!NetworkSceneManager.IsServer) return false;
    Interactor hand = (left ? character.LeftController : character.RightController).Interactor;
    if (hand.IsInteracting) return false;
    return hand.StartInteract(pickup, isFromNetwork: false, isForced: true, isForcingHold: true) != null;
}

public static void Drop(PlayerCharacter character, bool left)
{
    Interactor hand = (left ? character.LeftController : character.RightController).Interactor;
    hand.StopInteract(isFromServer: false, isForced: true);
}
```

Both flags matter:

- `isForced: true` is what makes the server send it at all. Without it the server only changes its own copy and the player never finds out.
- `isForcingHold: true` makes the player's client hold it in toggle grab. Without it, a client that isn't squeezing grip at that moment drops the item straight away.

`StopInteract(isFromServer: false, isForced: true)` from the server makes the player's client let go too. A forced end is the only kind a client accepts for its own hand.

## Hooking it

- `Pickup.Interact(Interactor)` and `Pickup.FinishInteraction(Interactor)` are the cleanest places to see grabs and drops of items on any side. Check `NetworkSceneManager.IsServer` if you only want the server's view.
- `Interactor.StartInteract` is called for every grab, including network replays (`isFromNetwork: true`) and forced ones. It's not virtual and not inlined, so it patches fine.
- `Interactor.CheckHold(PlayerInput)` is the start of a player's own grab, client side.
- The network handlers (`SyncStart`, `SyncStartGrabPoint`, `SyncEnd`) are private. Patch them with `AccessTools.Method(typeof(Interactor), "SyncStart")` if you want to refuse grabs on the server, but you then also have to tell the client, or it keeps holding an item the server thinks is on the ground.

:::warning[Headless clients]
On a client started with `-batchmode` (a bot), the pickup and dock sounds throw because there's no audio, and some of them run halfway through a grab. Rover had a bag fall off the back because the undock sound threw before the hand's joint was made. Give those sound methods a Harmony finalizer that swallows the exception. See [Docks](docks.md#headless-traps).
:::

## See also

- [Interactable](interactable.md)
- [Pickup](pickup.md)
- [Player inventory](player-inventory.md)
