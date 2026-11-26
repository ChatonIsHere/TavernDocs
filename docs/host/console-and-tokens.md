---
title: Console and tokens
description: Run admin commands on your server, give other people limited access, and rotate a token that leaked.
---

# Console and tokens

The console runs admin commands on your server: kicking players, saving, managing mods and lots more. It listens on the console port (1760 by default).

:::danger

The **owner token** gives full control of your server. Anyone who has it can do anything. Don't share it, don't paste it in Discord, and don't show it in screenshots or streams. If you want someone to help run the server, give them a [named token](#named-tokens) that only does what they need.

:::

## Getting your owner token

- **Windows Server launcher:** click **Copy Console Token** at the top of the window.
- **Docker, Wine or panels:** it's in `console_token.txt` in TavernLib's config folder (`tavern-config` in Docker).

## Using the console

- **Windows Server launcher:** click **Console**. It's already logged in.
- **From the client launcher:** **Remote Console** runs commands, and **TavernKeeper** is a tool for moving and spawning things. Both ask for a console token.
- **AMP:** type into AMP's console.
- **Docker:** run one command from the server folder and print the reply:

  ```bash
  docker compose exec -e TAVERN_CONSOLE_TOKEN_FILE="/root/.wine/drive_c/users/root/AppData/Roaming/TheModdingTavern/console_token.txt" a-township-container python3 /console-bridge.py run "player list"
  ```

  It waits up to 190 seconds for the reply. A slow command, like a forest reset with Forest Performance installed, can take longer: add `-e TAVERN_CONSOLE_COMMAND_TIMEOUT=600` after `exec` to wait 10 minutes. If it does time out, the command still finishes on the server; check the log for the result.

### From outside your network

The console port is closed to the internet if you followed these guides, and it should stay that way. To reach it from your PC, use an SSH tunnel (see [Using the console from your PC](docker/vps.md#using-the-console-from-your-pc)) and connect to `127.0.0.1`.

If you really need it open, forward the console port too and use a [named token](#named-tokens) rather than the owner token. You can stop the owner token working from anywhere but the server itself with `"console_owner_local_only": true` in `server_settings.json`.

## Commands worth knowing

| Command | What it does |
| --- | --- |
| `player list` | Who's online |
| `player kick <player>` | Kicks a player |
| `player ban <name> [reason]` | Adds the name (and its user id, if it has played) to the blacklist and kicks them |
| `player unban <name>` | Takes the name and its user id off the blacklist |
| `player banlist` | Shows the blacklisted names, user ids and IP addresses |
| `save now` | Saves the world |
| `modmanager list` | Every installed mod and whether it's on |
| `modmanager addrepo <url>` | Adds a mod source, see [Mods on your server](mods-on-your-server.md#mods-from-other-sources) |
| `token whoami` | Which token you're logged in with |

`document` writes an HTML page listing every command, if you want the full list.

## Named tokens

Named tokens let you give someone access to just some commands, and take it away later without changing yours. Only the owner token can make them.

```
token create Placeholder "player kick,player list" 30
```

That makes a token called `Placeholder` that can only kick players and list them, and stops working after 30 days. It prints the token once. Send it to the person privately.

- Access is `full`, or command paths split by commas, like `"player kick,player list"`. A module name like `player` allows everything in it.
- Days `0` means it never expires.

| Command | What it does |
| --- | --- |
| `token list` | Every named token: access, status, last use |
| `token show <id>` | Shows a token's text again |
| `token edit <id> <access> [days]` | Changes what it can run |
| `token revoke <id>` | Stops a token for good and closes its sessions |
| `token rotate <id>` | Gives a token new text. The old text stops working |
| `token log [id] [count]` | Recent console activity, per token |

## If a token leaks

Rotate it straight away. The old text stops working and anyone logged in with it is kicked off.

```
token rotate owner
```

For a named token, use its id instead of `owner`, or `token revoke` it.

After rotating the owner token, the Windows launcher picks up the new one by itself. On Docker and Wine, `console_token.txt` is updated, and anything else that used the old token (your Remote Console, scripts) needs the new one.

## Something went wrong?

- **"Cannot connect" from Remote Console.** The console port isn't reachable. That's expected from outside unless you tunnelled or forwarded it.
- **Every login is refused.** TavernLib signs tokens with `server_secret.key` in its config folder. If that file is missing or unreadable, no token works. Restore it from a backup, or delete it to make a new one (all old tokens stop working).

More in [Server troubleshooting](troubleshooting.md).
