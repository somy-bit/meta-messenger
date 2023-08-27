import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
    FacebookProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    // // ...add more providers here
   
  ],
  secret : process.env.NEXTAUTH_SECRET,
  pages:{
    signIn:'/auth/signin'
  }
}
export default NextAuth(authOptions)