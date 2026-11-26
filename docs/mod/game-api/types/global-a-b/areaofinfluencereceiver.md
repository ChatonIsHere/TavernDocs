---
title: "AreaOfInfluenceReceiver"
description: "Trigger volume that checks the values of AreaOfInfluenceSender objects inside it and fires a bool event when any matches a correct value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AreaOfInfluenceReceiver

A **class** in `Root.Township`, the global namespace.

Trigger volume that checks the values of `AreaOfInfluenceSender` objects inside it and fires a bool event when any matches a correct value. A puzzle part; the correct values are saved.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<AreaOfInfluenceReceiverData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<AreaOfInfluenceReceiverData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`AreaOfInfluenceReceiverData`](/mod/game-api/types/global-a-b/areaofinfluencereceiverdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AreaOfInfluenceReceiver()"}</code> | Creates an `AreaOfInfluenceReceiver` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-correctindex" /><code>{"private int[] correctIndex"}</code> | Values that count as correct. Saved and loaded through `AreaOfInfluenceReceiverData`. |
| <Link id="m-iscorrect" /><code>{"private bool isCorrect"}</code> | Result of the last check. |
| <Link id="m-onvaluecheck" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueCheck"}</code> | Event fired with the result after every check. |
| <Link id="m-sendersincollider" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/logicintsender">{"LogicIntSender"}</Link>{"> sendersInCollider"}</code> | Senders currently inside the trigger. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Runs the first check. |
| <Link id="m-checkifcorrect" /><code>{"private void CheckIfCorrect()"}</code> | Sets `isCorrect` if any sender inside has a value in `correctIndex`, then fires `onValueCheck`. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Adds an entering sender's `LogicIntSender` to the list and rechecks. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Removes a leaving sender and rechecks. |
| <Link id="m-removefromlist" /><code>{"private void RemoveFromList("}<Link to="/mod/game-api/types/alta-items/logicintsender">{"LogicIntSender"}</Link>{" sender)"}</code> | Removes a sender from `sendersInCollider`. |

</details>
