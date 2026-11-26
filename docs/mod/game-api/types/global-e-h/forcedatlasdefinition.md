---
title: "ForcedAtlasDefinition"
description: "Build step that applies a fixed atlas definition to every renderer under this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForcedAtlasDefinition

A **class** in `Root.Township`, the global namespace.

Build step that applies a fixed atlas definition to every renderer under this object.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`BuildRendererBakeable`](/mod/game-api/types/assembly-other/buildrendererbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForcedAtlasDefinition()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androiddefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" androidDefinition"}</code> | Android atlas definition. Not used by `Bake` in this build. |
| <Link id="m-standalonedefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" standaloneDefinition"}</code> | Atlas definition applied at bake time. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"override void Bake(bool isSaving)"}</code> | Applies `standaloneDefinition` to all child renderers. |
