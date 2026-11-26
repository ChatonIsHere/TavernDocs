---
title: Pick your name and headset
description: Choose your username and headset, and learn about the token that keeps your account safe.
summary:
    - "Type a name under **CHOOSE YOUR USERNAME**. It can be up to 16 characters."
    - "Under **CHOOSE YOUR PLATFORM**, pick **SteamVR** or **Quest**."
    - "Start SteamVR or the Meta Quest Link app before you join a server."
    - "The first time you join a server, the launcher makes a token file for you."
    - "Keep your token safe and don't share it. Without it you can't get back into your account."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pick your name and headset

<Tabs groupId="client" queryString>
<TabItem value="pc" label="PC" default>

## Your username

Type a name under **CHOOSE YOUR USERNAME**. It's what other players see.

- Up to 16 characters.
- Letters, numbers, spaces, `-` and `_`.

Every server keeps its own list of players. Your name is saved on each server the first time you join it. Someone else might already have your name on a server, so pick something unusual.

![The launcher with the username Placeholder and the SteamVR platform picked](img/name-and-headset.png)

## Your headset

Under **CHOOSE YOUR PLATFORM**, pick what you play on:

| Pick | If you play on |
| --- | --- |
| **SteamVR** | A headset that works with SteamVR: Index, Vive, Windows Mixed Reality and others. |
| **Quest** | A Meta Quest or Rift connected to your PC with the Meta Quest Link app. |
| **Fly** | Flying around without a headset. Only for server staff, see below. |

![The platform list open, showing SteamVR, Quest and Fly](img/platform-list.png)

Start SteamVR or the Meta Quest Link app before you join a server.

**Fly** is a flatscreen mode for moving around a world. A server only lets you in with it if its owner gave you the role for it. Otherwise you get kicked with "Bizarre mode detected."

</TabItem>
<TabItem value="quest" label="Quest">

:::note[Coming soon]

Picking your name in the standalone Quest version.

:::

</TabItem>
</Tabs>

## Your token: the key to your account

There's no password. Instead, the first time you join a server, the launcher makes a **token file** for you and shows **About Your Token File**:

> A token file has been created for you. This file is used to prove who you are when connecting to a server with your chosen username. It can be found in your %AppData%\Roaming\TheModdingTavern\tokens folder. Make sure to keep this file safe, as you won't be able to connect with this account if it is lost. If you do lose it - please reach out to the server owner to get it back.

Click **Yes, I understand**.

![The About Your Token File window](img/token-file-dialog.png)

Think of the token like a house key:

- **Don't lose it.** Without it, you can't get into your account on that server. Only the server's owner can reset it.
- **Don't share it.** Anyone with your token can play as you.
- **Back it up.** Copy the `%APPDATA%\TheModdingTavern\tokens` folder somewhere safe now and then. Paste that path into File Explorer's address bar to find it.

If you move to a new PC, copy the `tokens` folder across and your accounts come with you.

## Next

[Join a server](../joining/community-servers.md).
