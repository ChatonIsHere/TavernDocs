---
title: "PathModelDisplay"
description: "Skill shrine visualizer that shows a profession path's 3D model with a dissolve-in cone effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathModelDisplay

A **class** in `Root.Township`, the global namespace.

Skill shrine visualizer that shows a profession path's 3D model with a dissolve-in cone effect. Client-side; it does nothing on a headless server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`SkillShrineVisualizer`](/mod/game-api/types/global-s/skillshrinevisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathModelDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for the dissolve progress.</span> |
| <Link id="m-animationsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" animationSettings"}</code> | <span className="api-desc">Duration and curve of the show and hide animation.</span> |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">Material copied onto the path model.</span> |
| <Link id="m-conematerial" /><code>{"private Material coneMaterial"}</code> | <span className="api-desc">Copied material on the cone renderer.</span> |
| <Link id="m-conerenderer" /><code>{"private Renderer coneRenderer"}</code> | <span className="api-desc">The spawned cone renderer.</span> |
| <Link id="m-conerendererparent" /><code>{"private Transform coneRendererParent"}</code> | <span className="api-desc">Where the cone is spawned.</span> |
| <Link id="m-conerendererprefab" /><code>{"private Renderer coneRendererPrefab"}</code> | <span className="api-desc">Prefab for the cone renderer.</span> |
| <Link id="m-currentlyopenpath" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentlyOpenPath"}</code> | <span className="api-desc">The path whose model is shown.</span> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | <span className="api-desc">True while a model is shown.</span> |
| <Link id="m-model" /><code>{"private GameObject model"}</code> | <span className="api-desc">The spawned path model.</span> |
| <Link id="m-modelmaterial" /><code>{"private Material modelMaterial"}</code> | <span className="api-desc">Copied material on the path model.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Client: plays the hide animation and marks the display closed.</span> |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager)"}</code> | <span className="api-desc">Shows the model on a host that isn't headless.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Shows the model when a remote client reads the shrine's state.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate(bool isStarting) (iterator)"}</code> | <span className="api-desc">Coroutine that animates `_Progress` on the model and cone materials in or out, destroying the model when hiding.</span> |
| <Link id="m-instantiatemodel" /><code>{"private void InstantiateModel("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" newPath)"}</code> | <span className="api-desc">Client: spawns the path's model from its profession tree with a copied material, then animates it in.</span> |

</details>
