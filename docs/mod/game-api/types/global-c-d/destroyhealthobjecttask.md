---
title: "DestroyHealthObjectTask"
description: "Game task asset that counts as done when an object with one of the listed prefab hashes is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyHealthObjectTask

A **class** in `Root.Township`, the global namespace.

Game task asset that counts as done when an object with one of the listed prefab hashes is destroyed.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`CustomArgumentGameAction<DestroyActionArgument>`](/mod/game-api/types/global-c-d/customargumentgameaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyHealthObjectTask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targethashes" /><code>{"private List<uint> targetHashes"}</code> | <span className="api-desc">Prefab hashes that count for this task.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Listens on the `DestroyObject` game action channel.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/mod/game-api/types/global-c-d/destroyactionargument">{"DestroyActionArgument"}</Link>{" argument)"}</code> | <span className="api-desc">True if the destroyed object's prefab hash is in `targetHashes`.</span> |
