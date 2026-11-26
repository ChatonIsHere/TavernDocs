---
title: "ProfilingLoader"
description: "Results of a ProfilingPositionCycler run: the text report and the files written."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingLoader

A **class** in `Root.Township`, no namespace.

Results of a `ProfilingPositionCycler` run: the text report and the files written.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfilingLoader()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-files" /><code>{"string[] files"}</code> | All files in the run's folder. |
| <Link id="m-friendlyname" /><code>{"string friendlyName"}</code> | Display name. |
| <Link id="m-isexpanding" /><code>{"bool isExpanding"}</code> | Editor fold state. |
| <Link id="m-isexpandingresults" /><code>{"bool isExpandingResults"}</code> | Editor fold state for the results. |
| <Link id="m-loaders" /><code>{"string[] loaders"}</code> | Files in the folder other than `.data` and `.meta` files. |
| <Link id="m-result" /><code>{"string result"}</code> | The text report. |
