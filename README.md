# Web Page Gehirn Research Group

> [!IMPORTANT]  
> This README is under construction, any further fix need to be approved by Team Leads

## Why is this project being made?

This project serves as a pivotal initiative for our esteemed Research Group. With a definitive goal in mind, we aim to enhance our online presence by undertaking a comprehensive revamp of our existing website and blog. The primary objective is to execute a strategic and progressive development approach, phased to align with the evolving needs and advancements in the digital landscape.

## Content

- [Getting Started](#getting-started)
- [Characteristics](#characteristics)
- [Commits](#commits)
- [Technologies](#technologies)
- [Usage](#usage)
- [Team](#team)
- [Troubleshooting](#troubleshooting)
- [Recommended Pre-Configuration](#recommended-pre-configuration)
- [License](#license)

## Getting Started

> [!TIP]
> Before getting started checkout [Recommended Pre-Configuration](#recommended-pre-configuration) for avoid any problems.

Follow these steps to get the project up and running on your local machine:

1. **Clone repository:**

    - By using HTTPS:

        ```bash
        git clone https://github.com/WebDevelopmentGehirn/MainWebPage.git
        cd MainWebPage
        ```

    - Or using SSH:

        ```bash
        git clone git@github.com:WebDevelopmentGehirn/MainWebPage.git
        cd MainWebPage
        ```

2. **Move into Developer Branches:**

    To start developing in this project, you need to be inside a Developer Branch `[feature/my-feature]`. Then you can merge your changes into the `dev` branch.

    ```bash
      git checkout feature/my-feature
      ```

3. **Install packages:**

    ```bash
      npm install
      ```

4. **Execute:**

    ```bash
      npm run dev
      ```

5. **Test:**

    Go to your `localhost:3000` to test if the web-app is working well.

Any Issues? Go to [Troubleshooting](#troubleshooting) for common error logs.

## Characteristics

- Basic landing page for Gehirn Research Group
- Active Development Projects
- CTA for interested viewers
- Links to our webs

## Commits

| Description                          | Type     | Format | Example                                    |
|--------------------------------------|----------|--------|--------------------------------------------|
| **Requirements and Features**        | feat     | `:sparkles:`    | feat: :sparkles: Include new feature       |
| **Change Control**                   | feat     | `:boom:`        | feat: :boom: Service implementation        |
| **Defects and Incidents**            | fix      | `:construction:`| fix: :construction: Mapping is corrected   |
| **Fix bugs**                         | fix      | `:bug:`         | fix: :bug: Mapping order fix               |
| **Immediate correction is required** | fix      | `:ambulance:`   | fix: :ambulance: Fix flow bug              |
| **Phase or sprint implemented**      | feat     | `:package:`     | feat: :package: Feature is included        |
| **Add, update or pass tests**        | test     | `:white_check_mark:` | test: :white_check_mark: New tests added |
| **Add or update documentation**      | docs     | `:memo:`        | docs: :memo: Update doc                    |
| **Add or update UI styles**          | style    | `:lipstick:`    | style: :lipstick: Update UI                |
| **Write bad code needed review**     | refactor | `:poop:`        | refactor: :poop: Fix this please |
| **Remove files**                     | feat     | `:fire:`        | feat: :fire: Remove file                   |
| **Reverting changes**                | revert   | `:rewind:`      | revert: :rewind: I shouldn't do that again |
| **Improving Performance**            | perf     | `:zap:`         | perf: :zap: Optimizing code                |

## Technologies

This project is built using [Nuxt.js](https://nuxtjs.org/), a Vue.js framework that enables the creation of server-side rendered (SSR) and static web applications with the objective of simplify the development process by providing our developers a higher-level framework with conventions and best practices, allowing us to focus on building robust and scalable applications.

### Key Features

- **Server-Side Rendering (SSR):** Nuxt.js enables SSR out of the box, improving SEO and performance by rendering pages on the server before sending them to the client.

- **Vue.js Integration:** Leveraging the Vue.js framework, Nuxt provides a structured and organized approach to building Vue applications, making it easy to create dynamic and interactive user interfaces.

- **Automatic Routing:** Nuxt.js automatically generates routes based on the file structure in the `pages` directory, reducing the need for manual route configuration.

- **VueX State Management:** The project incorporates VueX for state management, allowing for centralized state management and easy synchronization between components.

- **Plugin System:** Nuxt.js has a flexible plugin system that simplifies the integration of third-party libraries and tools, enhancing extensibility.

- **Middleware:** Middleware in Nuxt.js allows for custom functions to be run before rendering a page or layout, providing control over the middleware stack.

## Usage

> [!NOTE]  
> Team Members are allowed to make User Manuals for this Section.

Here we'll put some UX stuff.

## Team

Are you contributing? Put something here!

## Troubleshooting

### Recommended Pre-Configuration

- **SSH-Key for cloning:**

| *Quick guide for SSH configuration* |
| --------------------------------------- |
| 1. Use `ssh-keygen` command for generate your key in directory `[~/.ssh]` with the name you want (Default name: `id_rsa`).|
| 2. Go to `[Settings >> Access >> SSH and GPG keys]` in your GitHub. |
| 3. Click on `New SSH key` and copy the content of your `id_rsa.pub` into `Key` textfield, fill Title and select a Key type, then click on `Add SSH key`.|

- **NVM for Node and NPM version:**

| *Quick guide for NVM installation* |
| --------------------------------------- |
| **Linux or Unix Systems** |
| 1. Go to [NVM Installation guide](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) and copy the `curl` command for installation in your terminal.|
| 2. Use `nvm install` with your desire version (In this case LTS(20.11.1)) e.g.`nvm install 20`. |
| 3. Use `nvm use` with your desire version to activate your `node` and `npm` version|
| **Windows Systems** |
| 1. Go to [NVM for Windows](https://github.com/coreybutler/nvm-windows/releases), download `nvm-setup.exe` and follow the Wizard Installation.|
| 2. Use `nvm install` with your desire version (In this case LTS(20.11.1)) e.g.`nvm install 20`. |
| 3. Use `nvm use` with your desire version to activate your `node` and `npm` version|

## License

License
