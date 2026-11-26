---
title: "PlaceItemPuzzleLogic"
description: "Puzzle logic on a dock: when an item is docked or undocked it sends an output value and a valid flag based on which item is in the dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemPuzzleLogic

A **class** in `Root.Township`, no namespace.

Puzzle logic on a dock: when an item is docked or undocked it sends an output value and a valid flag based on which item is in the dock. The config is saved with the object.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PlaceItemPuzzleLogicSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlaceItemPuzzleLogicSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlaceItemPuzzleLogicSaveData`](/game-api/types/global-p/placeitempuzzlelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemPuzzleLogic()"}</code> | Creates a `PlaceItemPuzzleLogic` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock the puzzle watches. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private "}<Link to="/game-api/types/global-p/placeitempuzzlelogicsavedata">{"PlaceItemPuzzleLogicSaveData"}</Link>{" config"}</code> | The options and output values, loaded from and saved to the save data. |
| <Link id="m-onvaliditemchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValidItemChanged"}</code> | Unity event sent true when a matching item is docked, false otherwise. |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChanged"}</code> | Unity event sent the output value after each check. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `CheckIfCorrect` to the dock's docked and undocked events. |
| <Link id="m-checkifcorrect" /><code>{"private void CheckIfCorrect("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Finds the option that holds the docked item type and sends its output, or the invalid or empty value. |

</details>

## Used in

Members of other types that take, return or hold a `PlaceItemPuzzleLogic`:

[`DockedFireLogic.placeItemPuzzleLogic`](/game-api/types/global-c-d/dockedfirelogic#m-placeitempuzzlelogic).
