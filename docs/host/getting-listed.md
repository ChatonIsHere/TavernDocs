---
title: Getting listed
description: Put your server on the Community Servers list so players can find it.
summary:
    - "Listing is optional and shows your IP address to everyone, so leave it off if you host from home."
    - "In the Server launcher, tick **List on community server browser** and pick your **Region**. Elsewhere, set `community_listed` to `true` and `region` in `server_settings.json`."
    - "Restart the server. It only lists if `community_listed` was on at startup."
    - "Set `public_hostname` to a name you own, with an A record pointing at your IP, to show a name instead."
    - "Leave `community_listing_token` alone. If the server shows as Offline, check your port forwards."
---

# Getting listed

Listed servers show up in the launcher's **Community Servers** window and on the server boards in the game's main menu (with TavernEssentials). The list is run by The Modding Tavern. It's optional: players can always join with your address instead.

:::warning

Listing shows your server's IP address to everyone. If you host from home and would rather not, leave it off and share your address with friends yourself.

:::

## Turning it on

**Windows Server launcher:** open **Settings**, tick **List on community server browser**, pick your **Region**, and save. See [Settings](windows/settings.md).

**Docker, Wine or a panel:** in `server_settings.json`:

```json
{
    "community_listed": true,
    "region": "EU"
}
```

Region is one of `EU`, `NA`, `SA`, `Asia`, `Oceania`, `Africa` or `unknown`.

Then **restart the server**. The listing only starts if `community_listed` was on when the server started.

Your server should appear within a minute. It updates every few seconds while it runs and drops off the list when it stops.

## What the list shows

Your server's name, address, players and player limit, whether it has a password, its scene (normal, Quest or tutorial), region and TavernLib version. Players see their ping to you.

## Showing a name instead of your IP

Set `public_hostname` (**Public Hostname** in the launcher's settings) to a name you own, like `play.example.com`. The list only accepts it if the name points at your server's IP, so add an A record for it first.

## Listed servers on other ports

If your server doesn't use the default ports, players' launchers find it through the SRV record of your public hostname. Set up the [SRV record](srv-records.md#the-srv-record) and `public_hostname`, or keep the default ports. A listed server without a public hostname is always tried on port 1762.

## The listing token

`community_listing_token` is made for you the first time the server starts. It's how the list knows updates come from your server, so leave it alone and don't share it. If you move your server to a new machine, copy `server_settings.json` with it and the listing carries over.

## Something went wrong?

- **Not showing up.** Check you restarted after turning it on, and that the server can reach the internet. Then see [Server troubleshooting](troubleshooting.md#not-on-community-servers).
- **Shows as Offline.** Players can't reach your login port. Check your [port forwards](ports.md).
