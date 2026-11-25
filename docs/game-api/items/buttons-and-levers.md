---
title: Buttons and levers
description: PhysicalButton and the lever types, which raise events when pushed or pulled, and why the networking lives in whatever listens to them.
sidebar_position: 14
---

# Buttons and levers

Buttons and levers in ATT are physical: you push a button in with your finger, you pull a lever's handle. The types here notice that and raise events. Most of them have no networking of their own; the component listening to them decides what the server and other players see.

## PhysicalButton

`PhysicalButton` in `Root.Township` (no namespace). An `Interactable`. Runs on every machine that simulates the press; not networked.

The button's collider has its own rigidbody, which a hand can push along one axis. Every `LateUpdate` it clamps the collider between `minDepth` and `maxDepth`, works out how far in it is (0 to 1), and fires `Pressed` past `pressThreshold` and `Released` back below `releaseThreshold`. Grabbing the button also counts: an interaction pushes it straight in, and letting go lets it out.

| Member | What it does | Notes |
| --- | --- | --- |
| `bool State { get; }` | Pressed or not. | |
| `bool IsEnabled { get; set; }` | Turns the button on or off, with its collider and look. | Buttons start disabled and switch on after a short delay. |
| `void SetStateInternal(bool)` | Sets `State` without firing events. | |
| `event Action Pressed` | It went in. | |
| `event Action Released` | It came out, with nobody holding it. | |
| `Collider ButtonCollider { get; }` / `Renderer ButtonRenderer { get; }` | Its parts. | |

The press only registers at normal scale (above 0.9) unless the prefab says otherwise, and not while the button's rigidbody sleeps.

```csharp
public static void Hook(PhysicalButton button)
{
    button.Pressed += () => MelonLogger.Msg($"{button.name} pressed here");
}
```

"Here" matters: `Pressed` fires on the machine whose physics pushed the button. A player's own client presses it with their hand. Whether the server ever sees the press depends on the listener. `ButtonCounter`, for example, has its own sync, and a mode in which the server only takes changes from one active player.

## Levers

All of these derive from `Trigger` (no namespace), a saved on/off component with `bool IsOn` and `event Action TurnedOn` / `TurnedOff`.

| Type | What it is | Networked |
| --- | --- | --- |
| `Lever` | Reads its handle's angle each physics step while the handle is awake. `float Value` (0 to 1 across `rangeMin` to `rangeMax`) and `event Action<Lever, float, float> ValueChanged` (lever, old value, new value). It's on while the angle is inside the range. | No. The handle is usually a synced pickup, so every machine reads the same angle. |
| `TwoStepLever` | A lever with an on and off position. `Value`, `ForceVisualSet(float)`. | Yes: on/off and position. The server relays an on/off change from any client, without checking who sent it. |
| `SelectionLever` | A lever with several positions. `CurrentSelection`, `NumberOfOptions`, `Handle` (its `Pickup`), `SetLeverToIndex(int)`, `event Action<SelectionLever, int, int> SelectionChanged`. | Not by itself; its handle is a pickup. |
| `NonJointLever`, `LeverToEvents`, `MultiLeverPanel` | Helpers: a lever without a joint, a lever's value as Unity events, a panel of levers. | |
| `MRK_ActivationLever` | A networked, saved activation lever used by some puzzles. | Yes. |

```csharp
public static void HookLever(Lever lever)
{
    lever.ValueChanged += (l, before, after) => MelonLogger.Msg($"{l.name}: {before:0.00} -> {after:0.00}");
}
```

## Hooking them

- To act on the server, hook the listener, not the button: whatever component the button drives (a counter, a trade machine, a puzzle) usually has a server-side method or message that's the real decision.
- `PhysicalButton.OnPressed` and `OnReleased` are private and fire the events. Patching them sees presses from any listener, on the machine that simulated them.
- `PhysicalButton.LateUpdate` and `Lever.FixedUpdate` run every frame or physics step. Don't patch them.
- Mechanisms (gears, pulleys, `Turnable`, the `Belt` drive belt) are outside this area.

## See also

- [Interactable](interactable.md)
- [Pickup](pickup.md)
