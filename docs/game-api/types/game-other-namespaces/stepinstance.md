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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IStepInstance`](/game-api/types/game-other-namespaces/istepinstance)
- **Derived types** [`ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-2" /><code>{"StepInstance("}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, Transform parent)"}</code> |  |
| <Link id="m-ctor" /><code>{"protected StepInstance("}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dynamiccontenttransform" /><code>{"protected Transform dynamicContentTransform"}</code> | Folder for the step's dynamic content. |
| <Link id="m-isspawned" /><code>{"protected bool isSpawned"}</code> | True while the static content is spawned. |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> |  |
| <Link id="m-staticcontent" /><code>{"private GameObject staticContent"}</code> |  |
| <Link id="m-staticcontenttransform" /><code>{"private Transform staticContentTransform"}</code> |  |
| <Link id="m-step" /><code>{"protected readonly "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step"}</code> | The step's settings asset. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The step's name. |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" Settings { get; }"}</code> | The step's settings asset. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawnstaticcontent" /><code>{"void DespawnStaticContent()"}</code> | Destroys the step's static content if it is spawned. |
| <Link id="m-spawnadditionalstaticcontent" /><code>{"async void SpawnAdditionalStaticContent()"}</code> | Has every `AdditionalStaticContent` under the dynamic content spawn its content. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The step asset name, for logs. |
| <Link id="m-initializehierarchy" /><code>{"protected void InitializeHierarchy(Transform parent)"}</code> | Creates the step's object under the parent with "Static Content" and "Dynamic Content" children. |
| <Link id="m-spawnstaticstepcontent" /><code>{"protected void SpawnStaticStepContent()"}</code> | Instantiates the step's static content prefab, if it has one and it isn't spawned yet. |
