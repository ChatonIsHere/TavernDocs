---
title: "StaticRandomCustomization"
description: "Keeps the main menu's random character look between scene loads."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticRandomCustomization

A **static class** in `Root.Township`, `Alta.Customization`.

Keeps the main menu's random character look between scene loads.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentrandom" /><code>{"static "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" CurrentRandom { get; private set; }"}</code> | <span className="api-desc">The saved look, or null until `Save` runs.</span> |
| <Link id="m-isinuse" /><code>{"static bool IsInUse { get; set; }"}</code> | <span className="api-desc">Flag for whether the random look is in use; not set in this file.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code>{"static async Task Save("}<Link to="/mod/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" wrapper)"}</code> | <span className="api-desc">Clears the old saved look and stores a new preset made from the wrapper.</span> |
