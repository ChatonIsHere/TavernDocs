---
title: "PlaceItemPuzzleLogic"
description: "Puzzle logic on a dock: when an item is docked or undocked it sends an output value and a valid flag based on which item is in the dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemPuzzleLogic

A **class** in `Root.Township`, the global namespace.

Puzzle logic on a dock: when an item is docked or undocked it sends an output value and a valid flag based on which item is in the dock. The config is saved with the object.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PlaceItemPuzzleLogicSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlaceItemPuzzleLogicSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlaceItemPuzzleLogicSaveData`](/mod/game-api/types/global-p/placeitempuzzlelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemPuzzleLogic()"}</code> | <span className="api-desc">Creates a `PlaceItemPuzzleLogic` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock the puzzle watches.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private "}<Link to="/mod/game-api/types/global-p/placeitempuzzlelogicsavedata">{"PlaceItemPuzzleLogicSaveData"}</Link>{" config"}</code> | <span className="api-desc">The options and output values, loaded from and saved to the save data.</span> |
| <Link id="m-onvaliditemchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValidItemChanged"}</code> | <span className="api-desc">Unity event sent true when a matching item is docked, false otherwise.</span> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Unity event sent the output value after each check.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `CheckIfCorrect` to the dock's docked and undocked events.</span> |
| <Link id="m-checkifcorrect" /><code>{"private void CheckIfCorrect("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Finds the option that holds the docked item type and sends its output, or the invalid or empty value.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlaceItemPuzzleLogic`:

<div className="api-used-in">

[`DockedFireLogic.placeItemPuzzleLogic`](/mod/game-api/types/global-c-d/dockedfirelogic#m-placeitempuzzlelogic).

</div>
