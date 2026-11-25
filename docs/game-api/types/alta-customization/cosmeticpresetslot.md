---
title: "CosmeticPresetSlot"
description: "class CosmeticPresetSlot in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetSlot

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICosmeticPresetSlot`](/game-api/types/alta-customization/icosmeticpresetslot)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetSlot()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-effectparent" /><code>{"private GameObject effectParent"}</code> |
| <Link id="m-gottrophy" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" gotTrophy"}</code> |
| <Link id="m-haptics" /><code>{"private Coroutine haptics"}</code> |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> |
| <Link id="m-trophyposition" /><code>{"private Transform trophyPosition"}</code> |
| <Link id="m-trophysource" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" trophySource"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> |
| <Link id="m-targetposition" /><code>{"Vector3 TargetPosition { get; }"}</code> |
| <Link id="m-targetrotation" /><code>{"Quaternion TargetRotation { get; }"}</code> |
| <Link id="m-trophy" /><code><Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" Trophy { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-deregistertrophy" /><code>{"async void DeregisterTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |
| <Link id="m-registertrophy" /><code>{"void RegisterTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |
| <Link id="m-savetrophy" /><code>{"async void SaveTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-disableeffects" /><code>{"private void DisableEffects("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |
| <Link id="m-disableeffects-2" /><code>{"private void DisableEffects()"}</code> |
| <Link id="m-enableeffects" /><code>{"private void EnableEffects("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |
| <Link id="m-haptics-2" /><code>{"private IEnumerator Haptics() (iterator)"}</code> |
| <Link id="m-registertrophyinternal" /><code>{"private void RegisterTrophyInternal("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetSlot`:

[`CosmeticPresetsManager.slots`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-slots).
