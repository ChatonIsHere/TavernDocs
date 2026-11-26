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
| <Link id="m-ctor" /><code>{"CosmeticRotatingSlot()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidwaittimer" /><code>{"private GameObject androidWaitTimer"}</code> | <span className="api-desc">GameObject hidden when switching to an empty index.</span> |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{"[] data"}</code> | <span className="api-desc">Preset data for the 10 indices, null where empty.</span> |
| <Link id="m-effectparent" /><code>{"private GameObject effectParent"}</code> | <span className="api-desc">GameObject holding the highlight effects.</span> |
| <Link id="m-gottrophy" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" gotTrophy"}</code> | <span className="api-desc">Event raised when a preset is saved.</span> |
| <Link id="m-haptics" /><code>{"private Coroutine haptics"}</code> | <span className="api-desc">The running haptics coroutine, if any.</span> |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> | <span className="api-desc">Strength of the hover haptic pulse.</span> |
| <Link id="m-index" /><code>{"private int index"}</code> | <span className="api-desc">Backing field for `Index`.</span> |
| <Link id="m-indextext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" indexText"}</code> | <span className="api-desc">Text showing the current index.</span> |
| <Link id="m-trophyposition" /><code>{"private Transform trophyPosition"}</code> | <span className="api-desc">Transform marking where the trophy sits.</span> |
| <Link id="m-trophysource" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" trophySource"}</code> | <span className="api-desc">Trigger that detects trophies near the slot.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; }"}</code> | <span className="api-desc">World position where the trophy sits.</span> |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; }"}</code> | <span className="api-desc">World rotation the trophy sits at.</span> |
| <Link id="m-trophy" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" Trophy { get; private set; }"}</code> | <span className="api-desc">The trophy object used to show the preset of the current slot.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"private int Index { get; set; }"}</code> | <span className="api-desc">The preset index (0 to 9) shown. Setting it updates the number text, shown one higher.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Destroys the trophy and frees all loaded preset data.</span> |
| <Link id="m-decreaseindex" /><code>{"void DecreaseIndex()"}</code> | <span className="api-desc">Moves to the previous slot, wrapping from 1 to 10.</span> |
| <Link id="m-deregistertrophy" /><code>{"async void DeregisterTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">When the shown trophy is removed from a filled slot, hides it, clears the slot and deletes that preset through the API.</span> |
| <Link id="m-increaseindex" /><code>{"void IncreaseIndex()"}</code> | <span className="api-desc">Moves to the next slot, wrapping from 10 to 1.</span> |
| <Link id="m-isallempty" /><code>{"bool IsAllEmpty()"}</code> | <span className="api-desc">True when none of the ten slots holds a preset.</span> |
| <Link id="m-savetrophy" /><code>{"async void SaveTrophy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">If the current slot is empty, stores the released trophy's cosmetics there, shows it and creates the preset through the API.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy, IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> databasePresets)"}</code> | <span className="api-desc">Loads the user's saved presets into the slots and shows the first filled one, or hides the trophy if there are none.</span> |
| <Link id="m-updateindex" /><code>{"void UpdateIndex(float progress)"}</code> | <span className="api-desc">Switches to a slot (by index, or from a 0 to 1 progress value), dropping the trophy back into place and applying that slot's preset.</span> |
| <Link id="m-updateindex-2" /><code>{"void UpdateIndex(int newIndex)"}</code> | <span className="api-desc">Switches to a slot (by index, or from a 0 to 1 progress value), dropping the trophy back into place and applying that slot's preset.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applytrophy" /><code>{"private bool ApplyTrophy(int index)"}</code> | <span className="api-desc">Shows the preset at an index on the trophy, if that preset has data.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the trophy trigger's release, enter and exit events.</span> |
| <Link id="m-disableeffects" /><code>{"private void DisableEffects("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Hides the highlight effects. The overload taking a trophy only does it once no trophies are in the trigger.</span> |
| <Link id="m-disableeffects-2" /><code>{"private void DisableEffects()"}</code> | <span className="api-desc">Hides the highlight effects. The overload taking a trophy only does it once no trophies are in the trigger.</span> |
| <Link id="m-enableeffects" /><code>{"private void EnableEffects("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | <span className="api-desc">Shows the highlight effects and starts haptics while the current index is empty.</span> |
| <Link id="m-getdatafrom" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" GetDataFrom("}<Link to="/mod/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{" source)"}</code> | <span className="api-desc">Copies preset data from an API preset or a trophy into a pooled array.</span> |
| <Link id="m-getdatafrom-2" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" GetDataFrom("}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" source)"}</code> | <span className="api-desc">Copies preset data from an API preset or a trophy into a pooled array.</span> |
| <Link id="m-haptics-2" /><code>{"private IEnumerator Haptics() (iterator)"}</code> | <span className="api-desc">Coroutine that buzzes the hand holding a hovering trophy.</span> |
| <Link id="m-resettrophy" /><code>{"private void ResetTrophy()"}</code> | <span className="api-desc">Snaps the trophy back to the slot, makes it kinematic and enables its colliders.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticRotatingSlot`:

<div className="api-used-in">

[`CosmeticPresetsManager.rotatingSlot`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-rotatingslot).

</div>
