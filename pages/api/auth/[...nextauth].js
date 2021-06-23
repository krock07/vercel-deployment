// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// const options = {
//   providers: [
//     Providers.Credentials({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // You need to provide your own logic here that takes the credentials
//         // submitted and returns either a object representing a user or value
//         // that is false/null if the credentials are invalid.
//         // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//         // You can also use the `req` object to obtain additional parameters
//         // (i.e., the request IP address)
//         const res = await fetch("https://staging-api.seventhave.io/login", {
//           method: "POST",
//           body: JSON.stringify(credentials),
//           headers: { "Content-Type": "application/json" },
//         });
//         const user = await res.json();

//         // If no error and we have user data, return it
//         if (res.ok && user) {
//           return user;
//         }
//         // Return null if user data could not be retrieved
//         return null;
//       },
//     }),
//   ],
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     // A secret to use for key generation - you should set this explicitly
//     // Defaults to NextAuth.js secret if not explicitly specified.
//     secret: process.env.JWT_SECRET
//     // "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw",
//   },
//   database: process.env.DATABASE_URL,
//   pages: {
//     signIn: '/signin',
//   },

// };
// export default (req, res) => NextAuth(req, res, options);
