---
title: Troubleshooting
description: Fixes for common server problems.
summary:
    - "If nobody can connect, check the server finished starting, then your port forwards (`1757` UDP, `1761` and `1762` TCP) and firewalls."
    - "If the forest is broken, players joined too early. Restart and wait a few minutes, and make sure `1761` TCP is open."
    - "If mod changes do nothing, restart the server. Mods only change when it starts."
    - "If saves are lost on stop, give it time to save. On Docker, keep `stop_grace_period: 5m` and at least 4 CPUs."
    - "If every console login is refused, `server_secret.key` is missing or unreadable. Restore it from a backup."
---

# Server troubleshooting

Find your problem below. If it's not here, see [Getting help](../help/getting-help.md). Bring your logs.

**Where the logs are:**

- **Windows Server launcher:** the log in the launcher window, and `%APPDATA%\A Township Tale\Servers\-1\Logs\logs\unity-log.csv`.
- **Docker:** `docker compose logs --tail 300`.
- **Panels:** the panel's console.
- **Wine:** `~/att-server/game/MelonLoader/Latest.log`, or `journalctl -u att-server` if you made the service.

## Nobody can connect

Work through these in order.

1. **Is the server running and finished starting?** TavernLib logs `Starting auth listening cycle` when it's ready. On Docker, `docker compose ps` should say `Up`, not `Restarting`.
2. **Can you join from the same machine or network?** Try `127.0.0.1` on the server PC, or its local IP from another device at home. If that fails too, it's not a port problem. Read the logs.
3. **Port forwards.** Check the three rules (`1757` UDP, `1761` and `1762` TCP) point at the right local IP, and that your PC still has that IP. See [Ports and port forwarding](ports.md).
4. **Firewalls.** Windows Firewall on the server PC. On a VPS, your provider's firewall in their control panel (Hetzner Cloud Firewalls, AWS security groups, Oracle Cloud, Azure and others all block by default). UFW and Docker can't see what those drop.
5. **CGNAT.** If your router's internet IP doesn't match [ifconfig.me](https://ifconfig.me), port forwarding can't work. See [When port forwarding isn't possible](ports.md#when-port-forwarding-isnt-possible).
6. **Changed ports.** If you moved any ports, forward the new ones, and players need an [SRV record](srv-records.md) to find them.
7. **Testing from inside.** Joining your own public IP from home often fails even when it works for everyone else. Ask a friend to try, or test from your phone's data.

On Linux, check the server's listening:

```bash
sudo ss -ulpn | grep 1757
sudo ss -tlpn | grep -E '1761|1762'
```

## Players load in but the forest is missing or broken

- **They joined too early.** A new world spends its first few minutes generating the forest. Anyone who joins before that finishes gets a broken forest. Restart the server and wait a few minutes before joining.
- **The web port is blocked.** Players load the forest from port `1761` TCP. Check it's forwarded and open.

## Players get "Bizarre mode detected."

They tried to join in **Fly** mode without the role for it. Give them `fly`, `moderator` or `owner` (see [Roles](config-reference.md#roles)), or have them pick their headset instead.

## Players get "You are missing mods that are required for this server."

Their mods don't match the server's. If they join through the launcher, it fixes this by itself on the next try. If it keeps happening, see [Mods](#mods).

## Mods

- **Mod changes didn't do anything.** Mods only change when the server starts. Restart it.
- **A modlist mod didn't install.** Check the log for TavernLib's mod messages. Mods only come from the default TavernMods source and sources added with `modmanager addrepo`. Check the id is spelled right (`Author.Mod`, like `ModdingTavern.TavernEssentials`).
- **The server takes ages on the first start with a modlist.** It's downloading. It gives up after 5 minutes and starts anyway.
- **Players can't join after a mod update.** A version can be withdrawn if it's broken or harmful. Players can't join a server still running a withdrawn version until you update it.

## Saves are lost when the server stops

The server has to save before it closes. On Docker, `stop_grace_period: 5m` gives it time. Saving while a new world is still generating can take minutes, so give it at least 4 CPUs and let a stop finish instead of forcing it.

If the console can't be reached, the server is stopped without saving. Check the logs for a console error.

## Console logins are all refused

TavernLib signs every console token with `server_secret.key` in its config folder. If the file is missing or can't be read, nothing works. Restore it from a backup, or delete it to make a new one (all old tokens stop working, get the new owner token afterwards).

## "Nobody can join" error about the login port

Something else is using the login port (`1762` by default). Another server, or an old copy of this one that didn't close. Stop it, or move this server's [ports](srv-records.md#moving-the-ports).

## Not on Community Servers

- Did you restart after turning on `community_listed`? It only starts listing at startup.
- The server needs to reach the internet to post its listing.
- A `public_hostname` that doesn't point at your server's IP is refused by the list. Fix the A record, or remove it.
- Shows up but **Offline**? Players can't reach your login port. See [Nobody can connect](#nobody-can-connect).

## Docker

- **"A Township Tale.exe is missing from /game-files".** The game isn't directly inside `game-source`. `ls game-source` should show `A Township Tale.exe` and `A Township Tale_Data`, not another folder.
- **A `PATCHER:` error about GitHub.** The first start downloads MelonLoader, TavernLib and the patch, so it needs internet. Later starts work offline.
- **The server dies after a while and the logs just stop.** Usually Linux running out of memory. `sudo dmesg | grep -i "out of memory"` confirms it. Add swap:

  ```bash
  sudo fallocate -l 2G /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
  ```

- **Disk full (`no space left on device`).** `df -h` shows what's using it. Delete any leftover zip, run `docker image prune -f`, and check the log archives in `server-data/Servers/-1/Logs/logs/Archives`.
- **`docker: permission denied` on the Docker socket.** Your session started before you joined the `docker` group. Log out and back in.
- **`ufw status` doesn't list the game ports.** That's expected. Docker opens published ports itself, around UFW.
- **Wine complains about the prefix, or a server that worked starts misbehaving.** `docker compose down`, then `docker volume rm att-server_wine-prefix` (the name starts with your folder's name, `docker volume ls` shows it), then `docker compose up -d`. Your saves and config aren't in the prefix.

## Game panels

- **The panel never shows the server online.** It waits for TavernLib's `Starting auth listening cycle` line. If players can connect but the panel disagrees, [open an issue](https://github.com/ChatonIsHere/a-township-container/issues) with the last few console lines.
- **AMP doesn't list A Township Tale.** Check the repository is `ChatonIsHere/a-township-container:amp-templates`, click **Fetch** again and refresh. With Controller/Target, check the target has it too.
- **Nobody can connect.** Every port needs an allocation or binding in the panel, and needs to be open in any firewall in front of the node.
- **Wine trouble on a panel.** Stop the server, delete `.wine` and start again. A fresh prefix is copied in and your saves and config are linked back.

## Wine

- **The server takes forever and nobody can join, with no errors.** MelonLoader didn't load. Check `WINEDLLOVERRIDES` includes `version=n,b` and that `version.dll` and the `MelonLoader` folder are in the game folder.
- **Wine won't start the game.** `chmod +x "A Township Tale.exe"`. Copying files from Windows or unzipping on some panels drops the execute bit.
- **It dies straight away about a display.** Xvfb isn't running, or `DISPLAY` isn't `:1`. The game needs a display even with `-nographics`.
- **It crashes about audio.** Check `~/.asoundrc` sends sound to the null device.
- **Old Wine.** `wine --version` should be 10.0 or newer, from WineHQ.

## VPS and SSH

- **Locked out of SSH.** Use your host's web console in their control panel. It doesn't go through SSH. Log in as `att` with the password from `adduser`, fix what broke (usually `/etc/ssh/sshd_config.d/00-hardening.conf` or a missing UFW rule) with `sudo nano`, and run `sudo systemctl restart ssh`.
- **"Permission denied (publickey)".** You're connecting as the wrong user (use `att`), `authorized_keys` has the wrong content (it needs the single `ssh-` line from PuTTYgen's box), or the `chown`/`chmod` lines were skipped.
- **Password login still works after locking down SSH.** Another config file is winning. `sudo sshd -T | grep -i passwordauthentication` should say `no`. If not, look in `/etc/ssh/sshd_config.d/` for a file like `50-cloud-init.conf` and make sure yours sorts before it (that's what the `00-` is for).

## Windows Server launcher

- **Setup won't finish.** It's the same Setup as the client. See [Setup troubleshooting](../play/troubleshooting.md#setup-wont-finish).
- **"Open Server" does nothing or closes straight away.** Check the log in the launcher window. Another server might already be using the console port. Close it first.
