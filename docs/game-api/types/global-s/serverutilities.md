---
title: "ServerUtilities"
description: "Static network helpers: public and local IP lookup, IPv4 validation, ping and the developers' LAN shortcuts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerUtilities

A **class** in `Root.Township`, no namespace.

Static network helpers: public and local IP lookup, IPv4 validation, ping and the developers' LAN shortcuts.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#serverutilities), [Server settings](/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerUtilities()"}</code> | Creates a `ServerUtilities` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pingtimeout" /><code>{"const float PingTimeout"}</code> | Seconds before a ping gives up (5). |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-publicipaddress" /><code>{"private static IPAddress publicIpAddress"}</code> | Cached public IP from `GetPublicIPAddress`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getipaddress" /><code>{"static string GetIpAddress(string serverIp)"}</code> | Expands shortcuts like `local` or a developer's name or initial, or a number under 10, to a LAN IP. Other strings come back unchanged. |
| <Link id="m-getlocalipv4" /><code>{"static IPAddress GetLocalIPv4()"}</code> | Returns this machine's first IPv4 address, or `IPAddress.None` on failure. |
| <Link id="m-getping" /><code>{"IEnumerator GetPing(string ipAddress, Action<int> pingReceivedCallback) (iterator)"}</code> | Coroutine that pings an address for 5 seconds, calling back with the time every frame once done, then with -1 at the end. |
| <Link id="m-getpublicipaddress" /><code>{"static async Task<IPAddress> GetPublicIPAddress()"}</code> | Asks the Alta API for this machine's public IP once and caches it; 0.0.0.0 if the call fails. |
| <Link id="m-validateipv4" /><code>{"static bool ValidateIPv4(string ipString)"}</code> | True when the string is four dot-separated numbers from 0 to 255. |
