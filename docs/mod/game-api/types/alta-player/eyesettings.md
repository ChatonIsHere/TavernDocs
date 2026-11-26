---
title: "EyeSettings"
description: "The character dummy's eye blit materials, held on CharacterDummy.Eyes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EyeSettings

A **class** in `Root.Township`, `Alta.Character`.

The character dummy's eye blit materials, held on `CharacterDummy.Eyes`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EyeSettings()"}</code> | Creates an `EyeSettings` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eyeadditionalblit" /><code>{"private Material eyeAdditionalBlit"}</code> | Backing field for `EyeAdditionalBlit`. |
| <Link id="m-eyeblit" /><code>{"private Material eyeBlit"}</code> | Backing field for `EyeBlit`. |
| <Link id="m-isinstantiated" /><code>{"private bool isInstantiated"}</code> | Unused flag (not serialised). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eyeadditionalblit-2" /><code>{"Material EyeAdditionalBlit { get; }"}</code> | Second eye blit material. |
| <Link id="m-eyeblit-2" /><code>{"Material EyeBlit { get; }"}</code> | Main eye blit material. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanup" /><code>{"void CleanUp()"}</code> | Does nothing in this build. |

## Used in

Members of other types that take, return or hold a `EyeSettings`:

[`CharacterDummy.eyes`](/mod/game-api/types/alta-player/characterdummy#m-eyes), [`CharacterDummy.Eyes`](/mod/game-api/types/alta-player/characterdummy#m-eyes-2).
