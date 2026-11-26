---
title: "SocialTablet"
description: "The social tablet item a player summons to see recent players and friend, mute, report or ban them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialTablet

A **class** in `Root.Township`, the global namespace.

The social tablet item a player summons to see recent players and friend, mute, report or ban them. Not saved; only its owner can grab it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ActionItem`](/mod/game-api/types/global-a-b/actionitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SocialTablet()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> | Hover pickup used to hold the tablet in the air. |
| <Link id="m-touchscreen" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase">{"TouchScreenMenuBase"}</Link>{" touchScreen"}</code> | The tablet's touch screen menu. |
| <Link id="m-window" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{" window"}</code> | The UI window shown on the tablet. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishfadein" /><code>{"protected override void FinishFadeIn()"}</code> | After fading in, starts the screen for the owner, or waits for the owner to be known. |
| <Link id="m-startfade" /><code>{"protected override void StartFade(bool isFadingIn)"}</code> | When fading out, turns off the touch screen and stops the window. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Marks the tablet not to be saved, limits grabs to the owner and sets up the recent player page's sync. |
| <Link id="m-checkownership" /><code>{"private void CheckOwnership("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> | Waits for the owner message, then starts the screen if the local player owns it. |
| <Link id="m-filterforowner" /><code>{"private void FilterForOwner("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter that only lets the owning user grab the tablet. |
| <Link id="m-hover" /><code>{"private void Hover("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When let go, sets the hover pickup to float it back to this spot if nothing else grabbed it. |
| <Link id="m-startupforlocalplayer" /><code>{"private void StartupForLocalPlayer()"}</code> | Sets up the touch screen and starts the window. |

</details>

## Used in

Members of other types that take, return or hold a `SocialTablet`:

[`RecentPlayerActionPage.socialTablet`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-socialtablet).
