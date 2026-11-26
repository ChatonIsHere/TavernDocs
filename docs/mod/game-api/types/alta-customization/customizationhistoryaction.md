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
| <Link id="m-ctor" /><code>{"CustomizationHistoryAction("}<Link to="/mod/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" target, "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" oldState, "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" newState)"}</code> | <span className="api-desc">Creates a `CustomizationHistoryAction` from `target`, `oldState` and `newState`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-newstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" newState"}</code> | <span className="api-desc">Cosmetic preset data after the change.</span> |
| <Link id="m-oldstate" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" oldState"}</code> | <span className="api-desc">Cosmetic preset data before the change.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" target"}</code> | <span className="api-desc">The customisation wrapper the states are loaded into.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-redo" /><code>{"private void IHistoryAction.Redo()"}</code> | <span className="api-desc">Loads the after state back onto the wrapper.</span> |
| <Link id="m-release" /><code>{"private void IHistoryAction.Release()"}</code> | <span className="api-desc">Clears the stored before state when the step is dropped from history.</span> |
| <Link id="m-undo" /><code>{"private void IHistoryAction.Undo()"}</code> | <span className="api-desc">Loads the before state back onto the wrapper.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationHistoryAction`:

<div className="api-used-in">

[`CustomizationWrapper.historyManager`](/mod/game-api/types/alta-customization/customizationwrapper#m-historymanager), [`CustomizationWrapper.HistoryManager`](/mod/game-api/types/alta-customization/customizationwrapper#m-historymanager-2).

</div>
