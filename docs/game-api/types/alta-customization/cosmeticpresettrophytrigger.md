---
title: "CosmeticPresetTrophyTrigger"
description: "class CosmeticPresetTrophyTrigger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetTrophyTrigger

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetTrophyTrigger()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-filterinteractedonly" /><code>{"private bool filterInteractedOnly"}</code> |
| <Link id="m-ignoreslottedtrophy" /><code>{"private bool ignoreSlottedTrophy"}</code> |
| <Link id="m-mappedtrophies" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> mappedTrophies"}</code> |
| <Link id="m-trackedtrophies" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{", HashSet<Collider>> trackedTrophies"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentcount" /><code>{"int CurrentCount { get; }"}</code> |
| <Link id="m-currenttrophies" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> CurrentTrophies { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-releasedtrophy" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> ReleasedTrophy"}</code> |
| <Link id="m-trophyentered" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> TrophyEntered"}</code> |
| <Link id="m-trophyexited" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> TrophyExited"}</code> |

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cleantrophy" /><code>{"private void CleanTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> |
| <Link id="m-removetrophy" /><code>{"private void RemoveTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |
| <Link id="m-removetrophycollider" /><code>{"private void RemoveTrophyCollider(Collider collider, "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |
| <Link id="m-trophygrabbed" /><code>{"private void TrophyGrabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-trophyreleased" /><code>{"private void TrophyReleased("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetTrophyTrigger`:

[`CosmeticPresetApplier.trophySource`](/game-api/types/alta-customization/cosmeticpresetapplier#m-trophysource), [`CosmeticPresetDestroyer.destroyTrigger`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-destroytrigger), [`CosmeticPresetDestroyer.proximityTrigger`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-proximitytrigger), [`CosmeticPresetSlot.trophySource`](/game-api/types/alta-customization/cosmeticpresetslot#m-trophysource), [`CosmeticRotatingSlot.trophySource`](/game-api/types/alta-customization/cosmeticrotatingslot#m-trophysource).
