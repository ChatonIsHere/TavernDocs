---
title: "PopulationDelegate"
description: "delegate PopulationDelegate in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDelegate

A **delegate** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationDelegate(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample)"}</code> |

## Used in

Members of other types that take, return or hold a `PopulationDelegate`:

[`PopulationSample.OnPopulationDiedOut`](/game-api/types/alta-world-generation/populationsample#m-onpopulationdiedout), [`PopulationSample.OnPopulationMaxed`](/game-api/types/alta-world-generation/populationsample#m-onpopulationmaxed), [`PopulationSample.OnPopulationStarted`](/game-api/types/alta-world-generation/populationsample#m-onpopulationstarted).
