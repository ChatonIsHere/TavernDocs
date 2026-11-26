---
title: "PopulationDelegate"
description: "Callback that gets a PopulationSample."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDelegate

A **delegate** in `Root.Township`, `Alta.Populations`.

Callback that gets a `PopulationSample`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationDelegate(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PopulationDelegate`:

[`PopulationSample.OnPopulationDiedOut`](/game-api/types/alta-world-generation/populationsample#m-onpopulationdiedout), [`PopulationSample.OnPopulationMaxed`](/game-api/types/alta-world-generation/populationsample#m-onpopulationmaxed), [`PopulationSample.OnPopulationStarted`](/game-api/types/alta-world-generation/populationsample#m-onpopulationstarted).
