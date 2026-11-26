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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`EnumSettingAccess`](/mod/game-api/types/alta-utilities/enumsettingaccess)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicrophoneEnumSettingAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-audiodevices" /><code>{"private readonly Dictionary<string, IAudioDevice> audioDevices"}</code> | <span className="api-desc">Input devices by name, from the last refresh.</span> |
| <Link id="m-devicesnames" /><code>{"private readonly Dictionary<IAudioDevice, string> devicesNames"}</code> | <span className="api-desc">Names by input device, from the last refresh.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpossiblevalue" /><code>{"override async Task<string[]> GetPossibleValue()"}</code> | <span className="api-desc">Refreshes the Vivox device list and returns the input device names.</span> |
| <Link id="m-getvalue" /><code>{"override string GetValue()"}</code> | <span className="api-desc">Name of the active (or else effective) Vivox input device. Empty, with an error logged, if neither is known.</span> |
| <Link id="m-setvalue" /><code>{"override void SetValue(string value)"}</code> | <span className="api-desc">Sets the Vivox input device by name. Logs an error if it is not in the last refreshed list.</span> |
