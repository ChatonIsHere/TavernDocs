---
title: "PlatformComponents"
description: "Build-time bake step that removes chosen components on platforms they aren't meant for (for example Windows-only components on Quest)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformComponents

A **class** in `Root.Township`, the global namespace.

Build-time bake step that removes chosen components on platforms they aren't meant for (for example Windows-only components on Quest).

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable)
- **Nested types** [`PlatformObjectSetup`](/mod/game-api/types/global-p/platformcomponents-platformobjectsetup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformComponents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-platformobjects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformcomponents-platformobjectsetup">{"PlatformComponents.PlatformObjectSetup"}</Link>{"[] platformObjects"}</code> | <span className="api-desc">Groups of components and the platforms they're kept on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | <span className="api-desc">Destroys each listed component whose target platforms don't include the current runtime, then clears missing renderers from the LOD group.</span> |
| <Link id="m-bake-2" /><code>{"void Bake()"}</code> | <span className="api-desc">Destroys each listed component whose target platforms don't include the current runtime, then clears missing renderers from the LOD group.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Empty.</span> |

</details>
