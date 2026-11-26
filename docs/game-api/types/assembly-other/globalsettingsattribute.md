---
title: "GlobalSettingsAttribute"
description: "Marks a GlobalSettings class with the name of its settings asset, for example GlobalSettings(\"Mining Settings\")."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettingsAttribute

A **class** in `Alta.Global.Runtime`, `Alta.Global`.

Marks a `GlobalSettings` class with the name of its settings asset, for example `[GlobalSettings("Mining Settings")]`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalSettingsAttribute(string filePath)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filepath" /><code>{"string FilePath { get; }"}</code> | Name or path of the settings asset. Nothing in the server build reads it, so probably editor only. |
