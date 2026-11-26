---
title: "CosmeticPresetDestroyer"
description: "Bin for preset trophies in the customization room."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetDestroyer

A **class** in `Root.Township`, `Alta.Customization`.

Bin for preset trophies in the customization room. Destroys trophies dropped into it and raises events while any are nearby.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetDestroyer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroytrigger" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" destroyTrigger"}</code> | Trigger that destroys trophies. |
| <Link id="m-hastrophies" /><code>{"private UnityEvent HasTrophies"}</code> | Event raised when the first trophy comes near. |
| <Link id="m-notrophies" /><code>{"private UnityEvent NoTrophies"}</code> | Event raised when the last nearby trophy leaves. |
| <Link id="m-proximitytrigger" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" proximityTrigger"}</code> | Larger trigger that tracks trophies near the bin. |
| <Link id="m-trackedtrophies" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> trackedTrophies"}</code> | Trophies currently inside the proximity trigger. |
| <Link id="m-trophygotdestroyed" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" trophyGotDestroyed"}</code> | Event given the trophy's transform just before it is destroyed, for effects. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks up the proximity and destroy triggers. |
| <Link id="m-checkdestroy" /><code>{"private void CheckDestroy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Destroys a trophy that enters the destroy trigger while nobody is holding it. |
| <Link id="m-destroytrophy" /><code>{"private void DestroyTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Destroys a trophy released in the destroy trigger, if it is also inside the proximity trigger. |
| <Link id="m-trophyentered" /><code>{"private void TrophyEntered("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Adds a trophy to the tracked set and fires `HasTrophies` when it is the first. |
| <Link id="m-trophyexited" /><code>{"private void TrophyExited("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Removes a trophy from the tracked set and fires `NoTrophies` when none are left. |

</details>
