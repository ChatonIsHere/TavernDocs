---
title: "InGameInspector.LODVizualizer"
description: "Debug inspector tool that recolours every renderer in the scene by its LOD level, using the inspector's lodColors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODVizualizer

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that recolours every renderer in the scene by its LOD level, using the inspector's `lodColors`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/mod/game-api/types/global-i-l/ingameinspector-ingametool)
- **Nested types** [`RendererMaterial`](/mod/game-api/types/global-i-l/ingameinspector-lodvizualizer-renderermaterial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODVizualizer("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.LODVizualizer` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the LOD colouring is on.</span> |
| <Link id="m-lodmaterials" /><code>{"private Material[] lodMaterials"}</code> | <span className="api-desc">One material per LOD colour, made from the inspector's `lodMaterial`.</span> |
| <Link id="m-references" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/ingameinspector-lodvizualizer-renderermaterial">{"InGameInspector.LODVizualizer.RendererMaterial"}</Link>{"> references"}</code> | <span className="api-desc">Renderers that were recoloured, with their original materials, so `Disable` can restore them.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "Lod Vizualizer".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Puts back each renderer's original material and clears the list.</span> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Resets the tool to inactive.</span> |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | <span className="api-desc">Toggles the LOD colouring on or off.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Does nothing for this tool.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | <span className="api-desc">Finds every `LODGroup` in the scene and swaps each LOD level's renderers to that level's colour material.</span> |

</details>
