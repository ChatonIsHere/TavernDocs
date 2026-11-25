---
title: "LoadScenes"
description: "class LoadScenes in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoadScenes

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoadScenes()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allscenes" /><code>{"private static HashSet<string> allScenes"}</code> |  |
| <Link id="m-delay" /><code>{"private float delay"}</code> |  |
| <Link id="m-isloadasync" /><code>{"private bool isLoadAsync"}</code> |  |
| <Link id="m-isloadingonawake" /><code>{"private bool isLoadingOnAwake"}</code> |  |
| <Link id="m-loadscenemode" /><code>{"private LoadSceneMode loadSceneMode"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-scenestoload" /><code>{"private string[] scenesToLoad"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-initializescenes" /><code>{"private void InitializeScenes()"}</code> |  |
| <Link id="m-loadscenearray" /><code>{"private void LoadSceneArray(string[] scenes)"}</code> |  |
| <Link id="m-scenedelay" /><code>{"private IEnumerator SceneDelay() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LoadScenes`:

[`StartupLoader.sceneLoaders`](/game-api/types/global-s/startuploader#m-sceneloaders).
