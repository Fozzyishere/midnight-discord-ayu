<img width=800 src="https://github.com/refact0r/midnight-discord/raw/master/assets/preview.png">

# midnight

a dark, customizable discord theme.

<img width=800 src="https://github.com/refact0r/midnight-discord/raw/master/assets/screenshot1.png">

<img width=800 src="https://github.com/refact0r/midnight-discord/raw/master/assets/screenshot2.png">

<img width=800 src="https://github.com/refact0r/midnight-discord/raw/master/assets/screenshot3.png">


# This fork added the ayu color scheme for personal usage

- the ayu dark palette ([ayu-theme/ayu-colors](https://github.com/ayu-theme/ayu-colors)) lives in `src/ayu/colors.css`. it is appended after the midnight build to produce `build/ayu.css`, so upstream `src/*.css` files stay untouched and pulling from [refact0r/midnight-discord](https://github.com/refact0r/midnight-discord) won't cause merge conflicts.
- `npm run build` (or `npm run dev` / `npm run serve`) builds both `build/midnight.css` and `build/ayu.css`. a github action also rebuilds both on every push that touches `src/` or `scripts/`.


## install

### vencord/betterdiscord (or any client that supports theme files)

1. download the theme file, [`midnight.theme.css`](https://github.com/refact0r/midnight-discord/blob/master/themes/midnight.theme.css). (there should be a download button at the top right of the page)
2. drag the file into your theme folder. (there should be a button to open the theme folder in theme settings)
3. (optional) customize the theme by editing the options in `midnight.theme.css`.

### install through link

add one of these to your theme import links. you will need to copy the theme variables to your quickcss in order to customize the theme.

- midnight: `https://fozzyishere.github.io/midnight-discord-ayu/build/midnight.css`
- ayu dark: `https://fozzyishere.github.io/midnight-discord-ayu/build/ayu.css`

## flavors

flavors are preset customizations for midnight.

to use a flavor, follow the install instructions above but download the flavor theme file of your choice instead of `midnight.theme.css`.

- [background](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-background.theme.css) (background image + transparent blurred panels)
- [catppuccin mocha](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-catppuccin-mocha.theme.css)
- [catppuccin macchiato](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-catppuccin-macchiato.theme.css)
- [nord](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-nord.theme.css)
- [rose pine](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-rose-pine.theme.css)
- [rose pine moon](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-rose-pine-moon.theme.css)
- [tokyo night](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-tokyo-night.theme.css)
- [lilypichu](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-lilypichu.theme.css)
- [light](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-light.theme.css)
- [auto](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-auto.theme.css)
- [vencord](https://github.com/refact0r/midnight-discord/blob/master/themes/flavors/midnight-vencord.theme.css)

## discord server

need help? want to give feedback? want to be notified about upcoming changes? join <https://discord.gg/nz87hXyvcy>

## contributing

this theme uses a dev script to check for changes in the source css files and combine them into a build file. to run locally:

1. clone the repository.
2. run `npm i`.
3. create a `.env` file in the project root with the paths of any local theme files you want to update (comma separated)

```
DEV_OUTPUT_PATH=C:\Users\USERNAME\AppData\Roaming\Vencord\themes\midnight-dev.theme.css
```

1. run `npm run dev`.
2. make changes to any file in `/src` or the main theme file. the local theme files you listed will automatically be updated, along with the build file in `/build`.
3. make a pull request with your changes!

## credits

original design inspired by <https://github.com/schnensch0/zelk>

window controls inspired by <https://github.com/Dyzean/Tokyo-Night>

thanks to all the [contributors](https://github.com/refact0r/midnight-discord/graphs/contributors)!
