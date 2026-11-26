---
title: "ProfilingLoader"
description: "Results of a ProfilingPositionCycler run: the text report and the files written."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingLoader

A **class** in `Root.Township`, the global namespace.

Results of a `ProfilingPositionCycler` run: the text report and the files written.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfilingLoader()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-files" /><code>{"string[] files"}</code> | <span className="api-desc">All files in the run's folder.</span> |
| <Link id="m-friendlyname" /><code>{"string friendlyName"}</code> | <span className="api-desc">Display name.</span> |
| <Link id="m-isexpanding" /><code>{"bool isExpanding"}</code> | <span className="api-desc">Editor fold state.</span> |
| <Link id="m-isexpandingresults" /><code>{"bool isExpandingResults"}</code> | <span className="api-desc">Editor fold state for the results.</span> |
| <Link id="m-loaders" /><code>{"string[] loaders"}</code> | <span className="api-desc">Files in the folder other than `.data` and `.meta` files.</span> |
| <Link id="m-result" /><code>{"string result"}</code> | <span className="api-desc">The text report.</span> |
