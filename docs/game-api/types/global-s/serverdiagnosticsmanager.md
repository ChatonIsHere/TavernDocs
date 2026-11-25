---
title: "ServerDiagnosticsManager"
description: "class ServerDiagnosticsManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerDiagnosticsManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerDiagnosticsManager()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-playerstosendto" /><code>{"static Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", bool> PlayersToSendTo"}</code> |
| <Link id="m-serverprofile" /><code>{"static readonly "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/global-s/serverprofilingdata">{"ServerProfilingData"}</Link>{"> ServerProfile"}</code> |

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-autoprofile" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" autoProfile"}</code> |
| <Link id="m-diagnostics" /><code>{"private "}<Link to="/game-api/types/global-s/serverprofilingdata">{"ServerProfilingData"}</Link>{" diagnostics"}</code> |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-sendfpstoclientscoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" sendFpsToClientsCoroutine"}</code> |
| <Link id="m-sendtodbcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" sendToDBCoroutine"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; set; }"}</code> |

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-autoprofile-2" /><code>{"private IEnumerator AutoProfile() (iterator)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-senddiagnosticstodatabase" /><code>{"private void SendDiagnosticsToDatabase()"}</code> |
| <Link id="m-senddiagnosticstodatabasecoroutine" /><code>{"private IEnumerator SendDiagnosticsToDatabaseCoroutine() (iterator)"}</code> |
| <Link id="m-sendserverfpstoallclients" /><code>{"private void SendServerFpsToAllClients()"}</code> |
| <Link id="m-sendserverfpstoclients" /><code>{"private IEnumerator SendServerFpsToClients() (iterator)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-startupdatingandsending" /><code>{"private void StartUpdatingAndSending()"}</code> |
| <Link id="m-stopupdatingandsending" /><code>{"private void StopUpdatingAndSending()"}</code> |

</details>
