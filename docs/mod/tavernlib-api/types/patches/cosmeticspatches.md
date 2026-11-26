---
title: "CosmeticsPatches"
description: "Postfixes ServerHostingGameMode.OnStartSucceeded to load every cosmetic into memory once the server has started."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticsPatches

A **class** in `TavernLib`, `TavernLib.Patches`.

Postfixes `ServerHostingGameMode.OnStartSucceeded` to load every cosmetic into memory once the server has started. Server.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticsPatches()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadcosmeticsintoramifappropriate" /><code>{"static void LoadCosmeticsIntoRamIfAppropriate()"}</code> | <span className="api-desc">Calls `Purchasable.LoadAllIntoRAM` and logs how long it took.</span> |
