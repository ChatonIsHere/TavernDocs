---
title: "IOculusWrapper"
description: "Wraps the Meta Quest platform SDK: user ID and proof, launch details, deep links and rich presence."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IOculusWrapper

An **interface** in `Root.Township`, `Features.Meta.Platform.Oculus`.

Wraps the Meta Quest platform SDK: user ID and proof, launch details, deep links and rich presence. Reached through `InterfaceResolver.IOculusWrapper`; only does anything on Quest.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deeplinklogresult" /><code>{"void DeeplinkLogResult(string trackingId, "}<Link to="/mod/game-api/types/alta-menus/platformlaunchresult">{"PlatformLaunchResult"}</Link>{" launchResult)"}</code> | Reports how handling a deep link launch went. |
| <Link id="m-getoculusid" /><code>{"Task<ulong> GetOculusId()"}</code> | The player's Meta user ID. |
| <Link id="m-getoculusproof" /><code>{"Task<string> GetOculusProof()"}</code> | A proof token for the player, for signing in. |
| <Link id="m-getoculususername" /><code>{"Task<string> GetOculusUsername()"}</code> | The player's Meta username. |
| <Link id="m-getplatformagnosticlaunchdetails" /><code><Link to="/mod/game-api/types/alta-menus/platformlaunchdetails">{"PlatformLaunchDetails"}</Link>{" GetPlatformAgnosticLaunchDetails()"}</code> | How the app was launched, in a form not tied to Meta. |
| <Link id="m-getplatformlaunchtype" /><code><Link to="/mod/game-api/types/global-p/platformlaunchtype">{"PlatformLaunchType"}</Link>{" GetPlatformLaunchType()"}</code> | The kind of launch, such as normal or from a deep link. |
| <Link id="m-getproofsucceed" /><code>{"Task<bool> GetProofSucceed()"}</code> | Whether getting the proof token worked. |
| <Link id="m-getserverid" /><code>{"int GetServerId()"}</code> | The server ID from the launch details, for joining a server straight away. |
| <Link id="m-hasinputfocus" /><code>{"bool HasInputFocus()"}</code> | Whether the app has input focus. False while the system menu is open over it. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Starts the platform SDK. |
| <Link id="m-initializedeeplink" /><code>{"void InitializeDeeplink(int serverId)"}</code> | Sets up the destination for a server so friends can join through it. |
| <Link id="m-oculusapplifecyclesetlaunchintentchangednotificationcallback" /><code>{"void OculusAppLifecycleSetLaunchIntentChangedNotificationCallback(Action callback)"}</code> | Sets a callback for when the launch intent changes while running. |
| <Link id="m-playerrichpresencesetisjoinable" /><code>{"void PlayerRichPresenceSetIsJoinable(bool isJoinable)"}</code> | Sets whether others can join the player through rich presence. |
| <Link id="m-richpresenceclear" /><code>{"void RichPresenceClear()"}</code> | Clears the player's rich presence. |
| <Link id="m-richpresenceset" /><code>{"void RichPresenceSet()"}</code> | Publishes the player's rich presence. |
| <Link id="m-richpresencesetapiname" /><code>{"void RichPresenceSetApiName(string newApiName)"}</code> | Sets the destination API name used by rich presence. |

## Used in

Members of other types that take, return or hold a `IOculusWrapper`:

[`InterfaceResolver.CreateOculusWrapper`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-createoculuswrapper), [`InterfaceResolver.iOculusWrapper`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ioculuswrapper), [`InterfaceResolver.IOculusWrapper`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ioculuswrapper-2).
