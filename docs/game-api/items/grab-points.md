---
title: Grab points and hand-touch points
description: GrabPoint, which decides where and how a hand holds an item, and HandHoverPoint, the hold-your-hand-here activators.
sidebar_position: 5
---

# Grab points and hand-touch points

## GrabPoint

`GrabPoint` in `Root.Township` (no namespace). A plain serialized class, not a component. Runs wherever a grab is worked out (the holder's client first, then replayed elsewhere from the synced grab point).

A `Pickup` has an array of them (`pickup.GrabPoints`). Each one is a spot and a rule for how the hand may turn around it: a sword's handle, a log's ends, a bag's strap. When a hand grabs, `Pickup.TestGrabPoints` scores every usable point and the lowest score wins. The score is the squared distance from the hand to the point plus 0.005 per degree the hand would have to turn.

An item with no grab points is held wherever the hand closed on it.

### Members

| Member | What it does | Notes |
| --- | --- | --- |
| `Transform Transform { get; }` | The point's transform, if it uses one. Otherwise a stored local position and rotation are used. | The stored position is a private field (`position`), so read it with `Traverse`. |
| `RotationMode RotationMode { get; }` | How the hand's rotation is fitted to the point. | See below. |
| `bool IsDisabled { get; set; }` | Turns the point off. | |
| `bool IsOcupied { get; set; }` | Taken by a hand. Only set for points that refuse a second hand. | The spelling is the game's. |
| `List<PickupDockSettings> EnabledFromDocks { get; }` | If not empty, the point can only be used while the item sits in one of these kinds of dock. | So a bag on your back has a strap you can reach. |
| `PickupFromDockRestriction NonDockedRestriction { get; set; }` | Flags for when the item isn't docked: `NoLeftHand`, `NoRightHand`, `Fixed` (force fixed rotation). | There's a matching private `dockedRestriction`. |
| `float CheckScore(Transform pickup, float scale, float distanceWeighting, float angleWeighting, Vector3 localHandPosition, Quaternion localHandRotation, bool isLeft, bool isDocked)` | Scores a hand against this point and remembers the fitted pose in `LastPosition` / `LastRotation`. | Infinity means not allowed. |
| `void ApplyTo(float scale, Interactor holder, Transform target)` | Moves the item so the hand sits on the fitted pose. | |
| `Vector3 LastPosition` / `Quaternion LastRotation` / `float LastLinearPosition` | The pose from the last `CheckScore`. | |

`RotationMode` is a top-level enum:

| Value | Meaning |
| --- | --- |
| `Free` | Keep the hand's own rotation. |
| `Fixed` | Always the point's rotation. |
| `FixedFlip` | The point's rotation, flipped for the other hand or when you hold it backwards. |
| `Pole` | Turn freely around an axis, either way along it (a staff). |
| `OneWayPole` | Turn around an axis, one way only. |
| `Surface` | Lie flat against a surface. |

A grab point can also have a `linear` extent, so the hand can slide along it (a long handle). `LastLinearPosition` (0 to 1) says where along it the hand ended up.

### Hooking it

Grab points are shared by every copy of a prefab only if you change the prefab. Changing a live item's points affects that item:

```csharp
public static void LeftHandOnly(Pickup pickup)
{
    foreach (GrabPoint point in pickup.GrabPoints)
        point.NonDockedRestriction |= PickupFromDockRestriction.NoRightHand;
}
```

Grabs are worked out on the holder's client, so this needs to run on clients. The server and other clients take the grab point from the network message.

For a fully custom grip, patch `Pickup.EnsureBestGrabFound(Interactor)`: work out your point, call `pickup.SetupGrabPoint(interactor, point)` and return false. See [Pickup](pickup.md#hooking-it).

## HandHoverPoint

`HandHoverPoint` in `Root.Township` (no namespace). Needs an `Interactable` on the same object. The hand tracking runs on the server and on the hovering player's client; the server decides activation.

These are the glowing "hold your hand here" spots, for example on the map board and on the stations in `PlayerUnlockStation`. Touching one is an ordinary grab on its `Interactable`. While the hand holds on, a strength value builds up: in `activationValue` seconds with the hand right on the point (within `idealRadius`), more slowly further out. Pulling the hand past `hoverRadius` ends the grab, and the strength decays once nobody holds it. The server activates it when the strength passes 1, syncs that, and tells the task system (`HandTouchTaskArgument`).

| Member | What it does | Notes |
| --- | --- | --- |
| `event Action<IPlayer> Activated` | The player finished the touch. | Fires on the server and then on clients. |
| `event Action<IPlayer> Deactivated` | It was reset. | |
| `event Action<float> StrengthChanged` | Progress, 0 to 1. | |
| `void Deactivate(IPlayer player)` | Resets it so it can be used again. | |
| `void InitializeAttractingCheck(Func<bool>)` | Sets the check behind `IsConditionMet()`, used by game conditions. | |

By default each player can only have one active hover point at a time: starting another one cancels the old one. Downed players can't use them.

## See also

- [Pickup](pickup.md)
- [Interactor and hands](interactor-and-hands.md)
