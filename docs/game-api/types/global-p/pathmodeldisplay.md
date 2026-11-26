---
title: "PathModelDisplay"
description: "Skill shrine visualizer that shows a profession path's 3D model with a dissolve-in cone effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathModelDisplay

A **class** in `Root.Township`, no namespace.

Skill shrine visualizer that shows a profession path's 3D model with a dissolve-in cone effect. Client-side; it does nothing on a headless server.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`SkillShrineVisualizer`](/game-api/types/global-s/skillshrinevisualizer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PathModelDisplay()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | Shader property ID for the dissolve progress. |
| <Link id="m-animationsettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" animationSettings"}</code> | Duration and curve of the show and hide animation. |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | Material copied onto the path model. |
| <Link id="m-conematerial" /><code>{"private Material coneMaterial"}</code> | Copied material on the cone renderer. |
| <Link id="m-conerenderer" /><code>{"private Renderer coneRenderer"}</code> | The spawned cone renderer. |
| <Link id="m-conerendererparent" /><code>{"private Transform coneRendererParent"}</code> | Where the cone is spawned. |
| <Link id="m-conerendererprefab" /><code>{"private Renderer coneRendererPrefab"}</code> | Prefab for the cone renderer. |
| <Link id="m-currentlyopenpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentlyOpenPath"}</code> | The path whose model is shown. |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | True while a model is shown. |
| <Link id="m-model" /><code>{"private GameObject model"}</code> | The spawned path model. |
| <Link id="m-modelmaterial" /><code>{"private Material modelMaterial"}</code> | Copied material on the path model. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Client: plays the hide animation and marks the display closed. |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager)"}</code> | Shows the model on a host that isn't headless. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | Shows the model when a remote client reads the shrine's state. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate(bool isStarting) (iterator)"}</code> | Coroutine that animates `_Progress` on the model and cone materials in or out, destroying the model when hiding. |
| <Link id="m-instantiatemodel" /><code>{"private void InstantiateModel("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" newPath)"}</code> | Client: spawns the path's model from its profession tree with a copied material, then animates it in. |

</details>
