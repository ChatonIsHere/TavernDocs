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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetTrophyTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filterinteractedonly" /><code>{"private bool filterInteractedOnly"}</code> | <span className="api-desc">Only counts trophies that are being held.</span> |
| <Link id="m-ignoreslottedtrophy" /><code>{"private bool ignoreSlottedTrophy"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-mappedtrophies" /><code>{"private Dictionary<Collider, "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> mappedTrophies"}</code> | <span className="api-desc">Lookup from each collider inside to its trophy.</span> |
| <Link id="m-trackedtrophies" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{", HashSet<Collider>> trackedTrophies"}</code> | <span className="api-desc">Trophies inside, each with the set of its colliders currently in the trigger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcount" /><code>{"int CurrentCount { get; }"}</code> | <span className="api-desc">Number of trophies in the trigger; with `filterInteractedOnly`, only those being held.</span> |
| <Link id="m-currenttrophies" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> CurrentTrophies { get; }"}</code> | <span className="api-desc">Trophies in the trigger; with `filterInteractedOnly`, only those being held.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-releasedtrophy" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> ReleasedTrophy"}</code> | <span className="api-desc">Raised when a tracked trophy is let go.</span> |
| <Link id="m-trophyentered" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> TrophyEntered"}</code> | <span className="api-desc">Raised when a trophy enters, or when a tracked trophy is grabbed while filtering to held ones.</span> |
| <Link id="m-trophyexited" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> TrophyExited"}</code> | <span className="api-desc">Raised when a trophy leaves, or when it is let go while filtering to held ones.</span> |

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleantrophy" /><code>{"private void CleanTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">When a tracked trophy is destroyed, forgets its colliders and removes it.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> | <span className="api-desc">Starts tracking a trophy when its first collider enters and raises `TrophyEntered` (if held, when filtering).</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> | <span className="api-desc">Drops the collider; the trophy is removed once none of its colliders are inside.</span> |
| <Link id="m-removetrophy" /><code>{"private void RemoveTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Stops tracking a trophy, unhooks its events and raises `TrophyExited`.</span> |
| <Link id="m-removetrophycollider" /><code>{"private void RemoveTrophyCollider(Collider collider, "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Removes one collider from a trophy and removes the trophy if it was the last.</span> |
| <Link id="m-trophygrabbed" /><code>{"private void TrophyGrabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Raises `TrophyEntered` when a tracked trophy is picked up.</span> |
| <Link id="m-trophyreleased" /><code>{"private void TrophyReleased("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Raises `ReleasedTrophy`, and `TrophyExited` too when filtering to held trophies.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetTrophyTrigger`:

<div className="api-used-in">

[`CosmeticPresetApplier.trophySource`](/mod/game-api/types/alta-customization/cosmeticpresetapplier#m-trophysource), [`CosmeticPresetDestroyer.destroyTrigger`](/mod/game-api/types/alta-customization/cosmeticpresetdestroyer#m-destroytrigger), [`CosmeticPresetDestroyer.proximityTrigger`](/mod/game-api/types/alta-customization/cosmeticpresetdestroyer#m-proximitytrigger), [`CosmeticPresetSlot.trophySource`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-trophysource), [`CosmeticRotatingSlot.trophySource`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-trophysource).

</div>
