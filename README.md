<h4 align="right"><strong>English</strong></h4>
<p align="center">
    <strong>Terminal CLI Aesthetic LuCI Theme</strong>
</p>
<p align="center"><strong>A brutalist, high-contrast OpenWrt LuCI theme built with Vite and Tailwind CSS.</strong></p>
<h4 align="center">⬛ Monospace | 🟢 Cyber-Industrial | 📱 Responsive | ⚙️ Hackable </h4>

## Features

- **Terminal Aesthetic**: Cyber-industrial, high-contrast green-on-black design. 
- **Monospace Supremacy**: Every character is monospaced.
- **Brutally Functional**: 0px radius, 1px solid borders, with CRT scanlines and phosphor glow effects.
- **Mobile-friendly**: Optimized for mobile interactions and display.
- **Installable (PWA)**: Ships a web app manifest and app icons.

## Compatibility

- **OpenWrt**: Requires OpenWrt 23.05.0 or later, as the theme uses ucode templates and LuCI JavaScript APIs.
- **Browsers**: Built with **TailwindCSS v4**. Compatible with modern browsers.

## Install a pre-built release

OpenWrt 25.12+ and snapshots use `apk`; other versions use `opkg`:

> **Tip**: You can confirm your package manager by running `opkg --version` or `apk --version`. If it returns output (not "not found"), that's your package manager.

- **opkg** (OpenWrt < 25.12):

  ```sh
  cd /tmp && uclient-fetch -O luci-theme-matrix.ipk https://github.com/nhAsif/luci-theme-matrix/releases/latest/download/luci-theme-matrix_1.0.0-r20260619_all.ipk && opkg install luci-theme-matrix.ipk
  ```

- **apk** (OpenWrt 25.12+ and snapshots):
  ```sh
  cd /tmp && uclient-fetch -O luci-theme-matrix.apk https://github.com/nhAsif/luci-theme-matrix/releases/latest/download/luci-theme-matrix-1.0.0-r20260619.apk && apk add --allow-untrusted luci-theme-matrix.apk
  ```

## Build from source

Build the package yourself with the OpenWrt build system. 

### Via the OpenWrt buildroot

```sh
git clone https://github.com/openwrt/openwrt.git
cd openwrt
git checkout openwrt-24.10

git clone https://github.com/nhAsif/luci-theme-matrix.git package/luci-theme-matrix
./scripts/feeds update -a
./scripts/feeds install -a

make menuconfig
make tools/install -j$(nproc)
make toolchain/install -j$(nproc)
make package/luci-theme-matrix/compile -j$(nproc) V=s
```

## Contributing
Matrix uses **Vite** and a modern front-end toolchain. Suggestions and PRs are always welcome.

## License & Credits

[Apache 2.0](LICENSE). 

This theme is a heavily modified and restyled fork of [luci-theme-aurora](https://github.com/eamonxg/luci-theme-aurora) originally created by [eamonxg](https://github.com/eamonxg).
