---
title: "CustomizationHistoryAction"
description: "One undo/redo step in the character customiser: the look before and after a change."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationHistoryAction

A **class** in `Root.Township`, `Alta.Customization`.

One undo/redo step in the character customiser: the look before and after a change. Pushed by `CustomizationWrapper`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`IHistoryAction`](/mod/game-api/types/global-i-l/ihistoryaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationHistoryAction("}<Link to="/mod/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" target, "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" oldState, "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" newState)"}</code> | Creates a `CustomizationHistoryAction` from `target`, `oldState` and `newState`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-newstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" newState"}</code> | Cosmetic preset data after the change. |
| <Link id="m-oldstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" oldState"}</code> | Cosmetic preset data before the change. |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" target"}</code> | The customisation wrapper the states are loaded into. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-redo" /><code>{"private void IHistoryAction.Redo()"}</code> | Loads the after state back onto the wrapper. |
| <Link id="m-release" /><code>{"private void IHistoryAction.Release()"}</code> | Clears the stored before state when the step is dropped from history. |
| <Link id="m-undo" /><code>{"private void IHistoryAction.Undo()"}</code> | Loads the before state back onto the wrapper. |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationHistoryAction`:

[`CustomizationWrapper.historyManager`](/mod/game-api/types/alta-customization/customizationwrapper#m-historymanager), [`CustomizationWrapper.HistoryManager`](/mod/game-api/types/alta-customization/customizationwrapper#m-historymanager-2).
