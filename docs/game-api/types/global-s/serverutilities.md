---
title: "ServerUtilities"
description: "class ServerUtilities in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerUtilities

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#serverutilities), [Server settings](/game-api/networking/server-settings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerUtilities()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-pingtimeout" /><code>{"const float PingTimeout"}</code> |

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-publicipaddress" /><code>{"private static IPAddress publicIpAddress"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getipaddress" /><code>{"static string GetIpAddress(string serverIp)"}</code> |
| <Link id="m-getlocalipv4" /><code>{"static IPAddress GetLocalIPv4()"}</code> |
| <Link id="m-getping" /><code>{"IEnumerator GetPing(string ipAddress, Action<int> pingReceivedCallback) (iterator)"}</code> |
| <Link id="m-getpublicipaddress" /><code>{"static async Task<IPAddress> GetPublicIPAddress()"}</code> |
| <Link id="m-validateipv4" /><code>{"static bool ValidateIPv4(string ipString)"}</code> |
