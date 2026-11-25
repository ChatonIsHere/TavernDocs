---
title: On a VPS
description: Rent a small Linux server, secure it, and run a-township-container on it.
---

# Docker on a VPS

This walks you through renting a small Linux server (a VPS), securing it, and getting the container running. It assumes you've never touched a VPS and that this one will only run the game server, so everything is explained and nothing extra is installed. If you know what you're doing, skim for the parts you need.

Do the sections in order, and actually read the SSH warnings. Skipping them is how you lock yourself out of your own server.

## What you need

A VPS is a computer in someone else's datacentre that you rent. There's no screen or mouse, so you'll use a couple of tools you might not have used before:

- [PuTTY](https://www.putty.org/) (the installer includes PuTTYgen, which we also need)
- [WinSCP](https://winscp.net/)

And:

- Your `game-source` folder, with `A Township Tale.exe` and `A Township Tale_Data` directly inside it (see [Making the game-source folder](own-machine.md#making-the-game-source-folder)). No patching needed, the container does that.
- About $5 to $10 a month for the VPS.

## Generating an SSH key

An SSH key is a pair of files: a private key that stays on your PC, and a public key that goes on the server. Together they let you log in without a password, and unlike a password nobody can guess one. Make it before renting the VPS, because most hosts can install it for you while setting the server up.

1. Open **PuTTYgen** (search for it, it came with PuTTY).
2. Click **Generate** and move your mouse over the blank area until the bar fills.
3. Set a **Key passphrase** if you want one. You'll type it each time you connect.
4. Click **Save private key** and put it somewhere safe, like `Documents\ssh\att-server.ppk`. This file is the key to your server, so don't share it or lose it.
5. Copy all of the text in the box labelled **Public key for pasting into OpenSSH authorized_keys file** (one long line starting with `ssh-`) and paste it into a text file for later. Don't use **Save public key**, it saves in a format Linux won't accept.

## Getting a VPS

Any provider with Ubuntu works: Hetzner, OVH, Netcup, DigitalOcean, Vultr, whoever.

- 2 CPU cores and 4 GB of RAM for a few friends around Town, 4 cores and 8 GB if people will explore the forest and caves. See [How big a server you need](../before-you-host.md#how-big-a-server-you-need).
- 40GB of disk or more (the game is about 4.4GB, plus the zip while you upload it, the Docker image, Ubuntu and your saves).
- A dedicated IPv4 address. Some hosts sell cheaper IPv6-only servers. The game needs IPv4.
- A location close to your players. Distance is ping.

If your host has an **SSH key** field when setting the server up, paste your public key in there.

Pick the latest Ubuntu LTS (the `.04` releases from even years, like 24.04) and skip any add-ons like Plesk, cPanel or a LAMP stack.

Once it's created, note the server's public IP. You connect with it and so do your players. If you didn't add a key, the host will show or email you a root password.

## Logging in for the first time

1. Open **PuTTY** and enter the server's IP in **Host Name**. Leave the port as `22`.
2. In the tree on the left, go to **Connection**, **SSH**, **Auth**, **Credentials**. Click **Browse...** under **Private key file for authentication** and pick your `.ppk`.
3. Back in **Session**, type a name under **Saved Sessions** (like `att-server`) and click **Save**.
4. Click **Open**. The first time, PuTTY warns about the host key. That's it meeting your server, so accept it. If you see the warning again without having changed anything, look into it.
5. Log in as `root`. With a key it logs you straight in (after your passphrase, if you set one). Otherwise use the password from your host.

You should see a prompt like `root@ubuntu:~#`.

If your host uses a different default user (some use `ubuntu`), their email will say so. Log in as that and put `sudo ` in front of the commands in the next two sections, or run `sudo su` to become root.

## Updating Ubuntu

A fresh image can be weeks out of date:

```bash
apt update
apt upgrade -y
apt autopurge -y
apt autoclean
reboot
```

- If a pink screen asks "Which services should be restarted?" or about a modified config file, press Enter. The defaults are fine.
- If `apt` says it's "Waiting for cache lock", Ubuntu's automatic updater is running. Wait a couple of minutes and try again.
- `reboot` disconnects you. Wait 30 seconds and reconnect (double-click your saved session).

Ubuntu installs security updates by itself with `unattended-upgrades`. Check it's on:

```bash
systemctl is-enabled unattended-upgrades
```

It should say `enabled`. If the unit doesn't exist, run `apt install -y unattended-upgrades`.

## Creating a user

Doing everything as `root` means one bad command or one stolen session risks the whole machine. So make a normal user, then turn off root's SSH login in the next section.

```bash
adduser att
usermod -aG sudo att
```

Give it a decent password and note it down. Press Enter through the other questions.

Now give `att` your SSH key. If you added the key while setting up the server, copy root's:

```bash
mkdir -p /home/att/.ssh
cp /root/.ssh/authorized_keys /home/att/.ssh/authorized_keys
chown -R att:att /home/att/.ssh
chmod 700 /home/att/.ssh
chmod 600 /home/att/.ssh/authorized_keys
```

If there's no `/root/.ssh/authorized_keys`, make the file yourself:

```bash
mkdir -p /home/att/.ssh
nano /home/att/.ssh/authorized_keys
```

`nano` is a simple text editor. Right-click to paste your public key (the `ssh-` line), press `Ctrl+O` and `Enter` to save, and `Ctrl+X` to exit. Then run the `chown` and `chmod` lines from above.

Test it before going any further: open a second PuTTY window, load your session, and log in as `att`. Don't continue until that works, because next you turn off the root login.

## Locking down SSH

Bots constantly scan the internet for SSH servers and throw passwords at them. The simple fix is to accept no passwords at all and never let anyone in as root. Your `att` user logs in with a key, so both are safe to turn off.

As root (or with `sudo` as `att`), create a config file:

```bash
nano /etc/ssh/sshd_config.d/00-hardening.conf
```

Paste this in, then save and exit:

```
PermitRootLogin no
PasswordAuthentication no
KbdInteractiveAuthentication no
```

Restart SSH so it picks that up:

```bash
systemctl restart ssh
```

Open a third connection and check that `att` still works with your key and that `root` is refused. Only then close the old windows. If something's broken, the still-open session is where you fix it. If you do lock yourself out, most hosts have a web console in their control panel that gets you a local login.

From here on, everything is done as `att`, with `sudo` in front of admin commands.

## Setting up the firewall

UFW blocks every incoming connection you haven't allowed, which here is just SSH. The game's ports don't need UFW rules, since Docker writes its own rules for published ports and goes around UFW.

```bash
sudo apt install -y ufw
sudo ufw allow 22/tcp comment 'SSH'
sudo ufw enable
```

It warns that enabling may disrupt SSH connections. You allowed 22 first, so answer `y`. Then check it:

```bash
sudo ufw status verbose
```

You should see `Status: active`, the SSH rule (once for IPv4 and once with `(v6)`), and `Default: deny (incoming), allow (outgoing)`.

:::warning[Docker goes around UFW]

Any port in the compose file's `ports:` list is open to the internet, whatever UFW says. Only publish ports you want public. The compose file below publishes the game, web server and login ports, and keeps the console on `127.0.0.1` so only the server itself can reach it.

:::

Many providers also have a firewall in their control panel. If yours is turned on, open the game ports there too: `1757` UDP, and `1761` and `1762` TCP. Leave `1760` (the console) closed.

## Installing Docker

Install Docker from Docker's own repository, since Ubuntu's `docker.io` package lags behind:

```bash
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Let `att` use Docker without `sudo`:

```bash
sudo usermod -aG docker att
```

Being in the `docker` group is effectively root access, since Docker can mount and change anything on the machine. That's fine on a single-purpose server with one admin. Just know that `att` isn't a low-privilege account any more.

Close PuTTY and reconnect so the group change applies, then check:

```bash
docker version
```

If it prints both a `Client` and a `Server` section without "permission denied", Docker's ready.

## Setting up the server folder

```bash
mkdir -p ~/att-server/game-source
cd ~/att-server
nano docker-compose.yml
```

Paste in the compose file from [On your own Linux machine](own-machine.md#setting-it-up), then save and exit.

To cap the server's CPU and RAM, see [CPU and RAM](settings-and-updates.md#cpu-and-ram).

## Uploading the game files

Uploading about 4.4GB as thousands of files over SFTP is painfully slow, so zip it first. On your PC, open the `game-source` folder, select everything inside it (`Ctrl+A`), right-click and pick **Compress to ZIP file** (or use 7-Zip). Zip the contents, not the folder, so the files sit at the top of the zip.

Connect with WinSCP:

1. On the login dialog click **Tools**, **Import Sites**, tick your PuTTY session and click **OK**. That brings over the IP and your key. (Or fill it in: protocol `SFTP`, your IP, port `22`, user `att`, and your key under **Advanced**, **SSH**, **Authentication**.)
2. Log in as `att`. Root can't log in any more, that was the point.
3. The right-hand side is the server, starting in `/home/att`. Open `att-server`, then `game-source`.
4. Drag `game-source.zip` from the left into `game-source`. This is the long part, go drink some water.

Once it's uploaded, back in PuTTY:

```bash
sudo apt install -y unzip
cd ~/att-server/game-source
unzip game-source.zip
ls
```

`ls` needs to show `A Township Tale.exe` and `A Township Tale_Data`. If it shows a single folder instead, you zipped the folder rather than its contents. Fix it with:

```bash
mv game-source/* game-source/.[!.]* . 2>/dev/null; rmdir game-source
```

Then delete the zip to get the space back:

```bash
rm game-source.zip
```

## Starting the server

```bash
cd ~/att-server
docker compose up -d
docker compose logs -f
```

The first start is slow: Docker downloads the image, then the container downloads the mods and patch before the game boots. Press `Ctrl+C` to stop watching the logs. The server keeps running in the background (that's the `-d`).

Give it a few minutes after the logs settle. A new world generates its forest first, and anyone who joins before that finishes gets a broken forest. Then connect from the launcher using your server's IP.

The [day to day commands](own-machine.md#day-to-day) and [where your stuff is](own-machine.md#where-your-stuff-is) are the same as on your own machine.

## Using the console from your PC

The console only listens on the server itself. To use the launcher's **Remote Console** or **TavernKeeper** from your PC, tunnel it over SSH. In PuTTY, open your saved session's settings, go to **Connection**, **SSH**, **Tunnels**, enter `1760` as **Source port** and `127.0.0.1:1760` as **Destination**, click **Add**, then save the session and connect. While that window is open, point the Remote Console at `127.0.0.1`.

## Something went wrong?

See [Server troubleshooting](../troubleshooting.md). The VPS-specific ones (locked out of SSH, "Permission denied (publickey)", a password login that still works) are under [VPS and SSH](../troubleshooting.md#vps-and-ssh).
