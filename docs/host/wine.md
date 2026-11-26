---
title: "Linux: Wine without Docker"
description: Run the server straight under Wine on Linux, set up the same way the container does it.
summary:
    - "The server runs under Wine on Linux. Use the Docker container if you can, and use this page if you'd rather not."
    - "Run the server as its own user and install Wine stable 10.0 or newer from WineHQ."
    - "Set `WINEDLLOVERRIDES` with `version=n,b`, or the game starts with no mods and no error."
    - "Turn off sound, patch the game with MelonLoader, TavernLib and the patch, then write `start.sh` and `stop.sh`."
    - "Run it as a systemd service, and open `1757` UDP and `1761`, `1762` TCP. Leave `1760` closed."
---

# Linux: Wine without Docker

The game server is a Windows program. On Linux it runs under [Wine](https://www.winehq.org/). [a-township-container](docker/own-machine.md) does all of this for you, so use it if you can. This page is for when you'd rather not use Docker. It sets things up the same way the container does, step by step.

You'll want to be comfortable with a Linux terminal. Commands are for Ubuntu 22.04 or 24.04. Other distros work too, but you'll need to translate the package names.

## What you need

- A 64-bit (x86_64) Linux machine: 2 CPU cores and 4 GB of RAM for a few friends around Town, 4 cores and 8 GB if people will explore the forest. See [How big a server you need](before-you-host.md#how-big-a-server-you-need).
- Your game files, with `A Township Tale.exe` and `A Township Tale_Data` directly inside the folder (see [Making the game-source folder](docker/own-machine.md#making-the-game-source-folder)).
- Internet the first time, to download MelonLoader, TavernLib and the patch.

## 1. A user for the server

Run the server as its own user, not root and not your everyday account. Some steps below (like turning off sound) are things you only want for the server.

```bash
sudo adduser att
sudo -iu att
```

Everything from here on is run as `att` unless it says `sudo`.

## 2. Install Wine and the tools

The container uses Wine stable 10.0 from WineHQ. Ubuntu's own `wine` package is older, so use WineHQ's:

```bash
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install -y curl jq unzip xvfb python3 ca-certificates
sudo mkdir -pm755 /etc/apt/keyrings
sudo curl -fsSLo /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
sudo curl -fsSLo /etc/apt/sources.list.d/winehq-$(. /etc/os-release && echo "$VERSION_CODENAME").sources \
    https://dl.winehq.org/wine-builds/ubuntu/dists/$(. /etc/os-release && echo "$VERSION_CODENAME")/winehq-$(. /etc/os-release && echo "$VERSION_CODENAME").sources
sudo apt update
sudo apt install -y --install-recommends winehq-stable
wine --version
```

It should print `wine-10.something` or newer. The server is tested on 10.0 and 11.0.

## 3. The server folder

```bash
mkdir -p ~/att-server/game
```

Copy your game files into `~/att-server/game`, then:

```bash
cd ~/att-server/game
ls                              # should show A Township Tale.exe and A Township Tale_Data
chmod +x "A Township Tale.exe"  # Wine won't start an exe that isn't executable
```

## 4. Wine settings

Make a file with the settings every other step uses:

```bash
nano ~/att-server/env.sh
```

```bash
export WINEARCH=win64
export WINEPREFIX="$HOME/att-server/prefix"
# Wine prints a lot. This keeps it to errors.
export WINEDEBUG=err+all
# version=n,b is the important one, see below. The other two turn off Wine's Mono and Gecko, which the game doesn't need.
export WINEDLLOVERRIDES="mscoree=d;mshtml=d;version=n,b"
export DISPLAY=:1
export XDG_RUNTIME_DIR="$HOME/att-server/run"
# The console bridge uses these to save and stop the server.
export RCON_PORT=1760
export TAVERN_CONSOLE_TOKEN_FILE="$WINEPREFIX/drive_c/users/$(id -un)/AppData/Roaming/TheModdingTavern/console_token.txt"
```

:::danger[Don't skip `version=n,b`]

MelonLoader loads through a `version.dll` in the game folder. Without `version=n,b`, Wine uses its own `version.dll` instead and the game starts with no mods at all. There's no error. It just looks like the server is taking forever and nobody can join.

:::

Now build the Wine prefix (Wine's fake Windows folder) once:

```bash
source ~/att-server/env.sh
mkdir -p "$XDG_RUNTIME_DIR" && chmod 700 "$XDG_RUNTIME_DIR"
wineboot --init && wineserver --wait
```

## 5. Turn off sound

There's no sound card on a server, and the game can crash trying to open one. Send this user's sound nowhere:

```bash
printf 'pcm.!default {\n    type null\n}\nctl.!default {\n    type null\n}\n' > ~/.asoundrc
```

This only affects the `att` user. Don't do this for an account you use for anything else.

## 6. Patch the game

These are the same three downloads the launcher and the container install. Run them again any time to update.

```bash
cd ~/att-server/game

# MelonLoader, the mod loader. Unzips into the game folder (MelonLoader/ and version.dll).
curl -fL -o /tmp/MelonLoader.x64.zip https://github.com/LavaGang/MelonLoader/releases/latest/download/MelonLoader.x64.zip
unzip -o /tmp/MelonLoader.x64.zip -d .

# TavernLib, which runs the server's login, mods and more.
mkdir -p Plugins
curl -fL -o Plugins/TavernLib.dll https://github.com/ModdingTavern/TavernLib/releases/latest/download/TavernLib.dll

# The patch that lets the game host and join private servers. Keep the original once.
[ -f "A Township Tale_Data/Managed/Root.Township.dll.original" ] || cp "A Township Tale_Data/Managed/Root.Township.dll" "A Township Tale_Data/Managed/Root.Township.dll.original"
curl -fL -o "A Township Tale_Data/Managed/Root.Township.dll" https://github.com/ModdingTavern/TavernDefaults/releases/latest/download/themoddingtavern.dll
```

## 7. TavernLib's config folder and ports

TavernLib keeps its config in the prefix's `AppData\Roaming\TheModdingTavern`, but doesn't make the folder itself:

```bash
source ~/att-server/env.sh
CONFIG="$WINEPREFIX/drive_c/users/$(id -un)/AppData/Roaming/TheModdingTavern"
mkdir -p "$CONFIG"
echo '{"server_port": 1757, "console_port": 1760, "web_port": 1761, "auth_port": 1762}' > "$CONFIG/tavern_server.json"
ln -sfn "$CONFIG" ~/att-server/config
ln -sfn "$WINEPREFIX/drive_c/users/$(id -un)/AppData/Roaming/A Township Tale" ~/att-server/saves
```

The two links give you short paths: `~/att-server/config` for TavernLib's files and `~/att-server/saves` for the world. The saves folder appears after the first start.

## 8. The start script

```bash
nano ~/att-server/start.sh
```

```bash
#!/bin/bash
# Starts the server. Mirrors a-township-container's entrypoint.sh.
source "$HOME/att-server/env.sh"
cd "$HOME/att-server/game"

# The game needs a display even with -nographics, or Wine dies when it makes a window.
rm -f /tmp/.X1-lock /tmp/.X11-unix/X1
Xvfb :1 -screen 0 1024x768x24 &
for i in $(seq 1 20); do [ -e /tmp/.X11-unix/X1 ] && break; sleep 0.5; done

# No crash dialog nobody can click.
wine reg add "HKEY_CURRENT_USER\Software\Wine\WineDbg" /v ShowCrashDialog /t REG_DWORD /d 0 /f >/dev/null

# The offline server tokens, the same ones the container and launcher use.
ACCESS=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIwIiwiVXNlcm5hbWUiOiJTZXJ2ZXIiLCJyb2xlIjoiQWNjZXNzIiwiaXNfdmVyaWZpZWQiOiJUcnVlIiwiaXNfbWVtYmVyIjoiVHJ1ZSIsIlBvbGljeSI6WyJvZmZsaW5lIiwicGxheV9vZmZsaW5lIiwic2VydmVyX2FjY2Vzc19wcmVfYWxwaGEiLCJnYW1lX2FjY2Vzc19wdWJsaWMiLCJzZXJ2ZXJfb3duZXIiLCJkZWJ1Z19mZWF0dXJlcyIsImRhdGFiYXNlX2FkbWluIiwicmV1c2VfcmVmcmVzaF90b2tlbnMiXSwiZXhwIjo5OTk5OTk5OTk5LCJpc3MiOiJBbHRhV2ViQVBJIiwiYXVkIjoiQWx0YUNsaWVudCJ9.wLKduc-OVFM0jgi_aeHwzazy70AO8KXyT5-YVkpPm4g
REFRESH=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIwIiwicm9sZSI6IlJlZnJlc2giLCJleHAiOjk5OTk5OTk5OTksImlzcyI6IkFsdGFXZWJBUEkiLCJhdWQiOiJBbHRhQ2xpZW50In0.nN1uSeWMrpK3qT-vySb6ynkvm4Eq23lHgD1xIKOCaxc
IDENTITY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIwIiwiVXNlcm5hbWUiOiJTZXJ2ZXIiLCJyb2xlIjoiSWRlbnRpdHkiLCJpc19tZW1iZXIiOiJUcnVlIiwiaXNfZGV2IjoiVHJ1ZSIsImV4cCI6OTk5OTk5OTk5OSwiaXNzIjoiQWx0YVdlYkFQSSIsImF1ZCI6IkFsdGFDbGllbnQifQ.DL8u_uiiZbKAwBCNoiwlEz2ba6J5Z0WoAPpq4JPQ9tg

ARGS=(-batchmode -nographics /start_server -1 false 1757 /force_offline /fly --melonloader.hideconsole
      /access_token "$ACCESS" /refresh_token "$REFRESH" /identity_token "$IDENTITY")

# The scene only changes from the command line: /questScene or /tutorialScene.
# ARGS+=(/questScene)

# Keep the mods in modlist.json installed, if there is one (see Mods on your server).
[ -s "$HOME/att-server/config/modlist.json" ] && ARGS+=(/modlist modlist.json)

exec wine "A Township Tale.exe" "${ARGS[@]}"
```

If you change the game port from `1757`, change it here and in `tavern_server.json`.

## 9. The stop script

Wine starts the game through its own `start.exe`, so a normal stop signal never reaches the game, and killing the game loses everything since the last save. Save and quit through the console instead. The container uses a small Python script for this, so grab it:

```bash
curl -fL -o ~/att-server/console-bridge.py https://raw.githubusercontent.com/ChatonIsHere/a-township-container/main/console-bridge.py
nano ~/att-server/stop.sh
```

```bash
#!/bin/bash
# Saves, then asks the game to quit. Only kills it if that doesn't work.
source "$HOME/att-server/env.sh"
BRIDGE="$HOME/att-server/console-bridge.py"
if TAVERN_CONSOLE_COMMAND_TIMEOUT=190 python3 "$BRIDGE" run "save now"; then
    TAVERN_CONSOLE_COMMAND_TIMEOUT=90 python3 "$BRIDGE" run quit >/dev/null 2>&1 || true
    for i in $(seq 1 90); do pgrep -u "$(id -un)" -f "A Township Tale.exe" >/dev/null || break; sleep 1; done
else
    echo "Couldn't save through the console, stopping without saving"
fi
pkill -u "$(id -un)" -f "A Township Tale.exe" 2>/dev/null || true
sleep 5
wineserver -k 2>/dev/null || true
pkill -u "$(id -un)" Xvfb 2>/dev/null || true
```

```bash
chmod +x ~/att-server/start.sh ~/att-server/stop.sh
```

## 10. First start

Start it by hand once to check it works:

```bash
~/att-server/start.sh
```

In a second terminal, watch MelonLoader's log:

```bash
tail -F ~/att-server/game/MelonLoader/Latest.log
```

When TavernLib logs `Starting auth listening cycle`, the server is up. A new world then spends a few minutes generating the forest. Wait for that before anyone joins, or they get a broken forest.

Stop it with `~/att-server/stop.sh` from the second terminal.

## 11. Run it as a service

So it starts on boot and stops cleanly on shutdown:

```bash
sudo nano /etc/systemd/system/att-server.service
```

```ini
[Unit]
Description=A Township Tale server
After=network-online.target
Wants=network-online.target

[Service]
User=att
ExecStart=/home/att/att-server/start.sh
ExecStop=/home/att/att-server/stop.sh
# Saving a new world can take minutes.
TimeoutStopSec=300
Restart=on-failure
RestartSec=30

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now att-server
journalctl -u att-server -f
```

## Ports and firewall

Open `1757` UDP and `1761`, `1762` TCP in your firewall and any provider firewall. Leave `1760` closed. With UFW:

```bash
sudo ufw allow 1757/udp
sudo ufw allow 1761:1762/tcp
```

See [Ports and port forwarding](ports.md) for the rest.

## Settings and mods

The config files are in `~/att-server/config`. See [Config reference](config-reference.md) and [Mods on your server](mods-on-your-server.md). Stop the server before editing them.

## Something went wrong?

See [Server troubleshooting](troubleshooting.md#wine).
