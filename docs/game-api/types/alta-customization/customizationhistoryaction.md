---
title: "CustomizationHistoryAction"
description: "class CustomizationHistoryAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationHistoryAction

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`IHistoryAction`](/game-api/types/global-i-l/ihistoryaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationHistoryAction("}<Link to="/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" target, "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" oldState, "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" newState)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-newstate" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" newState"}</code> |  |
| <Link id="m-oldstate" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" oldState"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" target"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-redo" /><code>{"private void IHistoryAction.Redo()"}</code> |  |
| <Link id="m-release" /><code>{"private void IHistoryAction.Release()"}</code> |  |
| <Link id="m-undo" /><code>{"private void IHistoryAction.Undo()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationHistoryAction`:

[`CustomizationWrapper.historyManager`](/game-api/types/alta-customization/customizationwrapper#m-historymanager), [`CustomizationWrapper.HistoryManager`](/game-api/types/alta-customization/customizationwrapper#m-historymanager-2).
