---
title: "CommandLineArgumentsInEditor"
description: "Global settings asset with extra command line arguments to use when running in the Unity editor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandLineArgumentsInEditor

A **class** in `Alta.CommandLine`, the global namespace.

Global settings asset with extra command line arguments to use when running in the Unity editor.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings<CommandLineArgumentsInEditor>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CommandLineArgumentsInEditor`](/mod/game-api/types/assembly-other/commandlineargumentsineditor)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandLineArgumentsInEditor()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extraarguments" /><code>{"private string extraArguments"}</code> | <span className="api-desc">Backing field for `ExtraArguments`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-extraarguments-2" /><code>{"string ExtraArguments { get; }"}</code> | <span className="api-desc">The extra argument string.</span> |
