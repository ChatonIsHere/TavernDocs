---
title: "PlatformObjects"
description: "Build-time bake step that turns chosen child objects on or off depending on the platform, and destroys objects listed for removal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformObjects

A **class** in `Root.Township`, the global namespace.

Build-time bake step that turns chosen child objects on or off depending on the platform, and destroys objects listed for removal.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformObjectSetup`](/mod/game-api/types/global-p/platformobjects-platformobjectsetup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformObjects()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childtargetstodestroy" /><code>{"List<GameObject> childTargetsToDestroy"}</code> | Objects to destroy when baking. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-platformobjects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformobjects-platformobjectsetup">{"PlatformObjects.PlatformObjectSetup"}</Link>{"[] platformObjects"}</code> | Groups of objects and the platforms they stay active on. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | Applies each setup (active on matching platforms, inactive elsewhere), destroys `childTargetsToDestroy` and clears missing LOD renderers. |
| <Link id="m-bake-2" /><code>{"void Bake()"}</code> | Applies each setup (active on matching platforms, inactive elsewhere), destroys `childTargetsToDestroy` and clears missing LOD renderers. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroylostchildren" /><code>{"private void DestroyLostChildren()"}</code> | Destroys each object in `childTargetsToDestroy`, handing it to a parent `PlatformObjects` if the editor can't destroy it. |
| <Link id="m-trymovetargettoparent" /><code>{"private static void TryMoveTargetToParent(GameObject root, GameObject target)"}</code> | Adds the object to a parent `PlatformObjects` destroy list, or just deactivates it if there is none. |

</details>
