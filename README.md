# JTD

## Development

```sh
npm install
npm start
```

### Netlify CMS Flow

1. Add new entry

2. Save entry

3. Pull from `dev`

```sh
git pull
```

## Deployment

Get updates from `master` to `dev`:

> **NOTE:** since we are using netlify-cms all updates to prod content will be pushed to master so we need to sync dev with master before merging changes from dev to master!

```sh
git pull
git checkout dev
git merge master
```

Update `master` with changes in dev:

```sh
git checkout master
git merge dev
```

Start deployment by pushing to `master`:

```sh
git push
git checkout dev
```

## Debugging

When stuff breaks try cleaning everything:

```sh
gatsby clean
npm run install:clean
```
