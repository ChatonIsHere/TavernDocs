---
title: "EditorCoroutine"
description: "AltaCoroutine subclass with a helper that runs a coroutine to the end in one call, for editor code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorCoroutine

A **class** in `Alta.Coroutines`, the global namespace.

`AltaCoroutine` subclass with a helper that runs a coroutine to the end in one call, for editor code.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`AltaCoroutine`](/mod/game-api/types/assembly-other/altacoroutine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorCoroutine()"}</code> | <span className="api-desc">Creates an `EditorCoroutine` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-immediate" /><code>{"static void Immediate(IEnumerator enumerator)"}</code> | <span className="api-desc">Steps the enumerator, and any nested enumerators it yields, until finished, all at once.</span> |
