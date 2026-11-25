---
title: "PathModelDisplay"
description: "class PathModelDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathModelDisplay

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`SkillShrineVisualizer`](/game-api/types/global-s/skillshrinevisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathModelDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |  |
| <Link id="m-animationsettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" animationSettings"}</code> |  |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |  |
| <Link id="m-conematerial" /><code>{"private Material coneMaterial"}</code> |  |
| <Link id="m-conerenderer" /><code>{"private Renderer coneRenderer"}</code> |  |
| <Link id="m-conerendererparent" /><code>{"private Transform coneRendererParent"}</code> |  |
| <Link id="m-conerendererprefab" /><code>{"private Renderer coneRendererPrefab"}</code> |  |
| <Link id="m-currentlyopenpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentlyOpenPath"}</code> |  |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> |  |
| <Link id="m-model" /><code>{"private GameObject model"}</code> |  |
| <Link id="m-modelmaterial" /><code>{"private Material modelMaterial"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> |  |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager)"}</code> |  |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-animate" /><code>{"private IEnumerator Animate(bool isStarting) (iterator)"}</code> |  |
| <Link id="m-instantiatemodel" /><code>{"private void InstantiateModel("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" newPath)"}</code> |  |
