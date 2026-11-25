---
title: "DockPositionController"
description: "Places belt docks for the body type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockPositionController

A **class** in `Root.Township`, `Alta.Character`.

Places belt docks for the body type.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Documented in** [Player inventory](/game-api/items/player-inventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockPositionController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accessibledocks" /><code>{"private "}<Link to="/game-api/types/alta-player/accessibledocks">{"AccessibleDocks"}</Link>{" accessibleDocks"}</code> |  |
| <Link id="m-center" /><code>{"private Transform center"}</code> |  |
| <Link id="m-hassetup" /><code>{"private bool hasSetup"}</code> |  |
| <Link id="m-pouchdistances" /><code>{"private Vector3[] pouchDistances"}</code> |  |
| <Link id="m-pouchdocks" /><code>{"private Transform[] pouchDocks"}</code> |  |
| <Link id="m-tooldistances" /><code>{"private Vector3[] toolDistances"}</code> |  |
| <Link id="m-tooldocks" /><code>{"private Transform[] toolDocks"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-duplicate" /><code>{"static "}<Link to="/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" Duplicate("}<Link to="/game-api/types/alta-player/dockpositioncontroller">{"DockPositionController"}</Link>{" original, Transform parent)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup(float toolDistanceRatio, float pouchDistanceRatio)"}</code> |  |
| <Link id="m-positiondocks" /><code>{"private void PositionDocks(float toolDistanceRatio, Vector3[] distances, Transform[] docks, Vector3 centerPosition)"}</code> |  |
| <Link id="m-setup-2" /><code>{"private void Setup(Vector3 centerPosition)"}</code> |  |
| <Link id="m-setupdocks" /><code>{"private void SetupDocks(Transform[] docks, ref Vector3[] distances, Vector3 centerPosition)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DockPositionController`:

[`PlayerCharacter.dockPositionController`](/game-api/types/alta-player/playercharacter#m-dockpositioncontroller), [`PlayerCharacter.DockPositionController`](/game-api/types/alta-player/playercharacter#m-dockpositioncontroller-2).
