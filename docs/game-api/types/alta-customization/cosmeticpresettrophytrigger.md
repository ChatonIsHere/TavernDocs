---
title: "CosmeticPresetTrophyTrigger"
description: "Trigger volume that tracks cosmetic preset trophies placed in it, for example on a customization stand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetTrophyTrigger

A **class** in `Root.Township`, `Alta.Customization`.

Trigger volume that tracks cosmetic preset trophies placed in it, for example on a customization stand. Raises events as trophies come and go.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetTrophyTrigger()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filterinteractedonly" /><code>{"private bool filterInteractedOnly"}</code> | Only counts trophies that are being held. |
| <Link id="m-ignoreslottedtrophy" /><code>{"private bool ignoreSlottedTrophy"}</code> | Not used in this build. |
| <Link id="m-mappedtrophies" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> mappedTrophies"}</code> | Lookup from each collider inside to its trophy. |
| <Link id="m-trackedtrophies" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{", HashSet<Collider>> trackedTrophies"}</code> | Trophies inside, each with the set of its colliders currently in the trigger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcount" /><code>{"int CurrentCount { get; }"}</code> | Number of trophies in the trigger; with `filterInteractedOnly`, only those being held. |
| <Link id="m-currenttrophies" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> CurrentTrophies { get; }"}</code> | Trophies in the trigger; with `filterInteractedOnly`, only those being held. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-releasedtrophy" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> ReleasedTrophy"}</code> | Raised when a tracked trophy is let go. |
| <Link id="m-trophyentered" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> TrophyEntered"}</code> | Raised when a trophy enters, or when a tracked trophy is grabbed while filtering to held ones. |
| <Link id="m-trophyexited" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> TrophyExited"}</code> | Raised when a trophy leaves, or when it is let go while filtering to held ones. |

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleantrophy" /><code>{"private void CleanTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | When a tracked trophy is destroyed, forgets its colliders and removes it. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> | Starts tracking a trophy when its first collider enters and raises `TrophyEntered` (if held, when filtering). |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> | Drops the collider; the trophy is removed once none of its colliders are inside. |
| <Link id="m-removetrophy" /><code>{"private void RemoveTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Stops tracking a trophy, unhooks its events and raises `TrophyExited`. |
| <Link id="m-removetrophycollider" /><code>{"private void RemoveTrophyCollider(Collider collider, "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Removes one collider from a trophy and removes the trophy if it was the last. |
| <Link id="m-trophygrabbed" /><code>{"private void TrophyGrabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Raises `TrophyEntered` when a tracked trophy is picked up. |
| <Link id="m-trophyreleased" /><code>{"private void TrophyReleased("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Raises `ReleasedTrophy`, and `TrophyExited` too when filtering to held trophies. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetTrophyTrigger`:

[`CosmeticPresetApplier.trophySource`](/game-api/types/alta-customization/cosmeticpresetapplier#m-trophysource), [`CosmeticPresetDestroyer.destroyTrigger`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-destroytrigger), [`CosmeticPresetDestroyer.proximityTrigger`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-proximitytrigger), [`CosmeticPresetSlot.trophySource`](/game-api/types/alta-customization/cosmeticpresetslot#m-trophysource), [`CosmeticRotatingSlot.trophySource`](/game-api/types/alta-customization/cosmeticrotatingslot#m-trophysource).
