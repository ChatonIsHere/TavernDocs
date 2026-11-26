---
title: "PlaceItemNoDockPuzzleLogic"
description: "Puzzle trigger that checks whether the right item has been placed inside it (not docked) and fires an output value and a valid flag for the matching option."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemNoDockPuzzleLogic

A **class** in `Root.Township`, no namespace.

Puzzle trigger that checks whether the right item has been placed inside it (not docked) and fires an output value and a valid flag for the matching option.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PlaceItemNoDockPuzzleLogicSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlaceItemNoDockPuzzleLogicSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlaceItemNoDockPuzzleLogicSaveData`](/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlaceItemNoDockPuzzleLogic()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private "}<Link to="/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata">{"PlaceItemNoDockPuzzleLogicSaveData"}</Link>{" config"}</code> | Saved puzzle setup: the options (item lists and outputs) plus the empty and invalid outputs. |
| <Link id="m-hascorrectitem" /><code>{"private bool hasCorrectItem"}</code> | True when the last check found a matching item. |
| <Link id="m-onvaliditemchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValidItemChanged"}</code> | Event fired with whether a matching item is present. |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChanged"}</code> | Event fired with the output value of the current state. |
| <Link id="m-pickupsincollider" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickupsInCollider"}</code> | Item pickups currently inside the trigger. |
| <Link id="m-replacetimeline" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" replaceTimeline"}</code> | Pending 10 second timer started by a correct item. |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkifcorrect" /><code>{"private bool CheckIfCorrect("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | If the item is in one of the options, fires that option's output and true, and returns true. |
| <Link id="m-checkreplace" /><code>{"private void CheckReplace()"}</code> | Timer callback 10 seconds after a correct item; it only logs and clears the timer. |
| <Link id="m-destroyedeventremove" /><code>{"private void DestroyedEventRemove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Stops tracking a pickup whose entity was destroyed, then rechecks. |
| <Link id="m-dockedeventremove" /><code>{"private void DockedEventRemove("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Stops tracking a pickup that docked somewhere, then rechecks. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the replace timer. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Starts tracking an item pickup that enters and checks it. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Stops tracking an item pickup that leaves, then rechecks. |
| <Link id="m-refreshitemcheck" /><code>{"private void RefreshItemCheck("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Rechecks every tracked pickup; fires the invalid output if none match, or the empty output if the trigger is empty. |
| <Link id="m-removefromlist" /><code>{"private void RemoveFromList("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Unhooks a pickup's events and removes it from `pickupsInCollider`. |

</details>
