---
title: "MicrophoneEnumSettingAccess"
description: "class MicrophoneEnumSettingAccess in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicrophoneEnumSettingAccess

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`EnumSettingAccess`](/game-api/types/alta-utilities/enumsettingaccess)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicrophoneEnumSettingAccess()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-audiodevices" /><code>{"private readonly Dictionary<string, IAudioDevice> audioDevices"}</code> |  |
| <Link id="m-devicesnames" /><code>{"private readonly Dictionary<IAudioDevice, string> devicesNames"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpossiblevalue" /><code>{"override async Task<string[]> GetPossibleValue()"}</code> |  |
| <Link id="m-getvalue" /><code>{"override string GetValue()"}</code> |  |
| <Link id="m-setvalue" /><code>{"override void SetValue(string value)"}</code> |  |
