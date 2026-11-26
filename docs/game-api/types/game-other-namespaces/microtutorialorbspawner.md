---
title: "MicroTutorialOrbSpawner"
description: "Leftover placeholder: it destroys its own GameObject on initialize and does nothing else."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialOrbSpawner

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Leftover placeholder: it destroys its own GameObject on initialize and does nothing else.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialOrbSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-microtutorialsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" microTutorialSettings"}</code> | Serialized tutorial reference (unused). |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings">{"MicroTutorialFaceOrbSpawnSettings"}</Link>{" Settings { get; }"}</code> | The global `MicroTutorialFaceOrbSpawnSettings` (unused). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Destroys this GameObject. |
