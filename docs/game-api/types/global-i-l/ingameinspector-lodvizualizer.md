---
title: "InGameInspector.LODVizualizer"
description: "class InGameInspector.LODVizualizer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODVizualizer

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool)
- **Nested types** [`RendererMaterial`](/game-api/types/global-i-l/ingameinspector-lodvizualizer-renderermaterial)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LODVizualizer("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-lodmaterials" /><code>{"private Material[] lodMaterials"}</code> |
| <Link id="m-references" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/ingameinspector-lodvizualizer-renderermaterial">{"InGameInspector.LODVizualizer.RendererMaterial"}</Link>{"> references"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |
| <Link id="m-update" /><code>{"override void Update()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> |

</details>
