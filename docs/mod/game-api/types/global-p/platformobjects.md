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
| <Link id="m-ctor" /><code>{"PlatformObjects()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childtargetstodestroy" /><code>{"List<GameObject> childTargetsToDestroy"}</code> | <span className="api-desc">Objects to destroy when baking.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-platformobjects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformobjects-platformobjectsetup">{"PlatformObjects.PlatformObjectSetup"}</Link>{"[] platformObjects"}</code> | <span className="api-desc">Groups of objects and the platforms they stay active on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | <span className="api-desc">Applies each setup (active on matching platforms, inactive elsewhere), destroys `childTargetsToDestroy` and clears missing LOD renderers.</span> |
| <Link id="m-bake-2" /><code>{"void Bake()"}</code> | <span className="api-desc">Applies each setup (active on matching platforms, inactive elsewhere), destroys `childTargetsToDestroy` and clears missing LOD renderers.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroylostchildren" /><code>{"private void DestroyLostChildren()"}</code> | <span className="api-desc">Destroys each object in `childTargetsToDestroy`, handing it to a parent `PlatformObjects` if the editor can't destroy it.</span> |
| <Link id="m-trymovetargettoparent" /><code>{"private static void TryMoveTargetToParent(GameObject root, GameObject target)"}</code> | <span className="api-desc">Adds the object to a parent `PlatformObjects` destroy list, or just deactivates it if there is none.</span> |

</details>
