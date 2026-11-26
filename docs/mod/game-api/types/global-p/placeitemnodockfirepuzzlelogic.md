---
title: "PlaceItemNoDockFirePuzzleLogic"
description: "Puzzle trigger that reports whether a lit fire (such as a torch) is inside it, firing onValidItemChanged."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemNoDockFirePuzzleLogic

A **class** in `Root.Township`, the global namespace.

Puzzle trigger that reports whether a lit fire (such as a torch) is inside it, firing `onValidItemChanged`. Items don't need to be docked, just placed in the trigger.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PlaceItemNoDockFirePuzzleLogicSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlaceItemNoDockFirePuzzleLogicSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlaceItemNoDockFirePuzzleLogicSaveData`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemNoDockFirePuzzleLogic()"}</code> | Creates a `PlaceItemNoDockFirePuzzleLogic` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private "}<Link to="/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata">{"PlaceItemNoDockFirePuzzleLogicSaveData"}</Link>{" config"}</code> | Saved puzzle options. Saved and loaded but not read by the logic here. |
| <Link id="m-firesincollider" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{"> firesInCollider"}</code> | Fires currently inside the trigger. |
| <Link id="m-hascorrectitem" /><code>{"private bool hasCorrectItem"}</code> | True when the last check found a lit fire. |
| <Link id="m-onvaliditemchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValidItemChanged"}</code> | Event fired with whether a lit fire is present. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshitemcheck" /><code>{"void RefreshItemCheck()"}</code> | Fires `onValidItemChanged` with true if any tracked fire is lit, otherwise false. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyedeventremove" /><code>{"private void DestroyedEventRemove("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Stops tracking a pickup and its fire when its entity is destroyed, then rechecks. |
| <Link id="m-dockedeventremove" /><code>{"private void DockedEventRemove("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Stops tracking a pickup and its fire when it docks somewhere, then rechecks. |
| <Link id="m-firesub" /><code>{"private void FireSub("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Hooks the fire's `ToggleEvent` on a pickup so lighting or putting it out rechecks the puzzle. |
| <Link id="m-firetoggle" /><code>{"private void FireToggle(bool obj)"}</code> | Rechecks the puzzle when a tracked fire is lit or put out. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Starts tracking a pickup and any fire that enters, then rechecks. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Stops tracking a pickup and its fire when it leaves, then rechecks. |
| <Link id="m-removefromfirelist" /><code>{"private void RemoveFromFireList("}<Link to="/mod/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" fire)"}</code> | Unhooks a fire and removes it from `firesInCollider`. |
| <Link id="m-unsubfrompickupevents" /><code>{"private void UnsubFromPickupEvents("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Unhooks a pickup's docked and destroyed events. |

</details>
