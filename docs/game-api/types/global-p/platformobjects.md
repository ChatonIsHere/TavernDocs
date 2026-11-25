---
title: "PlatformObjects"
description: "class PlatformObjects in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformObjects

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformObjectSetup`](/game-api/types/global-p/platformobjects-platformobjectsetup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformObjects()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childtargetstodestroy" /><code>{"List<GameObject> childTargetsToDestroy"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-platformobjects" /><code>{"private "}<Link to="/game-api/types/global-p/platformobjects-platformobjectsetup">{"PlatformObjects.PlatformObjectSetup"}</Link>{"[] platformObjects"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> |  |
| <Link id="m-bake-2" /><code>{"void Bake()"}</code> |  |
| <Link id="m-destroylostchildren" /><code>{"private void DestroyLostChildren()"}</code> |  |
| <Link id="m-trymovetargettoparent" /><code>{"private static void TryMoveTargetToParent(GameObject root, GameObject target)"}</code> |  |
