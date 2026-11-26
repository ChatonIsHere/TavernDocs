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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetDestroyer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroytrigger" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" destroyTrigger"}</code> | <span className="api-desc">Trigger that destroys trophies.</span> |
| <Link id="m-hastrophies" /><code>{"private UnityEvent HasTrophies"}</code> | <span className="api-desc">Event raised when the first trophy comes near.</span> |
| <Link id="m-notrophies" /><code>{"private UnityEvent NoTrophies"}</code> | <span className="api-desc">Event raised when the last nearby trophy leaves.</span> |
| <Link id="m-proximitytrigger" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" proximityTrigger"}</code> | <span className="api-desc">Larger trigger that tracks trophies near the bin.</span> |
| <Link id="m-trackedtrophies" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> trackedTrophies"}</code> | <span className="api-desc">Trophies currently inside the proximity trigger.</span> |
| <Link id="m-trophygotdestroyed" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" trophyGotDestroyed"}</code> | <span className="api-desc">Event given the trophy's transform just before it is destroyed, for effects.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks up the proximity and destroy triggers.</span> |
| <Link id="m-checkdestroy" /><code>{"private void CheckDestroy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Destroys a trophy that enters the destroy trigger while nobody is holding it.</span> |
| <Link id="m-destroytrophy" /><code>{"private void DestroyTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Destroys a trophy released in the destroy trigger, if it is also inside the proximity trigger.</span> |
| <Link id="m-trophyentered" /><code>{"private void TrophyEntered("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Adds a trophy to the tracked set and fires `HasTrophies` when it is the first.</span> |
| <Link id="m-trophyexited" /><code>{"private void TrophyExited("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Removes a trophy from the tracked set and fires `NoTrophies` when none are left.</span> |

</details>
