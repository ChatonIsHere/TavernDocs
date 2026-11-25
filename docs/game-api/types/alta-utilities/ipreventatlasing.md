---
title: "IPreventAtlasing"
description: "Implemented by components that can keep a renderer out of texture atlas baking."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPreventAtlasing

An **interface** in `Root.Township`, `Alta.Utilities.Atlas`.

Implemented by components that can keep a renderer out of texture atlas baking.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`GenericCraftingResult`](/game-api/types/alta-crafting/genericcraftingresult), [`PreventAtlas`](/game-api/types/alta-utilities/preventatlas), [`AnalyticalButton`](/game-api/types/global-a-b/analyticalbutton), [`PhysicalButton`](/game-api/types/global-p/physicalbutton), [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ispreventatlasing" /><code>{"bool IsPreventAtlasing(Renderer renderer)"}</code> | True if this renderer should not be atlased. |
