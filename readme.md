# Omnidirectional

A mod that makes supported single-direction skills omnidirectional. Use WASD with the supported skill to go that direction!

https://github.com/user-attachments/assets/40adc435-6491-4c02-a67b-76b178696825

This mod aims to make the game feel *similar* to how it does in modern versions. However, as the game isn't meant to function like this (especially in Classic versions) this mod has its own "feel", especially for specific skills.

## Forewords

- This mod works with **Classic Skill Prediction ("SP")**, but using it alongside Omnidirectional will cause visual glitches with "strict" skills. You can disable those skills using the command `!omni strict`. For details, see the FAQ: "I want to use Skill Prediction. What should I expect?"

- While the mod **tries** to stay within ethical bounds, **it does provide an unfair advantage** by removing camera flick requirements. For more on this, check the FAQ: "Is this mod ethical?"

- Bug reports are welcome—open a Github issue if you encounter problems. Just keep in mind that this mod alters core game behavior, so not all bugs are fixable. Issues related to SP in paritcular may be unfixable. See the FAQ: "I want to use Skill Prediction. What should I expect?" for more.

## Installation

Click the green "Code" button, then select "Download ZIP".

Move the inner folder into your Toolbox `mods` folder.

## Commands

| Command | Argument(s) | Description | Example |
| :------ | :---------- | :---------- | :------ |
| !omni toggle | None | Enables or disables the entire mod. | |
| !omni targeted | None | Enables or disables all targeted skills. (e.g., Charging Lunge/Slash) | |
| !omni strict | None | Enables or disables all strict skills. (e.g., Teleport Jaunt) | |
| !omni skill | \[skillbase\] OR \[skillbase:skillsub\] | Enables or disables a specific skill for your class. | !omni skill 7 |


## Affected Skills

| Class | Skill Name(s) |
| :---- | :--------- |
| Archer | Backstep, Breakaway Bolt |
| Berserker | None |
| Lancer | Backstep, Charging Lunge |
| Mystic | Teleport Jaunt |
| Priest | Backstep, Fiery Escape |
| Slayer | Headlong Rush |
| Sorcerer | Backstep, Glacial Retreat, Teleport Jaunt |
| Warrior | Charging Slash, Leaping Strike, Pounce |
| Reaper | None |
| Gunner | Point Blank |


## FAQ

#### Will this get me banned?

There's always some risk, but this mod is designed to be mostly undetectable. Unless you stream or upload footage clearly showing the mod in use, detection is unlikely. Even if you perform inhuman actions—like casting skills in a manner that would require lighting-fast camera flicks—it would be difficult to definitively prove that this mod was involved. Most detections would rely on circumstantial evidence rather than hard proof.

#### How do I add more skills to the mod?

You *probably* shouldn't. If you think a non-directional skill is missing, feel free to open a Github issue and let me know. Just keep in mind: while making a skill omnidirectional might sound cool, it can seriously mess with your muscle memory and often makes a class harder to play. That's why I deliberately left out combat skills, including certain combat-movement hybrids (like Reaper's Pendulum Strike).

If you're still determined to add the skill yourself, you'll need to manually edit the `Config.js` file while Toolbox is both stopped *and* closed. Adding new skills isn't (and won't be) supported natively.

#### I want to use Skill Prediction. What should I expect?

You'll likely see visual glitches with "strict" skills like Teleport Jaunt—such as briefly appearing under the map when moving uphill. This happens because Skill Prediction (aka emulation) tries to guess action results based on the client's default logic—which this mod modifies—causing confusion.

If these visual bugs bother you or emulation causes bigger issues, you can disable strict skills with `!omni strict`. Other skill types generally work fine.

For non-visual bugs caused by emulation, feel free to open a Github issue. Just note: if it only happens with emulation enabled, it might not be fixable.

#### Is this mod "ethical"?

That depends—what is "ethical" in the tera community, really? Ethics are subjective and vary based on personal beliefs and justifications. In my opinion, this mod provides an unfair advantage by removing the need for camera flicking entirely, which is a key skill check (especially in PvP and faster PvE content).

So no, I wouldn't consider this mod "ethical". But the more relevant question might be: Is this mod allowed? That's up to the server admins to decide.

And perhaps the most important question is: Do *you* care what *their* opinion is?