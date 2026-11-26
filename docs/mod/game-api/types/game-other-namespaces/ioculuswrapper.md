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
| <Link id="m-deeplinklogresult" /><code>{"void DeeplinkLogResult(string trackingId, "}<Link to="/mod/game-api/types/alta-menus/platformlaunchresult">{"PlatformLaunchResult"}</Link>{" launchResult)"}</code> | <span className="api-desc">Reports how handling a deep link launch went.</span> |
| <Link id="m-getoculusid" /><code>{"Task<ulong> GetOculusId()"}</code> | <span className="api-desc">The player's Meta user ID.</span> |
| <Link id="m-getoculusproof" /><code>{"Task<string> GetOculusProof()"}</code> | <span className="api-desc">A proof token for the player, for signing in.</span> |
| <Link id="m-getoculususername" /><code>{"Task<string> GetOculusUsername()"}</code> | <span className="api-desc">The player's Meta username.</span> |
| <Link id="m-getplatformagnosticlaunchdetails" /><code><Link to="/mod/game-api/types/alta-menus/platformlaunchdetails">{"PlatformLaunchDetails"}</Link>{" GetPlatformAgnosticLaunchDetails()"}</code> | <span className="api-desc">How the app was launched, in a form not tied to Meta.</span> |
| <Link id="m-getplatformlaunchtype" /><code><Link to="/mod/game-api/types/global-p/platformlaunchtype">{"PlatformLaunchType"}</Link>{" GetPlatformLaunchType()"}</code> | <span className="api-desc">The kind of launch, such as normal or from a deep link.</span> |
| <Link id="m-getproofsucceed" /><code>{"Task<bool> GetProofSucceed()"}</code> | <span className="api-desc">Whether getting the proof token worked.</span> |
| <Link id="m-getserverid" /><code>{"int GetServerId()"}</code> | <span className="api-desc">The server ID from the launch details, for joining a server straight away.</span> |
| <Link id="m-hasinputfocus" /><code>{"bool HasInputFocus()"}</code> | <span className="api-desc">Whether the app has input focus. False while the system menu is open over it.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Starts the platform SDK.</span> |
| <Link id="m-initializedeeplink" /><code>{"void InitializeDeeplink(int serverId)"}</code> | <span className="api-desc">Sets up the destination for a server so friends can join through it.</span> |
| <Link id="m-oculusapplifecyclesetlaunchintentchangednotificationcallback" /><code>{"void OculusAppLifecycleSetLaunchIntentChangedNotificationCallback(Action callback)"}</code> | <span className="api-desc">Sets a callback for when the launch intent changes while running.</span> |
| <Link id="m-playerrichpresencesetisjoinable" /><code>{"void PlayerRichPresenceSetIsJoinable(bool isJoinable)"}</code> | <span className="api-desc">Sets whether others can join the player through rich presence.</span> |
| <Link id="m-richpresenceclear" /><code>{"void RichPresenceClear()"}</code> | <span className="api-desc">Clears the player's rich presence.</span> |
| <Link id="m-richpresenceset" /><code>{"void RichPresenceSet()"}</code> | <span className="api-desc">Publishes the player's rich presence.</span> |
| <Link id="m-richpresencesetapiname" /><code>{"void RichPresenceSetApiName(string newApiName)"}</code> | <span className="api-desc">Sets the destination API name used by rich presence.</span> |

## Used in

Members of other types that take, return or hold a `IOculusWrapper`:

<div className="api-used-in">

[`InterfaceResolver.CreateOculusWrapper`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-createoculuswrapper), [`InterfaceResolver.iOculusWrapper`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ioculuswrapper), [`InterfaceResolver.IOculusWrapper`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ioculuswrapper-2).

</div>
