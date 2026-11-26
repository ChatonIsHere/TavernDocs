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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialOrbSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-microtutorialsettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" microTutorialSettings"}</code> | <span className="api-desc">Serialized tutorial reference (unused).</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings">{"MicroTutorialFaceOrbSpawnSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The global `MicroTutorialFaceOrbSpawnSettings` (unused).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Destroys this GameObject.</span> |
