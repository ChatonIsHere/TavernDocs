---
title: "CharacterRendererLOD"
description: "Internal: one renderer in a character's LOD list, with a flag for whether it uses the shell."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterRendererLOD

A **internal class** in `Root.Township`, `Alta.Character.MeshRenderers`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: one renderer in a character's LOD list, with a flag for whether it uses the shell.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CharacterRendererLOD(Renderer renderer)"}</code> |
| <Link id="m-ctor-2" /><code>{"CharacterRendererLOD(Renderer renderer, bool isUsingShell)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isusingshell" /><code>{"private bool isUsingShell"}</code> | Backing field for `IsUsingShell`. |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | Backing field for `Renderer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingshell-2" /><code>{"bool IsUsingShell { get; }"}</code> | Whether this LOD renderer uses the shell. |
| <Link id="m-renderer-2" /><code>{"Renderer Renderer { get; }"}</code> | The renderer for this LOD. |
