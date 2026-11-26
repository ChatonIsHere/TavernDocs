---
title: "CosmeticPresetSlot"
description: "Client: one shelf slot in the customization room that holds a saved cosmetic preset trophy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetSlot

A **class** in `Root.Township`, `Alta.Customization`.

Client: one shelf slot in the customization room that holds a saved cosmetic preset trophy. Putting a trophy in saves it to the player's account presets; taking it out deletes it.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICosmeticPresetSlot`](/mod/game-api/types/alta-customization/icosmeticpresetslot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetSlot()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectparent" /><code>{"private GameObject effectParent"}</code> | <span className="api-desc">GameObject holding the highlight effects.</span> |
| <Link id="m-gottrophy" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" gotTrophy"}</code> | <span className="api-desc">Event raised when a trophy is saved here.</span> |
| <Link id="m-haptics" /><code>{"private Coroutine haptics"}</code> | <span className="api-desc">The running haptics coroutine, if any.</span> |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> | <span className="api-desc">Strength of the hover haptic pulse.</span> |
| <Link id="m-trophyposition" /><code>{"private Transform trophyPosition"}</code> | <span className="api-desc">Transform marking where the trophy sits.</span> |
| <Link id="m-trophysource" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" trophySource"}</code> | <span className="api-desc">Trigger that detects trophies near the slot.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | <span className="api-desc">The preset index this slot saves to, set by `CosmeticPresetsManager`.</span> |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; }"}</code> | <span className="api-desc">Where a trophy sits in this slot.</span> |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; }"}</code> | <span className="api-desc">Rotation a trophy takes in this slot.</span> |
| <Link id="m-trophy" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" Trophy { get; private set; }"}</code> | <span className="api-desc">The trophy in this slot, or null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Destroys the trophy in this slot, without touching the saved preset.</span> |
| <Link id="m-deregistertrophy" /><code>{"async void DeregisterTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Removes the trophy from this slot and deletes the preset at this index from the account.</span> |
| <Link id="m-registertrophy" /><code>{"void RegisterTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Places a trophy into this slot if both are free, without saving it. Used when loading presets.</span> |
| <Link id="m-savetrophy" /><code>{"async void SaveTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Runs when a trophy is released into the slot. Moves it here and saves its preset to the account.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the trophy trigger's release, enter and exit events.</span> |
| <Link id="m-disableeffects" /><code>{"private void DisableEffects("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Hides the slot's highlight effects. The overload taking a trophy only does it once no trophies are in the trigger.</span> |
| <Link id="m-disableeffects-2" /><code>{"private void DisableEffects()"}</code> | <span className="api-desc">Hides the slot's highlight effects. The overload taking a trophy only does it once no trophies are in the trigger.</span> |
| <Link id="m-enableeffects" /><code>{"private void EnableEffects("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Shows the highlight effects and starts haptics while a trophy hovers over an empty slot.</span> |
| <Link id="m-haptics-2" /><code>{"private IEnumerator Haptics() (iterator)"}</code> | <span className="api-desc">Coroutine that buzzes the hand holding a hovering trophy, while the slot is empty.</span> |
| <Link id="m-registertrophyinternal" /><code>{"private void RegisterTrophyInternal("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Snaps the trophy to the slot, makes it kinematic and links the two.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetSlot`:

<div className="api-used-in">

[`CosmeticPresetsManager.slots`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-slots).

</div>
