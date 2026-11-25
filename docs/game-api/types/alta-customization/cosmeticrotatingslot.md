---
title: "CosmeticRotatingSlot"
description: "class CosmeticRotatingSlot in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticRotatingSlot

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICosmeticPresetSlot`](/game-api/types/alta-customization/icosmeticpresetslot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticRotatingSlot()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidwaittimer" /><code>{"private GameObject androidWaitTimer"}</code> |  |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{"[] data"}</code> |  |
| <Link id="m-effectparent" /><code>{"private GameObject effectParent"}</code> |  |
| <Link id="m-gottrophy" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" gotTrophy"}</code> |  |
| <Link id="m-haptics" /><code>{"private Coroutine haptics"}</code> |  |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> |  |
| <Link id="m-index" /><code>{"private int index"}</code> |  |
| <Link id="m-indextext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" indexText"}</code> |  |
| <Link id="m-trophyposition" /><code>{"private Transform trophyPosition"}</code> |  |
| <Link id="m-trophysource" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" trophySource"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; }"}</code> |  |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; }"}</code> |  |
| <Link id="m-trophy" /><code><Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" Trophy { get; private set; }"}</code> |  |
| <Link id="m-index-2" /><code>{"private int Index { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-decreaseindex" /><code>{"void DecreaseIndex()"}</code> |  |
| <Link id="m-deregistertrophy" /><code>{"async void DeregisterTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |  |
| <Link id="m-increaseindex" /><code>{"void IncreaseIndex()"}</code> |  |
| <Link id="m-isallempty" /><code>{"bool IsAllEmpty()"}</code> |  |
| <Link id="m-savetrophy" /><code>{"async void SaveTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy, IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> databasePresets)"}</code> |  |
| <Link id="m-updateindex" /><code>{"void UpdateIndex(float progress)"}</code> |  |
| <Link id="m-updateindex-2" /><code>{"void UpdateIndex(int newIndex)"}</code> |  |
| <Link id="m-applytrophy" /><code>{"private bool ApplyTrophy(int index)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-disableeffects" /><code>{"private void DisableEffects("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |  |
| <Link id="m-disableeffects-2" /><code>{"private void DisableEffects()"}</code> |  |
| <Link id="m-enableeffects" /><code>{"private void EnableEffects("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |  |
| <Link id="m-getdatafrom" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" GetDataFrom("}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{" source)"}</code> |  |
| <Link id="m-getdatafrom-2" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" GetDataFrom("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" source)"}</code> |  |
| <Link id="m-haptics-2" /><code>{"private IEnumerator Haptics() (iterator)"}</code> |  |
| <Link id="m-resettrophy" /><code>{"private void ResetTrophy()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CosmeticRotatingSlot`:

[`CosmeticPresetsManager.rotatingSlot`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-rotatingslot).
