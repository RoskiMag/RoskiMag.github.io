Overview

All source code for the site is contained in the Roskimag.github.io repo. It’s a small create-react-app project hosted using Netlify. Webpack does a lot of work for you when you run the ‘$npm run start’ command. The roskimag.com domain is handled by Google Domains, and a simple Firebase database is used as a CMS for the submissions and view-submissions pages.

Development

Development is done inside the /master branch.

// Going to add info about getting you’re environment set up.

React + webpack makes this app ezpz. If you haven’t used React before I recommend their docs bc they’re great. Linked them below. Otherwise the codebase organization should be self-explanatory and you can text me if you have any qs.

My styling/css was so shitty when I put this together. If I could go back I would use a combination of flexbox and css-grid for styling. I added some sources below for each of those. I also would’ve added some global variables for fonts and colors.

Deployment

This is handled automatically for free with Netlify now. Whenever there’s a push to the master branch, Netlify will rebuild the app and host at roskimag.netlify.com. Then there’s a DNS configuration on Netlify that points the roskimag.com root domain and the www.roskimag.com subdomain to roskimag.netlify.com.

Developer Accounts and Passwords

Account
Username
Password
Firebase
Google acct
theACIDroom2019
Google Domains
Google acct
theACIDroom2019
Github
RoskiMag
theACIDroom2019

Sources

Github Repo Link
https://github.com/RoskiMag/RoskiMag.github.io
Using a custom domain with github pages
https://help.github.com/en/articles/using-a-custom-domain-with-github-pages
Styling groups of components with flexbox and css-grid
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://css-tricks.com/snippets/css/complete-guide-grid/
