---
title: "CosmeticRotatingSlot"
description: "The cosmetic preset shelf slot in the customization room: ten numbered preset slots shown one at a time, each saved to the API as a trophy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticRotatingSlot

A **class** in `Root.Township`, `Alta.Customization`.

The cosmetic preset shelf slot in the customization room: ten numbered preset slots shown one at a time, each saved to the API as a trophy. Client side; used by `CosmeticPresetsManager`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICosmeticPresetSlot`](/mod/game-api/types/alta-customization/icosmeticpresetslot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticRotatingSlot()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidwaittimer" /><code>{"private GameObject androidWaitTimer"}</code> | GameObject hidden when switching to an empty index. |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{"[] data"}</code> | Preset data for the 10 indices, null where empty. |
| <Link id="m-effectparent" /><code>{"private GameObject effectParent"}</code> | GameObject holding the highlight effects. |
| <Link id="m-gottrophy" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" gotTrophy"}</code> | Event raised when a preset is saved. |
| <Link id="m-haptics" /><code>{"private Coroutine haptics"}</code> | The running haptics coroutine, if any. |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> | Strength of the hover haptic pulse. |
| <Link id="m-index" /><code>{"private int index"}</code> | Backing field for `Index`. |
| <Link id="m-indextext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" indexText"}</code> | Text showing the current index. |
| <Link id="m-trophyposition" /><code>{"private Transform trophyPosition"}</code> | Transform marking where the trophy sits. |
| <Link id="m-trophysource" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" trophySource"}</code> | Trigger that detects trophies near the slot. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; }"}</code> | World position where the trophy sits. |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; }"}</code> | World rotation the trophy sits at. |
| <Link id="m-trophy" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" Trophy { get; private set; }"}</code> | The trophy object used to show the preset of the current slot. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"private int Index { get; set; }"}</code> | The preset index (0 to 9) shown. Setting it updates the number text, shown one higher. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Destroys the trophy and frees all loaded preset data. |
| <Link id="m-decreaseindex" /><code>{"void DecreaseIndex()"}</code> | Moves to the previous slot, wrapping from 1 to 10. |
| <Link id="m-deregistertrophy" /><code>{"async void DeregisterTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | When the shown trophy is removed from a filled slot, hides it, clears the slot and deletes that preset through the API. |
| <Link id="m-increaseindex" /><code>{"void IncreaseIndex()"}</code> | Moves to the next slot, wrapping from 10 to 1. |
| <Link id="m-isallempty" /><code>{"bool IsAllEmpty()"}</code> | True when none of the ten slots holds a preset. |
| <Link id="m-savetrophy" /><code>{"async void SaveTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | If the current slot is empty, stores the released trophy's cosmetics there, shows it and creates the preset through the API. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy, IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> databasePresets)"}</code> | Loads the user's saved presets into the slots and shows the first filled one, or hides the trophy if there are none. |
| <Link id="m-updateindex" /><code>{"void UpdateIndex(float progress)"}</code> | Switches to a slot (by index, or from a 0 to 1 progress value), dropping the trophy back into place and applying that slot's preset. |
| <Link id="m-updateindex-2" /><code>{"void UpdateIndex(int newIndex)"}</code> | Switches to a slot (by index, or from a 0 to 1 progress value), dropping the trophy back into place and applying that slot's preset. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applytrophy" /><code>{"private bool ApplyTrophy(int index)"}</code> | Shows the preset at an index on the trophy, if that preset has data. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the trophy trigger's release, enter and exit events. |
| <Link id="m-disableeffects" /><code>{"private void DisableEffects("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Hides the highlight effects. The overload taking a trophy only does it once no trophies are in the trigger. |
| <Link id="m-disableeffects-2" /><code>{"private void DisableEffects()"}</code> | Hides the highlight effects. The overload taking a trophy only does it once no trophies are in the trigger. |
| <Link id="m-enableeffects" /><code>{"private void EnableEffects("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Shows the highlight effects and starts haptics while the current index is empty. |
| <Link id="m-getdatafrom" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" GetDataFrom("}<Link to="/mod/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{" source)"}</code> | Copies preset data from an API preset or a trophy into a pooled array. |
| <Link id="m-getdatafrom-2" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" GetDataFrom("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" source)"}</code> | Copies preset data from an API preset or a trophy into a pooled array. |
| <Link id="m-haptics-2" /><code>{"private IEnumerator Haptics() (iterator)"}</code> | Coroutine that buzzes the hand holding a hovering trophy. |
| <Link id="m-resettrophy" /><code>{"private void ResetTrophy()"}</code> | Snaps the trophy back to the slot, makes it kinematic and enables its colliders. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticRotatingSlot`:

[`CosmeticPresetsManager.rotatingSlot`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-rotatingslot).
