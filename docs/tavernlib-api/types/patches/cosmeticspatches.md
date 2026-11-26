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

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [CosmeticsPatches](/tavernlib-api/types/patches/cosmeticspatches)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticsPatches()"}</code> | Created by TavernLib; mods don't make one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadcosmeticsintoramifappropriate" /><code>{"static void LoadCosmeticsIntoRamIfAppropriate()"}</code> | Calls `Purchasable.LoadAllIntoRAM` and logs how long it took. |
