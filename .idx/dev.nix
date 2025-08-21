# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-25.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_22
    pkgs.pnpm
    pkgs.openssl
  ];

  services = {
    postgres = {
      enable = true;
      package = pkgs.postgresql;
    };
  };

  # Sets environment variables in the workspace
  env = { };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "esbenp.prettier-vscode"
      "dbaeumer.vscode-eslint"
      # "bradlc.vscode-tailwindcss"
      "dsznajder.es7-react-js-snippets"
      "DavidAnson.vscode-markdownlint"
      "EditorConfig.EditorConfig"
      "mikestead.dotenv"
      "streetsidesoftware.code-spell-checker"
      "usernamehw.errorlens"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
        # Open editors for the following files by default, if they exist:
        # default.openFiles = [ "src/App.tsx" "src/App.ts" "src/App.jsx" "src/App.js" ];

        # if db not created use this command
        #   initdb -D local
        setup-postgres = ''
          psql --dbname=postgres -c "CREATE DATABASE mychat;"
        '';
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}
