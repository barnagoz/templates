import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

const authOptions = {
    providers: [
        AzureADProvider({
            clientId: process.env.AUTH_AZURE_AD_ID,
            clientSecret: process.env.AUTH_AZURE_AD_SECRET,
            tenantId: process.env.AUTH_AZURE_AD_TENANT_ID,
            authorizationUrl: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize?response_type=code&response_mode=query`,
            scope: "openid profile email",
        }),
    ],
    callbacks: {
        async jwt ({token, user, account, profile, isNewUser}) {
            if (profile) {
                token = {
                    ...token,
                    preferred_username: profile.preferred_username,
                }
            }
            return token;
        },
        async session ({session, user, token}) {
            return session;
        },
    },
};

export default NextAuth(authOptions);