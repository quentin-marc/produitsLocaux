module.exports = {
    siteMetadata: {
        title: "Lowympact",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Lowympact",
                short_name: "Lowympact",
                start_url: "/",
                icon: "src/Assets/images/pwa-192x192.png",
            },
        },
    ],
};
