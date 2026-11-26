---
title: "DebugLogger"
description: "Lets UnityEvents write to the Unity log."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugLogger

A **class** in `Root.Township`, the global namespace.

Lets UnityEvents write to the Unity log.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebugLogger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-log" /><code>{"void Log(string message)"}</code> | Writes the message with `Debug.Log`. |
| <Link id="m-logerror" /><code>{"void LogError(string message)"}</code> | Writes the message with `Debug.LogError`. |
