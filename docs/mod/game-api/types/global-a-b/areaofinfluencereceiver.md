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
| <Link id="m-ctor" /><code>{"AreaOfInfluenceReceiver()"}</code> | <span className="api-desc">Creates an `AreaOfInfluenceReceiver` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-correctindex" /><code>{"private int[] correctIndex"}</code> | <span className="api-desc">Values that count as correct. Saved and loaded through `AreaOfInfluenceReceiverData`.</span> |
| <Link id="m-iscorrect" /><code>{"private bool isCorrect"}</code> | <span className="api-desc">Result of the last check.</span> |
| <Link id="m-onvaluecheck" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueCheck"}</code> | <span className="api-desc">Event fired with the result after every check.</span> |
| <Link id="m-sendersincollider" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/logicintsender">{"LogicIntSender"}</Link>{"> sendersInCollider"}</code> | <span className="api-desc">Senders currently inside the trigger.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Runs the first check.</span> |
| <Link id="m-checkifcorrect" /><code>{"private void CheckIfCorrect()"}</code> | <span className="api-desc">Sets `isCorrect` if any sender inside has a value in `correctIndex`, then fires `onValueCheck`.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Adds an entering sender's `LogicIntSender` to the list and rechecks.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Removes a leaving sender and rechecks.</span> |
| <Link id="m-removefromlist" /><code>{"private void RemoveFromList("}<Link to="/mod/game-api/types/alta-items/logicintsender">{"LogicIntSender"}</Link>{" sender)"}</code> | <span className="api-desc">Removes a sender from `sendersInCollider`.</span> |

</details>
