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
| <Link id="m-ctor" /><code>{"EyeSettings()"}</code> | <span className="api-desc">Creates an `EyeSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eyeadditionalblit" /><code>{"private Material eyeAdditionalBlit"}</code> | <span className="api-desc">Backing field for `EyeAdditionalBlit`.</span> |
| <Link id="m-eyeblit" /><code>{"private Material eyeBlit"}</code> | <span className="api-desc">Backing field for `EyeBlit`.</span> |
| <Link id="m-isinstantiated" /><code>{"private bool isInstantiated"}</code> | <span className="api-desc">Unused flag (not serialised).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eyeadditionalblit-2" /><code>{"Material EyeAdditionalBlit { get; }"}</code> | <span className="api-desc">Second eye blit material.</span> |
| <Link id="m-eyeblit-2" /><code>{"Material EyeBlit { get; }"}</code> | <span className="api-desc">Main eye blit material.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanup" /><code>{"void CleanUp()"}</code> | <span className="api-desc">Does nothing in this build.</span> |

## Used in

Members of other types that take, return or hold a `EyeSettings`:

<div className="api-used-in">

[`CharacterDummy.eyes`](/mod/game-api/types/alta-player/characterdummy#m-eyes), [`CharacterDummy.Eyes`](/mod/game-api/types/alta-player/characterdummy#m-eyes-2).

</div>
