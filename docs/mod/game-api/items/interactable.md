---
title: Interactable
description: The base class for anything a hand can grab or use, with its events, filters, forwarding and channels.
sidebar_position: 2
---

# Interactable

`Interactable` in `Root.Township` (no namespace). Runs on both sides.

`Interactable` is the base for everything a hand can take hold of: `Pickup`, `PickupDock`, `PickupContainer`, `PhysicalButton`, levers, the hand-touch points and many more. It's a `NetworkEntityBehaviour`, so it sits on a networked entity.

You don't create one. Get it from the object: `GetComponent<Interactable>()`, `entity.CommonInteractable` on a `NetworkEntity`, or `interactor.InteractingWith` for whatever a hand holds now.

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `bool IsInteractable { get; set; }` | Whether hands can pick this. It's the component's `enabled` flag. | A docked pickup has this off; the dock has it on. |
| `bool IsInteractedWith { get; }` | True while at least one hand holds it. | |
| `List<Interactor> Interactors { get; }` | The hands holding it right now. | Two entries for a two-handed grip. |
| `PlayerController LastPlayerInteractor { get; set; }` | The last player who held it. | Used for ownership, kill credit and hit checks. Stays set after release. |
| `int LastInteractorPlayerId { get; }` | That player's user id, 0 if none. | Saved with pickups. |
| `NetworkEntity LastInteractorRoot { get; }` | The last holder's entity. | `ImpactTool.Wielder` reads this. |
| `InteractionChannel Channels { get; set; }` | Which kinds of hand can use it. | See [Channels](#channels). |
| `MultipleInteractionAllowance MultipleAllowance { get; }` | Whether two hands, or two players, may hold it at once. | Flags: `MultipleHandsPerPlayer`, `MultiplePlayers`. |
| `List<Interactable> ForwardTo { get; }` | Where a grab on this goes instead. | The last entry wins. See [Forwarding](#forwarding). |
| `bool IsNetworked { get; set; }` | Whether grabs on it are sent over the network. | |
| `event Action<Interactable, Interactor> InteractionStarted` | A hand took hold. | Fires on every machine that applies the grab. |
| `event Action<Interactable, Interactor> InteractionEnded` | A hand let go. | Same. |
| `event InteractionFilter InteractionFilter` | Lets you refuse a hand. | `delegate void InteractionFilter(Interactor, Interactable, ref bool result)` |
| `virtual Interactable CheckForward(Interactor, out bool isForced)` | Picks what a grab on this really grabs. | |
| `virtual bool AssessInteraction(Interactor, out float score)` | Runs the filter, then `AssessScore`. | Lower score wins. |
| `virtual bool AssessScore(Interactor, out float score)` | Squared distance from the hand to this, with a priority multiplier. | Overridden by `Pickup` (grab points) and `PickupDock` (needs a hard grab). |
| `virtual void Interact(Interactor)` | Adds the hand, raises `InteractionStarted`, sets `LastPlayerInteractor`. | Called by `Interactor.StartInteract`. |
| `virtual void FinishInteraction(Interactor)` | Removes the hand, raises `InteractionEnded`. | Called by `Interactor.StopInteract`. |
| `void ForceDrop(bool isForcingClient = false)` | Makes every hand let go. | |
| `void ForceLastInteractedPlayerID(int id, PlayerController)` | Sets the last holder by hand. | |

## How a grab picks its target

When a hand squeezes, its `Interactor` collects every `Interactable` it overlaps whose `IsInteractable` is on and whose `Channels` share a bit with the hand's. It calls `AssessInteraction` on each and takes the lowest score. Then it follows `CheckForward` until it lands on something that doesn't forward any further, and calls `CheckInteractAllowedAndReplace` on it. If another player already holds it and it doesn't allow several players, the grabbing hand waits for the holder to let go (the holder's controller buzzes).

`AssessScore` and the filter run each time a hand overlaps something while squeezing, so keep handlers cheap.

## Forwarding

`CheckForward` is how one object passes a grab to another. The main users:

- A **docked pickup** adds its dock to its `ForwardTo` list, and the dock's `CheckForward` returns the docked pickup. So you reach for the dock, and the item comes out.
- A **pouch** forwards to its `PickupContainer`, which decides whether you get the pouch or one item out of it.

The `isForced` output stops the chain.

## Channels

`InteractionChannel` is a flags enum: `Normal`, `CharacterBodyCustomisation`, `CharacterEquipment`, `SkillPractice`, `DownedCharacter`. A hand only sees interactables that share a channel with it. When a player is downed, the clients set both of that player's hands to `DownedCharacter` with `Interactor.SetOverrideInteractionChannels`, and put them back with `ResetOverrideInteractionChannels`. That's most likely how a downed player is kept to the revive and respawn objects.

Your own other hand counts differently from another player. For a `Pickup` (whose default `MultipleNotAllowedAction` is `Replace`), grabbing what your other hand holds moves it across, unless the item allows two hands. Types that use `Block` refuse instead. Grabbing something another player holds makes your hand wait, buzzing both of you, until they let go.

## Hooking it

The events are the easiest way in. Subscribe once you have the object, for example when its entity spawns:

```csharp
public static void LockForOthers(Interactable target, PlayerController owner)
{
    target.InteractionFilter += (Interactor interactor, Interactable interactable, ref bool result) =>
    {
        if (interactor.Controller?.PlayerController != owner) result = false;
    };
}
```

The filter runs on the machine doing the grab, which is the player's own client. To make a filter stick for players, a client mod has to add it. On a server-only mod it only affects grabs the server starts itself. See [Interactor and hands](interactor-and-hands.md#who-checks-a-grab) for what the server checks.

Good Harmony targets:

- `Interactable.Interact` and `FinishInteraction` are virtual. `Pickup`, `PickupContainer` and others override them and call the base, so a patch on the base sees most grabs. Patch the override (`Pickup.Interact`) if you only want pickups.
- `AssessScore` is called a lot while a hand is squeezing. Don't log in it.
- `CheckForward` decides what a grab really takes. Patching it can redirect grabs, but every client must have the same patch or players will see different things.

:::note
`IsInteractable` is the `enabled` flag of the component. Setting it from a mod also stops the component's Unity callbacks. For a pickup sitting in a dock, the game switches it off on purpose.
:::

## See also

- [Interactor and hands](interactor-and-hands.md)
- [Pickup](pickup.md)
- [Docks](docks.md)
