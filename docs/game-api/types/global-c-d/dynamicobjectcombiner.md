---
title: "DynamicObjectCombiner"
description: "class DynamicObjectCombiner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicObjectCombiner

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`StaticObjectCombiner`](/game-api/types/global-s/staticobjectcombiner)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DynamicObjectCombiner()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-addresultsto" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" addResultsTo"}</code> |
| <Link id="m-avoidchildrenderersof" /><code>{"private Transform avoidChildRenderersOf"}</code> |
| <Link id="m-rendererstoavoid" /><code>{"private Renderer[] renderersToAvoid"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-iscleaningonjoin" /><code>{"protected override bool IsCleaningOnJoin { get; }"}</code> |
| <Link id="m-issettingtoterrainlayer" /><code>{"protected override bool IsSettingToTerrainLayer { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-bake" /><code>{"override void Bake()"}</code> |
| <Link id="m-validaterenderer" /><code>{"protected override bool ValidateRenderer(Renderer renderer)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addrenderers" /><code>{"private void AddRenderers(IEnumerable<Renderer> renderers)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>
