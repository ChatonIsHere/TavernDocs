---
title: "PlaceItemNoDockFirePuzzleLogic"
description: "class PlaceItemNoDockFirePuzzleLogic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemNoDockFirePuzzleLogic

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PlaceItemNoDockFirePuzzleLogicSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlaceItemNoDockFirePuzzleLogicSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlaceItemNoDockFirePuzzleLogicSaveData`](/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlaceItemNoDockFirePuzzleLogic()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-config" /><code>{"private "}<Link to="/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata">{"PlaceItemNoDockFirePuzzleLogicSaveData"}</Link>{" config"}</code> |
| <Link id="m-firesincollider" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{"> firesInCollider"}</code> |
| <Link id="m-hascorrectitem" /><code>{"private bool hasCorrectItem"}</code> |
| <Link id="m-onvaliditemchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValidItemChanged"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-refreshitemcheck" /><code>{"void RefreshItemCheck()"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-destroyedeventremove" /><code>{"private void DestroyedEventRemove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-dockedeventremove" /><code>{"private void DockedEventRemove("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> |
| <Link id="m-firesub" /><code>{"private void FireSub("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-firetoggle" /><code>{"private void FireToggle(bool obj)"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |
| <Link id="m-removefromfirelist" /><code>{"private void RemoveFromFireList("}<Link to="/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" fire)"}</code> |
| <Link id="m-unsubfrompickupevents" /><code>{"private void UnsubFromPickupEvents("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |

</details>
