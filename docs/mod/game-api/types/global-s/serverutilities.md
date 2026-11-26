---
title: "ServerUtilities"
description: "Static network helpers: public and local IP lookup, IPv4 validation, ping and the developers' LAN shortcuts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerUtilities

A **class** in `Root.Township`, the global namespace.

Static network helpers: public and local IP lookup, IPv4 validation, ping and the developers' LAN shortcuts.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state#serverutilities), [Server settings](/mod/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerUtilities()"}</code> | <span className="api-desc">Creates a `ServerUtilities` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pingtimeout" /><code>{"const float PingTimeout"}</code> | <span className="api-desc">Seconds before a ping gives up (5).</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-publicipaddress" /><code>{"private static IPAddress publicIpAddress"}</code> | <span className="api-desc">Cached public IP from `GetPublicIPAddress`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getipaddress" /><code>{"static string GetIpAddress(string serverIp)"}</code> | <span className="api-desc">Expands shortcuts like `local` or a developer's name or initial, or a number under 10, to a LAN IP. Other strings come back unchanged.</span> |
| <Link id="m-getlocalipv4" /><code>{"static IPAddress GetLocalIPv4()"}</code> | <span className="api-desc">Returns this machine's first IPv4 address, or `IPAddress.None` on failure.</span> |
| <Link id="m-getping" /><code>{"IEnumerator GetPing(string ipAddress, Action<int> pingReceivedCallback) (iterator)"}</code> | <span className="api-desc">Coroutine that pings an address for 5 seconds, calling back with the time every frame once done, then with -1 at the end.</span> |
| <Link id="m-getpublicipaddress" /><code>{"static async Task<IPAddress> GetPublicIPAddress()"}</code> | <span className="api-desc">Asks the Alta API for this machine's public IP once and caches it; 0.0.0.0 if the call fails.</span> |
| <Link id="m-validateipv4" /><code>{"static bool ValidateIPv4(string ipString)"}</code> | <span className="api-desc">True when the string is four dot-separated numbers from 0 to 255.</span> |
