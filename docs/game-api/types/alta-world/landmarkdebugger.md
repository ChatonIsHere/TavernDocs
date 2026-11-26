---
title: "LandmarkDebugger"
description: "Developer quick access menu action that dumps landmark state to the log."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkDebugger

A **class** in `Root.Township`, `Alta.Chunks`.

Developer quick access menu action that dumps landmark state to the log. Client only, since it reads the local player's hands and camera.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LandmarkDebugger()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forced" /><code>{"private int forced"}</code> | LOD level to force, flipped between -1 and 1 on each run. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | With both grips held, loads every landmark. Otherwise logs details of `world_landmark 40` only and toggles its forced LOD. |
