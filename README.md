
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

**This build folder can directly be uploaded to any hosting instance or docker container and viewed from there.**


## Additional info
1. Consuming data from 3 sources: NewsApi[https://newsapi.org/docs/endpoints/everything], The Guardian [https://open-platform.theguardian.com/documentation/search] & NewYork Times [https://developer.nytimes.com/docs/articlesearch-product/1/routes/articlesearch.json/get]
2. Added Date filter
3. Added API Search query
4. Added basic pagination

## Areas of improvement
1. Add debounce for search
2. Hard-coded 2 check (with todo), need to be generalized
3. Add advanced pagination, like the number of items per page, and 'show more' instead of next/previous page
4. Move apikeys to a safe store in BE
