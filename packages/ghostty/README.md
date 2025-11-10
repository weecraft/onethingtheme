# Ghostty (One Thing Theme)

_Modern, minimal & simple visual studio code theme that combine black, white and gray colors_

_Screenshots:_

![Light](https://cdn.hashnode.com/res/hashnode/image/upload/v1746717532966/94c91d15-2b3d-4f1e-b854-a9b0f09f181a.png)

![Dark](https://cdn.hashnode.com/res/hashnode/image/upload/v1747461111794/bd773e62-de62-4f7b-9e3e-c8fdcc07bc28.png)

## Recomended settings

If you want to use this theme with all of the features and simplicity, you can start tweak the settings by following the [official guide](https://onethingtheme.vercel.app/docs)

## Installation

To install the theme for oh my posh, you can follow the step below.

1. Go to the ghostty configurations. used to be `~/.config/ghostty`

2. Create the themes folder inside them,

```
mkdir themes
cd themes
```

3. Download the one thing themes into ghostty theme folder.

```
curl -o one-thing-light.conf https://raw.githubusercontent.com/one-thing-theme/ghostty/refs/heads/main/themes/one-thing-light.conf

curl -o one-thing-dark.conf https://raw.githubusercontent.com/one-thing-theme/ghostty/refs/heads/main/themes/one-thing-dark.conf
```

4. Next, update the ghostty config theme and set the theme to the conf. file.

```
theme = light:one-thing-light.conf,dark:one-thing-dark.conf
```
