# E-commerce
To intall packages run "npm i" 

To run tests run "npm test"

To build run "npm run build"

To start the project in development mode run "npm run dev"

To deploy run "npm run deploy"

## Syncing a Forked Repository with the Main Repository
Follow these steps to keep your forked repository up-to-date with the main repository:

1. **Add the main repository as a remote:**
   ```bash
   git remote add upstream git@github.com:kevingarciamartin/e-commerce.git
2. **Pull the changes from the main repository:**
   ```bash
   git pull upstream main
3. **Checkout to your fork's main branch:**
   ```bash
   git checkout main
4. **Merge the changes from the main repository into your fork's main branch:**
   ```bash
   git merge upstream/main
5. **Push the changes to your fork on GitHub:**
   ```bash
   git push origin main

