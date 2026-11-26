---
title: "IReferenceRenderer"
description: "Implemented by components that keep references to renderers, so they can be updated when renderers are swapped, for example by baking."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IReferenceRenderer

An **interface** in `Root.Township`, no namespace.

Implemented by components that keep references to renderers, so they can be updated when renderers are swapped, for example by baking. `StackingComponent` and `DurabilityModule` use it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`StackingComponent`](/game-api/types/alta-items/stackingcomponent), [`DurabilityModule`](/game-api/types/global-c-d/durabilitymodule), [`DurabilityModule.DurabilityVisual`](/game-api/types/global-c-d/durabilitymodule-durabilityvisual), [`RendererGroup`](/game-api/types/global-q-r/renderergroup)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updaterenderers" /><code>{"void UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> | Replaces references to the old renderers with the new ones. |
