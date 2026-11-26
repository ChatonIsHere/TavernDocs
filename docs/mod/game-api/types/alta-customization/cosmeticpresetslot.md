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
| <Link id="m-ctor" /><code>{"CosmeticPresetSlot()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectparent" /><code>{"private GameObject effectParent"}</code> | GameObject holding the highlight effects. |
| <Link id="m-gottrophy" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" gotTrophy"}</code> | Event raised when a trophy is saved here. |
| <Link id="m-haptics" /><code>{"private Coroutine haptics"}</code> | The running haptics coroutine, if any. |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> | Strength of the hover haptic pulse. |
| <Link id="m-trophyposition" /><code>{"private Transform trophyPosition"}</code> | Transform marking where the trophy sits. |
| <Link id="m-trophysource" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" trophySource"}</code> | Trigger that detects trophies near the slot. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | The preset index this slot saves to, set by `CosmeticPresetsManager`. |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; }"}</code> | Where a trophy sits in this slot. |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; }"}</code> | Rotation a trophy takes in this slot. |
| <Link id="m-trophy" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" Trophy { get; private set; }"}</code> | The trophy in this slot, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Destroys the trophy in this slot, without touching the saved preset. |
| <Link id="m-deregistertrophy" /><code>{"async void DeregisterTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Removes the trophy from this slot and deletes the preset at this index from the account. |
| <Link id="m-registertrophy" /><code>{"void RegisterTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Places a trophy into this slot if both are free, without saving it. Used when loading presets. |
| <Link id="m-savetrophy" /><code>{"async void SaveTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Runs when a trophy is released into the slot. Moves it here and saves its preset to the account. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the trophy trigger's release, enter and exit events. |
| <Link id="m-disableeffects" /><code>{"private void DisableEffects("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Hides the slot's highlight effects. The overload taking a trophy only does it once no trophies are in the trigger. |
| <Link id="m-disableeffects-2" /><code>{"private void DisableEffects()"}</code> | Hides the slot's highlight effects. The overload taking a trophy only does it once no trophies are in the trigger. |
| <Link id="m-enableeffects" /><code>{"private void EnableEffects("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Shows the highlight effects and starts haptics while a trophy hovers over an empty slot. |
| <Link id="m-haptics-2" /><code>{"private IEnumerator Haptics() (iterator)"}</code> | Coroutine that buzzes the hand holding a hovering trophy, while the slot is empty. |
| <Link id="m-registertrophyinternal" /><code>{"private void RegisterTrophyInternal("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Snaps the trophy to the slot, makes it kinematic and links the two. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetSlot`:

[`CosmeticPresetsManager.slots`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-slots).
