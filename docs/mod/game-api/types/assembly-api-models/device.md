---
title: "Device"
description: "Static info about this device that the API client sends with logins and joins."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Device

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Utility`.

Static info about this device that the API client sends with logins and joins. `ApiAccess` fills it at startup.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"static string Identifier { get; set; }"}</code> | This device's id; the game sets it to Unity's `SystemInfo.deviceUniqueIdentifier`. |
| <Link id="m-platformtarget" /><code>{"static int PlatformTarget { get; set; }"}</code> | Platform the game runs on, sent as the login `Target`; the game sets it from `ServerFeatureSetProvider.FeatureSet`. Defaults to 1. |
