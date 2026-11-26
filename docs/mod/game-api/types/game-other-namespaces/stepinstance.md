---
title: "StepInstance"
description: "One running step of a micro tutorial on the client: makes a step object with static and dynamic content folders and spawns the step's static content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StepInstance

A **class** in `Root.Township`, `ATT.MicroTutorial`.

One running step of a micro tutorial on the client: makes a step object with static and dynamic content folders and spawns the step's static content.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IStepInstance`](/mod/game-api/types/game-other-namespaces/istepinstance)
- **Derived types** [`ServerStepInstance`](/mod/game-api/types/game-other-namespaces/serverstepinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-2" /><code>{"StepInstance("}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, Transform parent)"}</code> | <span className="api-desc">Creates a `StepInstance` from `step` and `parent`.</span> |
| <Link id="m-ctor" /><code>{"protected StepInstance("}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> | <span className="api-desc">Creates a `StepInstance` from `step` and `parent`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dynamiccontenttransform" /><code>{"protected Transform dynamicContentTransform"}</code> | <span className="api-desc">Folder for the step's dynamic content.</span> |
| <Link id="m-isspawned" /><code>{"protected bool isSpawned"}</code> | <span className="api-desc">True while the static content is spawned.</span> |
| <Link id="m-step" /><code>{"protected readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step"}</code> | <span className="api-desc">The step's settings asset.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | <span className="api-desc">Micro tutorial logger for this class.</span> |
| <Link id="m-staticcontent" /><code>{"private GameObject staticContent"}</code> | <span className="api-desc">The instantiated static content prefab.</span> |
| <Link id="m-staticcontenttransform" /><code>{"private Transform staticContentTransform"}</code> | <span className="api-desc">The "Static Content" child the static content is spawned under.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The step's name.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The step's settings asset.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawnstaticcontent" /><code>{"void DespawnStaticContent()"}</code> | <span className="api-desc">Destroys the step's static content if it is spawned.</span> |
| <Link id="m-spawnadditionalstaticcontent" /><code>{"async void SpawnAdditionalStaticContent()"}</code> | <span className="api-desc">Has every `AdditionalStaticContent` under the dynamic content spawn its content.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The step asset name, for logs.</span> |
| <Link id="m-initializehierarchy" /><code>{"protected void InitializeHierarchy(Transform parent)"}</code> | <span className="api-desc">Creates the step's object under the parent with "Static Content" and "Dynamic Content" children.</span> |
| <Link id="m-spawnstaticstepcontent" /><code>{"protected void SpawnStaticStepContent()"}</code> | <span className="api-desc">Instantiates the step's static content prefab, if it has one and it isn't spawned yet.</span> |
