---
title: "PlaceItemNoDockPuzzleLogic"
description: "class PlaceItemNoDockPuzzleLogic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemNoDockPuzzleLogic

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-config" /><code>{"private "}<Link to="/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata">{"PlaceItemNoDockPuzzleLogicSaveData"}</Link>{" config"}</code> |
| <Link id="m-hascorrectitem" /><code>{"private bool hasCorrectItem"}</code> |
| <Link id="m-onvaliditemchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValidItemChanged"}</code> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChanged"}</code> |
| <Link id="m-pickupsincollider" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickupsInCollider"}</code> |
| <Link id="m-replacetimeline" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" replaceTimeline"}</code> |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkifcorrect" /><code>{"private bool CheckIfCorrect("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> |
| <Link id="m-checkreplace" /><code>{"private void CheckReplace()"}</code> |
| <Link id="m-destroyedeventremove" /><code>{"private void DestroyedEventRemove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-dockedeventremove" /><code>{"private void DockedEventRemove("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |
| <Link id="m-refreshitemcheck" /><code>{"private void RefreshItemCheck("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-removefromlist" /><code>{"private void RemoveFromList("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |

</details>
