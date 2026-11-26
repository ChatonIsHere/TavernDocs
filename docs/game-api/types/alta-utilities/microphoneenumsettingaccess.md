---
title: "MicrophoneEnumSettingAccess"
description: "Client: settings option that lists Vivox input devices and switches the microphone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicrophoneEnumSettingAccess

A **class** in `Root.Township`, `Alta.Utilities`.

Client: settings option that lists Vivox input devices and switches the microphone.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`EnumSettingAccess`](/game-api/types/alta-utilities/enumsettingaccess)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicrophoneEnumSettingAccess()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-audiodevices" /><code>{"private readonly Dictionary<string, IAudioDevice> audioDevices"}</code> | Input devices by name, from the last refresh. |
| <Link id="m-devicesnames" /><code>{"private readonly Dictionary<IAudioDevice, string> devicesNames"}</code> | Names by input device, from the last refresh. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpossiblevalue" /><code>{"override async Task<string[]> GetPossibleValue()"}</code> | Refreshes the Vivox device list and returns the input device names. |
| <Link id="m-getvalue" /><code>{"override string GetValue()"}</code> | Name of the active (or else effective) Vivox input device. Empty, with an error logged, if neither is known. |
| <Link id="m-setvalue" /><code>{"override void SetValue(string value)"}</code> | Sets the Vivox input device by name. Logs an error if it is not in the last refreshed list. |
