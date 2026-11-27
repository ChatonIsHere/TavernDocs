---
title: Install the launcher
description: Download TavernLauncher and open it for the first time.
summary:
    - "Go to the TavernLauncher releases page on GitHub and download **TavernLauncher-Client-vX.Y.Z.zip**."
    - "Only download it from that page."
    - "Right-click the zip, pick **Extract All...**, and choose a folder you'll find again."
    - "Double-click **TavernLauncher - Client.exe** to open it."
    - 'If Windows says "Windows protected your PC", click **More info**, then **Run anyway**.'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install the launcher

<Tabs groupId="client" queryString>
<TabItem value="pc" label="PC" default>

**TavernLauncher** sets up your game and gets you onto servers. There's no installer. You download a zip, unzip it, and run it.

## 1. Download it

1. Go to the [TavernLauncher releases page](https://github.com/ModdingTavern/TavernLauncher/releases/latest).
2. Scroll down to **Assets**.
3. Click **TavernLauncher-Client-vX.Y.Z.zip** to download it. The numbers will be the newest version.

There's a **Server** zip too. You don't need that one to play.

:::warning

Only download the launcher from that page. A copy from anywhere else could be anything.

:::

## 2. Unzip it

1. Find the zip in your **Downloads** folder.
2. Right-click it and pick **Extract All...**.
3. Pick somewhere you'll find again, like `Documents\TavernLauncher`. Not your Downloads folder, since you'll be back here when there's an update.
4. Click **Extract**.

Inside you'll find:

- **TavernLauncher - Client.exe**, the launcher.
- **Patch**, a folder of backup copies the launcher uses if a download fails. Leave it next to the launcher.
- **addons**, a folder for extras. You can ignore it.

## 3. Open it

Double-click **TavernLauncher - Client.exe**.

**If Windows says "Windows protected your PC":** that's SmartScreen. It warns about any program that isn't well known yet. Click **More info**, then **Run anyway**.

**If your antivirus complains:** the launcher changes game files, which some antivirus programs don't like. It's [open source](https://github.com/ModdingTavern/TavernLauncher), so anyone can check what it does. You might need to allow it in your antivirus.

**If Windows Firewall asks about it:** click **Allow**. The launcher needs the internet to talk to servers.

The launcher opens. On the right edge there's a small **📖** tab. Click it any time for the built-in help.

![TavernLauncher when you first open it, with Setup and Mod Manager greyed out](img/setup-main-window-fresh.png)

![The launcher with the Help panel open on the right](../img/help-panel.png)

</TabItem>
<TabItem value="quest" label="Quest">

On Quest there's no separate launcher. You install the game itself, as a single `.apk` file, straight from the headset. You only do this once; after that, updates install from inside the game.

## 1. Uninstall the Store version

The community build replaces the Store's A Township Tale, and the headset won't install it while the Store copy is there.

Open your **Library**, find A Township Tale, open its **⋯** menu and choose **Uninstall**. Your characters live on the servers you play on, so you won't lose them.

![The Uninstall A Township Tale dialog on the Quest](img/quest-uninstall.jpg)

## 2. Download the game

The download link is posted in our [Discord](https://discord.gg/jNQUUDAYSj). Each new build has a new link, so get the latest one from there.

1. Open the **Browser** in your headset.
2. Type the link in and open it.
3. Press **Download** under `att-v1.apk`. The browser warns that `.apk` files can be harmful; press **I understand, download anyway**.

The file is around 790 MB, so give it a few minutes.

:::warning

Only install the game from a link the staff posted. An `.apk` from anywhere else could be anything.

:::

## 3. Install it

1. Open the **Files** app and go to **Downloads**. If an older `att-v1.apk` is still there, delete it so you install the right one.
2. Press the **⋯** next to `att-v1.apk`, then **Open with** → **Package installer**.
3. When it asks *"Do you want to install this app?"* for **Att_Quest**, press **Install** and wait.

![The Files app, opening att-v1.apk with the Package installer](img/quest-package-installer.jpg)

![The install prompt for Att_Quest](img/quest-install.jpg)

## 4. Start it the right way

Start A Township Tale from your **Library** as usual. Because this isn't the Store version, the headset shows a **Restore App** message every time. Press **Open App**.

![The Restore App message, with Restore, Open App and Close](img/quest-restore.jpg)

:::danger[Don't press Restore]

**Restore** puts the Store version back, which can't reach community servers. If you press it by mistake, you'll have to install the `.apk` again from step 1.

:::

</TabItem>
</Tabs>

## Next

[Set up the game](set-up-the-game.md).

## Something went wrong?

See [Troubleshooting](../troubleshooting.md#the-launcher-wont-open).
