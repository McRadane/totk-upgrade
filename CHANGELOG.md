# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](https://keepachangelog.com).

## Unreleased

## [1.4.0] - 2023-06-19

### Added

- Sort armors by name (like current) or by game order (mixing upgradable and non-upgradable)
- Sort materials by name or by game order
- Search into ingredients
- Filter costs only for owned armors, visible armors, visible AND owned armors, or all armors (like current)

### Changed

- Better display of hidden and owned icons

### Fixed

- Fixed non-upgradable armors not hidden

## [1.3.0] - 2023-06-19

### Added

- Added details of which armor need which material on the Costs tabs
- Added missing translations

### Fixed

- Fixed the armor buy calculation cost

## [1.2.1] - 2023-06-15

## Added

- Armor costs were missing, it has been added
- Added coverage lcov report for SonarQube

### Fixed

- Fixed a translation issue in french
- Fix some minor accessibility issues with buttons
- Ensure elements are big enough in mobile, and there is no overlapping

## [1.2.0] - 2023-06-15

### Added

- Language switching with French support (almost 100% translated)
- Added non-upgradable armors
- Added more eslint rules with variious plugins
- Added Prettier

### Changed

- Added categories on armors to split between set/non-set and upgradable/non-upgradable
- Added more meta informations for Maskable icon, Splash screen and site Description
- Updated the build to manage environment variable
- Switched from CDN to bundled assets

### Fixed

- Fixed some small issues with accessibility

## [1.1.0] - 2023-06-01

### Added

- Added `CHANGELOG.md` file
- Added new filtering on Armor page
- Added icons and files for PWA support

### Changed

- Changed bootstrap to MDB
- Updated the look of the site

### Fixed

- Fixed some materials with incorrect names

## [1.0.0] - 2023-05-31

### Added

- First release
