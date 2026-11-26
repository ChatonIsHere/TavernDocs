---
title: "PlaceItemNoDockPuzzleLogic"
description: "Puzzle trigger that checks whether the right item has been placed inside it (not docked) and fires an output value and a valid flag for the matching option."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemNoDockPuzzleLogic

A **class** in `Root.Township`, the global namespace.

Puzzle trigger that checks whether the right item has been placed inside it (not docked) and fires an output value and a valid flag for the matching option.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PlaceItemNoDockPuzzleLogicSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlaceItemNoDockPuzzleLogicSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlaceItemNoDockPuzzleLogicSaveData`](/mod/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemNoDockPuzzleLogic()"}</code> | <span className="api-desc">Creates a `PlaceItemNoDockPuzzleLogic` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private "}<Link to="/mod/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata">{"PlaceItemNoDockPuzzleLogicSaveData"}</Link>{" config"}</code> | <span className="api-desc">Saved puzzle setup: the options (item lists and outputs) plus the empty and invalid outputs.</span> |
| <Link id="m-hascorrectitem" /><code>{"private bool hasCorrectItem"}</code> | <span className="api-desc">True when the last check found a matching item.</span> |
| <Link id="m-onvaliditemchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValidItemChanged"}</code> | <span className="api-desc">Event fired with whether a matching item is present.</span> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Event fired with the output value of the current state.</span> |
| <Link id="m-pickupsincollider" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickupsInCollider"}</code> | <span className="api-desc">Item pickups currently inside the trigger.</span> |
| <Link id="m-replacetimeline" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" replaceTimeline"}</code> | <span className="api-desc">Pending 10 second timer started by a correct item.</span> |

</details>

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkifcorrect" /><code>{"private bool CheckIfCorrect("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | <span className="api-desc">If the item is in one of the options, fires that option's output and true, and returns true.</span> |
| <Link id="m-checkreplace" /><code>{"private void CheckReplace()"}</code> | <span className="api-desc">Timer callback 10 seconds after a correct item; it only logs and clears the timer.</span> |
| <Link id="m-destroyedeventremove" /><code>{"private void DestroyedEventRemove("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops tracking a pickup whose entity was destroyed, then rechecks.</span> |
| <Link id="m-dockedeventremove" /><code>{"private void DockedEventRemove("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Stops tracking a pickup that docked somewhere, then rechecks.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the replace timer.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Starts tracking an item pickup that enters and checks it.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Stops tracking an item pickup that leaves, then rechecks.</span> |
| <Link id="m-refreshitemcheck" /><code>{"private void RefreshItemCheck("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Rechecks every tracked pickup; fires the invalid output if none match, or the empty output if the trigger is empty.</span> |
| <Link id="m-removefromlist" /><code>{"private void RemoveFromList("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Unhooks a pickup's events and removes it from `pickupsInCollider`.</span> |

</details>
