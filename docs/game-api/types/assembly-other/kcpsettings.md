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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings<KcpSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`KcpSettings`](/game-api/types/assembly-other/kcpsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KcpSettings()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-congestionwindow" /><code>{"bool CongestionWindow"}</code> | Turns on KCP's congestion window. Off by default; the tooltip says to keep it off if connections get choked. |
| <Link id="m-dualmode" /><code>{"bool DualMode"}</code> | Listen on IPv6 and IPv4 together. On by default; turn off on IPv4-only platforms. |
| <Link id="m-fastresend" /><code>{"int FastResend"}</code> | KCP fast resend: resend sooner at the cost of bandwidth. Default 2 (turbo). |
| <Link id="m-interval" /><code>{"uint Interval"}</code> | KCP internal update interval in milliseconds. Default 10. |
| <Link id="m-maximizesendreceivebufferstooslimit" /><code>{"bool MaximizeSendReceiveBuffersToOSLimit"}</code> | Raises socket send and receive buffers to the OS limit, to avoid drops under load. On by default. |
| <Link id="m-maxretransmit" /><code>{"uint MaxRetransmit"}</code> | How many times KCP retries a lost message before disconnecting. Default 40. |
| <Link id="m-nodelay" /><code>{"bool NoDelay"}</code> | KCP no-delay mode for lower latency. On by default. |
| <Link id="m-nonalloc" /><code>{"bool NonAlloc"}</code> | Use the allocation-free KCP server, client and connection versions. On by default. |
| <Link id="m-receivewindowsize" /><code>{"uint ReceiveWindowSize"}</code> | KCP receive window. Default 4096; also raises the max message size. |
| <Link id="m-sendwindowsize" /><code>{"uint SendWindowSize"}</code> | KCP send window. Default 4096. |
| <Link id="m-timeout" /><code>{"int Timeout"}</code> | Milliseconds without traffic before KCP drops the connection. Default 1000; KCP pings on its own. |

## Used in

Members of other types that take, return or hold a `KcpSettings`:

[`NetworkingSettings.kcpSettings`](/game-api/types/alta-networking/networkingsettings#m-kcpsettings), [`NetworkingSettings.KcpSettings`](/game-api/types/alta-networking/networkingsettings#m-kcpsettings-2), [`KcpClientWrapper.KcpClientWrapper`](/game-api/types/assembly-other/kcpclientwrapper#m-ctor), [`KcpClientWrapper.settings`](/game-api/types/assembly-other/kcpclientwrapper#m-settings), [`KcpServerWrapper.KcpServerWrapper`](/game-api/types/assembly-other/kcpserverwrapper#m-ctor), [`KcpServerWrapper.settings`](/game-api/types/assembly-other/kcpserverwrapper#m-settings), [`KcpTransport.KcpTransport`](/game-api/types/assembly-other/kcptransport#m-ctor), [`KcpTransport.settings`](/game-api/types/assembly-other/kcptransport#m-settings).
