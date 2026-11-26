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
| <Link id="m-ctor" /><code>{"DebugLogger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-log" /><code>{"void Log(string message)"}</code> | <span className="api-desc">Writes the message with `Debug.Log`.</span> |
| <Link id="m-logerror" /><code>{"void LogError(string message)"}</code> | <span className="api-desc">Writes the message with `Debug.LogError`.</span> |
