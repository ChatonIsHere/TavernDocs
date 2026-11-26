---
title: "KcpSettings"
description: "Global settings asset for the KCP network transport: latency, timeout, window and buffer options used by the KCP client and server wrappers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpSettings

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

Global settings asset for the KCP network transport: latency, timeout, window and buffer options used by the KCP client and server wrappers.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings<KcpSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`KcpSettings`](/mod/game-api/types/assembly-other/kcpsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KcpSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-congestionwindow" /><code>{"bool CongestionWindow"}</code> | <span className="api-desc">Turns on KCP's congestion window. Off by default; the tooltip says to keep it off if connections get choked.</span> |
| <Link id="m-dualmode" /><code>{"bool DualMode"}</code> | <span className="api-desc">Listen on IPv6 and IPv4 together. On by default; turn off on IPv4-only platforms.</span> |
| <Link id="m-fastresend" /><code>{"int FastResend"}</code> | <span className="api-desc">KCP fast resend: resend sooner at the cost of bandwidth. Default 2 (turbo).</span> |
| <Link id="m-interval" /><code>{"uint Interval"}</code> | <span className="api-desc">KCP internal update interval in milliseconds. Default 10.</span> |
| <Link id="m-maximizesendreceivebufferstooslimit" /><code>{"bool MaximizeSendReceiveBuffersToOSLimit"}</code> | <span className="api-desc">Raises socket send and receive buffers to the OS limit, to avoid drops under load. On by default.</span> |
| <Link id="m-maxretransmit" /><code>{"uint MaxRetransmit"}</code> | <span className="api-desc">How many times KCP retries a lost message before disconnecting. Default 40.</span> |
| <Link id="m-nodelay" /><code>{"bool NoDelay"}</code> | <span className="api-desc">KCP no-delay mode for lower latency. On by default.</span> |
| <Link id="m-nonalloc" /><code>{"bool NonAlloc"}</code> | <span className="api-desc">Use the allocation-free KCP server, client and connection versions. On by default.</span> |
| <Link id="m-receivewindowsize" /><code>{"uint ReceiveWindowSize"}</code> | <span className="api-desc">KCP receive window. Default 4096; also raises the max message size.</span> |
| <Link id="m-sendwindowsize" /><code>{"uint SendWindowSize"}</code> | <span className="api-desc">KCP send window. Default 4096.</span> |
| <Link id="m-timeout" /><code>{"int Timeout"}</code> | <span className="api-desc">Milliseconds without traffic before KCP drops the connection. Default 1000; KCP pings on its own.</span> |

## Used in

Members of other types that take, return or hold a `KcpSettings`:

<div className="api-used-in">

[`NetworkingSettings.kcpSettings`](/mod/game-api/types/alta-networking/networkingsettings#m-kcpsettings), [`NetworkingSettings.KcpSettings`](/mod/game-api/types/alta-networking/networkingsettings#m-kcpsettings-2), [`KcpClientWrapper.KcpClientWrapper`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-ctor), [`KcpClientWrapper.settings`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-settings), [`KcpServerWrapper.KcpServerWrapper`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-ctor), [`KcpServerWrapper.settings`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-settings), [`KcpTransport.KcpTransport`](/mod/game-api/types/assembly-other/kcptransport#m-ctor), [`KcpTransport.settings`](/mod/game-api/types/assembly-other/kcptransport#m-settings).

</div>
